#<p align="center">
  <img src="">
</p>


Olá, seja bem vindo ao repositório do projeto Store Manager! Aqui você irá aprender como instalar e testar esse projeto na sua máquina, mas caso queira uma explicação mais detalhada sobre o Store Manager e suas funcionalidades, sem precisar baixar e executar o projeto, recomendo você a visitar meu portifólio clicando [aqui](https://felupee.github.io/back-end/projetos/talker-manager/talker-manager.html).

## Como usar :computer: :rocket: 

Usando o Thunder Client ou uma ferramenta de sua escolha, você pode testar todas as rotas disponíveis no projeto.

### Requisitos :clipboard: 

Este projeto pode ser executado de duas formas distintas: a primeira exige a instalação do NODE, enquanto a segunda possibilita o uso do Docker para rodar em uma máquina virtual.

### Instalação :wrench:
#### Com docker:

- Rode o serviço `node` e `db` com o comando `docker-compose up -d.`

Lembre-se de parar o `mysql` se estiver usando localmente na porta padrão (`3306`), ou adapte, caso queria fazer uso da aplicação em containers;
Esses serviços irão inicializar um container chamado `store_manager` e outro chamado `store_manager_db`;
A partir daqui você pode rodar o container `store_manager` via CLI ou abri-lo no VS Code.

- Use o comando `docker exec -it store_manager bash` e sigas passos abaixo.
Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

- Instale as dependências com `npm install`.

#### Sem docker:

- Instale as dependências com `npm install`

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

### Configuração :gear:

Depois de instalar as dependências, você vai precisar criar o banco de dados na qual a API vai consumir. para isso, siga os seguintes passos:

- Caso você não tenha optado por usar o docker, você precisa ter o MySQL instalado na sua máquina, caso contrário, o container já está configurado.
Eu recomendo a utilização da extensão do VScode `Database Client`. Ela ajuda a manipular e visualizar os dados do banco. Outra ferramenta é o MySQL Workbench, fica a seu critério. :smiling_face_with_smiling_eyes:
- Depois disso, você vai notar dois arquivos no repositório desse projeto, `migration.sql` e `seed.sql`. Um cria o banco e as tabelas e outro popula o banco, respectivamente.
-Execute os dois, sendo a `migration` primeiro. Caso voce tenha a extensão `Database Client`, basta selecionar todo o conteúdo do arquivo e apertar (`Ctrl+Enter`).
Observe abaixo o Diagrama de Entidade-Relacionamento do banco que você acabou de criar:

<img src="https://user-images.githubusercontent.com/94487469/232912321-8cc7c6e2-3acd-45b2-b8ac-ad110551a406.png">

Com o banco criando e populado, basta rodar o comando `npm start` para o server ficar online e você poder fazer requisições a vontade

### Execução :runner:

Depois de instalar as dependências, basta rodar o comando `npm start` para o server ficar online e você poderá fazer requisições a vontade. Sugiro utilizar o `Thunder Client` ou alguma outra ferramenta de sua escolha. 
exemplo de rota do projeto: `http://localhost:3000/products`

## Contato :telephone_receiver:

Caso você tenha alguma dúvida sobre esse projeto ou queira da um feedback você encontra minha redes sociais no meu portifólio clicando [aqui](https://felupee.github.io/#contact).
