import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoTransicion.module.css'; // Importar el CSS como módulo

const ResultadoTransicion = () => {
  const resultado = resultados['transicion'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoTransicion;
