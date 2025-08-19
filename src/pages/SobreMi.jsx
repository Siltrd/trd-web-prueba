import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/sobreMi.module.css';
import fotoAboutMe from '../assets/images/fotoAboutMe.jpg';

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <h1>Transformación personal y comunicación estratégica</h1>
        <div className={styles.introHighlight}>
          <p>De la confusión a la claridad: transforma tu vida y actúa con propósito.</p>
          <p>
            Te acompaño a conectar con tu poder interior y a transformar tu vida de manera
            significativa, tanto a nivel personal como profesional.
          </p>
        </div>
      </section>

      {/* Cuerpo principal */}
      <section className={styles.aboutSection}>
        {/* Foto + caption */}
        <div className={styles.aboutLeftColumn}>
          <div className={styles.photoContainer}>
            <div className={styles.circleBackground}></div>
            <img
              src={fotoAboutMe}
              alt="Foto de Ivy Soul"
              className={styles.profilePhoto}
              loading="lazy"
            />
          </div>
          <p className={styles.photoCaption}>Lo personal se transforma en propósito.</p>
        </div>

        {/* Texto editorial */}
        <div className={styles.aboutRightColumn}>
          <div className={styles.aboutBlock}>
            <p>
              Desde siempre, mi inquietud fue comprender el comportamiento humano, una necesidad
              profunda, vital e intelectual. Acompañar a otros surgió de manera natural. Escuchar y
              guiar me dio un sentido de pertenencia. Muchas veces encontraba las palabras que
              ayudaban a los demás a verse, aunque yo misma aún no lograba verme por completo.
            </p>

            <p>
              Lo que comenzó como una búsqueda personal, hoy inspira a una comunidad decidida a
              cambiar. Porque el cambio real es posible. Para quienes eligen hacerlo.
            </p>

            <p>
              Con los años, ese acompañamiento se transformó en un camino consciente y profundo. Hoy,
              ver a una persona reconocer su verdadero ser y actuar desde esa autenticidad es lo que
              me llena de propósito y satisfacción.
            </p>

            <p>
              TDR nace de mi propio proceso de transformación. No es un método rígido ni una promesa
              vacía, sino una plataforma viva y dinámica. Una invitación a habitar la realidad tal
              como es, con todos sus desafíos y su belleza.
            </p>

            {/* Introducción del método */}
            <p><strong>He creado REAL</strong>, un método claro y profundo:</p>

            {/* Método REAL en línea */}
            <div className={styles.realInline} aria-label="Método REAL">
              <span className={styles.realPart}>
                <em>R</em>econocer
              </span>
              <span className={styles.sep}>•</span>
              <span className={styles.realPart}>
                <em>E</em>scuchar
              </span>
              <span className={styles.sep}>•</span>
              <span className={styles.realPart}>
                <em>A</em>linear
              </span>
              <span className={styles.sep}>•</span>
              <span className={styles.realPart}>
                <em>L</em>iberar
              </span>
            </div>

            <p className={styles.realDesc}>
              Un proceso que integra la introspección y la acción, diseñado para guiarte en cada paso
              hacia una vida auténtica, alineada con tu propósito y habitando el presente.
            </p>

            <p>
              TDR es para quienes saben que no hay atajos, pero eligen cambiar de verdad: con
              dirección, presencia y visión.
            </p>
          </div>
        </div>
      </section>

      {/* CTA editorial final */}
      <section className={styles.aboutCtaFinal}>
        <p className={styles.ctaFinalText}>
          Si estás listo para un cambio real, este es el lugar para comenzar.
        </p>
        <Link to="/test-direccion" className={styles.ctaFinalButton}>
          Descubre tu primer paso
        </Link>
      </section>
    </div>
  );
};

export default AboutMe;
