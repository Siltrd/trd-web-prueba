import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import results from '../data/results_discurso';
import styles from '../styles/testStyles/resultDireccion.module.css'; // reutilizamos el mismo CSS

const STORAGE_RESULT_KEY = 'tdr_disc_result';

const ResultDiscurso = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [key, setKey] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    let k = location.state?.result;

    if (!k) {
      try {
        const stored = sessionStorage.getItem(STORAGE_RESULT_KEY);
        if (stored) k = stored;
      } catch { /* noop */ }
    }

    if (k && results[k]) {
      setKey(k);
      setChecking(false);
    } else {
      navigate('/test-discurso/quiz', { replace: true });
    }
  }, [location.state, navigate]);

  if (checking || !key) return null;

  const data = results[key];

  const handleBuy = (cta) => {
    // Implementá tu acción real (checkout / WhatsApp / link externo)
    console.log('CTA Discurso:', key, cta?.titulo);
    // window.location.href = '/checkout?sku=tdr-disc-' + key;
  };

  return (
    <section className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.kicker}>{data.title}</h1>
      </header>

      <div className={styles.layout}>
        {/* Columna principal */}
        <main className={styles.main}>
          {data.diagnostico && <p className={styles.copy}>{data.diagnostico}</p>}

          {data.imagen && (
            <div className={styles.callout}>
              <span className={styles.calloutIcon} aria-hidden>✦</span>
              <p className={styles.calloutText}>{data.imagen}</p>
            </div>
          )}

          {data.coste && (
            <div className={styles.block}>
              <h2 className={styles.h2}>Coste de no actuar</h2>
              <p className={styles.copy}>{data.coste}</p>
            </div>
          )}
        </main>

        {/* Columna CTA sticky */}
        {data.cta && (
          <aside className={styles.aside}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>{data.cta.titulo}</h3>
              {data.cta.descripcion && <p className={styles.copy}>{data.cta.descripcion}</p>}
              {data.cta.frase && <blockquote className={styles.quote}>{data.cta.frase}</blockquote>}

              <div className={styles.priceRow}>
                {data.cta.precio && <span className={styles.price}>{data.cta.precio}</span>}
                {data.cta.acceso && <span className={styles.badge}>Acceso inmediato</span>}
              </div>

              <button className={styles.btnPrimary} onClick={() => handleBuy(data.cta)}>
                Obtener ahora
              </button>

              {data.cta.acceso && <p className={styles.meta}>{data.cta.acceso}</p>}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export default ResultDiscurso;
