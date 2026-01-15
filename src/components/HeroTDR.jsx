import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../styles/heroTDR.module.css';
import layout from '../styles/layout.module.css';
import checkmark from '../assets/images/checkmark-bco.png';
import fotoProvisoria from '../assets/images/fotoProvisoria.jpg';
import fotoMovil from '../assets/images/foto-movil.png';

const HeroTDR = () => {
  const navigate = useNavigate();

  const handleGoTest = (e) => {
    e.currentTarget.blur();
    navigate('/tests/direccion');
  };

  const handleGoSoon = (e) => {
    e.currentTarget.blur();
    navigate('/proximamente', {
      state: {
        titulo: 'Recursos gratuitos',
        detalle:
          'Estoy cerrando el MVP beta de TDR. Los recursos gratuitos se liberan en breve. Mientras tanto, podés empezar por el Test Dirección.',
      },
    });
  };

  return (
    <section className={classNames(styles.hero__section, layout.wrapperFullWidth)}>
      <div className={styles.hero__wrapper}>

        {/* Columna izquierda */}
        <div className={styles.hero__leftColumn}>

          <div className={classNames(styles.hero__textBox, styles.hero__box1)}>
            <p>Transforma tu Vida y tu Comunicación</p>
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box2)}>
            Descubre herramientas prácticas y una comunidad de apoyo que te ayudará a superar bloqueos.
            Rediseña tu vida, logrando un cambio real y significativo.
          </div>

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
            <button
              type="button"
              onClick={handleGoTest}
              onTouchEnd={(e) => e.currentTarget.blur()}
            >
              Comienza tu transformación
            </button>

            <button
              type="button"
              onClick={handleGoSoon}
              onTouchEnd={(e) => e.currentTarget.blur()}
            >
              Recursos gratuitos
            </button>
          </div>

          {/* Foto móvil */}
          <div className={styles.hero__mobileFotoWrapper}>
            <img
              src={fotoMovil}
              alt="Foto móvil"
              className={styles.hero__mobileFoto}
            />
          </div>

          <div className={classNames(styles.hero__textBox, styles.hero__box5)}>
            TDR es una plataforma integral que potencia tu transformación personal y profesional
            mediante un enfoque claro, estructurado y profundamente alineado con tu propósito.
          </div>
        </div>

        {/* Columna derecha */}
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
