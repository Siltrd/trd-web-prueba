import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions_direccion.js';
import styles from '../styles/testStyles/quiz_direccion.module.css';

const QuizDireccion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Componente QuizDireccion montado');
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Manejo de la respuesta del usuario
  const handleAnswer = (tags) => {
    setFade(false);
    
    // Usamos una función de actualización de estado basada en el valor previo
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers, ...tags];
      console.log('🔍 Updated answers:', updatedAnswers); // Verificar las respuestas actualizadas

      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
        setFade(true);
      } else {
        // Calcular el resultado final y navegar a la página de resultados
        const result = calculateResult(updatedAnswers);
        console.log('🔍 Calculated result:', result); // Verificar el resultado calculado

        // Navegar a la página de resultados, pasando el resultado como estado
        navigate('/test-direccion/result', {
          state: { result },
        });
      }

      return updatedAnswers; // Actualizar el estado con las nuevas respuestas
    });
  };

  // Calcular el resultado basado en las respuestas
  const calculateResult = (tags) => {
    const count = { A: 0, C: 0, D: 0 };

    tags.forEach((tag) => {
      if (count[tag] !== undefined) {
        count[tag]++;
      }
    });

    const max = Math.max(count.A, count.C, count.D);
    const keysWithMax = Object.keys(count).filter((k) => count[k] === max);

    if (keysWithMax.length === 3) return 'transicion'; // Empate entre tres respuestas
    if (keysWithMax.length === 2) return 'friccion_interna'; // Empate entre dos

    const dominante = keysWithMax[0];
    const mapaResultados = {
      A: 'fuga',
      C: 'bucle',
      D: 'pausa',
    };

    return mapaResultados[dominante] || 'contradiccion'; // Resultado por defecto
  };

  // Obtener la pregunta actual
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

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.2rem',
          }}
        >
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

export default QuizDireccion;
