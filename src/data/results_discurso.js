// Resultados Discurso (5 tipos):
// - accion
// - pausa
// - camuflaje
// - friccion_discurso
// - transicion

const results = {
  accion: {
    title: 'Discurso con impulso (Acción)',
    diagnostico:
      'Tu comunicación tiene empuje y claridad de intención. Vas directo al punto y eso transmite decisión. El riesgo: forzar el ritmo y perder matices que generan conexión emocional.',
    imagen:
      'Como una flecha veloz: llega antes… salvo cuando el blanco necesita un segundo de respiración.',
    coste:
      'Si no modulás el ritmo, parte de la audiencia se cierra. Bajará la retención y la respuesta (replies, leads, compras) en audiencias frías.',
    cta: {
      titulo: 'Mini-taller: Ritmo y pausa que convierten',
      descripcion:
        'Checklist de modulación + ejemplos de copy y discurso para sumar respiración sin perder decisión.',
      frase:
        'La fuerza convence; la pausa abre la puerta.',
      precio: '$7',
      acceso: 'Plantilla + video corto on-demand'
    }
  },

  pausa: {
    title: 'Discurso en pausa (Reflexivo)',
    diagnostico:
      'Explicás con detalle y buscás precisión. El riesgo: sobreexplicar, diluir la promesa y fatigar a quien escucha antes de llegar al valor.',
    imagen:
      'Como una lámpara con luz cálida: ilumina, pero si está muy lejos no se ve el objeto.',
    coste:
      'Si no sintetizás, baja la atención y la recordación. Pierden fuerza tu promesa y tu llamada a la acción.',
    cta: {
      titulo: 'Guía: Sintetizar sin perder profundidad',
      descripcion:
        'Estructura “promesa-prueba-paso” + 12 frases bisagra para acortar sin romper tu esencia.',
      frase:
        'Menos palabras. Más intención.',
      precio: '$6',
      acceso: 'PDF editable + ejemplos'
    }
  },

  camuflaje: {
    title: 'Discurso camuflado (Poco propio)',
    diagnostico:
      'Tu mensaje suena correcto pero poco propio. Se nota “prestado”: formatos que funcionan pero que no te representan del todo.',
    imagen:
      'Como un traje alquilado: a simple vista está bien, pero no se mueve contigo.',
    coste:
      'La audiencia percibe distancia y baja la confianza. Te cuesta sostener consistencia en el tiempo.',
    cta: {
      titulo: 'Hoja de tono: Encontrar tu voz',
      descripcion:
        'Mapa de tono + banco de metáforas para unificar tu estilo en redes, web y ventas.',
      frase:
        'Lo que es tuyo conecta sin esfuerzo.',
      precio: '$7',
      acceso: 'Plantilla + guía paso a paso'
    }
  },

  friccion_discurso: {
    title: 'Fricción en el discurso (Empate fuerte)',
    diagnostico:
      'Hay dos fuerzas activas y opuestas (p. ej., impulso y pausa) que se alternan. No es confusión: es una tensión creativa sin resolución de forma.',
    imagen:
      'Dos ríos que intentan unirse, pero aún no encuentran el cauce común.',
    coste:
      'Inconsistencia por canales: a veces directo, a veces extenso. Se dificulta la memoria de marca y el cierre.',
    cta: {
      titulo: 'Framework TDR: Unificar forma y voz',
      descripcion:
        'Plantilla para elegir un patrón de discurso y sostenerlo 30 días.',
      frase:
        'Elegir una forma es liberar energía.',
      precio: '$9',
      acceso: 'PDF editable + tablero Notion opcional'
    }
  },

  transicion: {
    title: 'Transición de voz (Reconfiguración)',
    diagnostico:
      'Estás cambiando la forma de expresarte. Viejo y nuevo conviven. No es falla: es pasaje. Pedirá iterar prototipos rápidos y feedback.',
    imagen:
      'Un puente entre dos orillas: se avanza, aunque todavía veas andamios.',
    coste:
      'Si no lo tratás como proceso, vas a evaluar con criterios del pasado y frenar el despliegue.',
    cta: {
      titulo: 'Sprint de 7 días: Prototipo de voz',
      descripcion:
        'Secuencia breve para testear 3 mini-formatos y quedarte con el que genera señal.',
      frase:
        'Iterar no es dudar: es decantar.',
      precio: '$7',
      acceso: 'Calendario + prompts + ejemplos'
    }
  }
};

export default results;
