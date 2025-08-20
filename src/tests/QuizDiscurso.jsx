import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';
import { calculateResultDiscurso } from '../utils/calculateResultDiscurso';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const QuizDiscurso = () => {
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
      const result = calculateResultDiscurso(answers);
      navigate('/test-discurso/result', { state: { result } });
    }
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (tags, idx) => {
    if (clickingRef.current) return;
    clickingRef.current = true;

    setSelectedIdx(idx);

    setFade(false);
    setTimeout(() => {
      try {
        if (document.activeElement && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch {}

      setAnswers((prev) => [...prev, ...tags]);

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
          {q.options.map((option, index) => (
            <button
              key={index}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.currentTarget.blur()}
              onClick={(e) => { e.currentTarget.blur(); handleAnswer(option.tags, index); }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={`${styles.button} ${index === selectedIdx ? styles.selected : ''}`}
              aria-pressed={index === selectedIdx}
              tabIndex={-1}
            >
              {option.text}
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

export default QuizDiscurso;
