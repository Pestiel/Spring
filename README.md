# Guia de Instalação e Execução

# Introdução

Este projeto consiste em duas aplicações: uma aplicação backend desenvolvida com Spring Boot e uma aplicação frontend desenvolvida com React. Neste guia, você aprenderá como clonar o projeto e rodar ambas as aplicações localmente.

# Requisitos

Antes de começar, verifique se você tem os seguintes softwares instalados:

Java 11+ (para rodar a aplicação Spring Boot)

Node.js e npm (para rodar a aplicação React)

Git (para clonar o repositório)

# Clonando o Projeto

Primeiro, clone o repositório usando o comando:

`git clone https://github.com/Pestiel/Spring.git`

Navegue para o diretório do projeto:

`cd Spring`

# Configurando e Rodando a Aplicação Backend (Spring Boot)

Navegue até o diretório do projeto Spring Boot:

`cd Spring`

Certifique-se de ter o Java 11+ instalado e configure as variáveis de ambiente, se necessário.

Compile e inicie o servidor Spring Boot com o comando:

`./mvnw spring-boot:run`

Nota: Se você não tiver o wrapper do Maven (mvnw), execute:

`mvn spring-boot:run`

O servidor backend será iniciado na porta 8080 por padrão.

# Configurando e Rodando a Aplicação Frontend (React)

Navegue até o diretório do projeto React:

`cd React/front`

Instale as dependências do projeto com:

`npm install`

Inicie a aplicação React:

`npm start`

O servidor React será iniciado na porta 3000 por padrão.

# Utilizando as Aplicações

Spring: A aplicação backend expõe uma API REST em `http://localhost:8080`, que pode ser acessada pela aplicação React.

React: A aplicação frontend será carregada em `http://localhost:3000`. Você pode interagir com a interface para buscar dados de usuários do GitHub e visualizar seus repositórios.


# Problemas Comuns e Soluções

Erro de porta ocupada: Certifique-se de que as portas 8080 e 3000 estejam livres ou altere as configurações de porta nos respectivos arquivos de configuração.

Dependências do Maven: Se houver problemas com as dependências, execute:

`./mvnw clean install`

Erro de conexão: Verifique se o backend está em execução antes de tentar acessar o frontend.

# Contribuição

Sinta-se à vontade para contribuir com melhorias e correções de bugs. Para isso, siga as etapas:

1- Fork o repositório.

2- Crie uma branch para suas modificações.

3- Realize as alterações e faça commit.

4- Envie um pull request.
