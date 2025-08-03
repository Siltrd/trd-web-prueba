import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_discurso.js';
import styles from '../styles/testStyles/resultadoAccion.module.css'; // Importar CSS module

const ResultadoAccion = () => {
  const resultado = resultados['accion'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoAccion;
