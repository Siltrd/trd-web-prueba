import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_direccion';
import { calculateResultDireccion } from '../utils/calculateResultDireccion';
import styles from '../styles/testStyles/quiz_direccion.module.css';

const STORAGE_KEY = 'tdr_dir_answers_v2'; // bump para separar del formato anterior
const RESULT_KEY = 'tdr_dir_result';
const DEBUG = false;

const QuizDireccion = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  // Guardamos objetos: { tag, points, qIndex }
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
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
    } catch (error) {
      console.error("Error al recuperar el progreso:", error);
    }
  }, [totalQuestions]);

  // Persistir progreso
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch (error) {
      console.error("Error al guardar el progreso:", error);
    }
  }, [answers]);

  // Finalizar → calcular, limpiar, navegar
  useEffect(() => {
    if (!isCompleted) return;

    const result = calculateResultDireccion(answers);
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.setItem(RESULT_KEY, result);
    } catch (error) {
      console.error('Error al guardar el resultado:', error);
    }

    navigate('/test-direccion/result', { state: { result }, replace: true });
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (opt) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    const tag = Array.isArray(opt.tags) ? opt.tags[0] : (opt.tag ?? null);
    const points = (() => {
      if (typeof opt.points === 'number') return opt.points;
      if (opt.points && typeof opt.points === 'object' && tag && opt.points[tag] != null) {
        return opt.points[tag];
      }
      return 1;
    })();

    if (DEBUG) console.info('[TDR-DIR] click:', { tag, points, qIndex: currentQuestion });

    setFade(false);
    setTimeout(() => {
      setAnswers((prev) => [...prev, { tag, points, qIndex: currentQuestion }]);

      if (currentQuestion + 1 >= totalQuestions) {
        setIsCompleted(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setFade(true);
      }

      clickingRef.current = false;
    }, 160);
  };

  if (isCompleted) return null;

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      {/* key fuerza el remonte visual al cambiar de pregunta */}
      <div
        key={`q-${currentQuestion}`}
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0) scale(1)' : 'translateY(5px) scale(0.98)',
          transition: 'opacity .2s ease, transform .2s ease',
        }}
      >
        {/* Título de la pregunta */}
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
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => { e.currentTarget.blur(); handleAnswer(opt); }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={styles.button}
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizDireccion;
