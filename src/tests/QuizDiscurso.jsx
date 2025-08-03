import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_discurso.js';
import styles from '../styles/testStyles/quiz_discurso.module.css';

const QuizDiscurso = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  const handleAnswer = (tags) => {
    const updatedAnswers = [...answers, ...tags];
    setFade(false);

    setTimeout(() => {
      setAnswers(updatedAnswers);
      const next = currentQuestion + 1;

      if (next < questions.length) {
        setCurrentQuestion(next);
        setFade(true);
      } else {
        const result = calculateResult(updatedAnswers);
        navigate('/test-discurso/result', {
          state: { result }
        });
      }
    }, 300);
  };

  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };

    tags.forEach(tag => {
      if (count[tag] !== undefined) {
        count[tag]++;
      }
    });

    const max = Math.max(count.A, count.C, count.D);
    const keysWithMax = Object.keys(count).filter(k => count[k] === max);

    if (keysWithMax.length === 3) return 'transicion';
    if (keysWithMax.length === 2) return 'friccion_discurso'; // Clave única

    const dominante = keysWithMax[0];
    const mapaResultados = {
      A: 'accion',
      C: 'pausa',
      D: 'camuflaje'
    };

    return mapaResultados[dominante] || 'friccion_discurso';
  };

  const current = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className={styles.container}>
      <div
        className={styles.card}
        style={{
          opacity: fade ? 1 : 0,
          transform: fade ? 'translateY(0px) scale(1)' : 'translateY(5px) scale(0.98)',
        }}
      >
        <div className={styles.progressBar}>
          <p style={{ marginBottom: '0.5rem', fontWeight: '500', color: '#1e364d' }}>
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
          <div style={{
            height: '6px',
            backgroundColor: '#eee',
            borderRadius: '3px',
            overflow: 'hidden'
          }}>
            <div
              className={styles.progressBarInner}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <h2 className={styles.question}>{current.question}</h2>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem'
        }}>
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
