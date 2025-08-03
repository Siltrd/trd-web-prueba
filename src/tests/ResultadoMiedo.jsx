import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoMiedo.module.css'; // Importar el CSS como módulo

const ResultadoMiedo = () => {
  const resultado = resultados['miedo'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoMiedo;
