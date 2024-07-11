# NodeJS API Onboarding
Eu preparei esse projeto para facilitar o processo de começar a mexer nos nossos projetos. Basicamente, a ideia desse onboarding é criar um cenário onde você vai conseguir passar por todos os processos da nossa API para facilitar quando for necessário desenvolver soluções reais.

## Como fazer?
Eu deixei um exemplo dentro do código para ser mais fácil de resolver o desáfio. Para concluir o desafio é necessario ter aberto uma PR seguindo exemplo, {nome}-todo-{dia}-{mes} so para ficar mais organizado as branchs.

`exemplo: joaovitorlima-todo-11-07`

Outro ponto é que para a conclusão do desafio é necessário ter a rota documentada no Swagger.
## Pré-requisitos:
Para evitarmos ter documentação repetida, eu aconselho ler a nossa documentação que está no Notion. Acho legal ler sobre a nossa arquitetura, SOLID, como rodar a primeira vez e os scripts. Qualquer dúvida, pode entrar em contato com o dev envolvido.

## Desafio
O desafio vai ser o bom e velho aplicativo de afazeres. Onde vamos ter uma lista para adicionarmos o que temos que fazer, marcar como concluído e vermos a nossa lista de afazeres. Agora, que você já sabe o que deve ser feito, vou escrever os casos de uso.

Lembrando que estamos só desenvolvendo a parte do BE. Não é necessário nenhuma UI, e sim as rotas no Swagger para testarmos.

### Caso de uso: Criar um item a fazer
1. Eu, como usuário, devo conseguir criar um item para a nossa lista de afazeres.
2. Para a criação desse item vai ser necessário somente o texto.
3. Ele vai ser criado como se ele não tivesse sido concluído por padrão.

### Caso de uso: Ver todos os afazeres
1. Eu, como usuário, devo ver todos os meus afazeres.
2. Eu quero ver quando o meu item foi criado, se ele já foi feito ou não e qual o texto dele.
3. Devo poder filtrar pelo texto.
### Caso de uso: Marcar como feito
1. Eu, como usuário, devo poder marcar como feito um dos meus ToDos.
2. Assim que feito, ele deve aparecer como concluído dentro da rota de ver todos.
