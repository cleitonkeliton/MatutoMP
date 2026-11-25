# Proposta de loja virtual — Matuto Motos

> **Fonte da verdade do projeto.** Releia antes de cada etapa: este arquivo vale mais do que a
> memória da conversa.
>
> Versão atual: briefing original + complemento "Painel do lojista (cadastro de produtos e
> estoque)", ambos recebidos em 25/11/2026. O complemento **substitui** o antigo item
> "09 Painel do lojista" dos entregáveis (ver seção no final).

Você vai criar uma proposta visual de site (loja virtual) para a Matuto Motos, distribuidora de
peças de moto. O entregável final são IMAGENS (PNG) das telas do site em desktop e mobile, que
vou apresentar ao dono da loja para vender o projeto. Elas precisam parecer um site real,
finalizado e profissional.

## Antes de tudo
- Analise a estrutura do repositório. Crie tudo em `propostas/matuto-motos/` sem mexer no que
  já existe (se o repositório tiver um padrão de stack ou de pastas para propostas, siga-o).
  Os caminhos abaixo são relativos a essa pasta.
- Trabalhe numa branch própria, nunca direto na principal.
- Salve este briefing em `BRIEFING.md` e releia-o antes de cada etapa. Ele vale mais do que a
  sua memória da conversa.

## A loja (Instagram @matutomotospecas)
- Matuto Motos, "Distribuidora de Peças de Moto". Perfil verificado, 204 mil seguidores,
  1.355 posts. A foto de perfil é o próprio dono: ele é o rosto da marca (não há logo no perfil).
- Horário: 8h às 18h (dias da semana a confirmar).
- Bordão: "Cuida e acelera". Hashtags: #cuida #acelera #ligeiro #avechado (linguagem
  nordestina, bem-humorada e próxima do cliente).
- Hoje o link da bio leva para uma vitrine externa (collshp.com/matutomotos).
- Dados que já tenho (o que ficar em branco vira placeholder, ex.: [ENDEREÇO]):
  Cidade/UF: ___ | Endereço: ___ | WhatsApp: ___ | Pagamentos aceitos: ___
  Assinatura da proposta (meu nome/empresa): ___

### Atualização do cliente (25/11/2026) — vale sobre os campos acima
- **Endereço (como o cliente escreveu):** "Rod Br 10, s/n - Km 71,9 - Jardim São Paulo, Recife -
  PE, 52050-310". Nas telas: "Rod. BR-101, s/n, Km 71,9 — Jardim São Paulo, Recife/PE — CEP
  52050-310" ("Br 10" interpretado como BR-101; confirmar rodovia e CEP — ver PENDENCIAS.md).
- **Horário:** segunda a sexta, das 8h às 18h (sábado e domingo fechado).
- **Cidade/UF:** Recife/PE (confirmado pelo endereço).
- **WhatsApp:** (81) 98164-4155 (do logo; a confirmar como número de vendas).
- **Pagamentos aceitos e assinatura da proposta:** não informados → placeholders.
- **OK para construir** dado pelo cliente após o resumo do inventário ("pode fazer"), sem
  objeções às propostas apresentadas:
  - paleta das artes (preto #111111, amarelo #FCDD08, vermelho #DC0405, dourado #BB9212, fundo
    #F5F4F0, verde #148A3B), fontes Barlow Condensed + Inter + Kaushan Script (só no bordão do
    logo), redesenho vetorial provisório do selo;
  - 15 categorias; tela 02 = categoria "Rodas"; tela 03 = "Protetor de motor Titan 160";
  - valores de exemplo: separação em até 2 h, retirada em até 3 dias úteis, 5% de desconto no
    Pix, até 3x sem juros (todos listados nas pendências).

## Regra principal: não há entrega, só RETIRADA NA LOJA
É uma loja online completa, mas todo pedido é retirado no balcão. Isso tem que ficar claro e
bem resolvido no site inteiro:
- Nenhum campo de CEP, cálculo de frete ou endereço de entrega, em nenhuma tela.
- Barra no topo: "Compre pelo site e retire na loja" + cidade + horário.
- Produto: no lugar de "calcular frete", um box de retirada (grátis, endereço, horário,
  "separado em até X h", com X a confirmar).
- Carrinho: linha "Retirada na loja: grátis" no lugar do frete.
- Checkout em etapas: Identificação → Retirada (loja com mapa, dia previsto, quem vai retirar:
  eu ou outra pessoa, com nome e documento) → Pagamento (Pix com desconto, cartão parcelado e
  "pagar na retirada" como opção a validar) → Confirmação.
- Pedido confirmado: código de retirada (QR code + código curto), o que levar (documento com
  foto + código), prazo para retirar e linha do tempo: Recebido → Pagamento aprovado → Em
  separação → Pronto para retirada → Retirado. Aviso no WhatsApp quando estiver pronto.
- Página "Como funciona a retirada" com passo a passo e perguntas frequentes ("Vocês
  entregam?", "Outra pessoa pode retirar?", "Quanto tempo a peça fica separada?").

## Funcionalidades de loja virtual
- Home: banner com as promoções das fotos, "Peças para a minha moto", categorias, ofertas,
  mais vendidos, marcas que a loja trabalha, retirada em 3 passos, chamada para oficinas,
  seção do Instagram ("Visto nos vídeos do Matuto") e "Receba as ofertas no WhatsApp".
- Busca com sugestões (nome da peça, código ou modelo da moto).
- "Peças para a minha moto": marca → modelo → ano, com opção de salvar em "Minha garagem".
- Categorias: as que aparecem nas fotos, completadas com as típicas (motor, transmissão e kit
  relação, freios, elétrica, iluminação, suspensão, pneus e câmaras, óleos e filtros,
  carenagens, cabos e comandos, acessórios).
- Listagem com filtros (categoria, marca da peça, moto compatível, preço, "retira hoje"),
  ordenação e selo "Retira hoje" nos cards.
- Produto: galeria, código, marca, tabela de compatibilidade (motos e anos), preço, preço no
  Pix, parcelamento, estoque, quantidade, "Adicionar ao carrinho", "Tirar dúvida no WhatsApp"
  (mensagem já com o nome do produto), descrição, avaliações e produtos relacionados.
- Carrinho com cupom, checkout, login/cadastro e Minha conta (pedidos, status, código de
  retirada, favoritos, Minha garagem).
- Botão flutuante de WhatsApp, selo de site seguro, formas de pagamento e páginas
  institucionais (Sobre o Matuto, Contato com mapa, Trocas e devoluções, Privacidade, Termos).
- Sugestão a validar (a loja é distribuidora): área "Oficinas e revendedores", com cadastro
  por CNPJ e preço de atacado.
- É um protótipo visual: sem backend e sem integração real de pagamento ou login.

## Identidade visual e tom
- Extraia das fotos: logo, cores, estilo das artes, fotos de produtos, da loja e do dono. Se
  não houver logo utilizável, crie um logotipo provisório só com texto e anote nas pendências.
- Direção: visual de garagem/oficina, forte e contrastado, com títulos em fonte condensada e
  bold e cor de destaque tirada das artes da loja. Cabeçalho e rodapé podem ser escuros, mas
  as áreas de produto devem ser claras e fáceis de ler. Nada com cara de template genérico.
- Textos em português do Brasil: claros e profissionais em tudo que envolve compra (preço,
  checkout, políticas) e com o tempero do Matuto nos títulos e chamadas, sem exagero. Ex.:
  "Cuida e acelera!", "Pedido pronto, ligeiro", "Não precisa ficar avechado: sua peça te
  espera no balcão". Use os 204 mil seguidores como prova social.
- Nada de lorem ipsum ou caixas cinzas: use produtos, preços e fotos das imagens. Onde faltar,
  crie itens realistas com peças e motos do mercado brasileiro (Honda CG 160, Biz, Pop 110i,
  Bros 160; Yamaha Factor 150, Fazer 250...) e registre nas pendências que são exemplos.
  Avaliações e depoimentos: use os reais que aparecerem nas fotos; se usar exemplos, liste nas
  pendências para trocar por reais antes de publicar.
- As imagens são prints do Instagram: recorte só a foto ou arte, sem a interface do Instagram.

## Como vou mandar as fotos (em partes)
São muitas fotos, então vou enviar em várias mensagens: "PARTE 1", "PARTE 2"... Esta mensagem
pode já vir com a PARTE 1. A cada parte, NÃO comece a construir o site. Apenas:
1. Registre cada imagem em `referencias/INVENTARIO.md`: id (ex.: P1-03), o que mostra, tipo
   (produto, promoção, logo/identidade, loja, dono/equipe, depoimento, informação como
   endereço, horário ou pagamento), textos, preços, marcas e modelos de moto visíveis, cores
   dominantes e onde dá para usar no site.
2. Salve as imagens em `referencias/fotos/` com o mesmo id. Se você consegue VER as imagens
   do chat mas não tem acesso aos arquivos, me avise já na PARTE 1: aí eu subo as fotos no
   repositório.
3. Responda curto: quantas imagens recebeu, 2 ou 3 destaques e "Pronto para a próxima parte".
Se as fotos já estiverem numa pasta do repositório, processe todas de uma vez.
Quando eu escrever "FIM DAS FOTOS" (ou quando terminar de processar a pasta), me mostre:
resumo do inventário, dados encontrados (endereço, telefone, pagamentos etc.), paleta e fontes
propostas, lista de telas e pendências. Espere meu OK antes de construir.

## Entregáveis
1. Protótipo navegável: links entre as telas; menu, filtros e busca funcionando com JS
   simples. Sem padrão no repositório, use HTML + CSS + JS puro, sem build. Tem que renderizar
   offline: fontes locais (ex.: pacotes @fontsource do npm), ícones em SVG inline, nada de CDN.
2. Telas, cada uma em desktop e mobile:
   01 Home · 02 Categoria com filtros · 03 Produto · 04 Carrinho · 05 Checkout (retirada e
   pagamento) · 06 Pedido confirmado com código de retirada · 07 Minha conta e pedidos ·
   08 Como funciona a retirada.
   Extras: no mobile, menu aberto, filtros abertos e busca com sugestões.
   Painel do lojista: telas 09 a 13, em desktop e mobile, conforme a seção
   "Complemento: painel do lojista" abaixo. *(Substitui o item original "09 Painel do lojista
   (só desktop: pedidos a separar, prontos e retirados)".)*
3. PNGs de página inteira, gerados com navegador headless (Playwright ou Puppeteer):
   - Desktop: viewport 1440×900, deviceScaleFactor 2 → `mockups/desktop/01-home.png` etc.
   - Mobile: viewport 390×844, deviceScaleFactor 2 → `mockups/mobile/01-home.png` etc.
   - Se uma página ficar longa demais para uma captura só, divida em partes.
   - `mockups/apresentacao/capa.png`: home desktop numa moldura de navegador e home mobile numa
     moldura de celular, lado a lado, com o logo, "Proposta de loja virtual — Matuto Motos" e
     a assinatura da proposta.
   - `mockups/apresentacao/telas-mobile.png`: as principais telas mobile (primeira dobra) lado
     a lado.
   - `mockups/apresentacao/painel-lojista.png`: ver complemento abaixo.
   - Deixe o script de captura no projeto, para regenerar tudo com um comando.
4. `PENDENCIAS.md`: tudo que é placeholder ou precisa de confirmação do cliente (endereço,
   WhatsApp, CNPJ, dias de funcionamento, pagamentos e desconto no Pix, prazo de separação e de
   retirada, pagamento na retirada, política de trocas, atacado para oficinas e o que dizer aos
   seguidores de outras cidades, que não podem retirar).
5. `README.md` curto: como abrir o protótipo e regenerar as imagens.

## Antes de me entregar
- Abra e confira cada PNG. Corrija texto cortado ou sobreposto, imagem quebrada, rolagem
  horizontal no mobile, desalinhamentos, espaços vazios estranhos e elementos fixos (WhatsApp,
  barra de compra) aparecendo no lugar errado da captura.
- Evite alturas em vh no layout: elas costumam quebrar a captura de página inteira.
- Confirme que não aparece frete, CEP ou endereço de entrega em nenhuma tela.
- Mesma identidade em todas as telas (cabeçalho, rodapé, botões). No mobile: botões fáceis de
  tocar e barra fixa de "Adicionar ao carrinho" na página de produto.
- Se a rede bloquear o download do navegador do Playwright, use o Puppeteer, que baixa o
  Chrome de storage.googleapis.com.
- No fim, faça commit e push na sua branch e me mande a lista das imagens geradas.

## Complemento: painel do lojista (cadastro de produtos e estoque)
*(Recebido junto com o briefing. Substitui o item "09 Painel do lojista" dos entregáveis.
Enquanto estivermos na fase das fotos, só atualizar o briefing e continuar aguardando as
próximas partes.)*

O site precisa de uma área administrativa para o dono gerenciar a loja, com cara de sistema:
clara, limpa, com tabelas fáceis de ler (no celular, viram cartões) e a mesma cor de destaque
da loja. Use os mesmos produtos, preços e estoques da loja, para tudo bater entre as telas.

Telas do painel, em desktop e mobile (o dono provavelmente vai usar muito pelo celular):
- 09 Início do painel: resumo do dia (pedidos a separar, prontos para retirada, vendas do dia)
  e alertas (estoque baixo, produtos sem foto).
- 10 Pedidos para retirada: lista por status, "Marcar como pronto" (avisa o cliente no
  WhatsApp), conferência do código de retirada no balcão e "Marcar como retirado".
- 11 Produtos: lista com foto, nome, código, categoria, preço, estoque e status (ativo,
  rascunho, sem estoque); busca, filtros (categoria, marca, estoque baixo, sem estoque),
  ações (editar, duplicar, desativar) e botão "Importar planilha" para cadastro em massa.
- 12 Cadastro e edição de produto: nome, código interno, código do fabricante, código de
  barras, marca, categoria, descrição, fotos (arrastar e soltar; no celular, tirar foto na
  hora), preço, preço promocional, preço no Pix, preço de atacado (se a área de oficinas for
  mantida), custo e margem, compatibilidade (marca → modelo → anos, com várias motos por
  peça), estoque inicial, estoque mínimo, local na prateleira (ajuda a separar os pedidos) e
  status/visibilidade no site. Sem campos de peso e dimensões: não há frete.
- 13 Controle de estoque: por produto, quantidade disponível, reservada (pedidos do site
  ainda não retirados), mínima e situação (ok, baixo, zerado). Ações de entrada de mercadoria
  (fornecedor, nota fiscal, quantidade, custo), ajuste (perda, avaria, inventário) e baixa de
  venda no balcão, com histórico de movimentações (data, tipo, quantidade, saldo,
  responsável, nº do pedido ou da nota). No celular, botão para ler o código de barras com a
  câmera.

Regras que as telas devem refletir:
- Pedido feito no site reserva o estoque; a baixa acontece na retirada; se o cliente não
  retirar no prazo, a reserva é liberada.
- Estoque abaixo do mínimo gera alerta no painel. Estoque zerado deixa o produto
  "Indisponível" na loja, com botão "Avise-me quando chegar" (pelo WhatsApp). Mostre pelo
  menos um produto zerado na listagem da loja.

Imagens:
- 09-admin-inicio, 10-admin-pedidos, 11-admin-produtos, 12-admin-cadastro-produto e
  13-admin-estoque, em `mockups/desktop/` e `mockups/mobile/`.
- Estados extras no desktop: modal "Entrada de mercadoria" e modal "Importar planilha".
- `mockups/apresentacao/painel-lojista.png`: cadastro de produto e estoque no desktop, com as
  mesmas telas no celular ao lado.
