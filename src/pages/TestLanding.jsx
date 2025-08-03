import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styles from '../styles/testLanding.module.css';

const TestLanding = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.testPageContainer}>
      <Helmet>
        <title>Tests simbólicos de TRD</title>
        <meta
          name="description"
          content="Elegí por dónde comenzar tu camino de autoconocimiento en TRD. Dirección interna o discurso: dos tests simbólicos para explorar tu momento actual."
        />
      </Helmet>

      <h1 className={styles.testTitle}>¿Por dónde empezar?</h1>
      <p className={styles.testIntro}>
        En TRD ofrecemos dos experiencias de autoconocimiento complementarias.
        Elegí por cuál comenzar según el momento que estés transitando.
      </p>

      <div className={styles.testOptionsWrapper}>
        <div className={styles.testCard}>
          <h2 className={styles.testCardTitle}>Descubrir mi dirección interna</h2>
          <p className={styles.testCardText}>
            Ideal si sentís confusión, estancamiento o una sensación de pérdida de rumbo.
            Este test te ayuda a reconocer qué te está bloqueando para avanzar con claridad.
          </p>
          <button
            className={styles.testCardButton}
            onClick={() => navigate('/test-direccion')}
          >
            Comenzar test
          </button>
        </div>

        <div className={styles.testCard}>
          <h2 className={styles.testCardTitle}>Revisar mi discurso</h2>
          <p className={styles.testCardText}>
            Si liderás, vendés o comunicás y sentís que algo en tu mensaje no está funcionando,
            este test te ayuda a identificar qué obstáculo hay en tu discurso interno o externo.
          </p>
          <button
            className={styles.testCardButton}
            onClick={() => navigate('/test-discurso')}
          >
            Comenzar test
          </button>
        </div>
      </div>
    </main>
  );
};

export default TestLanding;

