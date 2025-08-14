import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';
import calculateResultDiscurso from '../utils/calculateResultDiscurso';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const STORAGE_KEY = 'tdr_disc_answers_v1';
const DEBUG = false; // poné true si querés ver conteos

const QuizDiscurso = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // 1 tag por pregunta (A|C|D)
  const [fade, setFade] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const clickingRef = useRef(false); // evita doble click

  // Restaurar progreso (1 tag por pregunta)
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setAnswers(parsed);
          const qIndex = Math.min(parsed.length, totalQuestions); // siguiente pregunta
          setCurrentQuestion(qIndex);
        }
      }
    } catch { /* noop */ }
  }, [totalQuestions]);

  // Persistir progreso
  useEffect(() => {
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch {}
  }, [answers]);

  // Finalizar → calcular, limpiar, navegar (mismo patrón que Dirección)
  useEffect(() => {
    if (!isCompleted) return;
    const result = calculateResultDiscurso(answers);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.setItem('tdr_disc_result', result);
    } catch { /* noop */ }
    navigate('/test-discurso/result', { state: { result }, replace: true });
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (tags) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    if (DEBUG) console.info('[TDR-DISC] click tags:', tags);

    setFade(false);
    setTimeout(() => {
      setAnswers(prev => [...prev, ...tags]); // tags = [ 'A' ] | [ 'C' ] | [ 'D' ]

      if (currentQuestion + 1 >= totalQuestions) {
        setIsCompleted(true);
      } else {
        setCurrentQuestion(prev => prev + 1);
        setFade(true);
      }
      clickingRef.current = false;
    }, 180);
  };

  const resetTest = () => {
    try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
    setAnswers([]);
    setCurrentQuestion(0);
    setIsCompleted(false);
    setFade(true);
  };

  if (isCompleted) return null;

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0) scale(1)' : 'translateY(5px) scale(0.98)',
          transition: 'opacity .2s ease, transform .2s ease',
        }}
      >
        {/* Título */}
        <h2 className={styles.question}>{q.question}</h2>

        {/* Barra de progreso */}
        <div className={styles.progressBarWrap} aria-hidden="true">
          <div className={styles.progressBarTrack}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
          </div>
          <span className={styles.progressLabel}>
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        {/* Opciones */}
        <div className={styles.optionsWrapper}>
          {q.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.tags)}
              className={styles.button}
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
