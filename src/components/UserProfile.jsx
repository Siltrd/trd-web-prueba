import React, { useState } from 'react';

const UserProfile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado simulado

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h2>Welcome, User</h2>
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        </div>
      ) : (
        <button onClick={() => setIsAuthenticated(true)}>Login</button>
      )}
    </div>
  );
};

export default UserProfile;
