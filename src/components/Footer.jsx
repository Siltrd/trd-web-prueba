import React from 'react';
import {
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import styles from '../styles/footer.module.css';
import logo from '../assets/images/tdr-logo.svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
    }
  };

  const goSoon = (titulo, detalle) => {
    navigate('/proximamente', {
      state: {
        titulo,
        detalle,
      },
    });
  };

  const handleIndividual = () => {
    goSoon(
      'Acompañamiento individual',
      'La propuesta de acompañamiento individual está siendo actualizada. Próximamente podrás consultar modalidades y disponibilidad.'
    );
  };

  const handlePrograms = () => {
    goSoon(
      'Programas TDR',
      'Estoy desarrollando los primeros programas de TDR. Próximamente encontrarás aquí nuevas propuestas.'
    );
  };

  const handleExperiences = () => {
    goSoon(
      'Experiencias TDR',
      'Estoy desarrollando las primeras experiencias de TDR. Próximamente encontrarás aquí fechas y formatos.'
    );
  };

  const handleResources = () => {
    navigate('/tests');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img
          src={logo}
          alt="TDR Tunica de Realidad"
        />
      </div>

      <nav
        className={styles.footerNav}
        aria-label="Navegación del pie de página"
      >
        <button
          type="button"
          className={styles.footerButton}
          onClick={handleInicioClick}
        >
          Inicio
        </button>

        <button
          type="button"
          className={styles.footerButton}
          onClick={handleIndividual}
        >
          1:1
        </button>

        <button
          type="button"
          className={styles.footerButton}
          onClick={handlePrograms}
        >
          Programas
        </button>

        <button
          type="button"
          className={styles.footerButton}
          onClick={handleExperiences}
        >
          Experiencias
        </button>

        <button
          type="button"
          className={styles.footerButton}
          onClick={handleResources}
        >
          Recursos
        </button>

        <Link
          to="/sobre-mi"
          className={styles.footerLink}
        >
          Sobre TDR
        </Link>

        <Link
          to="/contacto"
          className={styles.footerLink}
        >
          Contacto
        </Link>

        <Link
          to="/ayuda"
          className={styles.footerHelp}
        >
          Ayuda y atención
        </Link>
      </nav>

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

      <nav
        className={styles.legalNav}
        aria-label="Documentación legal"
      >
        <Link to="/terminos-y-condiciones">
          Términos y Condiciones
        </Link>

        <Link to="/privacidad">
          Privacidad
        </Link>

        <Link to="/cookies">
          Cookies
        </Link>

        <Link to="/reservas-cancelaciones-devoluciones">
          Reservas y devoluciones
        </Link>

        <Link
          to="/arrepentimiento"
          className={styles.legalAction}
        >
          Arrepentimiento
        </Link>

        <Link
          to="/baja-de-servicio"
          className={styles.legalAction}
        >
          Baja de servicio
        </Link>
      </nav>

      <p className={styles.copyright}>
        © 2026 TDR Tunica de Realidad. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;