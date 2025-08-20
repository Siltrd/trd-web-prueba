import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';
import calculateResultDiscurso from '../utils/calculateResultDiscurso';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const STORAGE_KEY = 'tdr_disc_answers_v1';
const DEBUG = false;

const QuizDiscurso = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // p.ej. ['A']
  const [fade, setFade] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null); // feedback visual
  const clickingRef = useRef(false);

  // Restaurar progreso
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setAnswers(parsed);
          const qIndex = Math.min(parsed.length, totalQuestions);
          setCurrentQuestion(qIndex);
        }
      }
    } catch { /* noop */ }
  }, [totalQuestions]);

  // Persistir progreso
  useEffect(() => {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch {}
  }, [answers]);

  // Resetear selección al cambiar de pregunta
  useEffect(() => {
    setSelectedIdx(null);
  }, [currentQuestion]);

  // Finalizar → calcular, limpiar, navegar
  useEffect(() => {
    if (!isCompleted) return;
    const result = calculateResultDiscurso(answers);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.setItem('tdr_disc_result', result);
    } catch { /* noop */ }
    navigate('/test-discurso/result', { state: { result }, replace: true });
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (tags, idx) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    setSelectedIdx(idx); // marca selección

    if (DEBUG) console.info('[TDR-DISC] click tags:', tags);

    setFade(false);
    setTimeout(() => {
      // blur global
      try {
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch {}

      setAnswers(prev => [...prev, ...tags]); // p.ej. ['A']

      if (currentQuestion + 1 >= totalQuestions) {
        setIsCompleted(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
        setFade(true);
      }

      setSelectedIdx(null); // seguridad extra
      clickingRef.current = false;
    }, 220);
  };

  if (isCompleted) return null;

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      <div
        key={`q-${currentQuestion}`} // fuerza remonte visual
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0) scale(1)' : 'translateY(5px) scale(0.98)',
          transition: 'opacity .2s ease, transform .2s ease',
        }}
      >
        <h2 className={styles.question}>{q.question}</h2>

        <div className={styles.progressBarWrap} aria-hidden="true">
          <div className={styles.progressBarTrack}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressLabel}>
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        <div className={styles.optionsWrapper}>
          {q.options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => { e.currentTarget.blur(); handleAnswer(option.tags, index); }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={`${styles.button} ${index === selectedIdx ? styles.selected : ''}`}
              aria-pressed={index === selectedIdx}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDiscurso;
