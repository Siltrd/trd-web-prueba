import React from 'react';
import classNames from 'classnames'; // Importa classNames
import styles from '../styles/heroTRD.module.css'; // Importa el CSS como módulo
import checkmark from '../assets/images/checkmark-bco.png';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';
import fotoMovil from '../assets/images/foto-movil.png';

const HeroTRD = () => {
  return (
    <section className={styles.hero__section}>  {/* Usamos styles.hero__section */}
      <div className={styles.hero__wrapper}>  {/* Usamos styles.hero__wrapper */}
        {/* Columna izquierda: Texto */}
        <div className={styles.hero__leftColumn}>  {/* Usamos styles.hero__leftColumn */}
          <div className={classNames(styles.hero__textBox, styles.hero__box1)}>  {/* Usamos classNames para concatenar las clases */}
            <p>Tenés el poder de </p>
            <p>transformarte</p>
          </div>
          <div className={classNames(styles.hero__textBox, styles.hero__box2)}>
            Descubrí herramientas prácticas para salir del bucle mental y emocional rediseñando una dirección propia sin fórmulas vacías ni frases hechas.
          </div>
          <div className={classNames(styles.hero__textBox, styles.hero__box3)}>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Reescribí tu discurso interno y externo.
            </div>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Rompé con patrones que ya no te representan.
            </div>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Elegí dirección con estructura, no desde la urgencia.
            </div>
          </div>
          <div className={styles.hero__boxButtons}>
            <button>Empezar mi viaje</button>
            <button>Recursos gratuitos</button>
          </div>

          {/* Foto móvil duplicada, solo visible en 768px */}
          <div className={styles.hero__mobileFotoWrapper}>
            <img src={fotoMovil} alt="Foto móvil" className={styles.hero__mobileFoto} />
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box5)}>
            TRD es una plataforma de transformación estratégica. Acompañamos procesos personales y profesionales desde estructura, dirección y verdad.
          </div>
        </div>

        {/* Columna derecha: Foto para escritorio */}
        <div className={styles.hero__rightColumn}>
          <div className={styles.hero__visualsWrapper}>
            <img className={styles.hero__foto} src={fotoProvisoria} alt="Foto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTRD;
