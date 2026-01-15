// src/tests/testLogicaDireccion.js
import { calculateResultDireccion } from '../utils/calculateResultDireccion.js';

const tests = [
  { desc: 'A domina → impulso', input: ['A','A','A','A','A','B','A'], expected: 'impulso' },
  { desc: 'C domina y A bajo → bucle', input: ['C','C','C','C','B','C','D'], expected: 'bucle' },
  { desc: 'D domina + C alto → miedo', input: ['D','D','D','C','C','D','B'], expected: 'miedo' },
  { desc: 'D domina + C bajo → desconexion', input: ['D','D','D','D','B','A','B'], expected: 'desconexion' },
  { desc: 'B alto con mezcla A/C → tension', input: ['B','B','B','A','C','B','C'], expected: 'tension' },
];

tests.forEach(({ desc, input, expected }, i) => {
  const result = calculateResultDireccion(input);
  const ok = result === expected ? '✅ OK' : `❌ ERROR → ${result}`;
  console.log(`Test ${i + 1}: ${desc} → ${ok}`);
});
