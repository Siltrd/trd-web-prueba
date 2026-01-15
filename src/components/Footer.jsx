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

  // ✅ Unificado: todo lo no disponible → /proximamente
  const goSoon = (titulo, detalle) => {
    navigate('/proximamente', { state: { titulo, detalle } });
    setOpenDropdown(null);
  };

  const handleSoonClick = (titulo, detalle) => (e) => {
    e.currentTarget.blur();
    goSoon(titulo, detalle);
  };

  return (
    <footer className={styles.footer}>
      {/* Logo izquierda */}
      <div className={styles.footerLogo}>
        <img src={logo} alt="TDR Logo" />
      </div>

      <div className={styles.footerNav}>
        <button className={styles.footerButton} onClick={handleInicioClick}>
          Inicio
        </button>

        <Link to="/sobre-mi">
          <button className={styles.footerButton}>Sobre mí</button>
        </Link>

        {/* Recursos */}
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
              {/* ✅ Links correctos */}
              <Link to="/test-direccion" onClick={() => setOpenDropdown(null)}>
                Test Dirección
              </Link>
              <Link to="/test-discurso" onClick={() => setOpenDropdown(null)}>
                Test Discurso
              </Link>

              {/* ✅ 30%: Próximamente */}
              <button
                type="button"
                onClick={handleSoonClick(
                  'PDFs descargables',
                  'Estoy cerrando el MVP beta. Los PDFs descargables se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                )}
                className={styles.dropdownButton}
              >
                PDFs Descargables
              </button>

              <button
                type="button"
                onClick={handleSoonClick(
                  'Ejercicios',
                  'Estoy cerrando el MVP beta. Los ejercicios guiados se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                )}
                className={styles.dropdownButton}
              >
                Ejercicios
              </button>
            </div>
          )}
        </div>

        {/* Premium */}
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
                type="button"
                onClick={handleSoonClick(
                  'Productos Premium',
                  'Estoy preparando la primera versión de productos premium. Si querés, empezá por el Test Dirección y luego vemos tu siguiente paso.'
                )}
                className={styles.dropdownButton}
              >
                Próximamente
              </button>
            </div>
          )}
        </div>

        <Link to="/contacto">
          <button className={styles.footerButton}>Contacto</button>
        </Link>
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
