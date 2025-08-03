import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoImpulso.module.css'; // Importar el CSS como módulo

const ResultadoImpulso = () => {
  const resultado = resultados['impulso'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoImpulso;
