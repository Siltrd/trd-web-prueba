// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import '../styles/header.css'; // Ruta y nombre según corresponda
import logo from '../assets/images/trd-logo.svg'; // Ajusta la ruta si es necesario


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="TRD Logo" />
      </div>

      {/* Menú escritorio */}
      <nav className="header-nav">
        <button>Inicio</button>
        <button>Test</button>

        <div className="dropdown">
          <button>Recursos</button>
          <div className="dropdown-content">
            <a href="#">PDF descargables</a>
            <a href="#">Ejercicios</a>
          </div>
        </div>

        <button>Contacto</button>
      </nav>

      {/* Menú hamburguesa (mobile) */}
      <div
        className={`menu-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Menú desplegable móvil */}
      <div
        className={`menu-mobile-overlay ${menuOpen ? 'open' : 'closed'}`}
      >
        <nav className="menu-mobile-nav">
          <button className="menu-link">Inicio</button>
          <button className="menu-link">Test</button>

          <div className="dropdown">
            <button className="menu-link">Recursos</button>
            <div className="dropdown-content">
              <a href="#">PDF descargables</a>
              <a href="#">Ejercicios</a>
            </div>
          </div>

          <button className="menu-link">Contacto</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
