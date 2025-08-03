// src/hooks/useAccessToken.js
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const useAccessToken = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
        } catch (err) {
          console.error('Error al obtener el token:', err);
        }
      }
    };

    fetchToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  return token;
};

export default useAccessToken;
