const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError(null);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (!data.ok) throw new Error(data.error || "No se pudo enviar");

    setSuccess(true); // acá mostrás tu tarjeta de “Gracias”
  } catch (err) {
    setError("No se pudo enviar. Probá por WhatsApp o reintentá.");
  } finally {
    setLoading(false);
  }
};
