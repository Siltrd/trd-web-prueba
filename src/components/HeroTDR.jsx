import React from 'react';
import classNames from 'classnames';
import styles from '../styles/heroTDR.module.css';
import layout from '../styles/layout.module.css';
import checkmark from '../assets/images/checkmark-bco.png';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';
import fotoMovil from '../assets/images/foto-movil.png';

const HeroTDR = () => {
  return (
    <section className={classNames(styles.hero__section, layout.wrapperFullWidth)}>
      <div className={styles.hero__wrapper}>
        {/* Columna izquierda: Texto */}
        <div className={styles.hero__leftColumn}>
          {/* Box1: Título */}
          <div className={classNames(styles.hero__textBox, styles.hero__box1)}>
            <p>Transforma tu Vida y tu Comunicación</p>
          </div>

          {/* Box2: Descripción */}
          <div className={classNames(styles.hero__textBox, styles.hero__box2)}>
            Descubre herramientas prácticas y una comunidad de apoyo que te ayudará a superar bloqueos. Rediseña tu vida, logrando un cambio real y significativo.
          </div>

          {/* Box3: Checkmarks */}
          <div className={classNames(styles.hero__textBox, styles.hero__box3)}>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Transforma desde la raíz, no solo desde lo externo.
            </div>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Desafía las creencias limitantes y abre camino a nuevas oportunidades con claridad y propósito.
            </div>
            <div className={styles.hero__checkmark}>
              <img src={checkmark} alt="Checkmark" />
              Reconecta con tu dirección interna, tanto en lo personal como en lo profesional.
            </div>
          </div>

          {/* Botones */}
          <div className={styles.hero__boxButtons}>
            <button>Comienza tu transformación</button>
            <button>Recursos gratuitos</button>
          </div>

          {/* Foto móvil */}
          <div className={styles.hero__mobileFotoWrapper}>
            <img src={fotoMovil} alt="Foto móvil" className={styles.hero__mobileFoto} />
          </div>

          {/* Box5: Descripción adicional */}
          <div className={classNames(styles.hero__textBox, styles.hero__box5)}>
            TDR es una plataforma integral que potencia tu transformación personal y profesional mediante un enfoque claro, estructurado y profundamente alineado con tu propósito.
          </div>
        </div>

        {/* Columna derecha: Imagen */}
        <div className={styles.hero__rightColumn}>
          <div className={styles.hero__visualsWrapper}>
            <img className={styles.hero__foto} src={fotoProvisoria} alt="Foto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroTDR;
