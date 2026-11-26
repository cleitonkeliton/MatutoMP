#!/usr/bin/env node
/*
 * Gera todos os PNGs da proposta a partir do protótipo (prototipo/), com Playwright.
 *
 *   node scripts/capturar.cjs            # tudo
 *   node scripts/capturar.cjs --so 03    # só as telas cujo nome começa com "03"
 *
 * Desktop: 1440×900, deviceScaleFactor 2 → mockups/desktop/
 * Mobile:  390×844,  deviceScaleFactor 2 → mockups/mobile/
 * Páginas muito longas são divididas em partes (-parte1, -parte2...) em quebras de seção.
 * Depois monta as imagens de apresentação (mockups/apresentacao/).
 *
 * Usa o Playwright instalado no sistema (require('playwright')). Se não houver,
 * instale com: npm i -D playwright && npx playwright install chromium
 */
const path = require('path');
const fs = require('fs');
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) {
  console.error('Playwright não encontrado. Rode: npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

const RAIZ = path.resolve(__dirname, '..');
const PROTO = path.join(RAIZ, 'prototipo');
const SAIDA = path.join(RAIZ, 'mockups');
const DOBRAS = path.join(SAIDA, '.dobras');
const APRES = path.join(__dirname, 'apresentacao');

const DESKTOP = { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 };
const MOBILE = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
// altura máxima (px CSS) de cada parte; acima disso a página é dividida
const LIMITE = { desktop: { alvo: 3000, max: 3600 }, mobile: { alvo: 4400, max: 5200 } };

// [arquivo de saída, página do protótipo, opções]
const TELAS = [
  ['01-home', 'index.html'],
  ['02-categoria', 'categoria.html?c=rodas'],
  ['03-produto', 'produto.html?id=protetor-titan160'],
  ['04-carrinho', 'carrinho.html'],
  ['05-checkout', 'checkout.html'],
  ['06-pedido-confirmado', 'pedido-confirmado.html'],
  ['07-minha-conta', 'minha-conta.html'],
  ['08-como-funciona-retirada', 'como-funciona.html'],
  ['09-admin-inicio', 'painel/index.html'],
  ['10-admin-pedidos', 'painel/pedidos.html'],
  ['11-admin-produtos', 'painel/produtos.html'],
  ['12-admin-cadastro-produto', 'painel/produto-editar.html'],
  ['13-admin-estoque', 'painel/estoque.html'],
];
// estados extras
const EXTRAS_DESKTOP = [
  ['11-admin-produtos-modal-importar-planilha', 'painel/produtos.html?modal=importar'],
  ['13-admin-estoque-modal-entrada-mercadoria', 'painel/estoque.html?modal=entrada'],
];
const EXTRAS_MOBILE = [
  ['extra-menu-aberto', 'index.html?demo=menu'],
  ['extra-filtros-abertos', 'categoria.html?c=rodas&demo=filtros'],
  ['extra-busca-sugestoes', 'index.html?demo=busca&q=titan'],
];

const args = process.argv.slice(2);
const so = args.includes('--so') ? args[args.indexOf('--so') + 1] : null;
const url = (pag, extra) => 'file://' + path.join(PROTO, pag.split('?')[0]) + '?' + [pag.split('?')[1], extra].filter(Boolean).join('&');

function mkdir(d) { fs.mkdirSync(d, { recursive: true }); }

async function preparar(page) {
  await page.evaluate(() => document.fonts.ready);
  // espera as imagens carregarem
  await page.evaluate(() => Promise.all(Array.from(document.images).map((im) => im.complete ? 0 : new Promise((r) => { im.onload = im.onerror = r; }))));
  await page.waitForTimeout(150);
}

/* pontos de corte "limpos": fim de cada bloco principal da página */
async function cortes(page) {
  return page.evaluate(() => {
    const ys = new Set();
    const blocos = document.querySelectorAll('main > section, main > .wrap > *, main > div > *, main .wrap > section, .conteudo > *, .rodape, .grid-2 > div > *, .p-detalhes, .sec, .retirada');
    blocos.forEach((el) => { const r = el.getBoundingClientRect(); if (r.height > 40) { ys.add(Math.round(r.top + scrollY)); } });
    return Array.from(ys).sort((a, b) => a - b);
  });
}

async function capturarPagina(ctx, nome, pag, pasta, tipo, { inteira = true } = {}) {
  const page = await ctx.newPage();
  const erros = [];
  page.on('pageerror', (e) => erros.push(e.message));
  page.on('requestfailed', (r) => erros.push('não carregou: ' + r.url()));
  await page.goto(url(pag, inteira ? 'captura=1' : ''), { waitUntil: 'load' });
  await preparar(page);
  const { w, h } = await page.evaluate(() => ({ w: document.documentElement.scrollWidth, h: document.documentElement.scrollHeight }));
  const largura = ctx._largura;
  if (w > largura) erros.push(`rolagem horizontal: largura ${w}px > ${largura}px`);
  const arquivos = [];
  if (!inteira) {
    const f = path.join(pasta, nome + '.png');
    await page.screenshot({ path: f });
    arquivos.push(f);
  } else {
    const lim = LIMITE[tipo];
    if (h <= lim.max) {
      const f = path.join(pasta, nome + '.png');
      await page.screenshot({ path: f, fullPage: true });
      arquivos.push(f);
    } else {
      const cs = await cortes(page);
      let ini = 0, n = 1;
      while (ini < h) {
        let fim = Math.min(h, ini + lim.alvo);
        if (h - ini > lim.max) {
          const cands = cs.filter((y) => y > ini + lim.alvo * 0.55 && y <= ini + lim.alvo);
          if (cands.length) fim = cands[cands.length - 1];
        } else fim = h;
        const f = path.join(pasta, `${nome}-parte${n}.png`);
        await page.screenshot({ path: f, fullPage: true, clip: { x: 0, y: ini, width: largura, height: fim - ini } });
        arquivos.push(f);
        ini = fim; n += 1;
      }
    }
  }
  await page.close();
  return { arquivos, erros, h };
}

async function main() {
  const browser = await chromium.launch();
  const relatorio = [];
  for (const [tipo, conf, pasta] of [['desktop', DESKTOP, path.join(SAIDA, 'desktop')], ['mobile', MOBILE, path.join(SAIDA, 'mobile')]]) {
    mkdir(pasta); mkdir(path.join(DOBRAS, tipo));
    const ctx = await browser.newContext(conf);
    ctx._largura = conf.viewport.width;
    const lista = TELAS.concat(tipo === 'desktop' ? EXTRAS_DESKTOP : []);
    for (const [nome, pag] of lista) {
      if (so && !nome.startsWith(so)) continue;
      // remove partes antigas
      fs.readdirSync(pasta).filter((f) => f === nome + '.png' || f.startsWith(nome + '-parte')).forEach((f) => fs.unlinkSync(path.join(pasta, f)));
      const ehModal = nome.includes('modal');
      const r = await capturarPagina(ctx, nome, pag, pasta, tipo, { inteira: !ehModal });
      relatorio.push([tipo, nome, r.arquivos.map((f) => path.relative(RAIZ, f)).join(', '), r.erros]);
      // primeira dobra (para as composições de apresentação)
      if (!ehModal) await capturarPagina(ctx, nome, pag, path.join(DOBRAS, tipo), tipo, { inteira: false });
    }
    if (tipo === 'mobile') {
      for (const [nome, pag] of EXTRAS_MOBILE) {
        if (so && !nome.startsWith(so)) continue;
        const r = await capturarPagina(ctx, nome, pag, pasta, tipo, { inteira: false });
        relatorio.push([tipo, nome, r.arquivos.map((f) => path.relative(RAIZ, f)).join(', '), r.erros]);
      }
    }
    await ctx.close();
  }

  // composições de apresentação
  if (!so) {
    mkdir(path.join(SAIDA, 'apresentacao'));
    const comps = [['capa', 1920, 1080], ['telas-mobile', 2400, 1160], ['painel-lojista', 2400, 1350]];
    const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 2 });
    for (const [nome, w, h] of comps) {
      const page = await ctx.newPage();
      await page.setViewportSize({ width: w, height: h });
      await page.goto('file://' + path.join(APRES, nome + '.html'));
      await preparar(page);
      const f = path.join(SAIDA, 'apresentacao', nome + '.png');
      await page.screenshot({ path: f });
      relatorio.push(['apresentação', nome, path.relative(RAIZ, f), []]);
      await page.close();
    }
    await ctx.close();
  }
  await browser.close();

  let problemas = 0;
  for (const [tipo, nome, arqs, erros] of relatorio) {
    console.log(`${erros.length ? '✗' : '✓'} [${tipo}] ${nome} → ${arqs}`);
    erros.forEach((e) => { console.log('    ' + e); problemas += 1; });
  }
  console.log(problemas ? `\n${problemas} problema(s) encontrado(s).` : '\nTudo certo.');
}

main().catch((e) => { console.error(e); process.exit(1); });
