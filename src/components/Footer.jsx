import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import styles from '../styles/footer.module.css';
import logo from '../assets/images/tdr-logo.svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <footer className={styles.footer}>
      {/* Logo en el margen izquierdo */}
      <div className={styles.footerLogo}>
        <img src={logo} alt="TDR Logo" />
      </div>

      <div className={styles.footerNav}>
        <button className={styles.footerButton} onClick={handleInicioClick}>Inicio</button>
        <Link to="/sobre-mi"><button className={styles.footerButton}>Sobre mí</button></Link>

        {/* Botón "Recursos Gratuitos" con toggle */}
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => toggleDropdown('recursos')}
            aria-expanded={openDropdown === 'recursos'}
            aria-controls="recursosDropdown"
          >
            Accede a más recursos
          </button>
          {openDropdown === 'recursos' && (
            <div id="recursosDropdown" className={styles.dropdownContent}>
              <Link to="/otros-tests" onClick={() => setOpenDropdown(null)}>Tests Gratuitos</Link>
              <a href="#" onClick={(e) => { e.preventDefault(); setOpenDropdown(null); }}>PDFs Descargables</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setOpenDropdown(null); }}>Ejercicios</a>
            </div>
          )}
        </div>

        {/* Botón "Productos Premium" con toggle */}
        <div className={styles.dropdown}>
          <button
            className={styles.dropbtn}
            onClick={() => toggleDropdown('premium')}
            aria-expanded={openDropdown === 'premium'}
            aria-controls="premiumDropdown"
          >
            Productos Premium
          </button>
          {openDropdown === 'premium' && (
            <div id="premiumDropdown" className={styles.dropdownContent}>
              <button
                onClick={() => {
                  alert('¡Productos Premium próximamente disponible!');
                  setOpenDropdown(null);
                }}
              >
                Próximamente
              </button>
            </div>
          )}
        </div>

        <Link to="/contacto"><button className={styles.footerButton}>Contacto</button></Link>
      </div>

      <div className={styles.whatsappFooter}>
        <a
          href="https://wa.me/5491157041750?text=Hola,%20quisiera%20más%20información%20sobre%20TDR"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </div>

      <p>© 2025 TDR - Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
