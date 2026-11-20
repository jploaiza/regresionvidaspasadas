// Formulario de suscripción del portal.
// Envía el correo a la plataforma de newsletter de juanpabloloaiza.com (CORS autorizado),
// que guarda al suscriptor en la lista del portal y le manda un correo de confirmación.
const ENDPOINT = 'https://www.juanpabloloaiza.com/api/newsletter/subscribe';

export function setupNewsletter(formId: string, msgId: string, label = 'Suscribirse al Portal', source = 'portal') {
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
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, brand: 'rvp', source }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        msg.textContent = 'Revisa tu correo: te enviamos un enlace para confirmar tu suscripción.';
        msg.style.color = '#E6C875';
        input.value = '';
        btn.textContent = '✓ Revisa tu correo';
      } else {
        msg.textContent = data.error ?? 'No pudimos procesar tu suscripción. Inténtalo nuevamente.';
        msg.style.color = '#F0867B';
        btn.disabled = false;
        btn.textContent = label;
      }
    } catch {
      msg.textContent = 'Error de conexión. Inténtalo nuevamente.';
      msg.style.color = '#F0867B';
      btn.disabled = false;
      btn.textContent = label;
    }
  });
}
