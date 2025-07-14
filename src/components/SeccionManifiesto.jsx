import React, { useEffect, useRef, useState } from 'react';
import '../styles/manifiesto.css';
import fotoManifiesto from '../assets/images/fotoManifiesto.jpg';

const SeccionManifiesto = () => {
  const movingBoxRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!movingBoxRef.current) return;

      const scrollTop = window.scrollY;
      const triggerPoint = 400; // Podés ajustar este valor para que encaje mejor

      setIsFixed(scrollTop >= triggerPoint);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="seccion-manifiesto">
      <div className="columna izquierda">
        <img src={fotoManifiesto} alt="Foto TRD" className="foto-manifiesto" />
        <div
          ref={movingBoxRef}
          className={`texto-movil ${isFixed ? 'fijado' : ''}`}
        >
          <p>Texto en movimiento</p>
        </div>
      </div>
      <div className="columna derecha">
        <div className="texto-derecha">
          <p>Texto largo o contenido editorial.</p>
        </div>
      </div>
    </section>
  );
};

export default SeccionManifiesto;
