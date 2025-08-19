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

  // Peso levemente mayor a las últimas 3 respuestas
  const weightFor = (q) => (q >= n - 3 ? 1.10 : 1.0);

  const tally = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach(a => { tally[a.tag] += a.points * weightFor(a.qIndex); });

  const A = tally.A, B = tally.B, C = tally.C, D = tally.D;

  // --- Puntuaciones base (mantengo tu idea y la afino levemente) ---
  const score = {
    accion:            Math.max(0, 1.00 * A - 0.20 * C - 0.20 * D),
    pausa:             Math.max(0, 1.00 * C - 0.20 * A),
    camuflaje:         1.00 * D + 0.20 * C, // C puede esconder autenticidad con exceso de forma
    friccion_discurso: 0.90 * Math.min(A, C) + 0.90 * Math.min(A, D) + 0.90 * Math.min(C, D) + 0.30 * B,
    transicion:        0.80 * B + balanceScore(A, C, D),
  };

  // --- Reglas de tensión para FRICCIÓN (se evalúan ANTES que los casos claros) ---
  // Umbrales ajustables
  const TH_STRONG = 3;  // “alto”
  const TH_MOD    = 2;  // “moderado”
  const EPS       = 1e-9;

  // Ejes con tensión (dos ejes altos o muy parejos)
  const adStrong = (A >= TH_STRONG && D >= TH_STRONG);
  const acStrong = (A >= TH_STRONG && C >= TH_STRONG);
  const cdStrong = (C >= TH_STRONG && D >= TH_STRONG);

  // Tensión por cercanía: dos ejes cercanos y al menos moderados
  const close = (x, y, delta=1.0) => Math.abs(x - y) <= delta + EPS;
  const adCloseMod = close(A, D, 1.0) && (A >= TH_MOD && D >= TH_MOD);
  const acCloseMod = close(A, C, 1.0) && (A >= TH_MOD && C >= TH_MOD);
  const cdCloseMod = close(C, D, 1.0) && (C >= TH_MOD && D >= TH_MOD);

  // Margen entre el 1.º y 2.º eje: si hay “aplastamiento” no hay fricción
  const orderedAxes = Object.entries({ A, B, C, D }).sort((x, y) => y[1] - x[1]);
  const topVal = orderedAxes[0][1];
  const secondVal = orderedAxes[1][1];
  const margin = topVal - secondVal;

  // Si hay tensión fuerte o moderada y el margen no es de aplastamiento, devolvemos fricción
  const hasTensionStrong = adStrong || acStrong || cdStrong;
  const hasTensionModerate = adCloseMod || acCloseMod || cdCloseMod;

  // B potencia la fricción, pero no es requisito (antes te limitaba)
  const bBoost = B >= TH_MOD ? 0.3 : 0.0;
  const friccionScoreBoosted = score.friccion_discurso + bBoost;

  // Condición final de fricción: tensión + margen razonable (<= 2)
  if ((hasTensionStrong || hasTensionModerate) && margin <= 2) {
    return 'friccion_discurso';
  }

  // --- Reglas claras (ahora sí, después de chequear fricción) ---
  if (D >= TH_STRONG && D >= Math.max(A, B, C)) return 'camuflaje';
  if (A >= TH_STRONG && A >= Math.max(B, C, D)) return 'accion';
  if (C >= TH_STRONG && C >= Math.max(A, B, D)) return 'pausa';

  // --- Selección por mayor puntaje (con el boost ya aplicado) ---
  const finalScore = { ...score, friccion_discurso: friccionScoreBoosted };
  const sorted = Object.entries(finalScore).sort((x, y) => y[1] - x[1]);
  const topScore = sorted[0][1];
  const leaders = sorted.filter(([, v]) => Math.abs(v - topScore) < 1e-9).map(([k]) => k);

  if (leaders.length === 1) return leaders[0];

  // Desempate: prioriza lo que mejor orienta la intervención
  const priority = ['camuflaje', 'friccion_discurso', 'transicion', 'pausa', 'accion'];
  for (const p of priority) if (leaders.includes(p)) return p;

  return leaders[0] || 'accion';

  // — helpers —
  function balanceScore(a, c, d) {
    // Puntúa “equilibrio” entre A/C/D (transición = reconfiguración de estilo)
    const mean = (a + c + d) / 3;
    const dev = Math.abs(a - mean) + Math.abs(c - mean) + Math.abs(d - mean); // 0 = equilibrio perfecto
    // Cuanto menor la desviación, mayor la transición; cap a 3 para mantener escala parecida
    return Math.max(0, 3 - dev);
  }
}
