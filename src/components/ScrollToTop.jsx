import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Desplazamiento suave hacia la parte superior
    window.scrollTo({
      top: 0,
      behavior: 'smooth',  // Cambié 'auto' a 'smooth' para un scroll suave
    });
  }, [location.pathname, location.key]); // Dependencias: se ejecuta cada vez que la ruta cambia

  return null;
};

export default ScrollToTop;
