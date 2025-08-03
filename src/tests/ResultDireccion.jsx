import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import results from '../data/results_direccion.js';
import styles from '../styles/testStyles/resultDireccion.module.css'; 

const ResultDireccion = () => {
  const location = useLocation();
  const [resultKey, setResultKey] = useState(null);

  useEffect(() => {
    if (location.state?.result) {
      console.log('🔍 Resultado recibido desde test:', location.state.result);  // Asegúrate de que el resultado está llegando
      setResultKey(location.state.result);
    } else {
      console.warn('⚠️ No se recibió resultado en location.state');
    }
  }, [location]);

  if (!resultKey || !results[resultKey]) {
    return (
      <div className={styles.resultContainer}>
        <p>Cargando resultado...</p>
      </div>
    );
  }

  const resultado = results[resultKey];

  return (
    <main className={styles.resultContainer}>
      <section className={styles.resultSection}>
        <h2 className={styles.resultTitle}>{resultado.title}</h2>

        <div className={styles.resultText}>
          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>
        </div>

        <a href={`https://wa.me/5491157041750?text=${encodeURIComponent('Hola TRD, acabo de hacer el test y mi resultado fue: ' + resultado.title)}`} target="_blank" className={styles.resultButton}>
          Quiero acceder a esta guía
        </a>
      </section>
    </main>
  );
};

export default ResultDireccion;
