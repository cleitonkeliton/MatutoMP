# Proposta comercial — Loja virtual Matuto Motos

**De:** ValDev · **Para:** Matuto Motos (Recife/PE) · **Data:** novembro de 2026 · **Validade:** 30 dias

> Valores sugeridos pela ValDev. Para alterar, edite `scripts/apresentacao/proposta.js` e rode
> `node scripts/capturar.cjs`: os slides `por-que-investir.png` e `investimento.png` são gerados
> a partir desse arquivo. Mantenha este texto com os mesmos números.

## 1. O que vamos entregar

Uma loja online própria da Matuto Motos, em que o cliente compra pelo site e **retira no balcão**
(sem frete), e um **painel do lojista** para cuidar dos pedidos, dos produtos e do estoque pelo
computador ou pelo celular. As telas da proposta (`mockups/`) mostram como a loja vai ficar.

## 2. Por que investir

1. **Seguidor vira cliente.** São 204 mil seguidores e 1.355 posts, e hoje cada post termina em
   "chama no WhatsApp". Com a loja, o link da bio e cada story levam direto à peça, com preço,
   estoque e "Retira hoje".
2. **Vende 24 horas por dia.** A loja abre de segunda a sexta, das 8h às 18h. O site recebe
   pedidos pagos à noite e no fim de semana, prontos para retirar no dia útil seguinte.
3. **Menos tempo no WhatsApp.** Preço, compatibilidade com a moto e estoque ficam respondidos no
   site, e o aviso de "pedido pronto" sai sozinho. Exemplo: 30 conversas por dia a 6 minutos cada
   são 3 horas de atendimento liberadas por dia.
4. **Balcão sem fila e sem erro.** O pedido chega pago e separado, com o local na prateleira, e é
   conferido pelo código de retirada e por um documento com foto.
5. **Estoque confiável.** O pedido reserva a peça, a baixa acontece na retirada e a reserva é
   liberada se o cliente não vier. Alertas de estoque baixo e o "Avise-me quando chegar" mostram
   o que repor.
6. **Sem frete e sem comissão.** A retirada no balcão mantém o preço baixo. No site, o Pix custa
   cerca de 1% por venda. No Mercado Livre, a comissão vai de 10% a 19%.
7. **Clientes e motos cadastrados.** Com a "Minha garagem", dá para mandar a oferta certa para
   quem tem a moto certa (por exemplo, kit relação para quem tem Titan 160).
8. **Novo canal com oficinas** (pacote Distribuidor). Cadastro por CNPJ e preço de atacado trazem
   compra recorrente das oficinas da região.

### Quando o site se paga (pacote Completo)

| Premissa | Valor |
|---|---|
| Ticket médio por pedido | R$ 180 |
| Margem bruta | 35% |
| Taxa do Pix | cerca de 1% |
| Margem por pedido, já sem a taxa | cerca de R$ 61 |

- **Primeiro ano:** implantação (R$ 16.900) + 12 mensalidades (R$ 590) = **R$ 23.980**, ou cerca
  de R$ 2.000 por mês. Isso equivale a **cerca de 33 pedidos novos por mês, ou 1,5 por dia útil**.
- **Do segundo ano em diante:** só a mensalidade. **10 pedidos por mês** a cobrem.

| Pedidos novos por dia útil | Vendas novas por mês | Implantação paga em |
|---|---|---|
| 2 | R$ 7.920 | 9 meses |
| 5 | R$ 19.800 | 3 meses |
| 10 | R$ 39.600 | 2 meses |

*Simulação. Ajustar com o ticket médio e a margem reais da loja. "Pedidos novos" são vendas que
não aconteceriam sem o site.*

## 3. Pacotes e valores

| | **Essencial** | **Completo** (recomendado) | **Distribuidor** |
|---|---|---|---|
| Para quem | Loja com retirada na loja | Tudo o que está no protótipo | Para vender também às oficinas |
| **Implantação** | **R$ 9.800** | **R$ 16.900** | **R$ 22.900** |
| **Mensalidade** | **R$ 390/mês** | **R$ 590/mês** | **R$ 790/mês** |
| Prazo de entrega | 5 semanas | 8 semanas | 10 semanas |
| Horas de ajustes por mês | 2 h | 3 h | 5 h |

**Essencial**
- Loja com catálogo, busca e filtros
- Página de produto com compatibilidade
- Carrinho e checkout com retirada na loja
- Pagamento online: Pix e cartão
- Painel de pedidos: separar, pronto e retirado
- Cadastro de produtos com fotos e estoque
- Funciona no celular e no computador
- Treinamento da equipe

**Completo**: tudo do Essencial, mais:
- "Peças para a minha moto" e Minha garagem
- Minha conta com pedidos e favoritos
- Código de retirada com QR e conferência no balcão
- Aviso automático no WhatsApp quando o pedido fica pronto
- Estoque com reserva, entradas, ajustes e histórico
- Alerta de estoque baixo e "Avise-me quando chegar"
- Importação de produtos por planilha

**Distribuidor**: tudo do Completo, mais:
- Área de oficinas e revendedores (cadastro por CNPJ)
- Aprovação de cadastro e preço de atacado
- Leitura de código de barras pela câmera
- Usuários com permissões: balcão, estoque e gerente
- Relatórios de vendas e de estoque
- Ofertas para a lista de WhatsApp

**Opcional:** cadastro de 300 produtos com fotos tratadas (fundo removido, descrição e
compatibilidade) por R$ 2.400. Integração com sistema de gestão ou de nota fiscal: sob consulta.

## 4. O que a mensalidade inclui

- Hospedagem e domínio .com.br
- Certificado de segurança (SSL)
- Backups diários e monitoramento
- Atualizações de segurança
- Suporte pelo WhatsApp
- Horas de ajustes por mês (2, 3 ou 5, conforme o pacote)

## 5. Custos de terceiros (pagos direto pela loja)

| Serviço | Custo de referência |
|---|---|
| Pix | cerca de 1% por venda (Mercado Pago: 0,99%) |
| Cartão de crédito | de 4% a 5% à vista; parcelar sem juros custa mais |
| WhatsApp (API oficial da Meta) | R$ 0,035 por aviso de pedido; R$ 0,32 por mensagem de oferta |

## 6. Prazo (pacote Completo, 8 semanas)

| Semana | Etapa |
|---|---|
| 1 | Reunião de início, confirmação das pendências e acesso às contas (domínio, pagamento, WhatsApp) |
| 2 a 4 | Loja: catálogo, produto, busca, "minha moto", carrinho, checkout com retirada e pagamento |
| 4 a 6 | Painel: pedidos, produtos, estoque, planilha e avisos no WhatsApp |
| 7 | Cadastro dos produtos e testes com pedidos reais (loja em teste) |
| 8 | Treinamento da equipe, ajustes finais e lançamento |

## 7. Condições

- 40% na assinatura, 30% na aprovação da loja em teste e 30% no lançamento
- Ou em até 10x no cartão (com as taxas da operadora)
- Mensalidade a partir do lançamento
- 90 dias de garantia para correções
- Domínio e dados (clientes, produtos e pedidos) em nome da Matuto Motos

## 8. O que a Matuto Motos providencia

- Conta no meio de pagamento (Mercado Pago, PagBank ou similar) em nome da loja
- Número de WhatsApp para os avisos automáticos
- Lista de produtos (planilha) e fotos, ou contratar o cadastro opcional
- Logo original e respostas da lista de pendências (`PENDENCIAS.md`)

## 9. Próximos passos

1. Escolher o pacote
2. Assinar o contrato e pagar a entrada
3. Reunião de início, na semana seguinte
