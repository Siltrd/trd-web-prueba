import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/testStyles/startDireccion.module.css'; // Importar el CSS como módulo

const StartDireccion = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.startContainer}>
      <div className={styles.startCard}>
        <h1 className={styles.startTitle}>
          ¿Cómo está hoy tu dirección de vida?
        </h1>
        <p className={styles.startDescription}>
          Este test revela si tu avance está en tensión, desconexión, bucle, miedo o impulso. Sin juicio. Solo claridad para decidir el siguiente paso.
        </p>
        <button onClick={() => navigate('/test-direccion/quiz')} className={styles.botonTDR}>
          Empezar ahora
        </button>
      </div>
    </div>
  );
};

export default StartDireccion;
