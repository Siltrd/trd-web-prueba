// DIRECCIÓN (A/B/C/D) → { tension, desconexion, bucle, impulso, miedo }
// A = claridad/acción alineada (drive)
// B = análisis/foco flexible (tensión constructiva)
// C = dudas/altibajos/bucle mental
// D = evitación/postergación/desconexión práctica

export function calculateResultDireccion(rawAnswers) {
  if (!rawAnswers || rawAnswers.length === 0) return 'tension';

  // Normaliza: admite "A" o { tag, points, qIndex }
  const answers = rawAnswers.map((x, i) => {
    if (typeof x === 'string') return { tag: x, points: 1, qIndex: i };
    const tag = Array.isArray(x.tags) ? x.tags[0] : x.tag;
    let points = 1;
    if (typeof x.points === 'number') points = x.points;
    else if (x.points && typeof x.points === 'object' && tag && x.points[tag] != null) points = x.points[tag];
    const qIndex = Number.isFinite(x.qIndex) ? x.qIndex : i;
    return { tag, points, qIndex };
  }).filter(a => a && a.tag && 'ABCD'.includes(a.tag));

  const n = answers.length;
  if (!n) return 'tension';

  // Peso leve a las últimas 3 preguntas (estado actual). Cambia a 1.0 si no lo querés.
  const weightFor = (q) => (q >= n - 3 ? 1.15 : 1.0);

  // Conteo ponderado
  const count = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => { count[a.tag] += a.points * weightFor(a.qIndex); });

  const a = count.A, b = count.B, c = count.C, d = count.D;

  // Puntuaciones por tipo (lineales y transparentes)
  // - bucle: duda/altibajos mentales (C)
  // - miedo: evitación/costo de actuar (D), con refuerzo si también hay C
  // - tensión: análisis/foco sin eje único (B) y mezcla A/C
  // - impulso: empuje/acción; penaliza dudas/evitación
  // - desconexión: evitación práctica + sensación de “no-me-pasa-por-adentro”
  const score = {
    bucle:        1.00 * c + 0.10 * b,
    miedo:        1.00 * d + 0.40 * c,
    tension:      1.00 * b + 0.35 * a + 0.35 * c,
    impulso:      Math.max(0, 1.00 * a - 0.25 * c - 0.25 * d - 0.10 * b),
    desconexion:  0.85 * d + 0.55 * c + (a < b ? 0.20 * b : 0),
  };

  // Reglas rápidas que prevalecen en casos claros
  // Mucho D domina → miedo/desconexión
  if (d >= Math.max(a, b, c) && d >= 3) {
  // si además hay C relevante, la evitación suele venir de miedo/impacto del cambio
  if (c >= 2) return 'miedo';
  return 'desconexion';
  }
  // Mucho C y bajo A → bucle
  if (c >= Math.max(a, b, d) && a <= c * 0.6 && c >= 3) return 'bucle';
  // B alto con mezcla A/C → tensión
  if (b >= 3 && ( (a >= 2 && c >= 2) || b >= Math.max(a, c) )) return 'tension';

  // Selección por mayor puntaje
  const sorted = Object.entries(score).sort((x, y) => y[1] - x[1]);
  const topScore = sorted[0][1];
  const leaders = sorted.filter(([, v]) => Math.abs(v - topScore) < 1e-9).map(([k]) => k);

  if (leaders.length === 1) return leaders[0];

  // Desempates con prioridad clínica (qué conviene reflejar primero al usuario)
  const priority = ['miedo', 'desconexion', 'bucle', 'tension', 'impulso'];
  for (const p of priority) if (leaders.includes(p)) return p;

  return leaders[0] || 'tension';
}

export default calculateResultDireccion;
