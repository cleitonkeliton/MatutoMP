/* Menu lateral das páginas institucionais */
(function () {
  const I = window.ICON;
  const atual = document.body.dataset.pagina;
  const links = [
    ['sobre', 'sobre.html', 'store', 'Sobre o Matuto'],
    ['como-funciona', 'como-funciona.html', 'route', 'Como funciona a retirada'],
    ['oficinas', 'oficinas.html', 'wrench', 'Oficinas e revendedores'],
    ['contato', 'contato.html', 'phone', 'Contato'],
    ['trocas', 'trocas.html', 'swap', 'Trocas e devoluções'],
    ['privacidade', 'privacidade.html', 'lock', 'Política de privacidade'],
    ['termos', 'termos.html', 'receipt', 'Termos de uso'],
  ];
  const el = document.getElementById('inst-menu');
  if (el) el.innerHTML = links.map((l) => '<a class="' + (l[0] === atual ? 'on' : '') + '" href="' + l[1] + '">' + I(l[2], 'p') + l[3] + '</a>').join('');
  const nota = document.getElementById('nota-modelo');
  if (nota) nota.innerHTML = I('info') + '<span>Texto-modelo para o protótipo. Revisar com a loja (e com um advogado) antes de publicar.</span>';
})();
