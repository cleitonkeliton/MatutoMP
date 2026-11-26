/* Assinatura da proposta: logo da ValDev.
 * O script de captura (scripts/capturar.cjs) passa ?logo=<caminho> quando encontra um arquivo
 * de imagem em referencias/valdev/. Sem arquivo, mostra o nome em texto.
 * Se a logo for escura (pouco visível no fundo preto da apresentação), ganha uma placa branca. */
(function () {
  const logo = new URLSearchParams(location.search).get('logo');
  document.querySelectorAll('[data-assinatura]').forEach((el) => {
    if (!logo) {
      el.innerHTML = '<span class="valdev-txt">ValDev</span>';
      return;
    }
    const img = new Image();
    img.className = 'valdev-logo';
    img.alt = 'ValDev';
    img.onload = () => {
      try {
        const c = document.createElement('canvas');
        const w = (c.width = Math.min(img.naturalWidth, 400));
        const h = (c.height = Math.max(1, Math.round(img.naturalHeight * (w / img.naturalWidth))));
        const ctx = c.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const d = ctx.getImageData(0, 0, w, h).data;
        let soma = 0, n = 0;
        for (let i = 0; i < d.length; i += 4) {
          if (d[i + 3] < 128) continue;
          soma += (0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2]) / 255;
          n += 1;
        }
        // logo escura, ou com fundo opaco (JPG/PNG sem transparência): vai sobre uma placa branca
        const opaca = n / (d.length / 4) > 0.9;
        if (n && (soma / n < 0.45 || opaca)) el.classList.add('com-placa');
      } catch (e) { /* sem acesso aos pixels: mantém como está */ }
    };
    img.src = logo;
    el.appendChild(img);
  });
})();
