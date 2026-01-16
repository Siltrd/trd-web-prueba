export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  try {
    // Body puede venir como string o como objeto
    const raw = req.body;
    const body = typeof raw === "string" ? JSON.parse(raw) : raw;

    const { name, email, message } = body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.CONTACT_TO;

    if (!apiKey || !from || !to) {
      return res.status(500).json({
        ok: false,
        error: "Missing env vars (RESEND_API_KEY / RESEND_FROM / CONTACT_TO)",
      });
    }

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `Nuevo contacto TDR — ${name}`,
        reply_to: email,
        text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      }),
    });

    const outText = await r.text();

    if (!r.ok) {
      // Acá queda el error real de Resend (ej: from not allowed)
      return res.status(500).json({ ok: false, error: outText });
    }

    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e?.message || "Server error" });
  }
}
