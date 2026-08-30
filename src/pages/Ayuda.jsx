import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ayuda.module.css';

const Ayuda = () => {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>TDR Tunica de Realidad</p>

          <h1>Ayuda y atención</h1>

          <p className={styles.intro}>
            Aquí puedes encontrar los canales de contacto y los accesos
            relacionados con reservas, cancelaciones, devoluciones,
            arrepentimiento, baja de servicios y privacidad.
          </p>
        </header>

        <section
          className={styles.section}
          aria-labelledby="consultas"
        >
          <h2 id="consultas">Consultas y atención</h2>

          <p>
            Para consultas generales, información sobre servicios,
            contrataciones o reservas, puedes utilizar el formulario de
            contacto o escribir por correo electrónico.
          </p>

          <div className={styles.actions}>
            <Link
              to="/contacto"
              className={styles.primaryLink}
            >
              Contactar con TDR
            </Link>

            <a
              href="mailto:contacto@tunicaderealidad.com"
              className={styles.secondaryLink}
            >
              contacto@tunicaderealidad.com
            </a>
          </div>

          <p className={styles.note}>
            Horario de atención: lunes a viernes de 10:00 a 18:00,
            excepto feriados nacionales.
          </p>
        </section>

        <section
          className={styles.section}
          aria-labelledby="reservas"
        >
          <h2 id="reservas">
            Reservas, cancelaciones y devoluciones
          </h2>

          <p>
            Consulta las condiciones aplicables a reservas,
            reprogramaciones, cancelaciones, inasistencias y reintegros.
          </p>

          <Link
            to="/reservas-cancelaciones-devoluciones"
            className={styles.textLink}
          >
            Ver Política de Reservas, Cancelaciones y Devoluciones
          </Link>
        </section>

        <section
          className={styles.section}
          aria-labelledby="derechos"
        >
          <h2 id="derechos">
            Arrepentimiento y baja de servicio
          </h2>

          <p>
            Estos procedimientos permiten iniciar las solicitudes
            correspondientes sin necesidad de crear una cuenta ni iniciar
            sesión.
          </p>

          <div className={styles.legalActions}>
            <Link
              to="/arrepentimiento"
              className={styles.legalButton}
            >
              Botón de Arrepentimiento
            </Link>

            <Link
              to="/baja-de-servicio"
              className={styles.legalButton}
            >
              Botón de Baja de Servicio
            </Link>
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="reclamos"
        >
          <h2 id="reclamos">Consultas, solicitudes y reclamos</h2>

          <p>
            Las consultas, solicitudes y reclamos pueden dirigirse al
            canal de atención de TDR.
          </p>

          <p className={styles.pendingData}>
            Correo electrónico:{' '}
            <strong>contacto@tunicaderealidad.com</strong>
            <br />
            Horario de atención:{' '}
            <strong>
              lunes a viernes de 10:00 a 18:00, excepto feriados nacionales
            </strong>
          </p>
        </section>

        <section
          className={styles.section}
          aria-labelledby="privacidad"
        >
          <h2 id="privacidad">Privacidad y datos personales</h2>

          <p>
            Puedes consultar cómo se tratan los datos personales y qué
            tecnologías puede utilizar el sitio.
          </p>

          <div className={styles.inlineLinks}>
            <Link
              to="/privacidad"
              className={styles.textLink}
            >
              Política de Privacidad
            </Link>

            <Link
              to="/cookies"
              className={styles.textLink}
            >
              Política de Cookies
            </Link>
          </div>
        </section>

        <section
          className={styles.section}
          aria-labelledby="documentacion"
        >
          <h2 id="documentacion">Documentación legal</h2>

          <div className={styles.inlineLinks}>
            <Link
              to="/terminos-y-condiciones"
              className={styles.textLink}
            >
              Términos y Condiciones
            </Link>

            <Link
              to="/reservas-cancelaciones-devoluciones"
              className={styles.textLink}
            >
              Reservas y devoluciones
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Ayuda;