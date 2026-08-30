function obtenerFechaRecepcionArgentina() {
  return new Intl.DateTimeFormat('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    dateStyle: 'short',
    timeStyle: 'medium',
    hour12: false,
  }).format(new Date());
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      ok: false,
      error: 'Method not allowed',
    });
  }

  try {
    const raw = req.body;
    const body = typeof raw === 'string' ? JSON.parse(raw) : raw;

    const {
      name,
      email,
      message,
    } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: 'Missing fields',
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !from || !to) {
      return res.status(500).json({
        ok: false,
        error:
          'Missing env vars (RESEND_API_KEY / RESEND_FROM / CONTACT_TO)',
      });
    }

    const fechaRecepcionArgentina =
      obtenerFechaRecepcionArgentina();

    const text = `
NUEVO CONTACTO TDR

Fecha de recepción: ${fechaRecepcionArgentina}

Nombre y apellido: ${name}
Email: ${email}

Mensaje:
${message}
`.trim();

    const response = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to: [to],
          subject: `Nuevo contacto TDR — ${name}`,
          reply_to: email,
          text,
        }),
      }
    );

    const responseText = await response.text();

    if (!response.ok) {
      return res.status(500).json({
        ok: false,
        error: responseText,
      });
    }

    return res.status(200).json({
      ok: true,
    });
  } catch (error) {
    console.error('Error contacto:', error);

    return res.status(500).json({
      ok: false,
      error: error?.message || 'Server error',
    });
  }
}