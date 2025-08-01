import React, { useState, useEffect } from 'react';
import styles from '../styles/pageTwo.module.css';
import fotoProvisoria2 from '../assets/images/fotoProvisoria2.jpg';
import checkmark from '../assets/images/checkmark-bco.png';

const PageTwo = () => {
  const [boxPosition, setBoxPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setBoxPosition(Math.min(scrollY, 400));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.pageTwo}>
      <div className={styles.pageTwoContent}>
        <div className={styles.pageTwoLeftColumn}>
          <div className={styles.photoWrapper}>
            <img src={fotoProvisoria2} alt="Foto de Ivy Soul" className={styles.photo} />
          </div>

          <div
            className={`${styles.floatingBox} ${boxPosition > 150 ? styles.active : ''}`}
            style={{ top: `calc(90vh - ${Math.min(boxPosition / 10, 40)}vh)` }}
          >
            <p className={styles.floatingQuote}>
              <strong>No es falta de claridad.</strong><br />
              <strong>Es ausencia de dirección interna.</strong><br />
              <strong>Y sin dirección, lo esencial se vuelve inalcanzable.</strong>
            </p>
          </div>
        </div>

        <div className={styles.pageTwoRightColumn}>
          <div className={`${styles.aboutMeBlock} ${styles.editorialFixedBlock}`}>
            <div className={styles.aboutTitleContainer}>
              <h1 className={styles.aboutTitle}>Acerca de Ivy Soul</h1>
              <h2 className={styles.aboutIntro}>Dirección interna, claridad estratégica.</h2>
            </div>

            <p>
              Ivy Soul es la creadora de TRD – Túnica de Realidad, una plataforma de transformación personal que integra pensamiento crítico, dirección interna y un modelo propio de trabajo profundo. Diseñado para quienes no buscan respuestas externas, sino la capacidad real de dirigir su vida con propósito.
            </p>

            <div className={styles.checkItem}>
              <img src={checkmark} alt="Ícono check" className={styles.checkIcon} />
              <div>
                <h3 className={styles.checkTitle}>Un puente entre el saber y la transformación real</h3>
                <p>
                  Con una trayectoria que integra derecho, coaching estratégico, PNL, mindfulness y disciplinas somáticas, Ivy articula ciencia contemporánea y transformación interior aplicada, impulsando cambios reales — en lo emocional, lo profesional y lo esencial.
                </p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <img src={checkmark} alt="Ícono check" className={styles.checkIcon} />
              <div>
                <h3 className={styles.checkTitle}>Donde lo personal se vuelve propósito compartido</h3>
                <p>
                  Lo que comenzó como una búsqueda individual, hoy impulsa una comunidad decidida a verse, transformarse y crear dirección propia. Porque el cambio real es posible — para quien elige hacerlo.
                </p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <img src={checkmark} alt="Ícono check" className={styles.checkIcon} />
              <div>
                <h3 className={styles.checkTitle}>Una guía, no un gurú</h3>
                <p>
                  Sin atajos ni promesas vacías, Ivy guía con herramientas aplicables, dirección clara y un enfoque ético que impulsa transformación real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
