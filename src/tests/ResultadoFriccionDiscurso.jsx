import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_discurso.js';
import styles from '../styles/testStyles/resultadoFriccion.module.css';

const ResultadoFriccionDiscurso = () => {
  const resultado = resultados['friccion_discurso'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoFriccionDiscurso;
