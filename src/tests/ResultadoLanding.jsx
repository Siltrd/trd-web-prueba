import React from 'react';
import styles from '../../styles/testStyles/resultadoLanding.module.css'; // Importar el CSS como módulo

const ResultadoLanding = ({ resultado }) => {
  if (!resultado) {
    return (
      <div className={styles.homeWrapper}>
        <p style={{ fontSize: '1.2rem' }}>Cargando resultado...</p>
      </div>
    );
  }

  return (
    <main className={styles.homeWrapper}>
      <section className={styles.homeSection}>
        <div className={styles.homeInner}>
          <h1 className={styles.tituloPrincipal}>{resultado.title || resultado.estilo}</h1>

          <p><strong>Diagnóstico:</strong> {resultado.diagnostico}</p>
          <p><strong>Imagen simbólica:</strong> {resultado.imagen}</p>
          <p><strong>Coste de no actuar:</strong> {resultado.coste}</p>

          <hr className={styles.separador} />

          <h3 className={styles.subtituloTRD}>{resultado.cta.titulo}</h3>
          <p>{resultado.cta.descripcion}</p>

          {resultado.cta.frase && (
            <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>
              {resultado.cta.frase}
            </p>
          )}

          <p><strong>Precio:</strong> {resultado.cta.precio}</p>
          <p><strong>Incluye:</strong> {resultado.cta.acceso}</p>

          <a
            href={resultado.cta.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.botonTRD}
          >
            Ir al siguiente paso
          </a>
        </div>
      </section>
    </main>
  );
};

export default ResultadoLanding;
