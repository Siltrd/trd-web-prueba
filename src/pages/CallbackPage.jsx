// src/pages/CallbackPage.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const CallbackPage = () => {
  const { isLoading, isAuthenticated, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (error) {
    return (
      <div style={{ padding: '2rem', color: 'red', textAlign: 'center' }}>
        <h2>Hubo un problema con el inicio de sesión</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!isLoading && !isAuthenticated && !error) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: '#1e364d' }}>
      <h2>No estás autenticado</h2>
      <p>Accedé a esta ruta solo después de iniciar sesión.</p>
    </div>
  );
}


  return (
    <div
      style={{
        padding: '3rem',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        color: '#1e364d'
      }}
    >
      <h2>Procesando autenticación...</h2>
      <p>Por favor, espera un momento.</p>
    </div>
  );
};

export default CallbackPage;
