// Tester manual: ejecuta con `node src/tests/testLogicaDireccion.js`
import { calculateResultDireccion } from '../utils/calculateResultDireccion.js';

const tests = [
  {
    description: 'Solo tipo A (bucle reflexivo)',
    input: ['A','A','A','A','A','A','A'],
    expected: 'bucle',
  },
  {
    description: 'Solo tipo C (desconexión interna)',
    input: ['C','C','C','C','C','C','C'],
    expected: 'desconexion',
  },
  {
    description: 'Empate A y D (contradicción interna)',
    input: ['A','D','A','D','A','D','C'],
    expected: 'contradiccion',
  },
  {
    description: 'Empate A, B, C (transición interna)',
    input: ['A','B','C','A','B','C','A'],
    expected: 'transicion',
  },
  {
    description: 'Predomina D, baja A y E (impulso desalineado)',
    input: ['D','D','D','C','F','C','C'],
    expected: 'impulso',
  },
  {
    description: 'Predomina E, con baja A y D (miedo simbólico)',
    input: ['E','E','E','C','C','F','C'],
    expected: 'miedo',
  },
  {
    description: 'Predomina G (freno inconsciente)',
    input: ['G','G','G','E','C','C','F'],
    expected: 'freno',
  },
  {
    description: 'Predomina F (fuga de energía)',
    input: ['F','F','F','F','C','C','A'],
    expected: 'fuga',
  },
  {
    description: 'Predomina B (tensión creadora)',
    input: ['B','B','B','C','C','A','C'],
    expected: 'tension',
  },
];

// Opcionales “hardening” (puedes activarlos cuando quieras)
// tests.push(
//   { description: 'A:4, B:3 → bucle', input: ['A','A','A','A','B','B','B'], expected: 'bucle' },
//   { description: 'ABC 3-2-2 → transición', input: ['A','A','A','B','B','C','C'], expected: 'transicion' },
//   { description: 'A:4 vs D:3 → contradicción', input: ['A','A','A','A','D','D','D'], expected: 'contradiccion' },
//   { description: 'E:4; A,D bajos → miedo', input: ['E','E','E','E','C','F','C'], expected: 'miedo' },
//   { description: 'D:4; A,E bajos → impulso', input: ['D','D','D','D','C','C','F'], expected: 'impulso' },
// );

tests.forEach(({ description, input, expected }, i) => {
  const result = calculateResultDireccion(input);
  const status = result === expected ? '✅ OK' : `❌ ERROR → Devuelto: ${result}`;
  console.log(`Test ${i + 1}: ${description} → ${status}`);
});
