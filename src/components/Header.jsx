import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css';
import logo from '../assets/images/trd-logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = () => {
    setScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.logo} onClick={handleInicioClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="TRD Logo" />
      </div>

      {/* Menú escritorio */}
      <nav className={styles.headerNav}>
        <button onClick={handleInicioClick}>Inicio</button>
        <Link to="/fundadora"><button>Fundadora</button></Link>
        <Link to="/test"><button>Test</button></Link>

        <div className={styles.dropdown}>
          <button>Recursos</button>
          <div className={styles.dropdownContent}>
            <a href="#">PDF descargables</a>
            <a href="#">Ejercicios</a>
          </div>
        </div>

        <Link to="/contacto"><button>Contacto</button></Link>
      </nav>

      {/* Menú hamburguesa (mobile) */}
      <div
        className={`${styles.menuHamburger} ${menuOpen ? styles.open : ''}`}
        onClick={toggleMenu}
      >
        <div></div><div></div><div></div>
      </div>

      {/* Menú móvil */}
      <div className={`${styles.menuMobileOverlay} ${menuOpen ? styles.open : styles.closed}`}>
        <nav className={styles.menuMobileNav}>
          <button className={styles.menuLink} onClick={() => { handleInicioClick(); toggleMenu(); }}>
            Inicio
          </button>
          <Link to="/fundadora" onClick={toggleMenu}>
            <button className={styles.menuLink}>Fundadora</button>
          </Link>
          <Link to="/test" onClick={toggleMenu}>
            <button className={styles.menuLink}>Test</button>
          </Link>

          <div className={styles.dropdown}>
            <button className={styles.menuLink}>Recursos</button>
            <div className={styles.dropdownContent}>
              <a href="#">PDF descargables</a>
              <a href="#">Ejercicios</a>
            </div>
          </div>

          <Link to="/contacto" onClick={toggleMenu}>
            <button className={styles.menuLink}>Contacto</button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
