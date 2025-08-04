import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../styles/testDiscurso.module.css';

const TestDiscurso = () => {
  return (
    <div className={styles.testContainer}>
      <Helmet>
        <title>Revisar mi discurso – TDR</title>
        <meta name="description" content="Identificá qué obstáculo hay en tu forma de comunicar y mejorá tu impacto personal o profesional con este test gratuito de TDR." />
      </Helmet>

      <main className={styles.testContent}>
        <h1 className={styles.testTitle}>Revisar mi discurso</h1>
        <p className={styles.testIntro}>
          Si liderás, vendés o comunicás y sentís que algo en tu mensaje no está funcionando, este test te ayuda a identificar qué obstáculo hay en tu discurso interno o externo.
        </p>
        <Link to="/test-discurso/quiz" className={styles.testButton}>
          Comenzar test →
        </Link>
      </main>
    </div>
  );
};

export default TestDiscurso;
