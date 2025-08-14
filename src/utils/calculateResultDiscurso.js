// DISCURSO (A/B/C/D) → { accion, pausa, camuflaje, friccion_discurso, transicion }
// A = acción/claridad/impacto
// B = conexión/empatía/estilo propio (puede tirar a transición o fricción)
// C = pausa/análisis/longitud
// D = camuflaje/tono prestado

export default function calculateResultDiscurso(rawTags) {
  if (!rawTags || rawTags.length === 0) return 'accion';

  // Normaliza: admite "A" o { tag, points, qIndex }
  const answers = rawTags.map((x, i) => {
    if (typeof x === 'string') return { tag: x, points: 1, qIndex: i };
    const tag = Array.isArray(x.tags) ? x.tags[0] : x.tag;
    let points = 1;
    if (typeof x.points === 'number') points = x.points;
    else if (x.points && typeof x.points === 'object' && tag && x.points[tag] != null) points = x.points[tag];
    const qIndex = Number.isFinite(x.qIndex) ? x.qIndex : i;
    return { tag, points, qIndex };
  }).filter(a => a && a.tag && 'ABCD'.includes(a.tag));

  const n = answers.length;
  if (!n) return 'accion';

  const weightFor = (q) => (q >= n - 3 ? 1.10 : 1.0);

  const tally = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => { tally[a.tag] += a.points * weightFor(a.qIndex); });

  const A = tally.A, B = tally.B, C = tally.C, D = tally.D;

  // Puntuaciones base
  const score = {
    accion:           Math.max(0, 1.00 * A - 0.20 * C - 0.20 * D),
    pausa:            Math.max(0, 1.00 * C - 0.20 * A),
    camuflaje:        1.00 * D + 0.20 * C, // C puede esconder autenticidad con exceso de forma
    friccion_discurso: 0.90 * Math.min(A, C) + 0.90 * Math.min(A, D) + 0.90 * Math.min(C, D) + 0.30 * B,
    transicion:       0.80 * B + balanceScore(A, C, D),
  };

  // Reglas previas (casos claros)
  if (D >= 3 && D >= Math.max(A, B, C)) return 'camuflaje';
  if (A >= 3 && A >= Math.max(B, C, D)) return 'accion';
  if (C >= 3 && C >= Math.max(A, B, D)) return 'pausa';

  // Empates fuertes entre dos ejes (fricción)
  if ( (A >= 3 && C >= 3) || (A >= 3 && D >= 3) || (C >= 3 && D >= 3) ) {
    // Si además B es alto, suele sentirse como “quiero conectar pero algo choca”
    if (B >= 2) return 'friccion_discurso';
  }

  // Selección por mayor puntaje
  const sorted = Object.entries(score).sort((x, y) => y[1] - x[1]);
  const topScore = sorted[0][1];
  const leaders = sorted.filter(([, v]) => Math.abs(v - topScore) < 1e-9).map(([k]) => k);

  if (leaders.length === 1) return leaders[0];

  // Desempates: priorizamos devolver primero el bloqueo útil para la venta del servicio
  const priority = ['camuflaje', 'friccion_discurso', 'transicion', 'pausa', 'accion'];
  for (const p of priority) if (leaders.includes(p)) return p;

  return leaders[0] || 'accion';

  // — helpers —
  function balanceScore(a, c, d) {
    // Puntúa “equilibrio” entre A/C/D (transición = reconfiguración de estilo)
    const mean = (a + c + d) / 3;
    const dev = Math.abs(a - mean) + Math.abs(c - mean) + Math.abs(d - mean); // 0 = perfecto equilibrio
    // Cuanto menor la desviación, mayor la transición; cap a 3 para mantener escala parecida
    return Math.max(0, 3 - dev);
  }
}
