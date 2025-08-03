// src/pages/Perfil.jsx
import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import useAccessToken from '../hooks/useAccessToken';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const token = useAccessToken();
  const navigate = useNavigate();

  // Redirigir si no está autenticado (una vez cargado)
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate('/');
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Perfil del Usuario</h2>
      <img
        src={user.picture}
        alt="Foto de perfil"
        style={{ width: '120px', borderRadius: '50%' }}
      />
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Token:</strong> {token ? token.slice(0, 20) + '...' : 'Cargando...'}</p>
    </div>
  );
};

export default Perfil;
