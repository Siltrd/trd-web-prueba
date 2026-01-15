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

  const location = useLocation();
  const navigate = useNavigate();

  const isMobile = windowWidth <= 767;

  const handleScroll = () => setScrolled(window.scrollY > 0);

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

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleInicioClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    closeAllMenus();
  };

  const closeAllMenus = () => {
    setMenuOpen(false);
    setRecursosOpen(false);
    setProductosOpen(false);
  };

  // ✅ Navegación unificada a /proximamente (30%)
  const goSoon = (titulo, detalle) => {
    navigate('/proximamente', { state: { titulo, detalle } });
  };

  const handleSoonClick = (titulo, detalle) => (e) => {
    e.currentTarget.blur();
    goSoon(titulo, detalle);
    // en mobile además cierra overlays/menus
    closeAllMenus();
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      style={{
        backgroundColor: isTestLayout ? '#ffffff' : scrolled ? '#ffffff' : 'transparent',
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

      {/* Menú de escritorio / tablet horizontal */}
      {!isMobile && (
        <nav className={styles.headerNav}>
          <Link to="/tests">
            <button>Tests</button>
          </Link>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Accede a más recursos</button>
            <div className={styles.dropdownContent}>
              <button
                type="button"
                onClick={handleSoonClick(
                  'PDFs descargables',
                  'Estoy cerrando el MVP beta. Los PDFs descargables se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                )}
              >
                PDFs Descargables
              </button>

              <button
                type="button"
                onClick={handleSoonClick(
                  'Ejercicios',
                  'Estoy cerrando el MVP beta. Los ejercicios guiados se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                )}
              >
                Ejercicios
              </button>
            </div>
          </div>

          <div className={styles.dropdown}>
            <button className={styles.dropbtn}>Productos Premium</button>
            <div className={styles.dropdownContent}>
              <button
                type="button"
                onClick={handleSoonClick(
                  'Productos Premium',
                  'Estoy preparando la primera versión de productos premium. Si querés, empezá por el Test Dirección y luego vemos tu siguiente paso.'
                )}
              >
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
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      {/* Menú móvil */}
      {isMobile && (
        <div className={`${styles.menuMobileOverlay} ${menuOpen ? styles.open : styles.closed}`}>
          <nav className={styles.menuMobileNav}>
            <button className={styles.menuLink} onClick={handleInicioClick}>
              Inicio
            </button>

            <Link to="/tests" onClick={closeAllMenus}>
              <button className={styles.menuLink}>Tests</button>
            </Link>

            <div className={styles.dropdown}>
              <button className={styles.menuLink} onClick={() => setRecursosOpen(!recursosOpen)}>
                Accede a más recursos
              </button>
              {recursosOpen && (
                <div className={styles.dropdownContent}>
                  <button
                    type="button"
                    onClick={handleSoonClick(
                      'PDFs descargables',
                      'Estoy cerrando el MVP beta. Los PDFs descargables se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                    )}
                  >
                    PDFs Descargables
                  </button>

                  <button
                    type="button"
                    onClick={handleSoonClick(
                      'Ejercicios',
                      'Estoy cerrando el MVP beta. Los ejercicios guiados se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.'
                    )}
                  >
                    Ejercicios
                  </button>
                </div>
              )}
            </div>

            <div className={styles.dropdown}>
              <button className={styles.menuLink} onClick={() => setProductosOpen(!productosOpen)}>
                Productos Premium
              </button>
              {productosOpen && (
                <div className={styles.dropdownContent}>
                  <button
                    type="button"
                    onClick={handleSoonClick(
                      'Productos Premium',
                      'Estoy preparando la primera versión de productos premium. Si querés, empezá por el Test Dirección y luego vemos tu siguiente paso.'
                    )}
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
