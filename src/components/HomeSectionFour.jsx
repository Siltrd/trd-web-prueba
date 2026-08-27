import React, { useEffect, useRef, useState } from 'react';

import styles from '../styles/homeSectionFour.module.css';
import layout from '../styles/layout.module.css';

import fotoProvisoria2 from '../assets/images/fotoProvisoria2.jpg';
import checkmark from '../assets/images/checkmark-bco.png';

const HomeSectionFour = () => {
  const sectionRef = useRef(null);
  const [boxPosition, setBoxPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      /*
        El movimiento comienza cuando la sección
        entra aproximadamente por la parte inferior
        del viewport.

        Conservamos el rango original:
        boxPosition = 0 → 400
        top = 90vh → 50vh
      */
      const startPoint = window.innerHeight * 0.9;

      const progress = Math.max(
        0,
        startPoint - rect.top
      );

      setBoxPosition(
        Math.min(progress, 400)
      );
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${styles.pageTwo} ${layout.wrapperFullWidth}`}
    >
      <div className={styles.pageTwoContent}>

        {/* Columna izquierda */}
        <div className={styles.pageTwoLeftColumn}>

          <div className={styles.photoWrapper}>
            <img
              src={fotoProvisoria2}
              alt="Foto de Ivy Soul"
              className={styles.photo}
              loading="lazy"
            />
          </div>

          {/* Caja flotante */}
          <div
            className={`${styles.floatingBox} ${
              boxPosition > 150 ? styles.active : ''
            }`}
            style={{
              top: `calc(
                90vh - ${Math.min(boxPosition / 10, 40)}vh
              )`,
            }}
          >
            <p className={styles.floatingQuote}>
              <strong>No es falta de claridad.</strong>
              <br />

              <strong>
                Es ausencia de dirección interna.
              </strong>
              <br />

              <strong>
                Y sin dirección, lo esencial se vuelve inalcanzable.
              </strong>
            </p>
          </div>

        </div>

        {/* Columna derecha */}
        <div className={styles.pageTwoRightColumn}>
          <div
            className={`${styles.aboutMeBlock} ${styles.editorialFixedBlock}`}
          >
            <div className={styles.aboutTitleContainer}>
              <h1 className={styles.aboutTitle}>
                Acerca de Ivy Soul
              </h1>

              <h2 className={styles.aboutIntro}>
                Dirección interna, claridad estratégica.
              </h2>
            </div>

            <p>
              TDR – Túnica de Realidad, es una plataforma de transformación
              personal que fusiona pensamiento crítico, autoliderazgo y un
              modelo propio de trabajo profundo. Diseñado para quienes buscan
              tomar el control de su vida y dirigirla con propósito, en lugar
              de depender de respuestas externas.
            </p>

            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="Ícono check"
                className={styles.checkIcon}
              />

              <div>
                <h3 className={styles.checkTitle}>
                  Un puente entre el saber y la transformación real
                </h3>

                <p>
                  Con una trayectoria que integra abogacía, coaching
                  estratégico, PNL, mindfulness, meditación, yoga y
                  disciplinas somáticas, Ivy articula ciencia contemporánea y
                  transformación interior aplicada, impulsando cambios
                  profundos — en lo emocional, profesional y esencial.
                </p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="Ícono check"
                className={styles.checkIcon}
              />

              <div>
                <h3 className={styles.checkTitle}>
                  Donde lo personal se vuelve propósito compartido
                </h3>

                <p>
                  Lo que comenzó como una búsqueda individual, hoy impulsa una
                  comunidad decidida a verse, transformarse y crear dirección
                  propia. Porque el cambio real es posible — para quien elige
                  hacerlo.
                </p>
              </div>
            </div>

            <div className={styles.checkItem}>
              <img
                src={checkmark}
                alt="Ícono check"
                className={styles.checkIcon}
              />

              <div>
                <h3 className={styles.checkTitle}>
                  Una guía, no un gurú
                </h3>

                <p>
                  Sin atajos ni promesas vacías, una guía con herramientas
                  aplicables, dirección clara y un enfoque ético que impulsa
                  una transformación real.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeSectionFour;