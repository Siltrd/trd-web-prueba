// src/pages/Login.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

const Login = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h2>{isAuthenticated ? 'Estás conectado' : 'Inicia sesión'}</h2>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </div>
  );
};

export default Login;
