/* Dados do protótipo — Matuto Motos.
   Produtos, preços e promoções das fotos do Instagram (fonte = id da foto em referencias/fotos).
   Itens com exemplo:true foram criados para o protótipo e estão listados no PENDENCIAS.md.
   Estoques, códigos, custos, pedidos e clientes são exemplos. */
(function () {
  const IMG = 'assets/img/';

  const loja = {
    nome: 'Matuto Motos',
    descricao: 'Distribuidora de peças de moto',
    endereco: 'Rod. BR-101, s/n, Km 71,9',
    bairro: 'Jardim São Paulo',
    cidade: 'Recife/PE',
    cep: '52050-310',
    horario: 'Seg. a sex., 8h às 18h',
    horarioLongo: 'Segunda a sexta, das 8h às 18h',
    whatsapp: '(81) 98164-4155',
    whatsLink: 'https://wa.me/5581981644155',
    instagram: '@matutomotospecas',
    seguidores: '204 mil',
    cnpj: '[CNPJ]',
    separacao: 'até 2 h',
    prazoRetirada: '3 dias úteis',
    descontoPix: 0.05,
    parcelas: 3,
  };

  const categorias = [
    { id: 'rodas', nome: 'Rodas', icone: 'cRodas', img: 'produtos/rodas-titan160-2026.webp' },
    { id: 'transmissao', nome: 'Transmissão e kit relação', curto: 'Transmissão', icone: 'cTransmissao', img: 'produtos/kit-relacao-titan-b.webp' },
    { id: 'suspensao', nome: 'Suspensão', icone: 'cSuspensao', img: 'produtos/amortecedor-cb300r.webp' },
    { id: 'protetores', nome: 'Protetores', icone: 'cProtetores', img: 'produtos/protetor-bros160.webp' },
    { id: 'pneus', nome: 'Pneus e câmaras', curto: 'Pneus', icone: 'cPneus', img: 'produtos/pneu-bros.webp' },
    { id: 'oleos', nome: 'Óleos e filtros', icone: 'cOleos', img: 'produtos/oleo-mobil-10w30.webp' },
    { id: 'retrovisores', nome: 'Retrovisores', icone: 'cRetrovisores', img: 'produtos/retrovisor-quadrado.webp' },
    { id: 'capacetes', nome: 'Capacetes', icone: 'cCapacetes', img: 'produtos/capacete-amarelo.webp' },
    { id: 'freios', nome: 'Freios', icone: 'cFreios', img: 'produtos/patins-freio.webp' },
    { id: 'motor', nome: 'Motor', icone: 'cMotor' },
    { id: 'eletrica', nome: 'Elétrica', icone: 'cEletrica' },
    { id: 'iluminacao', nome: 'Iluminação', icone: 'cIluminacao' },
    { id: 'carenagens', nome: 'Carenagens', icone: 'cCarenagens' },
    { id: 'cabos', nome: 'Cabos e comandos', icone: 'cCabos' },
    { id: 'acessorios', nome: 'Acessórios', icone: 'cAcessorios' },
  ];

  /* motos para "Peças para a minha moto" */
  const motos = {
    Honda: ['CG 160 Titan', 'CG 160 Fan', 'CG 160 Start', 'CG 150 Titan', 'Pop 110i', 'Biz 110i', 'Biz 125', 'NXR 160 Bros', 'NXR 150 Bros', 'XRE 190', 'XRE 300', 'Sahara 300', 'CB 300R', 'CB 250F Twister'],
    Yamaha: ['Factor 150', 'Fazer 150', 'Fazer 250', 'XTZ 150 Crosser', 'Lander 250', 'NMax 160'],
  };

  const marcas = ['Mobil', 'Motul', 'Riffel', 'Cobreq', 'Dabroy', 'NGK'];

  /* p(): monta um produto com os campos padrão */
  function p(o) {
    return Object.assign({
      marca: 'Padrão original', promo: null, motos: [], compat: '', reservado: 0, status: 'ativo',
      galeria: null, aval: 0, navals: 0, exemplo: false, vendidos: 0, cores: null,
    }, o);
  }

  const produtos = [
    /* ---------------- Rodas ---------------- */
    p({ id: 'rodas-titan160-2026', fam: ['CG 160 Titan'], cat: 'rodas', nome: 'Jogo de rodas liga leve Titan 160 2026/2027 — freio a disco nas duas',
      cod: 'RD-0107', codFab: 'RLL-T160-26DD', ean: '789820410107', preco: 799.00,
      img: 'produtos/rodas-titan160-2026.webp', galeria: ['produtos/rodas-titan160-2026.webp', 'artes/arte-P1-30.jpg', 'artes/arte-P1-31.jpg', 'artes/arte-P1-32.jpg'],
      motos: [['Honda', 'CG 160 Titan', '2026 a 2027']], compat: 'Titan 160 2026/2027', freio: 'Disco nas duas',
      estoque: 6, reservado: 0, minimo: 2, local: 'B1-1', custo: 520, atacado: 735, vendidos: 41, aval: 5.0, navals: 12, fonte: 'P1-30, P1-31, P1-32' }),
    p({ id: 'rodas-titan150-160', fam: ['CG 160 Titan', 'CG 150 Titan'], cat: 'rodas', nome: 'Jogo de rodas liga leve Titan 150/160 — disco na frente e tambor atrás',
      cod: 'RD-0101', codFab: 'RLL-T150-160', ean: '789820410101', preco: 750.00, promo: 699.00,
      img: 'produtos/rodas-titan150-160.webp', galeria: ['produtos/rodas-titan150-160.webp', 'artes/arte-P1-02.jpg', 'artes/arte-P1-23.jpg'],
      motos: [['Honda', 'CG 150 Titan', '2009 a 2015'], ['Honda', 'CG 160 Titan', '2016 a 2025']], compat: 'Titan 150/160', freio: 'Disco na frente',
      estoque: 4, minimo: 2, local: 'B1-2', custo: 455, atacado: 650, vendidos: 63, aval: 4.8, navals: 29, fonte: 'P1-02, P1-23' }),
    p({ id: 'rodas-dabroy-bros160', fam: ['Bros 160', 'XRE 190'], cat: 'rodas', marca: 'Dabroy', nome: 'Jogo de rodas pé de galinha Dabroy Bros 160 / XRE 190 — disco nas duas',
      cod: 'RD-0104', codFab: 'DBR-PG-B160', ean: '789820410104', preco: 850.00, promo: 750.00,
      img: 'produtos/rodas-dabroy-bros160.webp', galeria: ['produtos/rodas-dabroy-bros160.webp', 'videos/story-rodas-dabroy.jpg'],
      motos: [['Honda', 'NXR 160 Bros', '2016 a 2024'], ['Honda', 'XRE 190', '2016 a 2024']], compat: 'Bros 160 / XRE 190', freio: 'Disco nas duas',
      estoque: 3, reservado: 1, minimo: 2, local: 'B2-1', custo: 500, atacado: 705, vendidos: 27, aval: 4.9, navals: 18, fonte: 'P1-24' }),
    p({ id: 'rodas-bros150-160', fam: ['Bros 160', 'Bros 150'], cat: 'rodas', nome: 'Jogo de rodas liga leve Bros 150/160 — disco na frente e tambor atrás',
      cod: 'RD-0103', codFab: 'RLL-B150-160', ean: '789820410103', preco: 850.00, promo: 750.00,
      img: 'produtos/rodas-bros150-160.webp', galeria: ['produtos/rodas-bros150-160.webp', 'artes/arte-P1-25.jpg'],
      motos: [['Honda', 'NXR 150 Bros', '2009 a 2015'], ['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 150/160', freio: 'Disco na frente',
      estoque: 2, minimo: 2, local: 'B2-2', custo: 495, atacado: 705, vendidos: 22, aval: 4.8, navals: 11, fonte: 'P1-25' }),
    p({ id: 'rodas-bros125-150', fam: ['Bros 150', 'Bros 125'], cat: 'rodas', nome: 'Jogo de rodas pé de galinha Bros 125/150 KS/ES — tambor nas duas',
      cod: 'RD-0102', codFab: 'RLL-PG-B125', ean: '789820410102', preco: 850.00, promo: 750.00,
      img: 'produtos/rodas-bros125-150.webp', galeria: ['produtos/rodas-bros125-150.webp', 'artes/arte-P1-26.jpg'],
      motos: [['Honda', 'NXR 125 Bros KS/ES', '2003 a 2015'], ['Honda', 'NXR 150 Bros KS/ES', '2006 a 2014']], compat: 'Bros 125/150 KS/ES', freio: 'Tambor nas duas',
      estoque: 5, minimo: 2, local: 'B2-3', custo: 490, atacado: 705, vendidos: 15, aval: 4.7, navals: 9, fonte: 'P1-26' }),
    p({ id: 'rodas-cg150-2014', fam: ['CG 150 Titan'], cat: 'rodas', nome: 'Jogo de rodas liga leve CG 150 2014 — disco na frente',
      cod: 'RD-0105', codFab: 'RLL-CG150-14', ean: '789820410105', preco: 850.00, promo: 699.00,
      img: 'produtos/rodas-cg150-2014.webp', galeria: ['produtos/rodas-cg150-2014.webp', 'artes/arte-P1-28.jpg'],
      motos: [['Honda', 'CG 150 Titan / Fan', '2014']], compat: 'CG 150 2014', freio: 'Disco na frente',
      estoque: 0, minimo: 2, local: 'B1-3', custo: 450, atacado: 650, vendidos: 19, aval: 4.8, navals: 8, fonte: 'P1-28' }),
    p({ id: 'rodas-pop110', fam: ['Pop 110i'], cat: 'rodas', nome: 'Jogo de rodas liga leve Pop 110i',
      cod: 'RD-0106', codFab: 'RLL-POP110', ean: '789820410106', preco: 750.00, promo: 699.00,
      img: 'produtos/rodas-pop110.webp', galeria: ['produtos/rodas-pop110.webp', 'artes/arte-P1-29.jpg'],
      motos: [['Honda', 'Pop 110i', '2016 a 2025']], compat: 'Pop 110i', freio: 'Tambor nas duas',
      estoque: 4, minimo: 2, local: 'B1-4', custo: 450, atacado: 650, vendidos: 24, aval: 4.9, navals: 14, fonte: 'P1-29' }),

    /* ---------------- Transmissão ---------------- */
    p({ id: 'kit-relacao-titan', cat: 'transmissao', nome: 'Kit relação Titan 150/160 aço 1045 — coroa, pinhão e corrente',
      cod: 'TR-0201', codFab: 'KR-T160-1045', ean: '789820420201', preco: 75.00, promo: 48.90,
      img: 'produtos/kit-relacao-titan-b.webp', galeria: ['produtos/kit-relacao-titan-b.webp', 'artes/arte-P1-19.jpg', 'artes/arte-P1-18.jpg'],
      motos: [['Honda', 'CG 150 Titan / Fan', '2009 a 2015'], ['Honda', 'CG 160 Titan / Fan / Start', '2016 a 2026']], compat: 'Titan / Fan 150 e 160',
      estoque: 38, reservado: 5, minimo: 15, local: 'C1-1', custo: 27.5, atacado: 44.0, vendidos: 212, aval: 4.9, navals: 64, fonte: 'P1-18, P1-19' }),
    p({ id: 'kit-riffel', cat: 'transmissao', marca: 'Riffel', nome: 'Kit relação Riffel Titanium aço 1045 — coroa, pinhão e corrente',
      cod: 'TR-0203', codFab: 'RIFFEL-TITANIUM', ean: '789820420203', preco: 79.00, promo: 69.90,
      img: 'produtos/kit-riffel-caixa.webp', galeria: ['produtos/kit-riffel-caixa.webp', 'produtos/kit-riffel.webp', 'artes/arte-P1-20.jpg'],
      motos: [['Honda', 'CG 160 Titan / Fan', '2016 a 2026'], ['Honda', 'NXR 160 Bros', '2015 a 2025'], ['Yamaha', 'Factor 150', '2016 a 2025'], ['Yamaha', 'Fazer 150', '2014 a 2022']], compat: 'Titan, Bros, Factor e Fazer',
      estoque: 12, reservado: 0, minimo: 6, local: 'C1-3', custo: 44, atacado: 62.9, vendidos: 98, aval: 4.9, navals: 41, fonte: 'P1-20, P1-44' }),
    p({ id: 'kit-relacao-bros-xre', cat: 'transmissao', nome: 'Kit relação Bros 160 / XRE 190 aço 1045',
      cod: 'TR-0202', codFab: 'KR-B160-1045', ean: '789820420202', preco: 75.00, promo: 54.90,
      img: 'produtos/kit-relacao-bros-xre.webp', galeria: ['produtos/kit-relacao-bros-xre.webp', 'artes/arte-P1-21.jpg'],
      motos: [['Honda', 'NXR 160 Bros', '2015 a 2025'], ['Honda', 'XRE 190', '2016 a 2025']], compat: 'Bros 160 / XRE 190',
      estoque: 15, minimo: 8, local: 'C1-2', custo: 31, atacado: 49.4, vendidos: 87, aval: 4.8, navals: 33, fonte: 'P1-21' }),
    p({ id: 'kit-relacao-pop-biz', cat: 'transmissao', nome: 'Kit relação Pop 110i / Biz 110i / Biz 125 aço 1045 (34T/14T)',
      cod: 'TR-0204', codFab: 'KR-POPBIZ-1045', ean: '789820420204', preco: 75.00, promo: 48.90,
      img: 'produtos/kit-relacao-pop-biz.webp', galeria: ['produtos/kit-relacao-pop-biz.webp', 'artes/arte-P1-22.jpg'],
      motos: [['Honda', 'Pop 110i', '2016 a 2025'], ['Honda', 'Biz 110i', '2016 a 2025'], ['Honda', 'Biz 125', '2011 a 2025']], compat: 'Pop 110i / Biz 110i / Biz 125',
      estoque: 22, reservado: 3, minimo: 10, local: 'C1-4', custo: 27, atacado: 44.0, vendidos: 134, aval: 4.9, navals: 52, fonte: 'P1-22' }),
    p({ id: 'combo-tracao', cat: 'transmissao', marca: 'Riffel', nome: 'Combo kit relação Riffel + coxim da coroa + patins de freio — Titan 160',
      cod: 'TR-0205', codFab: 'COMBO-T160', ean: '789820420205', preco: 87.90,
      img: 'produtos/kit-riffel-caixa.webp', galeria: ['produtos/kit-riffel-caixa.webp', 'produtos/coxim-coroa.webp', 'produtos/patins-freio.webp'],
      motos: [['Honda', 'CG 160 Titan', '2016 a 2026']], compat: 'Titan 160',
      estoque: 7, minimo: 3, local: 'C2-1', custo: 52, atacado: 79, vendidos: 46, aval: 5.0, navals: 16, fonte: 'P1-44' }),
    p({ id: 'coxim-coroa', cat: 'transmissao', nome: 'Coxim da coroa (jogo com 6) — Titan, Fan e Bros',
      cod: 'TR-0206', codFab: 'CX-CG-6', ean: '789820420206', preco: 14.90,
      img: 'produtos/coxim-coroa.webp', motos: [['Honda', 'CG 150 / 160', '2009 a 2026'], ['Honda', 'NXR 150 / 160 Bros', '2009 a 2025']], compat: 'Titan / Fan / Bros',
      estoque: 40, reservado: 1, minimo: 15, local: 'C2-3', custo: 6.2, atacado: 12.5, vendidos: 120, aval: 4.8, navals: 22, fonte: 'P1-44', exemplo: true }),

    /* ---------------- Freios ---------------- */
    p({ id: 'patins-freio', cat: 'freios', marca: 'Cobreq', nome: 'Patins (sapata) de freio traseiro — Titan, Fan, Bros e Biz',
      cod: 'FR-0901', codFab: 'N-1002', ean: '789820490901', preco: 19.90,
      img: 'produtos/patins-freio.webp', motos: [['Honda', 'CG 150 / 160', '2009 a 2026'], ['Honda', 'NXR 150 / 160 Bros', '2009 a 2025'], ['Honda', 'Biz 125', '2011 a 2025']], compat: 'Titan / Fan / Bros / Biz',
      estoque: 30, reservado: 4, minimo: 12, local: 'D1-1', custo: 8.9, atacado: 16.9, vendidos: 156, aval: 4.8, navals: 40, fonte: 'P1-44', exemplo: true }),
    p({ id: 'pastilha-cobreq', cat: 'freios', marca: 'Cobreq', nome: 'Pastilha de freio dianteira — CG 160 e Bros 160',
      cod: 'FR-0902', codFab: 'N-1067', ean: '789820490902', preco: 29.90, img: null,
      motos: [['Honda', 'CG 160 Titan / Fan', '2016 a 2026'], ['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'CG 160 / Bros 160',
      estoque: 3, reservado: 0, minimo: 10, local: 'D1-2', custo: 13.5, atacado: 25.4, vendidos: 88, exemplo: true }),

    /* ---------------- Suspensão ---------------- */
    p({ id: 'amortecedor-titan', cat: 'suspensao', nome: 'Amortecedor traseiro Titan 125/150/160, Fan e Start (par)',
      cod: 'SP-0301', codFab: 'AMT-CG-PAR', ean: '789820430301', preco: 170.00, promo: 99.00,
      img: 'produtos/amortecedor-titan.webp', galeria: ['produtos/amortecedor-titan.webp', 'artes/arte-P1-03.jpg'],
      motos: [['Honda', 'CG 125 Titan / Fan', '2000 a 2015'], ['Honda', 'CG 150 Titan / Fan', '2004 a 2015'], ['Honda', 'CG 160 Titan / Fan / Start', '2016 a 2026']], compat: 'Titan / Fan / Start 125 a 160',
      estoque: 9, reservado: 2, minimo: 4, local: 'E1-1', custo: 58, atacado: 89, vendidos: 77, aval: 4.7, navals: 31, fonte: 'P1-03' }),
    p({ id: 'amortecedor-fazer-factor', cat: 'suspensao', nome: 'Amortecedor traseiro Fazer 150 e Factor 150 (par) — garantia 60 dias',
      cod: 'SP-0302', codFab: 'AMT-YBR-PAR', ean: '789820430302', preco: 250.00, promo: 178.00,
      img: 'produtos/amortecedor-fazer-factor.webp', galeria: ['produtos/amortecedor-fazer-factor.webp', 'artes/arte-P1-17.jpg'],
      motos: [['Yamaha', 'Fazer 150', '2014 a 2022'], ['Yamaha', 'Factor 150', '2016 a 2025']], compat: 'Fazer 150 / Factor 150',
      estoque: 4, minimo: 2, local: 'E1-2', custo: 104, atacado: 160, vendidos: 31, aval: 4.8, navals: 12, fonte: 'P1-17' }),
    p({ id: 'amortecedor-cb300r', cat: 'suspensao', nome: 'Amortecedor traseiro CB 300R 2009 a 2015',
      cod: 'SP-0303', codFab: 'AMT-CB300', ean: '789820430303', preco: 350.00, promo: 278.00,
      img: 'produtos/amortecedor-cb300r.webp', galeria: ['produtos/amortecedor-cb300r.webp', 'artes/arte-P1-16.jpg'],
      motos: [['Honda', 'CB 300R', '2009 a 2015']], compat: 'CB 300R 2009–2015',
      estoque: 2, minimo: 3, local: 'E1-3', custo: 165, atacado: 250, vendidos: 12, aval: 4.9, navals: 7, fonte: 'P1-16' }),
    p({ id: 'amortecedor-xre300', cat: 'suspensao', marca: 'Multisedã', nome: 'Amortecedor traseiro Multisedã XRE 300',
      cod: 'SP-0304', codFab: 'MS-XRE300', ean: '789820430304', preco: 350.00, promo: 278.00,
      img: 'produtos/amortecedor-xre300.webp', galeria: ['produtos/amortecedor-xre300.webp', 'artes/arte-P1-15.jpg'],
      motos: [['Honda', 'XRE 300', '2010 a 2025']], compat: 'XRE 300',
      estoque: 3, minimo: 2, local: 'E1-4', custo: 168, atacado: 250, vendidos: 14, aval: 4.8, navals: 6, fonte: 'P1-15' }),

    /* ---------------- Protetores ---------------- */
    p({ id: 'protetor-titan160', cat: 'protetores', nome: 'Protetor de motor Titan 160',
      cod: 'PR-0401', codFab: 'PMT-160', ean: '789820440401', preco: 160.00, promo: 125.00,
      img: 'produtos/protetor-titan160.webp',
      galeria: ['produtos/protetor-titan160.webp', 'videos/story-protetor-titan.jpg', 'loja/balcao-pneus.jpg', 'videos/story-protetor-motor.jpg'],
      motos: [['Honda', 'CG 160 Titan', '2016 a 2026'], ['Honda', 'CG 160 Fan', '2016 a 2026'], ['Honda', 'CG 160 Start', '2016 a 2026']], compat: 'Titan 160 (2016 a 2026)',
      estoque: 14, reservado: 1, minimo: 5, local: 'A3-2', custo: 68, atacado: 112, vendidos: 189, aval: 4.9, navals: 37, fonte: 'P1-05, P1-14, P1-42' }),
    p({ id: 'protetor-bros160', cat: 'protetores', nome: 'Protetor de motor Bros 160',
      cod: 'PR-0402', codFab: 'PMT-B160', ean: '789820440402', preco: 160.00, promo: 125.00,
      img: 'produtos/protetor-bros160.webp', galeria: ['produtos/protetor-bros160.webp', 'videos/story-protetor-bros.jpg'],
      motos: [['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 160 (todos os modelos)',
      estoque: 3, reservado: 0, minimo: 5, local: 'A3-3', custo: 68, atacado: 112, vendidos: 152, aval: 4.9, navals: 29, fonte: 'P1-06, P1-10, P1-11' }),
    p({ id: 'protetor-tubular', cat: 'protetores', nome: 'Protetor de motor tubular com sliders',
      cod: 'PR-0403', codFab: 'PMT-TUB', ean: '789820440403', preco: 119.00,
      img: 'produtos/protetor-tubular.webp', galeria: ['produtos/protetor-tubular.webp', 'videos/story-protetor-tubular.jpg', 'videos/story-dono-na-loja.jpg'],
      motos: [['Honda', 'CG 160 Titan / Fan', '2016 a 2026'], ['Yamaha', 'Factor 150', '2016 a 2025']], compat: 'CG 160 / Factor 150',
      estoque: 8, minimo: 3, local: 'A3-4', custo: 62, atacado: 107, vendidos: 64, aval: 4.8, navals: 19, fonte: 'P1-04, P1-07, P1-08' }),
    p({ id: 'protetor-carenagem-broly', cat: 'protetores', marca: 'Broly', nome: 'Protetor de carenagem Broly com pedaleira — Bros 160 2017 a 2025',
      cod: 'PR-0404', codFab: 'BRL-B160', ean: '789820440404', preco: 119.00,
      img: 'artes/arte-P1-12.jpg', imgArte: true, galeria: ['artes/arte-P1-12.jpg'],
      motos: [['Honda', 'NXR 160 Bros', '2017 a 2025']], compat: 'Bros 160 2017–2025',
      estoque: 6, minimo: 3, local: 'A4-1', custo: 63, atacado: 107, vendidos: 48, aval: 4.9, navals: 15, fonte: 'P1-12' }),
    p({ id: 'protetor-carter-crosser', cat: 'protetores', nome: 'Protetor de cárter Crosser 150',
      cod: 'PR-0405', codFab: 'PC-XTZ150', ean: '789820440405', preco: 70.00,
      img: 'produtos/protetor-carter-crosser.webp', motos: [['Yamaha', 'XTZ 150 Crosser', '2014 a 2025']], compat: 'Crosser 150',
      estoque: 5, minimo: 2, local: 'A4-2', custo: 34, atacado: 63, vendidos: 21, aval: 4.8, navals: 6, fonte: 'P1-40' }),
    p({ id: 'protetor-carter-sahara', cat: 'protetores', nome: 'Protetor de cárter Sahara 300',
      cod: 'PR-0406', codFab: 'PC-SAH300', ean: '789820440406', preco: 75.00,
      img: 'produtos/protetor-carter-sahara.webp', motos: [['Honda', 'Sahara 300', '2024 a 2026']], compat: 'Sahara 300',
      estoque: 4, minimo: 2, local: 'A4-3', custo: 37, atacado: 67.5, vendidos: 9, aval: 5.0, navals: 4, fonte: 'P1-41' }),
    p({ id: 'protetor-slider-bros', cat: 'protetores', nome: 'Protetor de motor com slider Bros — 4 cores',
      cod: 'PR-0407', codFab: 'PSL-BROS', ean: '789820440407', preco: 44.99,
      img: 'produtos/protetor-slider-bros.webp', motos: [['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 160',
      estoque: 20, reservado: 2, minimo: 6, local: 'A4-4', custo: 21, atacado: 40.5, vendidos: 73, aval: 4.7, navals: 25, fonte: 'P1-43' }),

    /* ---------------- Pneus ---------------- */
    p({ id: 'pneu-traseiro-bros', cat: 'pneus', nome: 'Pneu traseiro Bros Cross 110/90-17 — Bros 150/160',
      cod: 'PN-0501', codFab: 'BC-110-90-17', ean: '789820450501', preco: 280.00, promo: 220.00,
      img: 'produtos/pneu-bros.webp', galeria: ['produtos/pneu-bros.webp', 'artes/arte-P1-35.jpg'],
      motos: [['Honda', 'NXR 150 Bros', '2009 a 2015'], ['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 150/160',
      estoque: 7, reservado: 1, minimo: 3, local: 'F1-1', custo: 142, atacado: 198, vendidos: 58, aval: 4.8, navals: 20, fonte: 'P1-35, P1-36' }),
    p({ id: 'pneu-dianteiro-bros', cat: 'pneus', nome: 'Pneu dianteiro Bros Cross 90/90-19 — Bros 150/160',
      cod: 'PN-0502', codFab: 'BC-90-90-19', ean: '789820450502', preco: 199.00,
      img: 'produtos/pneu-bros.webp', galeria: ['produtos/pneu-bros.webp', 'artes/arte-P1-35.jpg'],
      motos: [['Honda', 'NXR 150 Bros', '2009 a 2015'], ['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 150/160',
      estoque: 9, minimo: 3, local: 'F1-2', custo: 118, atacado: 179, vendidos: 44, aval: 4.8, navals: 15, fonte: 'P1-36' }),

    /* ---------------- Óleos e filtros ---------------- */
    p({ id: 'oleo-mobil-10w30', cat: 'oleos', marca: 'Mobil', nome: 'Óleo Mobil Super Moto 10W-30 MX semissintético 4T — 1 L',
      cod: 'OL-0601', codFab: 'SUPERMOTO-10W30MX', ean: '789820460601', preco: 40.00, promo: 35.90,
      img: 'produtos/oleo-mobil-10w30.webp', galeria: ['produtos/oleo-mobil-10w30.webp', 'artes/arte-P1-01.jpg'],
      motos: [['Todas', 'Motos 4 tempos', 'conforme o manual']], compat: 'Motos 4 tempos',
      estoque: 96, reservado: 8, minimo: 24, local: 'G1-1', custo: 24.5, atacado: 31.9, vendidos: 534, aval: 4.9, navals: 112, fonte: 'P1-01, P1-37' }),
    p({ id: 'oleo-mobil-20w50', cat: 'oleos', marca: 'Mobil', nome: 'Óleo Mobil Super Moto 20W-50 mineral 4T — 1 L',
      cod: 'OL-0602', codFab: 'SUPERMOTO-20W50', ean: '789820460602', preco: 31.90,
      img: 'produtos/oleo-mobil-20w50.webp', motos: [['Todas', 'Motos 4 tempos', 'conforme o manual']], compat: 'Motos 4 tempos',
      estoque: 4, minimo: 24, local: 'G1-2', custo: 19.9, atacado: 28.5, vendidos: 401, aval: 4.8, navals: 86, fonte: 'P1-38' }),
    p({ id: 'oleo-motul-5000', cat: 'oleos', marca: 'Motul', nome: 'Óleo Motul 5000 4T 20W-50 semissintético — 1 L',
      cod: 'OL-0603', codFab: 'MOTUL-5000-20W50', ean: '789820460603', preco: 39.90, img: null,
      motos: [['Todas', 'Motos 4 tempos', 'conforme o manual']], compat: 'Motos 4 tempos',
      estoque: 0, minimo: 12, local: 'G1-3', custo: 25.9, atacado: 35.9, vendidos: 120, exemplo: true }),
    p({ id: 'filtro-ar-cg160', cat: 'oleos', nome: 'Filtro de ar CG 160 Titan, Fan e Start',
      cod: 'OL-0604', codFab: 'FA-CG160', ean: '789820460604', preco: 34.90, img: null,
      motos: [['Honda', 'CG 160 Titan / Fan / Start', '2016 a 2026']], compat: 'CG 160',
      estoque: 14, minimo: 6, local: 'G2-1', custo: 15.2, atacado: 29.9, vendidos: 61, exemplo: true }),

    /* ---------------- Retrovisores ---------------- */
    p({ id: 'retrovisor-f80', cat: 'retrovisores', nome: 'Retrovisor haste longa quadrada (modelo F80) — par',
      cod: 'RT-0701', codFab: 'RET-F80', ean: '789820470701', preco: 45.00, promo: 34.90,
      img: 'produtos/retrovisor-f80.webp', galeria: ['produtos/retrovisor-f80.webp', 'artes/arte-P1-33.jpg'],
      motos: [['Honda', 'Rosca padrão Honda (10 mm)', 'universal']], compat: 'Universal — rosca 10 mm',
      estoque: 18, minimo: 6, local: 'H1-1', custo: 15.5, atacado: 31, vendidos: 143, aval: 4.7, navals: 38, fonte: 'P1-33' }),
    p({ id: 'retrovisor-quadrado', cat: 'retrovisores', nome: 'Retrovisor quadrado haste longa — par',
      cod: 'RT-0702', codFab: 'RET-QD-HL', ean: '789820470702', preco: 27.99,
      img: 'produtos/retrovisor-quadrado.webp', galeria: ['produtos/retrovisor-quadrado.webp', 'artes/arte-P1-34.jpg'],
      motos: [['Honda', 'Rosca padrão Honda (10 mm)', 'universal']], compat: 'Universal — rosca 10 mm',
      estoque: 25, reservado: 1, minimo: 8, local: 'H1-2', custo: 11.9, atacado: 24.9, vendidos: 167, aval: 4.6, navals: 41, fonte: 'P1-34' }),
    p({ id: 'retrovisor-bmw', cat: 'retrovisores', nome: 'Retrovisor universal haste curta (modelo BMW) — par',
      cod: 'RT-0703', codFab: 'RET-UNI-HC', ean: '789820470703', preco: 34.99,
      img: 'produtos/retrovisor-bmw.webp', motos: [['Honda', 'Rosca padrão Honda (10 mm)', 'universal']], compat: 'Universal',
      estoque: 11, minimo: 6, local: 'H1-3', custo: 14.9, atacado: 31, vendidos: 58, aval: 4.7, navals: 17, fonte: 'P1-45' }),

    /* ---------------- Capacetes ---------------- */
    p({ id: 'capacete-aberto', cat: 'capacetes', marca: '', nome: 'Capacete aberto com viseira cristal — 8 cores',
      cod: 'CP-0801', codFab: 'CAP-ABT', ean: '789820480801', preco: 98.00,
      img: 'produtos/capacete-preto.webp', galeria: ['produtos/capacete-preto.webp', 'videos/story-capacete.jpg'],
      cores: [['Preto', 'capacete-preto', '#111'], ['Amarelo', 'capacete-amarelo', '#F4C400'], ['Branco', 'capacete-branco', '#F1F1F1'], ['Azul', 'capacete-azul', '#1D3FBF'],
        ['Grafite', 'capacete-grafite', '#3A3A3A'], ['Prata', 'capacete-prata', '#B9BCC0'], ['Vermelho', 'capacete-vermelho', '#C8141B'], ['Rosa', 'capacete-rosa', '#E0218A']],
      motos: [], compat: 'Tamanhos 56 a 60 · INMETRO',
      estoque: 16, reservado: 1, minimo: 6, local: 'J1-1', custo: 54, atacado: 89, vendidos: 95, aval: 4.8, navals: 27, fonte: 'P1-09' }),

    /* ---------------- Exemplos sem foto (outras categorias) ---------------- */
    p({ id: 'vela-ngk', cat: 'eletrica', marca: 'NGK', nome: 'Vela de ignição NGK CPR8EA-9 — CG 160 e Bros 160',
      cod: 'EL-1001', codFab: 'CPR8EA-9', ean: '789820411001', preco: 24.90, img: null,
      motos: [['Honda', 'CG 160 Titan / Fan / Start', '2016 a 2026'], ['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'CG 160 / Bros 160',
      estoque: 60, minimo: 20, local: 'K1-1', custo: 11.4, atacado: 21.9, vendidos: 210, exemplo: true }),
    p({ id: 'bateria-5ah', cat: 'eletrica', nome: 'Bateria 12V 5Ah selada — CG 160 e Fazer 150',
      cod: 'EL-1002', codFab: 'BAT-12V5', ean: '789820411002', preco: 159.90, img: null,
      motos: [['Honda', 'CG 160 Titan / Fan', '2016 a 2026'], ['Yamaha', 'Fazer 150', '2014 a 2022']], compat: 'CG 160 / Fazer 150',
      estoque: 6, minimo: 4, local: 'K1-2', custo: 92, atacado: 144, vendidos: 34, exemplo: true }),
    p({ id: 'lampada-h4', cat: 'iluminacao', nome: 'Lâmpada do farol H4 35/35W 12V',
      cod: 'IL-1101', codFab: 'H4-3535', ean: '789820411101', preco: 19.90, img: null, compat: 'Universal H4',
      estoque: 45, reservado: 2, minimo: 15, local: 'K2-1', custo: 7.8, atacado: 16.9, vendidos: 99, exemplo: true }),
    p({ id: 'cabo-embreagem-titan', cat: 'cabos', nome: 'Cabo de embreagem Titan 150/160',
      cod: 'CB-1201', codFab: 'CE-CG160', ean: '789820411201', preco: 22.90, img: null,
      motos: [['Honda', 'CG 150 / 160 Titan', '2009 a 2026']], compat: 'Titan 150/160',
      estoque: 12, minimo: 6, local: 'L1-1', custo: 9.5, atacado: 19.5, vendidos: 57, exemplo: true }),
    p({ id: 'manete-embreagem-bros', cat: 'cabos', nome: 'Manete de embreagem Bros 160',
      cod: 'CB-1202', codFab: 'ME-B160', ean: '789820411202', preco: 19.90, img: null,
      motos: [['Honda', 'NXR 160 Bros', '2015 a 2025']], compat: 'Bros 160',
      estoque: 0, minimo: 4, local: 'L1-2', custo: 7.9, atacado: 16.9, vendidos: 40, exemplo: true }),
    p({ id: 'carenagem-lateral-titan', cat: 'carenagens', nome: 'Carenagem lateral Titan 160 (par) — vermelha',
      cod: 'CR-1301', codFab: 'CL-T160-VM', ean: '789820411301', preco: 189.90, img: null,
      motos: [['Honda', 'CG 160 Titan', '2016 a 2025']], compat: 'Titan 160', status: 'rascunho',
      estoque: 1, minimo: 2, local: 'M1-1', custo: 104, atacado: 170, vendidos: 6, exemplo: true }),
    p({ id: 'kit-pistao-titan', cat: 'motor', nome: 'Kit pistão com anéis Titan 160 (STD)',
      cod: 'MT-1401', codFab: 'KP-CG160-STD', ean: '789820411401', preco: 89.90, img: null,
      motos: [['Honda', 'CG 160 Titan / Fan / Start', '2016 a 2026']], compat: 'CG 160',
      estoque: 5, minimo: 3, local: 'N1-1', custo: 49, atacado: 80.9, vendidos: 18, exemplo: true }),
    p({ id: 'bau-41l', cat: 'acessorios', nome: 'Baú 41 L com base universal',
      cod: 'AC-1501', codFab: 'BAU-41L', ean: '789820411501', preco: 199.90, img: null, compat: 'Universal',
      estoque: 3, minimo: 2, local: 'P1-1', custo: 118, atacado: 179.9, vendidos: 22, exemplo: true }),
  ];

  /* EAN-13 com dígito verificador */
  function familia(m) {
    return m.replace('NXR ', '').replace(' KS/ES', '').replace(' / Fan / Start', '').replace(' / Fan', '').replace('Honda ', '');
  }
  produtos.forEach(function (x) {
    if (!x.fam) x.fam = x.motos.filter(function (m) { return m[0] !== 'Todas'; }).map(function (m) { return familia(m[1]); });
    const d = x.ean.split('').map(Number);
    const s = d.reduce(function (acc, v, i) { return acc + v * (i % 2 ? 3 : 1); }, 0);
    x.ean = x.ean + ((10 - (s % 10)) % 10);
    x.disponivel = Math.max(0, x.estoque - x.reservado);
    x.situacao = x.estoque === 0 ? 'zerado' : (x.disponivel <= x.minimo ? 'baixo' : 'ok');
  });

  const porId = {};
  produtos.forEach(function (x) { porId[x.id] = x; });

  /* carrinho de exemplo (telas 04, 05, 06) */
  const carrinho = [
    { id: 'protetor-titan160', qtd: 1 },
    { id: 'kit-relacao-titan', qtd: 1 },
    { id: 'oleo-mobil-10w30', qtd: 2 },
  ];

  /* cliente de exemplo */
  const cliente = {
    nome: 'Carlos Eduardo Lima', primeiro: 'Carlos', email: 'carlos.lima@email.com', fone: '(81) 99652-3318', cpf: '***.482.317-**',
    garagem: [
      { marca: 'Honda', modelo: 'CG 160 Titan', ano: 2022, principal: true, apelido: 'Titanzinha do trabalho' },
      { marca: 'Honda', modelo: 'NXR 160 Bros', ano: 2021, principal: false, apelido: 'Bros da trilha' },
    ],
    favoritos: ['rodas-titan160-2026', 'amortecedor-titan', 'retrovisor-f80', 'capacete-aberto'],
  };

  /* pedidos do cliente (telas 06 e 07) */
  const pedidoAtual = {
    numero: 'MT-10482', data: '25/11/2026', hora: '10:42', codigo: '7K4-Q29',
    itens: carrinho, pagamento: 'Pix', pagoAs: '10:43', prontoAs: '12:31',
    retirante: { nome: 'Marcos Vinícius Lima', doc: 'RG 8.524.***', relacao: 'Outra pessoa' },
    previsao: 'Hoje, a partir das 12h45', limite: 'segunda-feira, 30/11, às 18h',
  };
  const historico = [
    { numero: 'MT-10391', data: '12/11/2026', itens: [{ id: 'amortecedor-titan', qtd: 1 }, { id: 'patins-freio', qtd: 1 }], total: 118.90, status: 'retirado', info: 'Retirado em 12/11 às 15h20' },
    { numero: 'MT-10220', data: '28/10/2026', itens: [{ id: 'pneu-traseiro-bros', qtd: 1 }], total: 209.00, status: 'retirado', info: 'Retirado em 29/10 às 09h05' },
    { numero: 'MT-10105', data: '14/10/2026', itens: [{ id: 'retrovisor-f80', qtd: 1 }], total: 33.16, status: 'cancelado', info: 'Não retirado no prazo · reserva liberada e valor estornado' },
  ];

  /* pedidos do painel (tela 10). total = valor pago */
  const pedidosPainel = [
    { numero: 'MT-10483', cliente: 'Wellington Rodrigues', tipo: 'Cliente', itens: [['retrovisor-quadrado', 1], ['lampada-h4', 2]], total: 64.40, pagamento: 'Pix', status: 'aguardando', hora: '10:58', info: 'Pix gerado · expira às 11:28' },
    { numero: 'MT-10482', cliente: 'Carlos Eduardo Lima', tipo: 'Cliente', itens: [['protetor-titan160', 1], ['kit-relacao-titan', 1], ['oleo-mobil-10w30', 2]], total: 233.42, pagamento: 'Pix', status: 'separar', hora: '10:43', prazo: '12:43', retirante: 'Marcos Vinícius Lima (outra pessoa)' },
    { numero: 'MT-10481', cliente: 'Oficina Moto Peças do Biu', tipo: 'Oficina', itens: [['kit-relacao-titan', 4], ['patins-freio', 4], ['oleo-mobil-10w30', 6]], total: 413.25, pagamento: 'Pix', status: 'separar', hora: '10:31', prazo: '12:31', retirante: 'Severino (funcionário)' },
    { numero: 'MT-10479', cliente: 'Joseane Ferreira', tipo: 'Cliente', itens: [['capacete-aberto', 1]], total: 93.10, pagamento: 'Pix', status: 'separar', hora: '10:05', prazo: '12:05', obs: 'Cor: rosa' },
    { numero: 'MT-10478', cliente: 'Rafael Gomes', tipo: 'Cliente', itens: [['rodas-dabroy-bros160', 1]], total: 750.00, pagamento: 'Cartão 3x', status: 'separar', hora: '09:52', prazo: '11:52', alerta: 'Vence em 47 min' },
    { numero: 'MT-10476', cliente: 'Ana Paula Souza', tipo: 'Cliente', itens: [['protetor-slider-bros', 2], ['coxim-coroa', 1]], total: 99.64, pagamento: 'Pix', status: 'pronto', hora: '09:40', limite: '30/11', codigo: 'H2M-81C' },
    { numero: 'MT-10474', cliente: 'Edvaldo Santos', tipo: 'Cliente', itens: [['pneu-traseiro-bros', 1]], total: 209.00, pagamento: 'Pix', status: 'pronto', hora: 'Ontem 16:10', limite: '27/11', codigo: 'P9T-4Z2' },
    { numero: 'MT-10469', cliente: 'Júnior Moto Center', tipo: 'Oficina', itens: [['amortecedor-titan', 2], ['kit-relacao-pop-biz', 3]], total: 310.00, pagamento: 'Cartão 1x', status: 'pronto', hora: 'Ontem 11:22', limite: '27/11', codigo: 'Q4K-7B5' },
    { numero: 'MT-10470', cliente: 'Cícero Alves', tipo: 'Cliente', itens: [['oleo-mobil-10w30', 1], ['vela-ngk', 1]], total: 57.76, pagamento: 'Pix', status: 'retirado', hora: '09:12' },
    { numero: 'MT-10468', cliente: 'Maria do Carmo Silva', tipo: 'Cliente', itens: [['retrovisor-f80', 1]], total: 33.16, pagamento: 'Pix', status: 'retirado', hora: '08:47' },
    { numero: 'MT-10466', cliente: 'Oficina do Galego', tipo: 'Oficina', itens: [['kit-relacao-bros-xre', 2], ['pneu-dianteiro-bros', 1]], total: 263.91, pagamento: 'Pix', status: 'retirado', hora: '08:31' },
    { numero: 'MT-10465', cliente: 'Thiago Nascimento', tipo: 'Cliente', itens: [['amortecedor-fazer-factor', 1]], total: 169.10, pagamento: 'Pix', status: 'retirado', hora: '08:15' },
    { numero: 'MT-10463', cliente: 'Luana Barbosa', tipo: 'Cliente', itens: [['capacete-aberto', 1]], total: 93.10, pagamento: 'Pix', status: 'retirado', hora: '08:04' },
  ];

  /* movimentações do estoque — Protetor de motor Titan 160 (tela 13) */
  const movimentos = [
    { data: '25/11 10:43', tipo: 'Reserva', qtd: '−1 reserv.', saldo: '14 (13 livres)', resp: 'Site', doc: 'Pedido MT-10482' },
    { data: '25/11 09:15', tipo: 'Venda balcão', qtd: '−1', saldo: '14', resp: 'Josué', doc: 'Venda B-2231' },
    { data: '24/11 16:20', tipo: 'Entrada', qtd: '+10', saldo: '15', resp: 'Matuto', doc: 'NF 18.452' },
    { data: '24/11 11:02', tipo: 'Baixa (retirada)', qtd: '−1', saldo: '5', resp: 'Josué', doc: 'Pedido MT-10462' },
    { data: '23/11 17:40', tipo: 'Ajuste (avaria)', qtd: '−1', saldo: '6 (5 livres)', resp: 'Matuto', doc: 'Riscado no transporte' },
    { data: '23/11 10:12', tipo: 'Reserva', qtd: '−1 reserv.', saldo: '7 (6 livres)', resp: 'Site', doc: 'Pedido MT-10462' },
    { data: '22/11 15:30', tipo: 'Venda balcão', qtd: '−2', saldo: '7', resp: 'Josué', doc: 'Venda B-2198' },
  ];

  window.MATUTO = { IMG: IMG, loja: loja, categorias: categorias, motos: motos, marcas: marcas, produtos: produtos, porId: porId,
    carrinho: carrinho, cliente: cliente, pedidoAtual: pedidoAtual, historico: historico, pedidosPainel: pedidosPainel, movimentos: movimentos };
})();
