/* Matuto Motos — comportamento e componentes da loja (protótipo, sem backend). */
(function () {
  const M = window.MATUTO;
  const I = window.ICON;
  const L = M.loja;
  const body = document.body;
  const BASE = body.dataset.base || '';
  const pagina = body.dataset.pagina || '';
  const params = new URLSearchParams(location.search);

  /* ---------- utilidades ---------- */
  const fmt = (v) => 'R$ ' + v.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const valor = (p) => (p.promo != null ? p.promo : p.preco);
  const pix = (v) => Math.round(v * (1 - L.descontoPix) * 100 + 1e-6) / 100;
  const parc = (v) => Math.round((v / L.parcelas) * 100 + 1e-6) / 100;
  const img = (path) => BASE + M.IMG + path;
  const nota = (n) => n.toFixed(1).replace('.', ',');
  const catDe = (id) => M.categorias.find((c) => c.id === id) || { nome: id, icone: 'box' };
  const $ = (sel, el) => (el || document).querySelector(sel);
  const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));
  function estrelas(n) {
    let s = '';
    for (let i = 1; i <= 5; i++) s += I('star', i <= Math.round(n) ? '' : 'apagada');
    return '<span class="estrelas">' + s + '</span>';
  }
  window.MT = { fmt, valor, pix, parc, img, estrelas, nota, catDe };

  const carrinhoItens = M.carrinho.map((c) => Object.assign({ p: M.porId[c.id] }, c));
  const subtotal = carrinhoItens.reduce((a, c) => a + valor(c.p) * c.qtd, 0);
  const qtdTotal = carrinhoItens.reduce((a, c) => a + c.qtd, 0);
  const garagem = M.cliente.garagem.find((g) => g.principal);
  const motoTxt = garagem.marca + ' ' + garagem.modelo + ' ' + garagem.ano;

  /* ---------- cabeçalho ---------- */
  function buscaHTML(id) {
    return '<form class="busca-form" role="search" action="' + BASE + 'categoria.html">' +
      '<input id="' + id + '" name="q" type="search" autocomplete="off" placeholder="Busque por peça, código ou moto (ex.: protetor Titan 160)" aria-label="Buscar">' +
      '<button type="submit" aria-label="Buscar">' + I('search') + '</button></form>' +
      '<div class="sugestoes" role="listbox"></div>';
  }

  function cabecalho() {
    const cats = ['rodas', 'transmissao', 'suspensao', 'protetores', 'pneus', 'oleos', 'freios', 'retrovisores', 'capacetes'];
    const ativa = body.dataset.cat || '';
    return '' +
      '<div class="aviso"><div class="wrap">' +
        '<div class="aviso-itens">' +
          '<span class="aviso-principal">' + I('store') + 'Compre pelo site e retire na loja</span><span class="aviso-sep"></span>' +
          '<span class="aviso-cidade">' + I('pin') + 'Recife/PE<span class="so-desk">&nbsp;· Jardim São Paulo</span></span><span class="aviso-sep"></span>' +
          '<span>' + I('clock') + L.horario + '</span>' +
        '</div>' +
        '<div class="aviso-links">' +
          '<a href="' + BASE + 'como-funciona.html">Como funciona a retirada</a><span class="aviso-sep"></span>' +
          '<a href="' + BASE + 'oficinas.html">' + I('wrench', 'pp') + 'Oficinas e revendedores</a><span class="aviso-sep"></span>' +
          '<a href="' + L.whatsLink + '">' + I('whatsapp', 'pp') + L.whatsapp + '</a>' +
        '</div>' +
      '</div></div>' +
      '<header class="topo"><div class="wrap">' +
        '<div class="topo-linha">' +
          '<button class="btn-menu" type="button" data-acao="menu" aria-label="Abrir menu">' + I('menu') + '</button>' +
          '<a href="' + BASE + 'index.html" class="logo-link" aria-label="Matuto Motos — início">' + window.LOGO() + '</a>' +
          '<div class="busca">' + buscaHTML('busca-desk') + '</div>' +
          '<div class="topo-acoes">' +
            '<a class="acao acao-garagem" href="' + BASE + 'minha-conta.html#garagem">' + I('moto') + '<span class="acao-txt">Minha garagem<b>' + garagem.modelo + ' ' + garagem.ano + '</b></span></a>' +
            '<a class="acao acao-conta" href="' + BASE + 'minha-conta.html">' + I('user') + '<span class="acao-txt">Olá, ' + M.cliente.primeiro + '<b>Minha conta</b></span></a>' +
            '<a class="acao acao-fav" href="' + BASE + 'minha-conta.html#favoritos" aria-label="Favoritos">' + I('heart') + '</a>' +
            '<a class="acao acao-carrinho" href="' + BASE + 'carrinho.html" aria-label="Carrinho">' + I('bag') + '<span class="badge-qtd">' + qtdTotal + '</span><span class="acao-txt">Carrinho<b>' + fmt(subtotal) + '</b></span></a>' +
          '</div>' +
        '</div>' +
        '<div class="topo-mobile"><div class="busca">' + buscaHTML('busca-mob') + '</div>' +
          '<div class="moto-salva">' + I('moto') + '<span>Peças para <b>' + motoTxt + '</b></span><a href="' + BASE + 'minha-conta.html#garagem">Trocar</a></div></div>' +
      '</div></header>' +
      '<nav class="nav-cats" aria-label="Categorias"><div class="wrap">' +
        '<a class="nav-todas" href="' + BASE + 'categoria.html">' + I('grid') + 'Todas as categorias</a>' +
        cats.map((id) => '<a class="nav-link' + (ativa === id ? ' ativo' : '') + '" href="' + BASE + 'categoria.html?c=' + id + '">' + (catDe(id).curto || catDe(id).nome) + '</a>').join('') +
        '<div class="nav-dir"><a class="nav-ofertas" href="' + BASE + 'categoria.html?c=ofertas"><span>' + I('tag', 'pp') + 'Ofertas</span></a></div>' +
      '</div></nav>';
  }

  function gaveta() {
    const cats = ['rodas', 'transmissao', 'suspensao', 'protetores', 'pneus', 'oleos', 'freios', 'retrovisores', 'capacetes'];
    return '<div class="gaveta-fundo" data-acao="fechar-menu"></div>' +
      '<aside class="gaveta" aria-label="Menu">' +
        '<div class="gv-topo">' + window.LOGO() +
          '<button class="gv-fechar" type="button" data-acao="fechar-menu" aria-label="Fechar menu">' + I('close') + '</button>' +
          '<div class="gv-ola"><span class="cm-avatar">C</span><div><b>Olá, ' + M.cliente.primeiro + '</b><small>1 pedido pronto para retirada</small></div></div>' +
          '<div class="gv-moto">' + I('moto') + '<div><small>Minha garagem</small><b>' + motoTxt + '</b></div><a href="' + BASE + 'minha-conta.html#garagem">Trocar</a></div>' +
        '</div>' +
        '<div class="gv-corpo">' +
          '<div class="gv-tit">Categorias</div>' +
          cats.map((id) => '<a class="gv-link" href="' + BASE + 'categoria.html?c=' + id + '">' + I(catDe(id).icone) + catDe(id).nome + I('right', 'gv-seta') + '</a>').join('') +
          '<a class="gv-link" href="' + BASE + 'categoria.html">' + I('grid') + 'Ver todas as categorias' + I('right', 'gv-seta') + '</a>' +
          '<div class="gv-sep"></div>' +
          '<a class="gv-link destaque" href="' + BASE + 'categoria.html?c=ofertas">' + I('tag') + 'Ofertas da semana</a>' +
          '<a class="gv-link" href="' + BASE + 'como-funciona.html">' + I('store') + 'Como funciona a retirada</a>' +
          '<a class="gv-link" href="' + BASE + 'oficinas.html">' + I('wrench') + 'Oficinas e revendedores</a>' +
        '</div>' +
        '<div class="gv-rodape">' +
          '<div class="linha-ic">' + I('pin') + '<span><b>' + L.endereco + '</b> — ' + L.bairro + ', ' + L.cidade + '</span></div>' +
          '<div class="linha-ic">' + I('clock') + '<span><b>' + L.horario + '</b> · retirada no balcão</span></div>' +
        '</div>' +
      '</aside>';
  }

  function rodape() {
    return '<footer class="rodape"><div class="wrap">' +
      '<div class="rod-grid">' +
        '<div class="rod-marca">' + window.SELO() +
          '<p>Distribuidora de peças de moto em Recife. Compre pelo site com preço de distribuidora e retire no balcão: sem frete, sem espera e com a peça certa para a sua moto.</p>' +
          '<div class="rod-social"><a href="https://instagram.com/matutomotospecas" aria-label="Instagram">' + I('insta') + '</a><a href="' + L.whatsLink + '" aria-label="WhatsApp">' + I('whatsapp') + '</a></div>' +
        '</div>' +
        '<div class="rod-loja-bloco"><h4>A loja</h4><ul class="rod-loja">' +
          '<li>' + I('pin') + '<span><b>' + L.endereco + '</b><br>' + L.bairro + ', ' + L.cidade + '<br>CEP ' + L.cep + '</span></li>' +
          '<li>' + I('clock') + '<span><b>' + L.horario + '</b><br>Sábado, domingo e feriados: fechado</span></li>' +
          '<li>' + I('whatsapp') + '<span><b>' + L.whatsapp + '</b><br>WhatsApp de vendas</span></li>' +
        '</ul></div>' +
        '<div><h4>Institucional</h4><ul>' +
          '<li><a href="' + BASE + 'sobre.html">Sobre o Matuto</a></li>' +
          '<li><a href="' + BASE + 'como-funciona.html">Como funciona a retirada</a></li>' +
          '<li><a href="' + BASE + 'oficinas.html">Oficinas e revendedores</a></li>' +
          '<li><a href="' + BASE + 'contato.html">Contato</a></li>' +
        '</ul></div>' +
        '<div><h4>Ajuda</h4><ul>' +
          '<li><a href="' + BASE + 'minha-conta.html">Minha conta e pedidos</a></li>' +
          '<li><a href="' + BASE + 'trocas.html">Trocas e devoluções</a></li>' +
          '<li><a href="' + BASE + 'privacidade.html">Política de privacidade</a></li>' +
          '<li><a href="' + BASE + 'termos.html">Termos de uso</a></li>' +
        '</ul></div>' +
        '<div class="rod-pag"><h4>Pagamento</h4>' +
          '<div class="pagamentos"><span class="pg">' + window.PIX + 'Pix</span><span class="pg pg-visa">VISA</span><span class="pg pg-master"><i></i><i></i></span><span class="pg pg-elo">elo</span><span class="pg pg-hiper">Hipercard</span></div>' +
          '<div class="seguro">' + I('shield') + '<div><b>Site seguro</b><small>Conexão protegida (SSL) e dados criptografados</small></div></div>' +
        '</div>' +
      '</div>' +
      '<div class="rod-base"><span>© 2026 Matuto Motos — Distribuidora de Peças de Moto · CNPJ ' + L.cnpj + '</span><span>Vendas pelo site somente com retirada na loja, em Recife. Não fazemos entregas.</span></div>' +
    '</div></footer>' +
    '<a class="zap-flutuante fixo-captura" href="' + L.whatsLink + '" aria-label="Falar no WhatsApp"><span class="zap-bolha">Dúvida na peça? Chama o Matuto<small>Atendimento no WhatsApp</small></span><span class="zap-btn">' + I('whatsapp') + '</span></a>';
  }

  /* ---------- cartão de produto ---------- */
  function card(p) {
    const v = valor(p);
    const zerado = p.estoque === 0;
    const desc = p.promo ? Math.round((1 - p.promo / p.preco) * 100) : 0;
    const cat = catDe(p.cat);
    const foto = p.img
      ? '<img src="' + img(p.img) + '" alt="' + p.nome + '"' + (p.imgArte ? ' class="arte"' : '') + '>'
      : '<span class="sem-foto">' + I(cat.icone) + 'Foto em breve</span>';
    return '<article class="card-prod' + (zerado ? ' zerado' : '') + '" data-id="' + p.id + '">' +
      '<a class="cp-img" href="' + BASE + 'produto.html?id=' + p.id + '">' + foto +
        '<span class="cp-tags">' + (desc ? '<span class="tag-desc">−' + desc + '%</span>' : '') +
        (!zerado && p.disponivel > 0 ? '<span class="selo-tag tag-retira">' + I('check') + 'Retira hoje</span>' : '') + '</span>' +
        (zerado ? '<span class="indisp">Indisponível</span>' : '') +
      '</a>' +
      '<button class="cp-fav' + (M.cliente.favoritos.indexOf(p.id) >= 0 ? ' on' : '') + '" type="button" aria-label="Favoritar">' + I('heart') + '</button>' +
      '<div class="cp-info">' +
        (p.compat ? '<span class="cp-compat">' + I('moto') + p.compat + '</span>' : '') +
        '<a class="cp-nome" href="' + BASE + 'produto.html?id=' + p.id + '">' + p.nome + '</a>' +
        (p.aval ? '<span class="cp-aval">' + estrelas(p.aval) + nota(p.aval) + ' (' + p.navals + ')</span>' : '') +
        '<div class="cp-preco">' + (p.promo ? '<s>' + fmt(p.preco) + '</s>' : '') + '<b>' + fmt(v) + '</b></div>' +
        (zerado
          ? '<span class="cp-parc">Sem estoque no momento</span>'
          : '<span class="cp-pix">' + window.PIX + fmt(pix(v)) + ' no Pix</span><span class="cp-parc">ou ' + L.parcelas + 'x de ' + fmt(parc(v)) + ' sem juros</span>') +
        '<div class="cp-acao">' + (zerado
          ? '<button class="btn btn-zap-borda btn-bloco btn-p" type="button" data-acao="avise">' + I('whatsapp') + '<span class="so-desk">Avise-me quando chegar</span><span class="so-mob">Avise-me</span></button>'
          : '<button class="btn btn-amarelo btn-bloco btn-p" type="button" data-acao="add">' + I('bag') + 'Adicionar</button>') +
        '</div>' +
      '</div></article>';
  }
  window.MT.card = card;

  /* ---------- busca com sugestões ---------- */
  function normal(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function marcar(txt, q) {
    if (!q) return txt;
    const n = normal(txt), i = n.indexOf(normal(q));
    if (i < 0) return txt;
    return txt.slice(0, i) + '<mark>' + txt.slice(i, i + q.length) + '</mark>' + txt.slice(i + q.length);
  }
  function sugestoes(q) {
    const nq = normal(q.trim());
    if (!nq) return '';
    const achados = M.produtos.filter((p) => p.img && normal(p.nome + ' ' + p.cod + ' ' + p.compat + ' ' + p.motos.map((m) => m.join(' ')).join(' ')).indexOf(nq) >= 0)
      .sort((a, b) => b.vendidos - a.vendidos);
    const total = M.produtos.filter((p) => normal(p.nome + ' ' + p.cod + ' ' + p.compat).indexOf(nq) >= 0).length;
    const termos = ['protetor de motor ' + q, 'kit relação ' + q, 'rodas ' + q, 'amortecedor ' + q].slice(0, 3);
    const motos = [];
    Object.keys(M.motos).forEach((mk) => M.motos[mk].forEach((md) => { if (normal(md).indexOf(nq) >= 0) motos.push(mk + ' ' + md); }));
    let h = '<div class="sug-grupo"><div class="sug-tit">Buscas sugeridas</div>' +
      termos.map((t) => '<a class="sug-item" href="' + BASE + 'categoria.html?q=' + encodeURIComponent(t) + '">' + I('search', 'p') + '<span>' + marcar(t, q) + '</span></a>').join('') + '</div>';
    if (motos.length) {
      h += '<div class="sug-grupo"><div class="sug-tit">Peças para a moto</div>' +
        motos.slice(0, 2).map((m) => '<a class="sug-item" href="' + BASE + 'categoria.html?moto=' + encodeURIComponent(m) + '">' + I('moto', 'p') + '<span>' + marcar(m, q) + '</span><small class="fraco" style="margin-left:auto">ver peças</small></a>').join('') + '</div>';
    }
    if (achados.length) {
      h += '<div class="sug-grupo"><div class="sug-tit">Produtos</div>' +
        achados.slice(0, 4).map((p) => '<a class="sug-item" href="' + BASE + 'produto.html?id=' + p.id + '"><img src="' + img(p.img) + '" alt=""><span class="sug-prod"><b>' + marcar(p.nome, q) + '</b><small>Cód. ' + p.cod + ' · ' + p.compat + '</small></span><span class="sug-preco">' + fmt(valor(p)) + '</span></a>').join('') + '</div>';
    }
    h += '<div class="sug-rodape"><span>' + total + ' produtos para “' + q + '”</span><a href="' + BASE + 'categoria.html?q=' + encodeURIComponent(q) + '">Ver todos</a></div>';
    return h;
  }
  function ligarBusca(input) {
    const caixa = input.closest('.busca').querySelector('.sugestoes');
    const atualizar = () => {
      const q = input.value;
      caixa.innerHTML = sugestoes(q);
      caixa.classList.toggle('aberta', !!q.trim());
    };
    input.addEventListener('input', atualizar);
    input.addEventListener('focus', atualizar);
    document.addEventListener('click', (e) => { if (!e.target.closest('.busca')) caixa.classList.remove('aberta'); });
    return atualizar;
  }

  /* ---------- montagem ---------- */
  const slotTopo = $('#topo');
  if (slotTopo) slotTopo.outerHTML = cabecalho() + gaveta();
  const slotRod = $('#rodape');
  if (slotRod) slotRod.outerHTML = rodape();

  const buscas = $$('.busca-form input').map((inp) => ({ inp, atualizar: ligarBusca(inp) }));

  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-acao]');
    if (!a) return;
    const acao = a.dataset.acao;
    if (acao === 'menu') { body.classList.add('menu-aberto'); }
    if (acao === 'fechar-menu') { body.classList.remove('menu-aberto'); }
    if (acao === 'filtros') { body.classList.add('filtros-abertos'); }
    if (acao === 'fechar-filtros') { body.classList.remove('filtros-abertos'); }
    if (acao === 'add') { e.preventDefault(); a.innerHTML = I('check') + 'Adicionado'; }
  });

  /* preenche grades declarativas: <div data-grade="ids" ...> */
  $$('[data-grade]').forEach((el) => {
    const ids = el.dataset.grade.split(',').map((s) => s.trim()).filter(Boolean);
    el.innerHTML = ids.map((id) => card(M.porId[id])).join('');
  });

  /* estados para as capturas: ?demo=menu | busca | filtros */
  const demo = params.get('demo');
  if (demo === 'menu') body.classList.add('menu-aberto');
  if (demo === 'filtros') body.classList.add('filtros-abertos');
  if (demo === 'busca') {
    body.classList.add('busca-aberta');
    const alvo = buscas.find((b) => b.inp.id === 'busca-mob') || buscas[0];
    alvo.inp.value = params.get('q') || 'titan';
    alvo.atualizar();
  }
  if (params.get('captura')) document.documentElement.classList.add('captura');

  window.MT.carrinhoItens = carrinhoItens;
  window.MT.subtotal = subtotal;
  window.MT.motoTxt = motoTxt;
  window.MT.mapa = mapaSVG;

  /* ---------- mapa ilustrativo (offline) ---------- */
  function mapaSVG(grande) {
    return '<svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" aria-label="Mapa ilustrativo da localização da loja">' +
      '<rect width="600" height="400" fill="#ECE7DA"/>' +
      '<path d="M-20 60 C 120 40, 210 120, 330 90 S 520 40, 640 70" fill="none" stroke="#B9D7EA" stroke-width="22"/>' +
      '<path d="M380 250 l120 -30 l60 70 l-110 60 z" fill="#CFE3BF"/>' +
      '<path d="M40 300 l90 -20 l30 60 l-100 30 z" fill="#CFE3BF"/>' +
      '<g stroke="#fff" stroke-width="9" fill="none" stroke-linecap="round">' +
        '<path d="M0 150 H600"/><path d="M0 330 H600"/><path d="M70 0 V400"/><path d="M200 0 V400"/><path d="M470 0 V400"/>' +
        '<path d="M0 220 C 150 210, 250 250, 600 230"/><path d="M330 120 L 420 400"/><path d="M560 120 L 520 400"/>' +
      '</g>' +
      '<g stroke="#fff" stroke-width="4" fill="none">' +
        '<path d="M0 185 H600"/><path d="M0 270 H600"/><path d="M135 0 V400"/><path d="M265 150 V330"/><path d="M400 150 V330"/><path d="M0 105 H600"/>' +
      '</g>' +
      '<path d="M-20 400 C 120 330, 230 230, 330 180 S 520 70, 640 20" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round"/>' +
      '<path d="M-20 400 C 120 330, 230 230, 330 180 S 520 70, 640 20" fill="none" stroke="#F6C64A" stroke-width="18" stroke-linecap="round"/>' +
      '<g transform="translate(470 92) rotate(-24)"><rect x="-30" y="-13" width="60" height="26" rx="5" fill="#fff" stroke="#111" stroke-width="2"/><text x="0" y="6" text-anchor="middle" font-family="Barlow Condensed" font-weight="800" font-size="17" fill="#111">BR-101</text></g>' +
      '<g font-family="Inter" font-size="12" font-weight="600" fill="#8B8578" letter-spacing="1.6">' +
        '<text x="92" y="128">CURADO</text><text x="232" y="300">JARDIM SÃO PAULO</text><text x="430" y="210">AREIAS</text><text x="70" y="372">BARRO</text>' +
      '</g>' +
      '<g transform="translate(318 186)">' +
        '<ellipse cx="0" cy="4" rx="16" ry="5" fill="rgba(0,0,0,.25)"/>' +
        '<path d="M0 0 C -6 -14, -22 -22, -22 -40 a22 22 0 0 1 44 0 C 22 -22, 6 -14, 0 0z" fill="#111"/>' +
        '<circle cx="0" cy="-40" r="11" fill="#FCDD08"/>' +
        '<g transform="translate(30 -66)"><rect x="0" y="0" width="122" height="34" rx="8" fill="#111"/><text x="12" y="22" font-family="Barlow Condensed" font-weight="800" font-size="18" fill="#FCDD08">MATUTO MOTOS</text></g>' +
      '</g>' +
    '</svg>';
  }
  $$('[data-mapa]').forEach((el) => { el.insertAdjacentHTML('afterbegin', mapaSVG()); });
})();
