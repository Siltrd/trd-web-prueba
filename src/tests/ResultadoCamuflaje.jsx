import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoCamuflaje.module.css'; // Importar el CSS como módulo

const ResultadoCamuflaje = () => {
  const resultado = resultados['camuflaje'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoCamuflaje;
