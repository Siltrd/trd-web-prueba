// src/components/LoginButton.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/auth.module.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className={styles.authBtn} onClick={() => loginWithRedirect()}>
      Iniciar sesión
    </button>
  );
};

export default LoginButton;
