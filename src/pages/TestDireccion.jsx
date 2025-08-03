import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/testDireccion.module.css';

const TestDireccion = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.testDireccionContainer}>
      <Helmet>
        <title>Test de Dirección Interna - TRD</title>
        <meta
          name="description"
          content="Descubrí qué te está bloqueando y cómo reconectar con tu dirección interna. Este test simbólico te guía desde el estancamiento hacia la claridad."
        />
      </Helmet>

      <h1 className={styles.testTitle}>Test de Dirección Interna</h1>

      <p className={styles.testIntro}>
        Si sentís que estás en un momento de confusión, estancamiento o que no sabés por dónde avanzar,
        este test puede ayudarte a detectar el obstáculo simbólico que hoy condiciona tus decisiones.
      </p>

      <p className={styles.testDetail}>
        La dirección interna no siempre se encuentra con más esfuerzo o más lógica. A veces requiere
        reconocer qué está actuando desde el fondo, para despejar el camino.
      </p>

      <button
        className={styles.testButton}
        onClick={() => navigate('/test-direccion/quiz')}
      >
        Comenzar test →
      </button>
    </main>
  );
};

export default TestDireccion;
