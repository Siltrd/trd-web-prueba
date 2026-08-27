import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import styles from '../styles/header.module.css';
import logo from '../assets/images/tdr-logo.svg';

const Header = ({ isTestLayout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const location = useLocation();
  const navigate = useNavigate();

  /*
    Con la nueva navegación hay más elementos.
    Pasamos antes a hamburguesa para evitar
    comprimir logo + menú.
  */
  const isCompact = windowWidth <= 1100;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 1100) {
        setMenuOpen(false);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/');
    }

    closeMenu();
  };

  const goSoon = (titulo, detalle) => {
    navigate('/proximamente', {
      state: {
        titulo,
        detalle,
      },
    });

    closeMenu();
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
    closeMenu();
  };

  return (
    <header
      className={`${styles.header} ${
        scrolled ? styles.headerScrolled : ''
      }`}
      style={{
        backgroundColor:
          isTestLayout || scrolled
            ? '#ffffff'
            : 'transparent',
        boxShadow:
          scrolled || isTestLayout
            ? '0 4px 12px rgba(0, 0, 0, 0.08)'
            : 'none',
      }}
    >
      {/* LOGO */}
      <button
        type="button"
        className={styles.logoButton}
        onClick={handleInicioClick}
        aria-label="Ir al inicio"
      >
        <img
          src={logo}
          alt="TDR · Túnica de Realidad"
          className={styles.logoImage}
        />
      </button>

      {/* DESKTOP */}
      {!isCompact && (
        <nav
          className={styles.headerNav}
          aria-label="Navegación principal"
        >
          <button
            type="button"
            className={styles.navLink}
            onClick={handleIndividual}
          >
            1:1
          </button>

          <button
            type="button"
            className={styles.navLink}
            onClick={handlePrograms}
          >
            Programas
          </button>

          <button
            type="button"
            className={styles.navLink}
            onClick={handleExperiences}
          >
            Experiencias
          </button>

          <button
            type="button"
            className={styles.navLink}
            onClick={handleResources}
          >
            Recursos
          </button>

          <Link
            to="/sobre-mi"
            className={styles.navAnchor}
          >
            Sobre TDR
          </Link>

          <button
            type="button"
            className={styles.headerCta}
            onClick={handleResources}
          >
            Empezar gratis
          </button>
        </nav>
      )}

      {/* HAMBURGUESA */}
      {isCompact && (
        <button
          type="button"
          className={`${styles.menuHamburger} ${
            menuOpen ? styles.open : ''
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen
              ? 'Cerrar menú'
              : 'Abrir menú'
          }
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      )}

      {/* MENÚ COMPACTO */}
      {isCompact && (
        <div
          className={`${styles.menuMobileOverlay} ${
            menuOpen ? styles.open : styles.closed
          }`}
        >
          <nav
            className={styles.menuMobileNav}
            aria-label="Navegación móvil"
          >
            <button
              type="button"
              className={styles.menuLink}
              onClick={handleInicioClick}
            >
              Inicio
            </button>

            <button
              type="button"
              className={styles.menuLink}
              onClick={handleIndividual}
            >
              Acompañamiento 1:1
            </button>

            <button
              type="button"
              className={styles.menuLink}
              onClick={handlePrograms}
            >
              Programas
            </button>

            <button
              type="button"
              className={styles.menuLink}
              onClick={handleExperiences}
            >
              Experiencias
            </button>

            <button
              type="button"
              className={styles.menuLink}
              onClick={handleResources}
            >
              Recursos
            </button>

            <Link
              to="/sobre-mi"
              className={styles.mobileAnchor}
              onClick={closeMenu}
            >
              Sobre TDR
            </Link>

            <button
              type="button"
              className={styles.mobileCta}
              onClick={handleResources}
            >
              Empezar gratis
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;