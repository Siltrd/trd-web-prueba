import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import results from '../data/results_discurso.js';
import styles from '../styles/testStyles/resultDiscurso.module.css'; // Importar el CSS como módulo

const ResultDiscurso = () => {
  const location = useLocation();
  const [resultKey, setResultKey] = useState(null);

  useEffect(() => {
    if (location.state?.result) {
      console.log('🧪 Resultado test discurso:', location.state.result);
      setResultKey(location.state.result);
    } else {
      console.warn('⚠️ No se recibió resultado desde test discurso');
    }
  }, [location]);

  if (!resultKey || !results[resultKey]) {
    return (
      <div className={styles.resultContainer}>
        <p style={{ fontSize: '1.1rem', color: '#444' }}>Cargando resultado...</p>
      </div>
    );
  }

  const resultado = results[resultKey];
  const mensaje = `Hola TRD, acabo de hacer el test y mi resultado fue: "${resultado.estilo}". Me interesa acceder a la guía que me corresponde. ¿Podés indicarme cómo seguir?`;

  return (
    <main className={styles.resultContainer}>
      <section className={styles.resultSection}>
        <h2 className={styles.resultTitle}>{resultado.estilo}</h2>

        <div className={styles.resultText}>
          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>
        </div>

        <hr className={styles.resultSeparator} />

        <div className={styles.resultText}>
          <h3 className={styles.resultSubTitle}>{resultado.cta.titulo}</h3>
          <p>{resultado.cta.descripcion}</p>
          {resultado.cta.frase && (
            <p className={styles.resultFrase}>
              {resultado.cta.frase}
            </p>
          )}
          <p><strong>Precio:</strong> {resultado.cta.precio}</p>
          <p><strong>Incluye:</strong> {resultado.cta.acceso}</p>
        </div>

        <a
          href={`https://wa.me/5491157041750?text=${encodeURIComponent(mensaje)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resultButton}
        >
          Quiero acceder a esta guía
        </a>
      </section>
    </main>
  );
};

export default ResultDiscurso;
