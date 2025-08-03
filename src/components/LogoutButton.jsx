// src/components/LogoutButton.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styles from '../styles/auth.module.css';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      className={styles.authBtn}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
