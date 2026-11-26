# Proposta de loja virtual — Matuto Motos

Protótipo visual da loja online da Matuto Motos (compra pelo site, **retirada na loja** em Recife)
e do painel do lojista, mais as imagens (PNG) para apresentar ao cliente.

- Briefing: [`BRIEFING.md`](BRIEFING.md)
- Proposta comercial (valores e justificativas): [`PROPOSTA-COMERCIAL.md`](PROPOSTA-COMERCIAL.md)
- Pendências para o cliente confirmar: [`PENDENCIAS.md`](PENDENCIAS.md)
- Inventário das fotos de referência: [`referencias/INVENTARIO.md`](referencias/INVENTARIO.md)

## Abrir o protótipo

Não precisa instalar nada nem estar conectado à internet: é HTML, CSS e JS puro, com fontes e
ícones locais.

- **Loja:** abra `prototipo/index.html` no navegador (dois cliques no arquivo).
- **Painel do lojista:** abra `prototipo/painel/index.html`.

Dá para navegar entre as telas, abrir o menu, buscar (as sugestões aparecem ao digitar),
filtrar e ordenar a listagem e trocar as fotos do produto. Não há backend: login, pagamento e
pedidos são simulados com dados de exemplo (`prototipo/assets/js/dados.js`).

Estados usados nas imagens, que também podem ser abertos direto pela URL:

| Estado | Endereço |
|---|---|
| Menu aberto (celular) | `index.html?demo=menu` |
| Busca com sugestões | `index.html?demo=busca&q=titan` |
| Filtros abertos (celular) | `categoria.html?c=rodas&demo=filtros` |
| Modal "Importar planilha" | `painel/produtos.html?modal=importar` |
| Modal "Entrada de mercadoria" | `painel/estoque.html?modal=entrada` |

## Regenerar as imagens

Requisitos: Node 18+ e Playwright com o Chromium
(`npm i -D playwright && npx playwright install chromium`, se ainda não tiver).

```bash
node scripts/capturar.cjs
```

Gera tudo em `mockups/`:

- `mockups/desktop/` — 1440×900, deviceScaleFactor 2 (páginas longas divididas em `-parte1`, `-parte2`…)
- `mockups/mobile/` — 390×844, deviceScaleFactor 2
- `mockups/apresentacao/` — `capa.png`, `telas-mobile.png`, `painel-lojista.png`,
  `por-que-investir.png` e `investimento.png`

Os valores dos dois últimos slides vêm de `scripts/apresentacao/proposta.js` (pacotes, preços,
condições e premissas da simulação). A versão em texto da proposta está em
[`PROPOSTA-COMERCIAL.md`](PROPOSTA-COMERCIAL.md).

Para gerar só uma tela: `node scripts/capturar.cjs --so 03` (prefixo do nome).

A assinatura das imagens de apresentação usa a logo da ValDev em `referencias/valdev/` (a primeira
imagem da pasta). Sem arquivo, aparece o nome "ValDev" em texto. Se a logo for escura, ela ganha
uma placa branca automaticamente.

### Fotos dos produtos (opcional)

Os recortes em `prototipo/assets/img/` já estão prontos. Para refazê-los a partir dos prints em
`referencias/fotos/` (remove o fundo e amplia as imagens), use Python 3.10+:

```bash
python3 -m venv .venv && .venv/bin/pip install -r scripts/requirements.txt
.venv/bin/python scripts/preparar_imagens.py
```

Na primeira vez, o script baixa os modelos de IA (cerca de 300 MB).

## Estrutura

```
propostas/matuto-motos/
├── BRIEFING.md · PENDENCIAS.md · PROPOSTA-COMERCIAL.md · README.md
├── referencias/          prints do Instagram (P1-01 a P1-46) e inventário
├── prototipo/            loja (index, categoria, produto, carrinho, checkout…) e painel/
│   └── assets/           css, js (dados, ícones, comportamento), fontes e imagens
├── scripts/              capturar.cjs, preparar_imagens.py e modelos da apresentação
└── mockups/              PNGs gerados (desktop, mobile e apresentação)
```
