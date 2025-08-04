// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  // Para renderizar las páginas hijas
import Header from './Header';  // El Header va en Layout, ya que se va a compartir en todas las páginas
import Footer from './Footer';  // Footer común para todas las páginas
import '../styles/layout.module.css';  // Estilos globales de layout

const Layout = () => {
  return (
    <div className="layoutContainer">
      <Header />  {/* El header va aquí para que se cargue en todas las páginas */}
      <main className="mainContent">
        <Outlet />  {/* Aquí se renderizan las páginas hijas */}
      </main>
      <Footer />  {/* Footer común para todas las páginas */}
    </div>
  );
};

export default Layout;
