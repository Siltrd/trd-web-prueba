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

  useEffect(() => {
    setSelectedIdx(null);

    setTimeout(() => {
      const activeElement = document.activeElement;

      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }
    }, 0);
  }, [currentQuestion]);

  useEffect(() => {
    if (!isCompleted) return;

    const result = calculateResultDireccion(answers);

    navigate('/test-direccion/result', {
      state: { result },
      replace: true,
    });
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (opt, idx) => {
    if (clickingRef.current) return;

    clickingRef.current = true;
    setSelectedIdx(idx);

    const tag = Array.isArray(opt.tags)
      ? opt.tags[0]
      : (opt.tag ?? null);

    const points = (() => {
      if (typeof opt.points === 'number') {
        return opt.points;
      }

      if (
        opt.points &&
        typeof opt.points === 'object' &&
        tag &&
        opt.points[tag] != null
      ) {
        return opt.points[tag];
      }

      return 1;
    })();

    setFade(false);

    setTimeout(() => {
      const activeElement = document.activeElement;

      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }

      const answer = {
        tag,
        points,
        qIndex: currentQuestion,
      };

      if (currentQuestion + 1 >= totalQuestions) {
        const finalAnswers = [...answers, answer];
        const result = calculateResultDireccion(finalAnswers);

        try {
          sessionStorage.setItem('tdr_dir_result', result);
        } catch {
          console.warn('No se pudo guardar el resultado en sessionStorage');
        }

        setAnswers(finalAnswers);
        setIsCompleted(true);
      } else {
        setAnswers((prev) => [...prev, answer]);
        setCurrentQuestion((prev) => prev + 1);
        setFade(true);
      }

      setSelectedIdx(null);
      clickingRef.current = false;
    }, 260);
  };

  const q = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className={styles.container}>
      <div
        key={`q-${currentQuestion}`}
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade
            ? 'translateY(0) scale(1)'
            : 'translateY(5px) scale(0.98)',
          transition: 'opacity .2s ease, transform .2s ease',
        }}
      >
        <h2 className={styles.question}>{q.question}</h2>

        <div
          className={styles.progressBarWrap}
          aria-hidden="true"
        >
          <div className={styles.progressBarTrack}>
            <div
              className={styles.progressBarFill}
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className={styles.progressLabel}>
            {currentQuestion + 1} / {totalQuestions}
          </span>
        </div>

        <div className={styles.optionsWrapper}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.currentTarget.blur()}
              onClick={(e) => {
                e.currentTarget.blur();
                handleAnswer(opt, idx);
              }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={`${styles.button} ${
                idx === selectedIdx ? styles.selected : ''
              }`}
              aria-pressed={idx === selectedIdx}
              tabIndex={-1}
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