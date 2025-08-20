import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_direccion';
import { calculateResultDireccion } from '../utils/calculateResultDireccion';
import styles from '../styles/testStyles/quiz_direccion.module.css';

const QuizDireccion = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const clickingRef = useRef(false);

  // Reset selección y foco al cambiar de pregunta
  useEffect(() => {
    setSelectedIdx(null);
    setTimeout(() => {
      try {
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch {}
    }, 0);
  }, [currentQuestion]);

  useEffect(() => {
    if (isCompleted) {
      const result = calculateResultDireccion(answers);
      navigate('/test-direccion/result', { state: { result } });
    }
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (opt, idx) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    setSelectedIdx(idx);

    const tag = Array.isArray(opt.tags) ? opt.tags[0] : (opt.tag ?? null);
    const points = (() => {
      if (typeof opt.points === 'number') return opt.points;
      if (opt.points && typeof opt.points === 'object' && tag && opt.points[tag] != null) {
        return opt.points[tag];
      }
      return 1;
    })();

    setFade(false);
    setTimeout(() => {
      try {
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch {}

      setAnswers((prev) => [...prev, { tag, points, qIndex: currentQuestion }]);

      if (currentQuestion + 1 >= totalQuestions) {
        setIsCompleted(true);
      } else {
        setCurrentQuestion((prev) => prev + 1);
        setFade(true);
      }

      setSelectedIdx(null);
      clickingRef.current = false;
    }, 200);
  };

  const q = questions[currentQuestion];

  return (
    <main className={styles.quizWrapper}>
      <section className={`${styles.quizInner} ${fade ? styles.fadeIn : styles.fadeOut}`}>
        <h2 className={styles.question}>{q.question}</h2>
        <div className={styles.optionsWrapper}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.currentTarget.blur()}
              onClick={(e) => { e.currentTarget.blur(); handleAnswer(opt, idx); }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={`${styles.button} ${idx === selectedIdx ? styles.selected : ''}`}
              aria-pressed={idx === selectedIdx}
              tabIndex={-1}
            >
              {opt.text}
            </button>
          ))}
        </div>
        <p className={styles.progress}>
          Pregunta {currentQuestion + 1} de {totalQuestions}
        </p>
      </section>
    </main>
  );
};

export default QuizDireccion;
