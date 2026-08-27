import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from '../styles/homeSectionTwo.module.css';
import layout from '../styles/layout.module.css';

const HomeSectionTwo = () => {
  const navigate = useNavigate();

  const goSoon = (titulo, detalle) => {
    navigate('/proximamente', {
      state: {
        titulo,
        detalle,
      },
    });
  };

  const proposals = [
    {
      id: 'programas',
      title: 'Programas',
      description:
        'Procesos estructurados que se desarrollan durante un período determinado y alrededor de un objetivo concreto.',
      status: 'Próximamente',
      button: 'Conocer más',
      action: () =>
        goSoon(
          'Programas TDR',
          'Estoy desarrollando los primeros programas de TDR. Próximamente encontrarás aquí nuevas propuestas.'
        ),
    },
    {
      id: 'experiencias',
      title: 'Experiencias',
      description:
        'Propuestas presenciales que pueden integrar Sound Healing, respiración, atención, movimiento y otras prácticas.',
      status: 'Próximamente',
      button: 'Conocer más',
      action: () =>
        goSoon(
          'Experiencias TDR',
          'Estoy desarrollando las primeras experiencias de TDR. Próximamente encontrarás aquí fechas y formatos.'
        ),
    },
    {
      id: 'individual',
      title: 'Acompañamiento individual',
      description:
        'Trabajo 1:1 para abordar una situación o proceso de manera personalizada.',
      status: 'En preparación',
      button: 'Conocer más',
      action: () =>
        goSoon(
          'Acompañamiento individual',
          'La propuesta de acompañamiento individual está siendo actualizada. Próximamente podrás consultar modalidades y disponibilidad.'
        ),
    },
    {
      id: 'recursos',
      title: 'Recursos',
      description:
        'Tests y contenidos para conocer TDR, explorar una situación y empezar sin contratar una propuesta.',
      status: 'Disponible',
      button: 'Explorar',
      action: () => navigate('/tests'),
    },
  ];

  return (
    <section
      id="formas-de-trabajar"
      className={`${styles.pageThree} ${layout.wrapperFullWidth}`}
    >
      <div className={styles.pageThreeContent}>
        <div className={styles.mainPanel}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>TDR</p>

            <h2 className={styles.title}>
              Formas de trabajar
            </h2>

            <p className={styles.intro}>
              Distintas propuestas para trabajar con TDR.
            </p>
          </header>

          <div className={styles.proposals}>
            {proposals.map((proposal) => (
              <article
                key={proposal.id}
                className={styles.proposal}
              >
                <div
                  className={`${styles.visual} ${styles[proposal.id]}`}
                  aria-hidden="true"
                >
                  <span>{proposal.title}</span>
                </div>

                <div className={styles.proposalBody}>
                  <p className={styles.status}>
                    {proposal.status}
                  </p>

                  <h3 className={styles.proposalTitle}>
                    {proposal.title}
                  </h3>

                  <p className={styles.description}>
                    {proposal.description}
                  </p>

                  <button
                    type="button"
                    className={styles.proposalButton}
                    onClick={proposal.action}
                  >
                    {proposal.button}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;