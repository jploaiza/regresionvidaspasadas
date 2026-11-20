// Formulario de suscripción: envía el correo a /api/subscribe (Resend).
// Lo usan la portada y los artículos.
export function setupNewsletter(formId: string, msgId: string, label = 'Suscribirse al Portal') {
  const form = document.getElementById(formId) as HTMLFormElement | null;
  const msg = document.getElementById(msgId) as HTMLElement | null;
  if (!form || !msg) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]') as HTMLInputElement | null;
    const btn = form.querySelector('button') as HTMLButtonElement | null;
    const email = input?.value.trim();
    if (!input || !btn || !email) return;

    btn.disabled = true;
    btn.textContent = 'Enviando…';
    msg.textContent = '';

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        msg.textContent = data.message ?? '¡Suscrito!';
        msg.style.color = '#E6C875';
        input.value = '';
        btn.textContent = '✓ Suscrito';
      } else {
        msg.textContent = data.error === 'Server not configured'
          ? 'El boletín no está disponible por ahora. Inténtalo más tarde.'
          : (data.error ?? 'Error. Inténtalo nuevamente.');
        msg.style.color = '#F0867B';
        btn.disabled = false;
        btn.textContent = label;
      }
    } catch {
      msg.textContent = 'Error de conexión.';
      msg.style.color = '#F0867B';
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}
