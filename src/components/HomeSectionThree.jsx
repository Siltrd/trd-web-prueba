import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import styles from '../styles/homeSectionThree.module.css';
import layout from '../styles/layout.module.css';

import checkmark from '../assets/images/checkmark-bco.png';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';
import fotoMovil from '../assets/images/foto-movil.png';

const HomeSectionThree = () => {
  const navigate = useNavigate();

  const handleGoOptions = (e) => {
    e.currentTarget.blur();

    const section = document.getElementById('formas-de-trabajar');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoAbout = (e) => {
    e.currentTarget.blur();
    navigate('/sobre-mi');
  };

  return (
    <section className={classNames(styles.hero__section, layout.wrapperFullWidth)}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__leftColumn}>
          <div className={classNames(styles.hero__textBox, styles.hero__box1)}>
            <p>Escuchar al cuerpo. Observar la mente.</p>
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box2)}>
            TDR integra distintas formas de trabajo que permiten abordar una experiencia
            desde más de un lugar: lo que pensamos, lo que sentimos, lo que hacemos y
            lo que el cuerpo registra.
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box3)}>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="" />
              La experiencia también aporta información.
            </div>

            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="" />
              El cuerpo puede ser una vía de observación y trabajo.
            </div>

            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="" />
              Las herramientas cambian según el proceso y el formato.
            </div>
          </div>

          <div className={styles.hero__boxButtons}>
            <button
              type="button"
              onClick={handleGoOptions}
              onTouchEnd={(e) => e.currentTarget.blur()}
            >
              Ver formas de trabajar
            </button>

            <button
              type="button"
              onClick={handleGoAbout}
              onTouchEnd={(e) => e.currentTarget.blur()}
            >
              Conocer TDR
            </button>
          </div>

          <div className={styles.hero__mobileFotoWrapper}>
            <img
              src={fotoMovil}
              alt=""
              className={styles.hero__mobileFoto}
            />
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box5)}>
            Programas, experiencias, acompañamiento individual y recursos pueden
            incorporar distintas herramientas según lo que se esté trabajando.
          </div>
        </div>

        <div className={styles.hero__rightColumn}>
          <div className={styles.hero__visualsWrapper}>
            <img
              className={styles.hero__foto}
              src={fotoProvisoria}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionThree;