function generarCodigo() {
  const fecha = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();

  return `BA-${fecha}-${random}`;
}

async function enviarEmail({ apiKey, from, to, subject, text, replyTo }) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      ...(replyTo ? { reply_to: replyTo } : {}),
      text,
    }),
  });

  const responseText = await response.text();

  if (!response.ok) {
    throw new Error(responseText);
  }

  return responseText;
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
      service,
      contractDate,
      reference,
      additionalInfo,
    } = body || {};

    if (!name || !email || !service || !contractDate) {
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

    const codigo = generarCodigo();
    const fechaRecepcion = new Date().toISOString();

    const mensajeInterno = `
NUEVA SOLICITUD DE BAJA DE SERVICIO

Código: ${codigo}
Fecha de recepción: ${fechaRecepcion}

Nombre y apellido: ${name}
Email: ${email}
Servicio contratado: ${service}
Fecha aproximada de contratación: ${contractDate}
Referencia: ${reference || 'No informada'}

Información adicional:
${additionalInfo || 'No informada'}
`.trim();

    const confirmacionUsuario = `
Tunica de Realidad — TDR

Hemos recibido tu solicitud de baja de servicio.

Código de trámite: ${codigo}

Datos recibidos:
Nombre y apellido: ${name}
Servicio: ${service}
Fecha aproximada de contratación: ${contractDate}
Referencia: ${reference || 'No informada'}

Conserva este código para identificar la solicitud en cualquier comunicación relacionada con el trámite.

TDR verificará el servicio contratado, su estado y las condiciones aplicables antes de confirmar los efectos de la baja.

Este correo confirma únicamente la recepción de la solicitud.
`.trim();

    await enviarEmail({
      apiKey,
      from,
      to,
      subject: `Baja de servicio TDR — ${codigo} — ${name}`,
      text: mensajeInterno,
      replyTo: email,
    });

    let confirmationSent = true;

    try {
      await enviarEmail({
        apiKey,
        from,
        to: email,
        subject: `Solicitud de baja recibida — ${codigo}`,
        text: confirmacionUsuario,
      });
    } catch (confirmationError) {
      confirmationSent = false;

      console.error(
        'La solicitud de baja fue recibida por TDR, pero falló el correo de confirmación:',
        confirmationError
      );
    }

    return res.status(200).json({
      ok: true,
      codigo,
      confirmationSent,
    });

  } catch (error) {
    console.error('Error baja de servicio:', error);

    return res.status(500).json({
      ok: false,
      error: error?.message || 'Server error',
    });
  }
}