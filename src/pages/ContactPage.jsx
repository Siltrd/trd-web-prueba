import React, { useState } from 'react';
import styles from '../styles/contact.module.css';  // Importar el CSS como módulo

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Marca el formulario como enviado

    // Aquí podrías integrar con Zoho Forms luego
    // o simular la respuesta por ahora con un mensaje automático

    alert('Gracias por ponerte en contacto. Te responderemos pronto. ¡Estás comenzando tu camino hacia la transformación!');
  };

  return (
    <section className={styles.contactPage}>  {/* Usamos styles.contactPage */}
      <div className={styles.contactContainer}>  {/* Usamos styles.contactContainer */}
        <h1>Comienza tu camino con TRD</h1>
        <p>
          Gracias por dar el primer paso hacia tu transformación. Déjanos tus datos y comparte cómo podemos ayudarte.
        </p>
        
        {!submitted ? (
          <form className={styles.contactForm} onSubmit={handleSubmit}>  {/* Usamos styles.contactForm */}
            <label htmlFor="name">¿Qué te trae a TRD?</label>
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

            <label htmlFor="message">¿En qué área deseas hacer un cambio?</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              required
            />

            <button type="submit" className={styles.btnPrincipal}>  {/* Usamos styles.btnPrincipal */}
              Inicia tu transformación
            </button>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>  {/* Usamos styles.thankYouMessage */}
            <h2>Gracias por ponerte en contacto con TRD</h2>
            <p>
              Estás comenzando tu viaje hacia un cambio real. Te responderemos pronto y estaremos aquí para
              apoyarte en cada paso del camino.
            </p>
            <p>
              Mientras tanto, si lo deseas, puedes unirte a nuestra comunidad para más recursos, apoyo y
              crecimiento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactPage;
