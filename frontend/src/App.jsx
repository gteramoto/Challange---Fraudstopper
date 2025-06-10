import React, { useRef, useState } from 'react';
import { coletarFingerprint, monitorarMouse, mandarParaBackend } from './antifraude-sdk';

function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  // Mouse
  const getMovimentos = useRef(monitorarMouse());

  async function handleSubmit(e) {
    e.preventDefault();
    setCarregando(true);

    const fingerprint = coletarFingerprint();
    const movimentos = getMovimentos.current();
    const dados = {
      ...fingerprint,
      behavior: movimentos
    };
    const resp = await mandarParaBackend(dados);
    setResultado(resp);
    setCarregando(false);
  }

  return (
    <div style={{
      maxWidth: 400,
      margin: '40px auto',
      fontFamily: 'sans-serif',
      border: '1px solid #ddd',
      padding: 24,
      borderRadius: 16,
      background: '#18181b'
    }}>
      <h2 style={{ color: '#fff', marginBottom: 24 }}>
        FraudStopper – Login Seguro
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={e => setLogin(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: 16,
            padding: 8,
            borderRadius: 4,
            border: '1px solid #333',
            background: '#222',
            color: '#fff'
          }}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value)}
          style={{
            display: 'block',
            width: '100%',
            marginBottom: 16,
            padding: 8,
            borderRadius: 4,
            border: '1px solid #333',
            background: '#222',
            color: '#fff'
          }}
          required
        />
        <button
          type="submit"
          disabled={carregando}
          style={{
            width: '100%',
            padding: 12,
            background: '#0366d6',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontWeight: 'bold',
            fontSize: 16
          }}
        >
          {carregando ? 'Validando...' : 'Entrar'}
        </button>
      </form>
      {resultado && (
        <div style={{
          marginTop: 32,
          padding: 16,
          borderRadius: 8,
          background: '#f5f5f5',
          color: '#ccc',
          fontWeight: 'bold',
          fontSize: 13
        }}>
          <strong>Status:</strong> {resultado.status.toUpperCase()} <br />
          <strong>Score de Risco:</strong> {resultado.score}
        </div>
      )}
      <div style={{
        marginTop: 32,
        color: '#ccc',
        fontSize: 13
      }}>
          Sistema FraudStopper ativo – movimente o mouse antes de logar para simular comportamento legítimo.
      </div>
    </div>
  );
}

export default App;
