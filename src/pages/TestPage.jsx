import React from 'react';
import styles from '../styles/testPage.module.css'; // Importar el CSS como módulo

const TestPage = () => {
  return (
    <div className={styles.testPageContainer}> {/* Usamos styles.testPageContainer */}
      <section className={styles.testPageHero}> {/* Usamos styles.testPageHero */}
        <h1>Tu camino comienza aquí</h1>
        <p className={styles.testPageSubtitle}> {/* Usamos styles.testPageSubtitle */}
          Muy pronto vas a poder realizar tu test simbólico de TRD desde este espacio.
        </p>
        <p className={styles.testPageDescription}> {/* Usamos styles.testPageDescription */}
          Este test no busca encasillarte, sino ayudarte a reconocer tu punto de partida interno
          y ofrecerte una lectura simbólica desde tu momento vital. Mientras lo preparamos, podés explorar otros recursos en TRD o comenzar a conocerte a través de las guías disponibles.
        </p>
      </section>
    </div>
  );
};

export default TestPage;
