/* Valores da proposta comercial (sugestão da ValDev — ajuste aqui e rode `node scripts/capturar.cjs`).
   Os slides "por-que-investir" e "investimento" leem tudo deste arquivo. */
window.PROPOSTA = {
  validade: '30 dias',
  pacotes: [
    {
      id: 'essencial', nome: 'Essencial', sub: 'Loja com retirada na loja',
      implantacao: 9800, mensal: 390, prazo: '5 semanas', horasAjuste: 2,
      itens: [
        'Loja com catálogo, busca e filtros',
        'Página de produto com compatibilidade',
        'Carrinho e checkout com retirada na loja',
        'Pagamento online: Pix e cartão',
        'Painel de pedidos: separar, pronto e retirado',
        'Cadastro de produtos com fotos e estoque',
        'Funciona no celular e no computador',
        'Treinamento da equipe',
      ],
    },
    {
      id: 'completo', nome: 'Completo', sub: 'Tudo o que está no protótipo', recomendado: true,
      implantacao: 16900, mensal: 590, prazo: '8 semanas', horasAjuste: 3,
      itens: [
        'Tudo do Essencial, mais:',
        '“Peças para a minha moto” e Minha garagem',
        'Minha conta com pedidos e favoritos',
        'Código de retirada com QR e conferência no balcão',
        'Aviso automático no WhatsApp: pedido pronto',
        'Estoque com reserva, entradas, ajustes e histórico',
        'Alerta de estoque baixo e “Avise-me quando chegar”',
        'Importação de produtos por planilha',
      ],
    },
    {
      id: 'distribuidor', nome: 'Distribuidor', sub: 'Para vender também às oficinas',
      implantacao: 22900, mensal: 790, prazo: '10 semanas', horasAjuste: 5,
      itens: [
        'Tudo do Completo, mais:',
        'Área de oficinas e revendedores (CNPJ)',
        'Aprovação de cadastro e preço de atacado',
        'Leitura de código de barras pela câmera',
        'Usuários com permissões: balcão, estoque, gerente',
        'Relatórios de vendas e de estoque',
        'Ofertas para a lista de WhatsApp',
      ],
    },
  ],
  mensalidadeInclui: ['Hospedagem e domínio .com.br', 'Certificado de segurança (SSL)', 'Backups diários e monitoramento', 'Atualizações de segurança', 'Suporte pelo WhatsApp', 'Horas de ajustes por mês (2, 3 ou 5)'],
  terceiros: [
    ['Pix', 'cerca de 1% por venda'],
    ['Cartão', '4% a 5% à vista; parcelar sem juros custa mais'],
    ['WhatsApp (Meta)', 'R$ 0,035 por aviso de pedido; R$ 0,32 por mensagem de oferta'],
  ],
  condicoes: ['40% na assinatura, 30% na aprovação da loja em teste e 30% no lançamento', 'Ou em até 10x no cartão (com as taxas da operadora)', 'Mensalidade a partir do lançamento', '90 dias de garantia para correções', 'Domínio e dados (clientes, produtos e pedidos) em nome da Matuto Motos'],
  opcionais: [['Cadastro de 300 produtos com fotos tratadas', 2400]],
  /* simulação do ponto de equilíbrio (slide "por que investir") */
  simulacao: { pacote: 'completo', ticket: 180, margem: 0.35, taxaPix: 0.0099, diasUteis: 22, cenarios: [2, 5, 10] },
  comparativo: { marketplace: 'de 10% a 19%', pix: 'cerca de 1%' },
};
