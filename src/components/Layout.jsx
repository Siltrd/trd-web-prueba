// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  // Para renderizar las páginas hijas
import Header from './Header';
import Footer from './Footer';
import '../styles/layout.module.css';  // Estilos globales de layout

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />

      <main className="mainContent">
        <Outlet />  {/* Aquí se renderizan las páginas hijas */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
