import React, { useState, useEffect } from 'react';
import logo from '../assets/images/trd-logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Para controlar apertura real
  const [showDropdown, setShowDropdown] = useState(false); // Para transición suave

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false); // cerrar dropdown al abrir menú
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  // Efecto de transición suave en cierre del dropdown
  useEffect(() => {
    if (dropdownOpen) {
      setShowDropdown(true);
    } else {
      const timer = setTimeout(() => {
        setShowDropdown(false);
      }, 300); // duración igual a CSS
      return () => clearTimeout(timer);
    }
  }, [dropdownOpen]);

  // Agrega clase scrolled al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra menú si se agranda pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header role="banner">
      <div className="logo">
        <img src={logo} alt="Logo TRD" width="250" height="100" />
      </div>

      {/* Menú hamburguesa */}
      <div
        className={`menu-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={handleMenuToggle}
        aria-expanded={menuOpen}
        aria-controls="menu"
        aria-label="Abrir menú"
        role="button"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú escritorio */}
      <nav className="header-nav" role="navigation">
        <button className="menu-link">Botón 1</button>
        <button className="menu-link">Botón 2</button>
        <button className="menu-link">Botón 3</button>
        <div className="dropdown">
          <button
            className="menu-link dropdown-toggle"
            onClick={(e) => {
              e.stopPropagation();
              handleDropdownToggle();
            }}
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            
            Botón Desplegable
            <span className="dropdown-arrow">▼</span> {/* Aquí agregamos la flecha como parte del botón */}
          </button>
          {showDropdown && (
            <div className={`dropdown-content ${dropdownOpen ? 'dropdown-animated' : 'dropdown-hide'}`}>
              <a href="#">Opción 1</a>
              <a href="#">Opción 2</a>
              <a href="#">Opción 3</a>
            </div>
          )}
        </div>
      </nav>

      {/* Menú mobile */}
      <div className={`menu-mobile-overlay ${menuOpen ? 'open' : 'closed'}`}>
        <nav className="menu-mobile-nav" role="navigation">
          <button className="menu-link">Botón 1</button>
          <button className="menu-link">Botón 2</button>
          <button className="menu-link">Botón 3</button>

          <div className="dropdown">
            <button
              className="menu-link dropdown-toggle"
              onClick={(e) => {
                e.stopPropagation();
                handleDropdownToggle();
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Botón Desplegable
            </button>

            {showDropdown && (
              <div className={`dropdown-content ${dropdownOpen ? 'dropdown-animated' : 'dropdown-hide'}`}>
                <a href="#">Opción 1</a>
                <a href="#">Opción 2</a>
                <a href="#">Opción 3</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
