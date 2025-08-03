import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoFuga.module.css'; // Importar el CSS como módulo

const ResultadoFuga = () => {
  const resultado = resultados['fuga'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoFuga;
