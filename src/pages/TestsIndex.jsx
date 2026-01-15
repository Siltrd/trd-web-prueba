// src/pages/TestIndex.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/homeTests.module.css'; // si tu archivo se llama distinto, ajusta este import

const TestIndex = () => {
  return (
    <main className={styles.main}>
      <section className={styles.homeTests}>
        <h1>Tu camino comienza aquí</h1>
        <p>
          Explora el obstáculo simbólico que hoy condiciona tu dirección o tu comunicación.
        </p>
      </section>

      <section className={styles.testSection}>
        <article className={styles.testCard}>
          <h3>Test de Dirección Interna</h3>
          <p>
            Detecta el bloqueo de fondo que desvía tus decisiones y tu claridad.
          </p>
          <Link
            to="/test-direccion"
            className={styles.testCardButton}
            aria-label="Comenzar Test de Dirección Interna"
          >
            Comenzar test
          </Link>
        </article>

        <article className={styles.testCard}>
          <h3>Test de Discurso</h3>
          <p>
            Identifica qué interfiere en tu expresión y tu impacto al comunicar.
          </p>
          <Link
            to="/test-discurso"
            className={styles.testCardButton}
            aria-label="Comenzar Test de Discurso"
          >
            Comenzar test
          </Link>
        </article>
      </section>
    </main>
  );
};

export default TestIndex;
