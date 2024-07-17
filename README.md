# TrybeSmith


## Do que se trata esse projeto


Este projeto foi desenvolvido durante minha formação no módulo de back-end na [Trybe](https://www.betrybe.com/). A aplicação se trata de uma loja de itens medievais, esta API serviu para pôr em prática a criação de uma API REST utilizando TypeScript e um aprofundamento maior em tecnologias de segurança como bcript que foi utilizado para criptografia de informações sensíveis.


## Principais linguagens e tecnologias utilizadas


- **TypeScript**: Sua versatilidade contribui diretamente para o bom funcionamento da API, garantindo que informações são transmitidas e recebidas seguindo um padrão.
- **Docker**: Grande facilidade na utilização de vários serviços de forma simultânea utilizando contêineres.
- **Sequelize**: fácil configuração e trouxe grandes benefícios ao trabalhar com banco de dados relacional.
- **JWT**: simplicidade no uso e grande utilidade no uso do payload para passar informações não sensíveis.
- **bcript**: A segurança de dados e muito importante e esta ferramenta cumpre muito bem seu proposito facilitando a manipulação de dados sensíveis.
- **express**: muito útil pela facilidade de gerenciar rotas e facilidade de integração com outras ferramentas.


## Instruções de instalação e uso


### Pré-requisitos


- **Node.js** (versão 18.3.1 ou superior)
- **npm** (versão 10.8.1)
- **Docker** (versão 27.0.3)


### Instalação


#### Docker


1. Baixe e instale o Docker do site oficial:[Docker](https://www.docker.com/get-started/)


2. Verifique a instalação do Docker:
   ```bash
   docker --version
   docker-compose --version
   ```


#### Ubuntu


1. Atualize o sistema e instale Node.js e npm:


   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```


2. Clone o repositório:


   ```bash
   git clone https://github.com/Henriquekrs/trybesmith
   ```


3. Navegue até o diretório do projeto:


   ```bash
   cd nome-do-repositório
   ```


4. Instale as dependências:
   ```bash
   npm install
   ```


#### Windows


1. Baixe e instale o Node.js e npm do site oficial: [Node.js](https://nodejs.org/)


2. Clone o repositório:


   ```bash
   git clone https://github.com/Henriquekrs/trybesmith
   ```


3. Navegue até o diretório do projeto:


   ```cmd
   cd nome-do-repositório
   ```


4. Instale as dependências:
   ```cmd
   npm install
   ```


#### macOS


1. Instale o Homebrew (se ainda não tiver):


   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```


2. Use o Homebrew para instalar Node.js e npm:


   ```bash
   brew install node
   ```


3. Clone o repositório:


   ```bash
   git clone https://github.com/Henriquekrs/trybesmith
   ```


4. Navegue até o diretório do projeto:


   ```bash
   cd nome-do-repositório
   ```


5. Instale as dependências:
   ```bash
   npm install
   ```


### Uso


Passos para iniciar e usar o projeto:


1. Inicie o servidor de desenvolvimento:
   ```bash
   docker-compose up -d --build
   ```


- Esses serviços irão inicializar um contêiner chamado `trybesmith_api` e outro chamado `trybesmith_db`;


### Exemplos de uso


- Para utilização rode os seguintes comandos:
  ```bash
  npm run db:reset     <!--garante que o banco de dados será criado do zero e populado com dados básicos -->
  ```
- Por se tratar de uma API sem front-end desenvolvido, as funcionalidades podem ser utilizadas através da extensão do VSCode ThunderClient ou similar.


## Contato


Se você tiver alguma dúvida, entre em contato:


- **Gustavo Henrique**
- E-mail: [ghrduarte@hotmail.com](mailto:ghrduarte@hotmail.com)
- GitHub: [henriquekrs](https://github.com/Henriquekrs)
