import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';
import * as disc from '../utils/calculateResultDiscurso';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const calculateResultDiscurso =
  disc.default ?? disc.calculateResultDiscurso;

const QuizDiscurso = () => {
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

    const result = calculateResultDiscurso(answers);

    navigate('/test-discurso/result', {
      state: { result },
      replace: true,
    });
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (tags, idx) => {
    if (clickingRef.current) return;

    clickingRef.current = true;
    setSelectedIdx(idx);
    setFade(false);

    setTimeout(() => {
      const activeElement = document.activeElement;

      if (activeElement instanceof HTMLElement) {
        activeElement.blur();
      }

      setAnswers((prev) => [...prev, ...tags]);

      if (currentQuestion + 1 >= totalQuestions) {
        setIsCompleted(true);
      } else {
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
          {q.options.map((option, index) => (
            <button
              key={index}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.currentTarget.blur()}
              onClick={(e) => {
                e.currentTarget.blur();
                handleAnswer(option.tags, index);
              }}
              onTouchEnd={(e) => e.currentTarget.blur()}
              className={`${styles.button} ${
                index === selectedIdx ? styles.selected : ''
              }`}
              aria-pressed={index === selectedIdx}
              tabIndex={-1}
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