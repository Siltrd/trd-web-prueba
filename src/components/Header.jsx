import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css';
import logo from '../assets/images/tdr-logo.svg';

const Header = ({ isTestLayout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [recursosOpen, setRecursosOpen] = useState(false);
  const [productosOpen, setProductosOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado simulado de autenticación

  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth > 767 && windowWidth <= 1024;

  const handleScroll = () => {
    setScrolled(window.scrollY > 0); // Cambia a `true` si el scroll es mayor a 0
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);

    if (window.innerWidth > 1024) {
      setMenuOpen(false);
      setRecursosOpen(false);
      setProductosOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      style={{
        backgroundColor: isTestLayout ? '#ffffff' : (scrolled ? '#ffffff' : 'transparent'),
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        padding: '1rem 2rem',
        zIndex: 100,
        boxShadow: scrolled || isTestLayout ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <div className={styles.logo} onClick={handleInicioClick} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="TDR Logo" />
      </div>

      {/* Menú de escritorio y tablet horizontal */}
      {!isMobile && (
        <nav className={styles.headerNav}>
          <Link to="/sobre-mi"><button>Sobre mí</button></Link>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Accede a más recursos</button>
            <div className={styles.dropdownContent}>
              <Link to="/otros-tests">Tests Gratuitos</Link>
              <a href="#" onClick={(e) => e.preventDefault()}>PDFs Descargables</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Ejercicios</a>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Productos Premium</button>
            <div className={styles.dropdownContent}>
              <button onClick={() => alert('¡Productos Premium próximamente disponible!')}>
                Próximamente
              </button>
            </div>
          </div>

          
        </nav>
      )}

      {/* Icono hamburguesa solo en móvil */}
      {isMobile && (
        <div
          className={`${styles.menuHamburger} ${menuOpen ? styles.open : ''}`}
          onClick={toggleMenu}
        >
          <div></div><div></div><div></div>
        </div>
      )}

      {/* Menú móvil funcional */}
      {isMobile && (
        <div className={`${styles.menuMobileOverlay} ${menuOpen ? styles.open : styles.closed}`}>
          <nav className={styles.menuMobileNav}>
            <button className={styles.menuLink} onClick={handleInicioClick}>Inicio</button>

            <Link to="/sobre-mi" onClick={() => setMenuOpen(false)}>
              <button className={styles.menuLink}>Sobre mi</button>
            </Link>

            <div className={styles.dropdown}>
              <button
                className={styles.menuLink}
                onClick={() => setRecursosOpen(!recursosOpen)}
              >
                Recursos Gratuitos
              </button>
              {recursosOpen && (
                <div className={styles.dropdownContent}>
                  <Link to="/otros-tests" onClick={() => setMenuOpen(false)}>
                    Tests Gratuitos
                  </Link>
                  <a href="#" onClick={(e) => e.preventDefault()}>PDFs Descargables</a>
                  <a href="#" onClick={(e) => e.preventDefault()}>Ejercicios</a>
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button
                className={styles.menuLink}
                onClick={() => setProductosOpen(!productosOpen)}
              >
                Productos Premium
              </button>
              {productosOpen && (
                <div className={styles.dropdownContent}>
                  <button
                    onClick={() => {
                      alert('¡Productos Premium próximamente disponible!');
                      setMenuOpen(false);
                    }}
                  >
                    Próximamente
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
