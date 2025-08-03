// src/routes/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  // Espera a que Auth0 cargue antes de decidir
  if (isLoading) {
    return <div>Cargando autenticación...</div>;
  }

  // Si no está autenticado, redirige al home
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, muestra el contenido protegido
  return children;
};

export default PrivateRoute;
