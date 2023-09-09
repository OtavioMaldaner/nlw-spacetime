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

- Mudar no arquivo tsconfig.json de "es2016" para "es2020"

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

- Pois foi criada a linha `"dev": "tsx watch src/server.ts"` nos scripts do arquivo `package.json`;

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

- Criando tabela no arquivo `schema.prisma`:

```
model NomeDaTabela {
    campo tipo (@id para ser chave primária | @default(uuid()) para ser identificador único)
}
```

- Para criar a tabela no banco:

```sh
npx prisma migrate dev
```

- Para visualizar o que está acontecendo no banco podemos executar o comando:

```sh
npx prisma studio
```

- Para acessar o banco através do sistema:

```sh
npm i @prisma/client
```

## Download ZOD

```sh
npm i zod
```

## Download CORS

```sh
npm i @fastify/cors
```

## Download DOTENV (para ler arquivos.env)

```sh
npm i dotenv -D
```

## Download Axios

```sh
npm i axios
```

## Download JWT

```sh
npm i @fastify/jwt
```

#### Para upload de arquivo

## Download multipart data

```sh
npm i @fastify/multipart
```

## Download static, para deixar uma pasta do back-end pública

```sh
npm i @fastify/static
```

# Criação do projeto front-end

## Execute o comando

```sh
npx create-next-app@latest web --use-npm
```

- O código gerará uma série de perguntas:
  - Escreva `y` para permitir a instalação dos pacotes;
  - Selecione a opção `Yes` para usar TypeScript no projeto;
  - Selecione a opção `Yes` para usar ESLint no projeto;
  - Selecione a opção `Yes` para usar Tailwind CSS no projeto;
  - Selecione a opção `Yes` para usar a pasta `src/` para armazenar os arquivos do projeto;
  - Selecione a opção `Yes` para usar o App Router no projeto;
  - Selecione a opção `Yes` para usar o `import alias` no projeto;
  - Dê um `enter` para finalizar a criação do projeto;

## Execute o comando abaixo para executar o servidor:

```sh
npm run dev
```

- Podemos excluir alguns arquivos desnecessários como:
  - O README.md;
  - Os arquivos da pasta `/public/`;
  - O arquivo favicon.icon na pasta `/src/app/`;
  - Remover todo o código **MENOS OS IMPORTS** do arquivo `globals.css`;
  - Remover todo o código HTML do `return()` no arquivo `page.tsx`;

## Download plugin-tailwind

```sh
npm i prettier-plugin-tailwindcss -D
```

## Download lib de ícones

```sh
npm i lucide-react
```

## Download Axios

```sh
npm i axios
```

## Download JWT Decode

```sh
npm i jwt-decode
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

- Entrar no arquivo `tailwind.config.js` e alterar a linha `content: []` para `content: ["./App.tsx", "./app/**/*.tsx"],`;
- Entrar no arquivo `babel.config.js` e adicionar a linha `plugins: ["nativewind/babel"],` embaixo da linha do `presets`;
- Adicionar o código no compilerOptions do arquivo `tsconfig.json`;

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

## Download fontes:

```sh
npx expo install @expo-google-fonts/roboto @expo-google-fonts/bai-jamjuree expo-font
```

## Para suportar SVG:

- Inicialmente:

```sh
npx expo install react-native-svg
```

- Em seguida:

```sh
npm i react-native-svg-transformer -D
```

- Crie o arquivo `metro.config.js` na raiz do projeto;
- Em seguida adicione o código no arquivo:

```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

- Caso esteja utilizando TypeScript, adicione o código no arquivo `assets.d.ts` (caso não tenha, deve ser criado):

```ts
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

## Você pode reiniciar o servidor, limpando o cache com o comando:

```sh
npx expo start --clear
```

## Download Expo Auth Session:

```sh
npx expo install expo-auth-session expo-crypto
```

## Download Axios

```sh
npm i axios
```

## Download Expo Secure Store

```sh
npx expo install expo-secure-store
```

## Download Expo Router

```sh
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar react-native-gesture-handler
```
