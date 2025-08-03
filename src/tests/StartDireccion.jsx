import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/testStyles/startDireccion.module.css'; // Importar el CSS como módulo

const StartDireccion = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.startContainer}>
      <div className={styles.startCard}>
        <h1 className={styles.startTitle}>
          ¿Qué parte de tu energía está bloqueando tu avance?
        </h1>
        <p className={styles.startDescription}>
          Este test simbólico revela si estás en pausa, dispersión o contradicción interna. Sin juicio. Solo claridad.
        </p>
        <button onClick={() => navigate('/test-direccion/quiz')} className={styles.botonTRD}>
          Empezar ahora
        </button>
      </div>
    </div>
  );
};

export default StartDireccion;
