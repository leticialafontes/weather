# 🌤️ Weather App (Terminal)

Um aplicativo simples de **clima em TypeScript** que permite buscar a temperatura atual de uma cidade diretamente pelo **terminal**, utilizando a [Open-Meteo API](https://open-meteo.com/).
O App é um projeto com a finalizadade de estudo do módulo de IA 
---

## 📦 Tecnologias utilizadas

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Open-Meteo API](https://open-meteo.com/) (geocoding + forecast)

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/weather-app.git
cd weather-app
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Compilar o código TypeScript

```bash
npm run build
```

### 4. Executar o app

```bash
npm start "Local que deseja saber"
```

---

## 📌 Exemplo de uso

```bash
$ npm start "São Paulo"
🌤️ A temperatura atual em São Paulo é 25°C
```

## ✅ Exemplo de cidades válidas

* `"São Paulo"`
* `"Rio de Janeiro"`
* `"New York"`
* `"Tokyo"`

---

## 📖 Observações

* É necessário ter **Node.js v18+** (ou instalar `node-fetch` caso use versão mais antiga).
* O projeto já está configurado para usar `@types/node` e `tsconfig.json` com suporte a Node.

---

