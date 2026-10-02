# Orientação bioclimática com IA

## Objetivo

Adicionar uma experiência integrada ao site para o visitante descrever o terreno e a casa na árvore imaginada e receber uma leitura inicial personalizada, clara e visualmente coerente com a Casa na Árvore.

## O que será construído

- Criar uma nova página acessível pela navegação principal, com campos para localização/clima, características do terreno, vegetação existente e desejos para a casa na árvore.
- Organizar o resultado em orientações práticas sobre implantação, sol e ventilação, água e paisagem, materiais e próximos passos.
- Deixar claro que o conteúdo é uma orientação preliminar e não substitui levantamento técnico, análise estrutural, aprovações ou projeto profissional.
- Oferecer um caminho direto da orientação gerada para a solicitação de orçamento.
- Manter os textos preenchidos caso ocorra algum erro e exibir a mensagem segura retornada pelo serviço.

## Integração com IA

- Fazer a chamada somente no servidor, mantendo chave, instruções e configuração fora do navegador.
- Usar o AI Gateway com `openai/gpt-6-astra` pela Responses API, com raciocínio habilitado e resposta transmitida pelo provedor e consolidada no servidor.
- Validar e limitar todos os campos antes da chamada, instruindo o modelo a não inventar dados do terreno nem apresentar recomendações como cálculo estrutural ou aprovação legal.
- Tratar falta de créditos, bloqueios e falhas transitórias conforme as mensagens seguras do AI Gateway, sem trocar silenciosamente de modelo.

## Validação

- Testar uma geração real pelo AI Gateway.
- Conferir estados de envio, sucesso e erro, além da legibilidade em computador e celular.
- Confirmar que a nova página tem título e descrição próprios e que a navegação existente continua funcionando.