# 💳 Desafio Cresceai

## 💻 Funcionalidades

- listar poketeams
- criar poketeams
- deletar poketeams
- atualizar poketeams

## 🚀 Principais tecnologias utilizadas

- Node.js
- Typescript
- Express.js
- Prisma
- Docker-compose

## ⚙️ Como executar o projeto

- Instalar o Node.js na sua máquina: https://nodejs.org/en/
- Instalar o Docker: https://www.docker.com/;
- Abra o terminal e clone o projeto numa pasta de sua preferência: git clone https://github.com/anacleto616/poketeam-api.git
- Entre na pasta poketeam-api com: cd poketeam-api
- Digite o comando: npm install, para instalar as dependências do projeto
- Digite o comando do docker compose para iniciar o banco de dados: docker compose up -d
- Crie um arquivo `.env` na raiz do projeto inserindo o seguinte conteúdo:
  - DATABASE_URL="postgresql://ilumeo:ilumeopass@localhost:5432/ilumeo-db?schema=public"
- Digite o comando: `npx prisma db push`, para fazer o push do banco de dados
- Digite o comando: `npx prisma db pull`, para fazer o pull do banco de dados
- Execute a aplicação com o comando: npm run dev, estará rodando no endereço: http://localhost:3333
