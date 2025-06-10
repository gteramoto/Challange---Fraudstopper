// antifraude-sdk.js - Captura infos do user e envia pro backend

// Pega dados básicos do navegador
export function coletarFingerprint() {
  return {
    userAgent: navigator.userAgent,
    language: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
    },
    platform: navigator.platform,
  };
}

// Só registra movimento do mouse por enquanto
export function monitorarMouse() {
  let movimentos = [];
  // Talvez adicionar touch pra mobile depois
  const handler = e => movimentos.push({ x: e.clientX, y: e.clientY, t: Date.now() });
  window.addEventListener('mousemove', handler);

  // Remove depois que usar pra não acumular evento
  return () => {
    window.removeEventListener('mousemove', handler);
    return movimentos;
  };
}

// Faz a requisição pro backend
export async function mandarParaBackend(dados) {
  const resp = await fetch('http://localhost:4000/identity/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
  return await resp.json();
}
