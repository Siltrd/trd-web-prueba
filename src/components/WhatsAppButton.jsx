import React from 'react';
import styles from '../styles/whatsapp.module.css';  // Importar como CSS Modules

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491157041750?text=Hola%2C%20quisiera%20más%20información%20sobre%20TDR"
      className={styles.whatsappButton}  // Usar styles.whatsappButton
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <span>💬</span>
    </a>
  );
};

export default WhatsAppButton;
