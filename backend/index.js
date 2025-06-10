// index.js - Backend antifraude
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Função que analisa o risco, ajusta as regras conforme achar melhor
function analisarRisco(dados) {
  let score = 0;
  if (dados.language && dados.language !== 'pt-BR') score += 2; // idioma estranho
  if (dados.screen && dados.screen.width < 800) score += 1; // tela pequena pode ser emulador
  if (dados.behavior && dados.behavior.length < 5) score += 2; // pouco movimento de mouse

  let status = 'allow';
  if (score >= 2) status = 'review';
  if (score >= 4) status = 'deny';
  return { status, score };
}

// Endpoint que o frontend chama
app.post('/identity/verify', (req, res) => {
  const resultado = analisarRisco(req.body);
  res.json(resultado);
});

app.listen(PORT, () => {
  console.log(`Backend antifraude rodando na porta ${PORT}`);
});
