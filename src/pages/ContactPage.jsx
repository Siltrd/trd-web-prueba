import React, { useState } from 'react';
import styles from '../styles/contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.ok) {
        throw new Error(data.error || 'No se pudo enviar el mensaje');
      }

      setSubmitted(true);
    } catch {
      setError(
        'No se pudo enviar el mensaje en este momento. Puedes escribirnos por WhatsApp o intentarlo nuevamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <h1>Comienza tu camino con TDR</h1>

        <p>
          Gracias por dar el primer paso hacia tu transformación. Déjanos tus
          datos y comparte cómo podemos ayudarte.
        </p>

        {!submitted ? (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="name">¿Qué te trae a TDR?</label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Compártenos tu motivo"
              required
            />

            <label htmlFor="email">¿Cómo te podemos contactar?</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              required
            />

            <label htmlFor="message">
              ¿En qué área deseas hacer un cambio?
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              required
            />

            {error && (
              <p className={styles.errorMessage}>{error}</p>
            )}

            <button
              type="submit"
              className={styles.btnPrincipal}
              disabled={loading}
            >
              {loading ? 'Enviando…' : 'Inicia tu transformación'}
            </button>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h2>Gracias por ponerte en contacto con TDR</h2>

            <p>
              Estás comenzando tu viaje hacia un cambio real. Te responderemos
              pronto y estaremos aquí para apoyarte en cada paso del camino.
            </p>

            <p>
              Si lo prefieres, también puedes escribirnos directamente por
              WhatsApp.
            </p>

            <a
              href="https://wa.me/5491157041750?text=Hola,%20me%20contact%C3%A9%20desde%20la%20web%20TDR"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              💬 Escribir por WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;