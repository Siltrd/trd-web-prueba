import React from 'react';
import ResultadoLanding from './ResultadoLanding';
import resultados from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultadoContradiccion.module.css'; // Importar el CSS como módulo

const ResultadoContradiccion = () => {
  const resultado = resultados['contradiccion'];

  return (
    <div className={styles.resultadoContainer}>
      <ResultadoLanding resultado={resultado} />
    </div>
  );
};

export default ResultadoContradiccion;
