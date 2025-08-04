import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/testStyles/startDiscurso.module.css'; // Importar el CSS como módulo

const StartDiscurso = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.startContainer}>
      <div className={styles.startCard}>
        <h1 className={styles.startTitle}>
          ¿Querés saber qué dice tu discurso cuando hablás de lo que hacés?
        </h1>
        <button
          onClick={() => navigate('/test-discurso/quiz')}
          className={styles.botonTDR}
        >
          Iniciar test
        </button>
      </div>
    </div>
  );
};

export default StartDiscurso;
