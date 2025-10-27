# Sistema de Consulta e Denúncia de Golpes Telefônicos

Essa aplicação permite aos usuários verificar se um número de telefone está associado a golpes conhecidos, registrar suas próprias denúncias e acompanhar estatísticas sobre as fraudes mais frequentes.

## Funcionalidades:

* **Consulta de números**: Verifique se um número de telefone foi denunciado como parte de um golpe.
* **Registro de denúncias**: Usuários podem adicionar relatos sobre ligações fraudulentas que receberam.
* **Estatísticas de golpes**: Acompanhe os golpes mais denunciados, as instituições frequentemente mencionadas e outros dados relevantes.

## Como Funciona:

1. **Consulta de número**

   * O usuário acessa a aplicação e pesquisa por um número de telefone suspeito.
   * A aplicação exibe informações sobre o número, como:

     * Quantidade de denúncias.
     * Instituições mencionadas nas ligações.
     * Grau de risco (baixo, médio, alto).

2. **Registro de denúncia**

   * Caso o usuário tenha recebido uma ligação suspeita, ele pode registrar sua denúncia, fornecendo:

     * Número de telefone.
     * Instituição mencionada na ligação.
     * Descrição do ocorrido.
     * Localização (Estado/Cidade).
   * O sistema salva a denúncia no banco de dados e atualiza as estatísticas do número.

## Banco de Dados

A aplicação utiliza PostgreSQL para armazenar os registros das denúncias e informações relacionadas aos números de telefone.
