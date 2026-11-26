"""Gera as imagens do protótipo a partir dos prints do Instagram (referencias/fotos).

Para cada peça: recorta a área do produto, amplia com super-resolução (EDSR),
remove o fundo (rembg / BiRefNet), limpa as bordas e salva em WebP com transparência.
Também recorta as artes de promoção e os stories sem a interface do Instagram.

Uso (a partir da pasta propostas/matuto-motos):
    python3 -m venv .venv && .venv/bin/pip install -r scripts/requirements.txt
    .venv/bin/python scripts/preparar_imagens.py            # tudo
    .venv/bin/python scripts/preparar_imagens.py --rapido   # sem EDSR (prévia)
    .venv/bin/python scripts/preparar_imagens.py --so rodas-pop110 kit-riffel

Na primeira execução baixa os modelos (EDSR ~38 MB cada, BiRefNet lite ~224 MB).
"""
from __future__ import annotations

import argparse
import hashlib
import os
import sys
import urllib.request
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageFilter

RAIZ = Path(__file__).resolve().parent.parent
FOTOS = RAIZ / "referencias" / "fotos"
SAIDA = RAIZ / "prototipo" / "assets" / "img"
CACHE = Path(os.environ.get("MATUTO_CACHE", Path.home() / ".cache" / "matuto-motos"))
EDSR_URL = "https://raw.githubusercontent.com/Saafke/EDSR_Tensorflow/master/models/EDSR_x{n}.pb"

# ---------------------------------------------------------------------------
# Peças recortadas (fundo removido). caixa = (x0, y0, x1, y1) no print original.
#   circulos: lista de (cx, cy, r) no print original -> mantém só o que está dentro
#   apagar:   retângulos (no print original) que viram transparentes (textos que encostam)
#   chave_amarela: remove amarelo de fundo que aparece por dentro de pneus/rodas
# ---------------------------------------------------------------------------
PRODUTOS: dict[str, dict] = {
    # Rodas
    "rodas-titan160-2026": dict(foto=31, caixa=(85, 145, 418, 432),
                                circulos=[(325, 240, 88), (181, 336, 91)]),
    "rodas-titan150-160": dict(foto=2, caixa=(14, 143, 386, 346),
                               circulos=[(115, 245, 98), (286, 246, 98)]),
    "rodas-dabroy-bros160": dict(foto=24, caixa=(4, 180, 470, 470),
                                 circulos=[(131, 309, 120), (331, 341, 121)]),
    "rodas-bros150-160": dict(foto=25, caixa=(84, 116, 322, 438),
                              circulos=[(226, 209, 90), (175, 347, 86)]),
    "rodas-bros125-150": dict(foto=26, caixa=(126, 200, 488, 410),
                              circulos=[(230, 305, 97), (390, 312, 93)]),
    "rodas-cg150-2014": dict(foto=28, caixa=(42, 140, 394, 394),
                             circulos=[(155, 255, 108), (285, 286, 103)]),
    "rodas-pop110": dict(foto=29, caixa=(190, 146, 445, 372),
                         circulos=[(300, 266, 103), (362, 236, 94)]),
    # Transmissão
    "kit-relacao-titan": dict(foto=18, caixa=(55, 138, 312, 438)),
    "kit-relacao-titan-b": dict(foto=19, caixa=(28, 138, 310, 382)),
    "kit-riffel": dict(foto=20, caixa=(58, 133, 412, 348),
                       apagar=[(50, 312, 215, 352), (356, 128, 420, 215)]),
    "kit-relacao-bros-xre": dict(foto=21, caixa=(98, 138, 364, 378)),
    "kit-relacao-pop-biz": dict(foto=22, caixa=(170, 123, 434, 368)),
    "kit-riffel-caixa": dict(foto=44, caixa=(0, 138, 302, 352)),
    "coxim-coroa": dict(foto=44, caixa=(0, 352, 132, 502)),
    "patins-freio": dict(foto=44, caixa=(140, 492, 302, 604)),
    # Suspensão
    "amortecedor-titan": dict(foto=3, caixa=(20, 158, 454, 288)),
    "amortecedor-fazer-factor": dict(foto=17, caixa=(58, 103, 356, 432)),
    "amortecedor-cb300r": dict(foto=16, caixa=(36, 230, 414, 480)),
    "amortecedor-xre300": dict(foto=15, caixa=(6, 260, 464, 444)),
    # Protetores
    "protetor-titan160": dict(foto=5, caixa=(158, 383, 466, 602),
                              apagar=[(300, 368, 404, 399)],
                              apagar_poli=[[(386, 398), (386, 426), (405, 450), (428, 470), (440, 481),
                                            (470, 481), (470, 383), (404, 383), (404, 398)]]),
    "protetor-bros160": dict(foto=6, caixa=(126, 338, 470, 568)),
    "protetor-tubular": dict(foto=4, caixa=(98, 383, 458, 700)),
    "protetor-carenagem-broly": dict(foto=12, caixa=(244, 0, 506, 302)),
    "protetor-carter-crosser": dict(foto=40, caixa=(146, 153, 337, 367)),
    "protetor-carter-sahara": dict(foto=41, caixa=(213, 153, 457, 547)),
    "protetor-slider-bros": dict(foto=43, caixa=(48, 153, 442, 637)),
    # Pneus
    "pneu-bros": dict(foto=35, caixa=(126, 86, 346, 382), chave_amarela=True),
    # Óleos
    "oleo-mobil-10w30": dict(foto=37, caixa=(93, 158, 337, 567)),
    "oleo-mobil-20w50": dict(foto=38, caixa=(143, 208, 312, 587)),
    # Retrovisores
    "retrovisor-f80": dict(foto=33, caixa=(54, 178, 524, 402)),
    "retrovisor-quadrado": dict(foto=34, caixa=(46, 176, 484, 420)),
    "retrovisor-bmw": dict(foto=45, caixa=(0, 310, 242, 494)),
    # Capacete (grade de cores do story P1-09)
    "capacete-preto": dict(foto=9, caixa=(10, 520, 130, 634)),
    "capacete-amarelo": dict(foto=9, caixa=(126, 520, 246, 634)),
    "capacete-branco": dict(foto=9, caixa=(238, 520, 358, 634)),
    "capacete-azul": dict(foto=9, caixa=(348, 520, 470, 634)),
    "capacete-grafite": dict(foto=9, caixa=(10, 630, 130, 744)),
    "capacete-prata": dict(foto=9, caixa=(126, 630, 246, 744)),
    "capacete-vermelho": dict(foto=9, caixa=(238, 630, 358, 744)),
    "capacete-rosa": dict(foto=9, caixa=(348, 630, 470, 744)),
    # Moto para o banner principal
    "moto-titan160-2026": dict(foto=32, caixa=(26, 316, 224, 450), justo=True),
}

# Artes de promoção (posts): recorte automático da área da arte, sem bordas/setas.
ARTES = [1, 2, 3, 12, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35]

# Stories e fotos: recortes manuais sem a interface do Instagram.
RECORTES = {
    "videos/story-protetor-tubular": dict(foto=7, caixa=(0, 100, 474, 740)),
    "videos/story-dono-na-loja": dict(foto=8, caixa=(0, 104, 465, 744)),
    "videos/story-capacete": dict(foto=9, caixa=(0, 100, 471, 740)),
    "videos/story-protetor-titan": dict(foto=5, caixa=(0, 100, 468, 740)),
    "videos/story-protetor-bros": dict(foto=6, caixa=(0, 100, 477, 740)),
    "videos/story-rodas-dabroy": dict(foto=24, caixa=(0, 100, 492, 740)),
    "videos/story-protetor-motor": dict(foto=4, caixa=(0, 100, 460, 740)),
    "loja/dono-na-loja": dict(foto=8, caixa=(0, 128, 212, 520)),
    "loja/dono-tubular": dict(foto=7, caixa=(0, 196, 300, 560)),
    "loja/balcao-pneus": dict(foto=42, caixa=(158, 500, 332, 732)),
    "loja/prateleiras": dict(foto=42, caixa=(162, 76, 345, 268)),
    "loja/dono-capacete": dict(foto=9, caixa=(0, 100, 236, 500)),
}


# ---------------------------------------------------------------------------
def baixar(url: str, destino: Path) -> Path:
    if not destino.exists():
        destino.parent.mkdir(parents=True, exist_ok=True)
        print(f"  baixando {url}")
        urllib.request.urlretrieve(url, destino)
    return destino


_SR: dict[int, object] = {}


def ampliar(img: Image.Image, fator: int, rapido: bool) -> Image.Image:
    """Amplia com EDSR (com cache em disco). No modo rápido usa Lanczos."""
    if rapido:
        return img.resize((img.width * fator, img.height * fator), Image.LANCZOS)
    chave = hashlib.sha1(img.tobytes() + bytes([fator])).hexdigest()[:16]
    arq = CACHE / "edsr" / f"{chave}_x{fator}.png"
    if arq.exists():
        return Image.open(arq).convert("RGB")
    if fator not in _SR:
        modelo = baixar(EDSR_URL.format(n=fator), CACHE / f"EDSR_x{fator}.pb")
        sr = cv2.dnn_superres.DnnSuperResImpl.create()
        sr.readModel(str(modelo))
        sr.setModel("edsr", fator)
        _SR[fator] = sr
    bgr = cv2.cvtColor(np.array(img.convert("RGB")), cv2.COLOR_RGB2BGR)
    out = _SR[fator].upsample(bgr)
    res = Image.fromarray(cv2.cvtColor(out, cv2.COLOR_BGR2RGB))
    arq.parent.mkdir(parents=True, exist_ok=True)
    res.save(arq)
    return res


_SESSAO = None


def mascara(img: Image.Image) -> np.ndarray:
    """Alfa 0..1 do objeto principal (BiRefNet lite), com cache."""
    global _SESSAO
    chave = hashlib.sha1(img.tobytes()).hexdigest()[:16]
    arq = CACHE / "mask" / f"{chave}.png"
    if arq.exists():
        return np.asarray(Image.open(arq).convert("L"), dtype=np.float32) / 255.0
    from rembg import new_session, remove
    if _SESSAO is None:
        _SESSAO = new_session("birefnet-general-lite")
    m = remove(img, session=_SESSAO, only_mask=True)
    arq.parent.mkdir(parents=True, exist_ok=True)
    m.save(arq)
    return np.asarray(m.convert("L"), dtype=np.float32) / 255.0


def limpar_bordas(rgb: np.ndarray, alfa: np.ndarray) -> np.ndarray:
    """Tira a cor do fundo que fica nas bordas semitransparentes (defringe)."""
    conhecido = alfa > 0.92
    faixa = ((alfa > 0.0) & ~conhecido).astype(np.uint8) * 255
    if faixa.max() == 0:
        return rgb
    bgr = cv2.cvtColor(rgb, cv2.COLOR_RGB2BGR)
    preenchido = cv2.inpaint(bgr, faixa, 3, cv2.INPAINT_TELEA)
    preenchido = cv2.cvtColor(preenchido, cv2.COLOR_BGR2RGB)
    out = rgb.copy()
    out[faixa > 0] = preenchido[faixa > 0]
    return out


def produto(nome: str, spec: dict, rapido: bool) -> Path:
    fonte = Image.open(FOTOS / f"P1-{spec['foto']:02d}.png").convert("RGB")
    x0, y0, x1, y1 = spec["caixa"]
    recorte = fonte.crop((x0, y0, x1, y1))
    fator = 4
    grande = ampliar(recorte, fator, rapido)
    base_mask = recorte.resize((recorte.width * 2, recorte.height * 2), Image.LANCZOS)
    a = mascara(base_mask)
    a = cv2.resize(a, grande.size, interpolation=cv2.INTER_CUBIC)
    a = np.clip(a, 0, 1)
    h, w = a.shape
    if spec.get("circulos"):
        yy, xx = np.mgrid[0:h, 0:w]
        dentro = np.zeros_like(a)
        for cx, cy, r in spec["circulos"]:
            cxs, cys, rs = (cx - x0) * fator, (cy - y0) * fator, r * fator
            d = np.sqrt((xx - cxs) ** 2 + (yy - cys) ** 2)
            dentro = np.maximum(dentro, np.clip((rs - d) / 6.0, 0, 1))
        a = a * dentro
    for (ax0, ay0, ax1, ay1) in spec.get("apagar", []):
        a[max(0, (ay0 - y0) * fator):max(0, (ay1 - y0) * fator),
          max(0, (ax0 - x0) * fator):max(0, (ax1 - x0) * fator)] = 0
    if spec.get("apagar_poli"):
        from PIL import ImageDraw
        borracha = Image.new("L", (w, h), 0)
        dr = ImageDraw.Draw(borracha)
        for poli in spec["apagar_poli"]:
            dr.polygon([((px - x0) * fator, (py - y0) * fator) for px, py in poli], fill=255)
        borracha = borracha.filter(ImageFilter.GaussianBlur(2))
        a = a * (1 - np.asarray(borracha, dtype=np.float32) / 255.0)
    rgb = np.asarray(grande, dtype=np.uint8).copy()
    # descarta pedaços soltos pequenos (restos de selos/textos das artes)
    n, rot, stats, _ = cv2.connectedComponentsWithStats((a > 0.5).astype(np.uint8), 8)
    if n > 1:
        areas = stats[1:, cv2.CC_STAT_AREA]
        minimo = spec.get("min_comp", 0.03) * areas.max()
        manter = np.zeros(a.shape, np.uint8)
        for i, ar in enumerate(areas, start=1):
            if ar >= minimo:
                manter[rot == i] = 1
        # tira também os contornos fracos (alfa < 0.5) longe das partes mantidas
        manter = cv2.dilate(manter, np.ones((15, 15), np.uint8))
        a = a * manter
    if spec.get("chave_amarela"):
        hsv = cv2.cvtColor(rgb, cv2.COLOR_RGB2HSV)
        amarelo = (hsv[..., 0] > 14) & (hsv[..., 0] < 38) & (hsv[..., 1] > 110) & (hsv[..., 2] > 120)
        amarelo = cv2.morphologyEx(amarelo.astype(np.uint8), cv2.MORPH_OPEN, np.ones((5, 5), np.uint8))
        a[amarelo > 0] = 0
    # some com ruído fraco e suaviza a borda
    a[a < 0.06] = 0
    a = cv2.GaussianBlur(a, (0, 0), 0.8)
    rgb = limpar_bordas(rgb, a)
    rgba = np.dstack([rgb, (a * 255).astype(np.uint8)])
    img = Image.fromarray(rgba, "RGBA")
    caixa = img.getchannel("A").point(lambda v: 255 if v > 20 else 0).getbbox()
    if caixa:
        img = img.crop(caixa)
    if spec.get("justo"):  # sem canvas quadrado (recorte justo)
        destino = SAIDA / "produtos" / f"{nome}.webp"
        img.save(destino, "WEBP", quality=90, method=6)
        return destino
    # canvas quadrado com margem, até 1000 px
    lado = int(max(img.size) * 1.12)
    canvas = Image.new("RGBA", (lado, lado), (0, 0, 0, 0))
    canvas.paste(img, ((lado - img.width) // 2, (lado - img.height) // 2))
    if lado > 1000:
        canvas = canvas.resize((1000, 1000), Image.LANCZOS)
    destino = SAIDA / "produtos" / f"{nome}.webp"
    destino.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(destino, "WEBP", quality=90, method=6)
    return destino


def limites_da_arte(img: Image.Image) -> tuple[int, int, int, int]:
    """Acha a área nítida do post (o Instagram mostra bordas escuras/desfocadas)."""
    g = cv2.cvtColor(np.asarray(img.convert("RGB")), cv2.COLOR_RGB2GRAY).astype(np.float32)
    lap = np.abs(cv2.Laplacian(g, cv2.CV_32F, ksize=3))
    col = np.percentile(lap, 60, axis=0)
    lin = np.percentile(lap, 60, axis=1)

    def faixa(v: np.ndarray) -> tuple[int, int]:
        lim = 0.22 * np.percentile(v, 90)
        ok = np.where(v > lim)[0]
        return int(ok.min()), int(ok.max()) + 1

    x0, x1 = faixa(col)
    y0, y1 = faixa(lin)
    return x0, y0, x1, y1


def arte(n: int, rapido: bool) -> Path:
    img = Image.open(FOTOS / f"P1-{n:02d}.png").convert("RGB")
    x0, y0, x1, y1 = limites_da_arte(img)
    # deixa quadrada (as artes são 1:1) usando o menor lado, centralizada
    lado = min(x1 - x0, y1 - y0)
    cx, cy = (x0 + x1) // 2, (y0 + y1) // 2
    caixa = (cx - lado // 2 + 2, cy - lado // 2 + 2, cx + lado // 2 - 2, cy + lado // 2 - 2)
    # as artes aparecem pequenas (galeria e cards): Lanczos basta e é bem mais rápido
    rec = ampliar(img.crop(caixa), 2, True)
    destino = SAIDA / "artes" / f"arte-P1-{n:02d}.jpg"
    rec.save(destino, "JPEG", quality=86, optimize=True, progressive=True)
    return destino


def recorte_simples(nome: str, spec: dict, rapido: bool) -> Path:
    img = Image.open(FOTOS / f"P1-{spec['foto']:02d}.png").convert("RGB").crop(spec["caixa"])
    fator = 4 if max(img.size) < 300 else 2
    rec = ampliar(img, fator, rapido)
    destino = SAIDA / f"{nome}.jpg"
    destino.parent.mkdir(parents=True, exist_ok=True)
    rec.save(destino, "JPEG", quality=86, optimize=True, progressive=True)
    return destino


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--rapido", action="store_true", help="sem super-resolução (prévia)")
    ap.add_argument("--so", nargs="*", help="gera só estes itens")
    ap.add_argument("--sem-artes", action="store_true")
    args = ap.parse_args()
    so = set(args.so or [])
    for nome, spec in PRODUTOS.items():
        if so and nome not in so:
            continue
        print("produto", nome, flush=True)
        produto(nome, spec, args.rapido)
    if not args.sem_artes:
        for n in ARTES:
            if so and f"arte-P1-{n:02d}" not in so:
                continue
            print("arte", n, flush=True)
            arte(n, args.rapido)
        for nome, spec in RECORTES.items():
            if so and nome not in so:
                continue
            print("recorte", nome, flush=True)
            recorte_simples(nome, spec, args.rapido)


if __name__ == "__main__":
    sys.exit(main())
