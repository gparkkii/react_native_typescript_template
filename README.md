# 📘 Tutorial

<br/>

## 💌 Quick Start

```zsh
$ react-native init project-name
```

---

## Add TypeScript to React Native

[React-Native 공식문서 참조](https://reactnative.dev/docs/next/typescript)

### 1. Install TypeScript and the types for React Native

```zsh
$ npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

### 2. Create a TypeScript config file

Create a `tsconfig.json`file in the root of your project:

```text
// tsconfig.json

{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

### 3. Create a jest.config.js file

Create a jest.config.js file to configure Jest to use TypeScript

```text
// jest.config.js

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

### 4. Rename _.js file to _.tsx

> 루트 디렉토리의 `./index.js` 파일은 건들면 안된다. build 과정에서 문제가 생길 수도 있다.

```text
App.js => App.tsx
```

---

## Eslint Setting

> React Native에 ESLint가 내장되어있다. ESLint 설정만 세팅해주기

[React Native에서 ESLint, Prettier를 프로처럼 사용하기](https://dev-yakuza.posstree.com/ko/react-native/eslint-prettier-husky-lint-staged/)

### 1. ESLint 초기 설정

```zsh
$ npx eslint --init

? How would you like to use ESLint? (Use arrow keys)
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? (Use arrow keys)
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? (Use arrow keys)
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? (Y/N) // Y

? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◯ Browser
❯◉ Node

? How would you like to define a style for your project? (Use arrow keys)
  Use a popular style guide
❯ Answer questions about your style
  Inspect your JavaScript file(s)

? What format do you want your config file to be in? (Use arrow keys)
❯ JavaScript
  YAML
  JSON

? What style of indentation do you use? (Use arrow keys)
❯ Tabs
  Spaces

? What quotes do you use for strings? (Use arrow keys)
  Double
❯ Single

? What line endings do you use? (Use arrow keys)
❯ Unix
  Windows

? Do you require semicolons? (Y/N) // Y

------------------------------------------

The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration .
Successfully created .eslintrc.js file in /Users/jeonghean_kim/projects/poma_app

```

### 2. 설정에 필요한 추가 플러그인 섩치

```text
npm install -D eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks
```

### 3. eslintrc.js 파일 수정

```text
// eslintrc.js

module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

```

### 4. Script 수정

```text
// package.json

"scripts": {

    ...

    "lint": "eslint --ext .tsx --ext .ts src/"
},
```

### 5. ESLint 실행

```zsh
$ npm run lint
```

## 🚨 에러노트

### Parsing Error

`npm run lint` 작동시 아래 에러가 발생하고 타입스크립트 린터가 적용이 되지 않는 이슈

```
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file must be included in at least one of the projects provided
```

[ESLint Plugin TypeScript github 문서 참조](https://github.com/typescript-eslint/typescript-eslint/blob/HEAD/docs/getting-started/linting/TYPED_LINTING.md#i-get-errors-telling-me-the-file-must-be-included-in-at-least-one-of-the-projects-provided)

### Solved

루트 디렉토리에 `.eslintignore` 파일 생성 후 해당 코드 붙여넣기

```text
// .eslintignore

# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist
# don't lint nyc coverage output
coverage

**/*.js
/root/src/*.js
```

---

## Prettier 세팅

### Install Prettier

```text
$ npm install -D prettier eslint-plugin-prettier
```

### Prettierrc 설정

```text
// .prettierrc.js

module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  semi: true,
  bracketSpacing: true,
  useTabs: false,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 80,
  endOfLine: 'auto',
};
```

### ESLint에 Prettier 설정

> Plugins의 맨 뒤에 Prettier를 넣어줘야 적용이됨

```text
// eslintrc.js

module.exports = {

  ...

  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],

  rules: {
    'prettier/prettier': 'error',

    ...


  },
};
```

### Script 설정

```text
// package.json

{
  ...
  "scripts": {
    ...
    "format": "prettier --check ./src",
    ...
  },
  ...
}
```

---

## 절대경로 설정

```text
// tsconfig.json

{
  "compilerOptions": {

    ...

    "target": "esnext",
    "baseUrl": ".",
    "paths": {
      "*": ["src/*"],
      "components/*": ["src/components/*"],
      "screens/*": ["src/components/*"]

      ...

    }
  },
```

---
