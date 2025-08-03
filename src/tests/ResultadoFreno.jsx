import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoFreno.module.css'; // Importar el CSS como módulo

const ResultadoFreno = () => {
  const resultado = resultados['freno'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoFreno;
