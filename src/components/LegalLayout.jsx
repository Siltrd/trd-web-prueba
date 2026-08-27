import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/legalLayout.module.css';

const LegalLayout = ({
  title,
  updated,
  sections = [],
  children,
}) => {
  return (
    <section className={styles.legalPage}>
      <div className={styles.legalContainer}>
        <header className={styles.legalHeader}>
          <p className={styles.eyebrow}>Documentación legal</p>

          <h1>{title}</h1>

          {updated && (
            <p className={styles.updated}>
              Última actualización: {updated}
            </p>
          )}
        </header>

        {sections.length > 0 && (
          <nav
            className={styles.index}
            aria-label={`Índice de ${title}`}
          >
            <p className={styles.indexTitle}>Contenido</p>

            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>
                    {section.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className={styles.legalContent}>
          {children}
        </article>

        <div className={styles.legalLinks}>
          <Link to="/terminos-y-condiciones">
            Términos y Condiciones
          </Link>

          <Link to="/privacidad">
            Privacidad
          </Link>

          <Link to="/cookies">
            Cookies
          </Link>

          <Link to="/reservas-cancelaciones-devoluciones">
            Reservas y devoluciones
          </Link>

          <Link to="/arrepentimiento">
            Arrepentimiento
          </Link>

          <Link to="/baja-de-servicio">
            Baja de servicio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLayout;