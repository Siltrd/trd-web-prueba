// src/components/UserProfile.jsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';  // Importamos el botón de login
import LogoutButton from './LogoutButton';  // Importamos el botón de logout

const UserProfile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default UserProfile;
