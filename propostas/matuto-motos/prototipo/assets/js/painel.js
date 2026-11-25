/* Matuto Motos — layout e utilidades do painel do lojista (protótipo, sem backend). */
(function () {
  const M = window.MATUTO;
  const I = window.ICON;
  const body = document.body;
  const BASE = body.dataset.base || '../';
  const atual = body.dataset.pagina;
  const params = new URLSearchParams(location.search);

  const fmt = (v) => 'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const valor = (p) => (p.promo != null ? p.promo : p.preco);
  const img = (path) => BASE + M.IMG + path;
  const catDe = (id) => M.categorias.find((c) => c.id === id) || { nome: id, icone: 'box' };
  function thumb(p, cls) {
    if (!p.img) return '<span class="thumb sem ' + (cls || '') + '" title="Sem foto">' + I('imageOff') + '</span>';
    return '<span class="thumb ' + (cls || '') + '"><img class="' + (p.imgArte ? 'arte' : '') + '" src="' + img(p.img) + '" alt=""></span>';
  }
  function situacao(p) {
    if (p.status === 'rascunho') return '<span class="st st-rasc">Rascunho</span>';
    if (p.estoque === 0) return '<span class="st st-zero">' + I('alert') + 'Sem estoque</span>';
    return '<span class="st st-ok">' + I('check') + 'Ativo</span>';
  }
  function estoqueSit(p) {
    if (p.situacao === 'zerado') return '<span class="st st-zero">Zerado</span>';
    if (p.situacao === 'baixo') return '<span class="st st-baixo">' + I('alert') + 'Baixo</span>';
    return '<span class="st st-ok">OK</span>';
  }

  const nPedidos = M.pedidosPainel.filter((p) => p.status === 'separar').length;
  const nAlertas = M.produtos.filter((p) => p.situacao !== 'ok').length;
  const links = [
    ['inicio', 'index.html', 'home', 'Início'],
    ['pedidos', 'pedidos.html', 'receipt', 'Pedidos', nPedidos],
    ['produtos', 'produtos.html', 'box', 'Produtos'],
    ['estoque', 'estoque.html', 'chart', 'Estoque', nAlertas, true],
  ];
  const outros = [['users', 'Clientes'], ['wrench', 'Oficinas (CNPJ)'], ['trend', 'Relatórios'], ['settings', 'Configurações']];

  function lateral() {
    return '<aside class="side">' +
      '<a class="side-logo" href="index.html">' + window.SELO() + '<div><b>Matuto Motos</b><small>Painel do lojista</small></div></a>' +
      '<nav class="side-nav">' +
        links.map((l) => '<a class="' + (l[0] === atual || (atual === 'produto-editar' && l[0] === 'produtos') ? 'on' : '') + '" href="' + l[1] + '">' + I(l[2]) + l[3] + (l[4] ? '<span class="cont' + (l[5] ? ' alerta' : '') + '">' + l[4] + '</span>' : '') + '</a>').join('') +
        '<div class="side-tit">Gestão</div>' +
        outros.map((o) => '<a href="#">' + I(o[0]) + o[1] + '</a>').join('') +
      '</nav>' +
      '<div class="side-rodape">' +
        '<a class="btn btn-claro btn-p btn-bloco" href="' + BASE + 'index.html">' + I('external', 'p') + 'Ver a loja</a>' +
        '<div class="side-loja"><span class="ponto"></span>Loja aberta · retiradas até 18h</div>' +
        '<div class="side-user"><span class="av">M</span><div><b>Matuto</b><small>Administrador</small></div></div>' +
      '</div>' +
    '</aside>';
  }
  function topo() {
    return '<header class="topbar">' +
      '<label class="tb-busca">' + I('search', 'p') + '<input placeholder="Buscar pedido, produto, código ou cliente" aria-label="Buscar no painel"><kbd>/</kbd></label>' +
      '<div class="tb-acoes">' +
        '<a class="tb-btn" href="pedidos.html#conferir">' + I('qr') + 'Conferir código</a>' +
        '<a class="tb-btn" href="estoque.html?modal=entrada">' + I('entrada') + 'Entrada de mercadoria</a>' +
        '<span class="tb-btn" aria-label="Notificações">' + I('bell') + '<span class="dot"></span></span>' +
      '</div>' +
    '</header>' +
    '<header class="tb-mobile">' + window.SELO() + '<div><small>Painel do lojista</small><b>' + (body.dataset.titulo || 'Matuto Motos') + '</b></div>' +
      '<div class="tbm-acoes"><span>' + I('search') + '</span><span>' + I('bell') + '<i class="dot"></i></span></div></header>';
  }
  function navInf() {
    const it = [['inicio', 'index.html', 'home', 'Início'], ['pedidos', 'pedidos.html', 'receipt', 'Pedidos', nPedidos], ['produtos', 'produtos.html', 'box', 'Produtos'], ['estoque', 'estoque.html', 'chart', 'Estoque', nAlertas], ['mais', '#', 'menu', 'Mais']];
    return '<nav class="nav-inf fixo-captura" aria-label="Navegação do painel">' + it.map((l) => '<a class="' + (l[0] === atual || (atual === 'produto-editar' && l[0] === 'produtos') ? 'on' : '') + '" href="' + l[1] + '">' + I(l[2]) + l[3] + (l[4] ? '<span class="cont">' + l[4] + '</span>' : '') + '</a>').join('') + '</nav>';
  }

  const main = document.getElementById('conteudo');
  const casca = document.createElement('div');
  casca.className = 'adm';
  casca.innerHTML = lateral() + '<div class="adm-main">' + topo() + '</div>';
  main.parentNode.insertBefore(casca, main);
  casca.querySelector('.adm-main').appendChild(main);
  document.body.insertAdjacentHTML('beforeend', navInf());

  /* modais: ?modal=entrada | importar */
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-modal]');
    if (a) { e.preventDefault(); abrirModal(a.dataset.modal); }
    if (e.target.closest('[data-fechar]') || e.target.classList.contains('modal-fundo')) body.classList.remove('modal-aberto');
  });
  function abrirModal(id) {
    document.querySelectorAll('.modal-fundo').forEach((m) => { m.style.display = m.id === 'modal-' + id ? '' : 'none'; });
    body.classList.add('modal-aberto');
  }
  if (params.get('modal')) setTimeout(() => abrirModal(params.get('modal')), 0);
  if (params.get('captura')) document.documentElement.classList.add('captura');

  window.PN = { fmt, valor, img, thumb, situacao, estoqueSit, catDe, abrirModal };
})();
