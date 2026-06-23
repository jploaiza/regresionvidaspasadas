// Vercel Serverless Function — POST /api/subscribe
export const config = { runtime: 'edge' };

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return new Response(JSON.stringify({ error: 'Server not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let email;
  try {
    const body = await req.json();
    email = body.email?.trim().toLowerCase();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return new Response(JSON.stringify({ error: 'Email inválido' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    // 409 = ya suscrito → OK igualmente
    if (res.status === 409) {
      return new Response(JSON.stringify({ ok: true, message: 'Ya estabas suscrito' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: err.message ?? 'Error al suscribir' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true, message: '¡Suscrito correctamente!' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
