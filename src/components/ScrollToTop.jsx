import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'auto', // o 'smooth' si prefieres desplazamiento suave
      });
    }, 0); // Espera al siguiente ciclo de renderizado

    return () => clearTimeout(timeout);
  }, [location.pathname, location.key]); // Dependencias: cambia cuando la ruta o clave cambian

  return null;
};

export default ScrollToTop;
