import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/fundadora.module.css';
import fotoAboutMe from '../assets/images/fotoAboutMe.jpg';
import checkmark from '../assets/images/checkmark-bco.png';

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <h1>De la confusión a la claridad: la transformación que necesitas</h1>
        <p className={styles.introHighlight}>
          Te guío a encontrar dirección interna, claridad estratégica y la capacidad de transformar tu vida con propósito.
        </p>
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
            />
          </div>
          <p className={styles.photoCaption}>
            Lo personal se vuelve propósito compartido.
          </p>
        </div>

        {/* Texto editorial completo */}
        <div className={styles.aboutRightColumn}>
          <div className={styles.aboutBlock}>
            <p>
              Siempre tuve una inquietud que no podía ignorar: entender el comportamiento humano. No era una curiosidad intelectual, era una necesidad vital. Desde muy chica, acompañar a otros fue algo natural —no porque lo eligiera, sino porque parecía formar parte de mi manera de habitar el mundo. Observaba, escuchaba, sentía. Y muchas veces, encontraba palabras que ayudaban a otros a verse, aunque yo misma todavía no pudiera verme del todo.
            </p>
            <p>
              Durante años sentí que quedaba fuera de lugar. Mi tendencia a profundizar, a ir más allá, a buscar lo esencial, me distanciaba del ritmo del mundo. Probé muchos caminos: estudié, trabajé, viví en distintos países. Todo aportaba, pero esa plenitud que intuía —esa certeza silenciosa de que había algo más— no terminaba de llegar.
            </p>
            <p>
              Hasta que entendí que el cambio que buscaba no era externo. Era interno.
            </p>
            <p>
              Con el tiempo, fui integrando todo lo recorrido: la abogacía, la oratoria forense, la docencia universitaria, la meditación, la bioenergética, el yoga, el coaching, la programación neurolingüística. Cada disciplina me ofreció una herramienta. Pero más que técnicas, me ofrecieron una dirección. Descubrí que no se trataba solo de “hacer bien las cosas”, sino de <strong>ver(se)</strong>. Con honestidad. Sin máscaras.
            </p>
            <p>
              Y entonces, algo cambió.
            </p>
            <p>
              Entendí que valorarme no era vanidad. Que acompañar desde la claridad y la presencia era parte de mi propósito. Y que la plenitud no llega cuando todo es perfecto, sino cuando aprendemos a estar en lo que hay —lo fácil y lo difícil, lo inesperado y lo que revela.
            </p>
            <p>
              Con los años, ese acompañamiento dejó de ser espontáneo para convertirse en un camino elegido. Consciente. Profundo. Hoy, ver a una persona reconocerse, encontrar dirección y actuar desde un lugar más auténtico, es de las cosas que más paz y sentido me da.
            </p>
            <p>
              <strong>TRD nace de todo esto. </strong>  
              No como un método rígido ni como una promesa, sino como una plataforma viva, creada desde mi propio proceso de transformación. En Túnica de Realidad vas a encontrar herramientas probadas, aplicadas, vividas. Nada que enseñe está por fuera de lo que también fue mi propio recorrido.
            </p>
            <p>
              He creado <strong>REAL</strong>, un método que sintetiza este proceso: Reconocer, Escuchar, Alinear, Liberar.  
              Un mapa claro, profundo, honesto.
            </p>
            <p>
              TRD es para quienes ya saben que no hay atajos.  
              Pero que, aun así, eligen cambiar de verdad.  
              Con dirección. Con presencia. Con visión.
            </p>
          </div>
        </div>
      </section>

      {/* CTA editorial final */}
      <section className={styles.aboutCtaFinal}>
        <p className={styles.ctaFinalText}>
          Si sentís que estás en un momento de cambio, este puede ser un buen lugar para empezar.
        </p>
        <Link to="/test" className={styles.ctaFinalButton}>
          Empezar mi camino →
        </Link>
      </section>
    </div>
  );
};

export default AboutMe;
