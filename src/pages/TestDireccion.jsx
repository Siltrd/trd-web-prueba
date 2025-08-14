import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/testDireccion.module.css';

const TestDireccion = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.testDireccionContainer}>
      <Helmet>
        <title>Test de Dirección Interna - TDR</title>
        <meta
          name="description"
          content="Descubre qué te está bloqueando y cómo reconectar con tu dirección interna. Este test simbólico te guía desde el estancamiento hacia la claridad."
        />
      </Helmet>

      <h1 className={styles.testTitle}>Test de Dirección Interna</h1>

      <p className={styles.testIntro}>
        Si sientes que estás en un momento de confusión, estancamiento o que no sabes por dónde avanzar,
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
