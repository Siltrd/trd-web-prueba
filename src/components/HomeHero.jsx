import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/homeHero.module.css';
import layout from '../styles/layout.module.css';

import fotoPageOne from '../assets/images/fotoPageOne.jpg';

const HomeHero = () => {
  const navigate = useNavigate();

  const handleGoOptions = () => {
    const section = document.getElementById('formas-de-trabajar');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  const handleGoResources = () => {
    navigate('/tests');
  };

  return (
    <section className={`${styles.pageOne} ${layout.wrapperFullWidth}`}>
      <div className={styles.pageOneContent}>
        <div className={styles.backgroundShape} />

        <div className={styles.photoWrapper}>
          <img
            src={fotoPageOne}
            alt=""
            className={styles.photo}
          />
        </div>

        <div className={styles.textBlock}>
          <p className={styles.eyebrow}>
            TDR · Túnica de Realidad
          </p>

          <h1 className={styles.title}>
            Coaching, Sound Healing y distintas formas de trabajo
            para el desarrollo personal.
          </h1>

          <p className={styles.intro}>
            Acompañamiento individual, programas, experiencias y recursos
            reunidos en una misma propuesta.
          </p>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={handleGoOptions}
            >
              Ver formas de trabajar
            </button>

            <button
              type="button"
              className={styles.secondaryButton}
              onClick={handleGoResources}
            >
              Empezar gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;