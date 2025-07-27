import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from '../styles/footer.module.css'; // Importar CSS como módulo
import logo from '../assets/images/trd-logo.svg'; // Importa el logo

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      navigate('/');
    }
  };

  return (
    <footer className={styles.footer}>
      {/* Logo en el margen izquierdo */}
      <div className={styles.logo}>
        <img src={logo} alt="TRD Logo" />
      </div>

      <div className={styles.footerNav}>
        <button className={styles.footerButton} onClick={handleInicioClick}>Inicio</button>
        <Link to="/test"><button className={styles.footerButton}>Test</button></Link>
        <button className={styles.footerButton}>Recursos</button>
        <Link to="/contacto"><button className={styles.footerButton}>Contacto</button></Link>
      </div>

      <div className={styles.whatsappFooter}>
        <a
          href="https://wa.me/5491157041750?text=Hola,%20quisiera%20más%20información%20sobre%20TRD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </div>

      <p>© 2025 TRD - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
