import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const TestLayout = () => {
  return (
    <>
      <Header isTestLayout={true} /> {/* Fondo blanco solo en tests */}
      <div
        style={{
          padding: 'clamp(3rem, 5vw, 4rem)',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#fff', 
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          marginTop: 'var(--header-height)', // Asegura separación del header
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)', // Sombra más profunda

        }}
      >
        <div
          
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default TestLayout;