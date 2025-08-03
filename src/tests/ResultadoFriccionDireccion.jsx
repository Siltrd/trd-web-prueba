import React from 'react';
import ResultadoLanding from './ResultadoLanding.jsx';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoFriccion.module.css'; // Importar el CSS como módulo

const ResultadoFriccion = () => {
  const resultado = resultados['friccion'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoFriccion;
