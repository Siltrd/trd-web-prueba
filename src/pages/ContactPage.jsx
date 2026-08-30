import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch {
      setError(
        'No se pudo enviar el mensaje en este momento. Intenta nuevamente o escribe a contacto@tunicaderealidad.com.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactPage}>
      <div className={styles.contactContainer}>
        <h1>Contacto</h1>

        <p>
          Si tienes una consulta sobre TDR, sus servicios o una contratación,
          puedes escribirnos mediante este formulario.
        </p>

        {!submitted ? (
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">
              Nombre y apellido *
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombre y apellido"
              required
            />

            <label htmlFor="email">
              Correo electrónico *
            </label>

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
              Mensaje *
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu consulta"
              required
            />

            <p>
              No incluyas datos sensibles que no sean necesarios para
              responder tu consulta.
            </p>

            <p>
              Los datos enviados mediante este formulario se utilizarán para
              gestionar y responder tu consulta. Los campos marcados con * son
              necesarios. Puedes consultar más información sobre el tratamiento
              de tus datos y el ejercicio de tus derechos en nuestra{' '}
              <Link to="/privacidad">
                Política de Privacidad
              </Link>.
            </p>

            {error && (
              <p className={styles.errorMessage}>
                {error}
              </p>
            )}

            <button
              type="submit"
              className={styles.btnPrincipal}
              disabled={loading}
            >
              {loading ? 'Enviando…' : 'Enviar consulta'}
            </button>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h2>Mensaje enviado</h2>

            <p>
              Hemos recibido tu consulta. Te responderemos por correo
              electrónico dentro del horario de atención.
            </p>

            <p>
              Horario de atención: lunes a viernes de 10:00 a 18:00,
              excepto feriados nacionales.
            </p>

            <p>
              También puedes escribir directamente a{' '}
              <a href="mailto:contacto@tunicaderealidad.com">
                contacto@tunicaderealidad.com
              </a>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;