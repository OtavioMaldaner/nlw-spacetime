# NLW - Spacetime

# Criação do projeto back-end (pasta \server\ )

```sh
npm init -y
```
## Download TypeScript

```sh
npm i typescript -D
```

## Download @types/node

```sh
npm i @types/node -D
```
* Mudar no arquivo tsconfig.json de "es2016" para "es2020"

## Download TSX

```sh
npm i tsx -D
```

## Download Framework

```sh
npm i fastify
```

## Para executar o servidor basta:
### Executar o comando 

```sh
npm run dev
```
* Pois foi criada a linha `"dev": "tsx watch src/server.ts"` nos scripts do arquivo `package.json`;

## Download Framework

```sh
npm i eslint -D
```

## Download Eslint rocketseat

```sh
npm i @rocketseat/eslint-config -D
```

## Adicionar o código no JSON do usuário

```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.addMissingImports": true
}
```

## Download Prisma

```sh
npm i prisma -D
```
### Criação do banco
```sh
npx prisma init --datasource-provider SQLite
```
* Criando tabela no arquivo `schema.prisma`:
```
model NomeDaTabela {
    campo tipo (@id para ser chave primária | @default(uuid()) para ser identificador único)
}
```

* Para criar a tabela no banco:
```sh
npx prisma migrate dev
```

* Para visualizar o que está acontecendo no banco podemos executar o comando:
```sh
npx prisma studio
```

* Para acessar o banco através do sistema:
```sh
npm i @prisma/client
```

# Criação do projeto front-end 

## Execute o comando
```sh
npx create-next-app@latest web --use-npm
```
* O código gerará uma série de perguntas:
    * Escreva `y` para permitir a instalação dos pacotes;
    * Selecione a opção `Yes` para usar TypeScript no projeto;
    * Selecione a opção `Yes` para usar ESLint no projeto;
    * Selecione a opção `Yes` para usar Tailwind CSS no projeto;
    * Selecione a opção `Yes` para usar a pasta `src/` para armazenar os arquivos do projeto;
    * Selecione a opção `Yes` para usar o App Router no projeto;
    * Selecione a opção `Yes` para usar o `import alias` no projeto;
    * Dê um `enter` para finalizar a criação do projeto;

## Execute o comando abaixo para executar o servidor:
```sh
npm run dev
```

* Podemos excluir alguns arquivos desnecessários como:
    * O README.md;
    * Os arquivos da pasta `/public/`;
    * O arquivo favicon.icon na pasta `/src/app/`;
    * Remover todo o código **MENOS OS IMPORTS** do arquivo `globals.css`; 
    * Remover todo o código HTML do `return()` no arquivo `page.tsx`;

## Download plugin-tailwind
```sh
npm i prettier-plugin-tailwindcss -D
```

# Criação do projeto mobile

```sh
npx create-expo-app mobile
```

## Download Tailwind

```sh
npm i nativewind
```
```sh
npm i tailwindcss -D
```
```sh
npx tailwindcss init
```
* Entrar no arquivo `tailwind.config.js` e alterar a linha `content: []` para `content: ["./App.tsx", "./app/**/*.tsx"],`;
* Entrar no arquivo `babel.config.js` e adicionar a linha `plugins: ["nativewind/babel"],` embaixo da linha do `presets`;
* Adicionar o código no compilerOptions do arquivo `tsconfig.json`;
```ts
"types": [
      "nativewind/types"
    ]
```

## Download plugin-tailwind
```sh
npm i prettier-plugin-tailwindcss -D
```
## Para executar o servidor basta:
```sh
npm run start
```