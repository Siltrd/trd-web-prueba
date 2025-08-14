// src/tests/testLogicaDiscurso.js
// Ejecuta: node src/tests/testLogicaDiscurso.js
import calculateResultDiscurso from '../utils/calculateResultDiscurso.js';

const tests = [
  { desc: 'Solo A → acción',                input: ['A','A','A','A','A','A','A','A','A'], expected: 'accion' },
  { desc: 'Solo C → pausa emocional',       input: ['C','C','C','C','C','C','C','C','C'], expected: 'pausa' },
  { desc: 'Solo D → camuflaje funcional',   input: ['D','D','D','D','D','D','D','D','D'], expected: 'camuflaje' },

  { desc: 'Empate fuerte A y C → fricción', input: ['A','A','A','C','C','C','D','C','A'], expected: 'friccion_discurso' },
  { desc: 'Empate fuerte A y D → fricción', input: ['A','A','A','D','D','D','C','D','A'], expected: 'friccion_discurso' },
  { desc: 'Empate fuerte C y D → fricción', input: ['C','C','C','D','D','D','A','C','D'], expected: 'friccion_discurso' },

  { desc: 'Transición A/C/D cluster 3-3-3', input: ['A','A','A','C','C','C','D','D','D'], expected: 'transicion' },
  { desc: 'Transición A/C/D cluster 4-3-3', input: ['A','A','A','A','C','C','C','D','D','D'], expected: 'transicion' },
  { desc: 'Transición A/C/D cluster 3-3-2', input: ['A','A','A','C','C','C','D','D'],     expected: 'transicion' },
];

tests.forEach(({ desc, input, expected }, i) => {
  const obtained = calculateResultDiscurso(input);
  const ok = obtained === expected ? '✅ OK' : `❌ ERROR → ${obtained}`;
  console.log(`Test ${i + 1}: ${desc} → ${ok}`);
});
