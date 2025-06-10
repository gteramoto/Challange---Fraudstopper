# FraudStopper – SDK Antifraude Simples

O **FraudStopper** é um sistema didático criado para demonstrar como funciona a análise antifraude em logins e acessos, usando coleta de dados do navegador e análise de comportamento.  
Esse projeto faz parte de um desafio da FIAP, mas serve como exemplo prático de como proteger autenticações de maneira leve e transparente para o usuário.

---

## O que o FraudStopper faz?

- Coleta dados técnicos do navegador (idioma, resolução, sistema, etc)
- Monitora o comportamento do usuário (movimento do mouse)
- Envia esses dados para um backend Node.js
- Analisa o risco de fraude de acordo com regras simples (ajustáveis)
- Informa automaticamente se o acesso deve ser **permitido**, **revisado** ou **negado**

---

## Instalação e Execução

**Pré-requisitos:**  
- Node.js instalado (versão recomendada: 18.x ou superior)  
- npm (vem junto com o Node.js)

**Passo a passo:**

### 1. Baixe o projeto e crie as pastas conforme:
SDK-ANTIFRAUDE-CHALLENGE/
├── backend/
│ ├── index.js
│ ├── package.json
│ ├── iniciar-backend.bat
├── frontend/
│ ├── package.json
│ ├── vite.config.js
│ ├── index.html
│ └── src/
│ ├── App.jsx
│ ├── antifraude-sdk.js
│ └── main.jsx


### 2. Instale as dependências

**Backend:**
```sh
cd backend
npm install

3. Rode o sistema

Inicie o backend:
Dê dois cliques em iniciar-backend.bat na pasta backend (vai pedir permissão de administrador).

Inicie o frontend:
No terminal da pasta frontend:

npm run dev

- Como usar

Preencha usuário e senha (qualquer valor).

Movimente o mouse antes de clicar em “Entrar”.

Veja o resultado automático do FraudStopper:

ALLOW = acesso liberado

REVIEW = acesso suspeito, para revisão

DENY = acesso bloqueado (fraude detectada)

Simule riscos mudando o idioma do navegador, não mexendo o mouse, ou usando tela pequena.


 Sobre o código:

Backend em Node.js/Express: faz toda a lógica de risco.

Frontend em React, criado com Vite.

SDK próprio, leve, apenas coleta e envia dados.

Códigos e comentários em português, bem simples de entender.

Não precisa de banco de dados, funciona 100% local.


https://youtu.be/ayYz3uyUMvo

