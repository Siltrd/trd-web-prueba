import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const QuizDiscurso = () => {
  const navigate = useNavigate();
  const totalQuestions = questions.length;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isCompleted) {
      const result = calculateResult(answers);
      navigate('/test-discurso/result', { state: { result } });
    }
  }, [isCompleted, answers, navigate]);

  const handleAnswer = (tags) => {
    if (currentQuestion >= totalQuestions) return;

    setFade(false);

    setTimeout(() => {
      setAnswers((prev) => [...prev, ...tags]);

      if (currentQuestion + 1 < totalQuestions) {
        setCurrentQuestion((prev) => prev + 1);
        setFade(true);
      } else {
        setIsCompleted(true);
      }
    }, 200);
  };

  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };
    tags.forEach((tag) => {
      if (count[tag] !== undefined) count[tag]++;
    });

    const max = Math.max(count.A, count.C, count.D);
    const keysWithMax = Object.keys(count).filter((k) => count[k] === max);

    if (keysWithMax.length === 3) return 'transicion';
    if (keysWithMax.length === 2) return 'friccion_discurso';

    const mapa = { A: 'accion', C: 'pausa', D: 'camuflaje' };
    return mapa[keysWithMax[0]] || 'friccion_discurso';
  };

  if (isCompleted || currentQuestion >= totalQuestions) return null;

  const current = questions[currentQuestion];

  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0px) scale(1)' : 'translateY(5px) scale(0.98)',
        }}
      >
        <h2 className={styles.question}>{current.question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}>
          {current.options.map((option, index) => (
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
