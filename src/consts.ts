// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Regresión a Vidas Pasadas';
export const SITE_DESCRIPTION = 'Artículos y recursos sobre terapia de regresión a vidas pasadas. Conoce qué es, cómo funciona y sus beneficios.';

// Slug del artículo destacado en la portada de /blog — editar aquí para cambiarlo
export const FEATURED_SLUG = 'que-es-la-regresion-a-vidas-pasadas';

// 3 artículos editorialmente seleccionados para la homepage
export const EDITORIAL_PICKS = [
  'beneficios-terapia-regresion-vidas-pasadas',
  'srt-que-es',
  'hipnosis-que-es-realmente',
];

export interface CategoryInfo {
  label: string;
  color: string;
  group: 'rvp' | 'srt' | 'hipnosis';
}

// Per-slug image key — overrides the expositor default.
// Keys map to filenames in src/assets/blog/ (without extension).
export const SLUG_IMG: Record<string, string> = {
  // Carl Wickland
  'carl-wickland-quien-es':          'silueta-espiritual',
  'carl-wickland-anna-medium':       'rvp-meditacion',
  'carl-wickland-treinta-anos-muertos': 'libros-vintage',
  'carl-wickland-metodo-wimshurst':  'srt-velas-seance',
  // William Baldwin
  'william-baldwin-quien-es':        'silueta-espiritual',
  'william-baldwin-manual-srt':      'srt-manos-luz',
  'william-baldwin-taxonomia-entidades': 'srt-humo-oscuro',
  // Edith Fiore
  'edith-fiore-quien-es':            'rvp-meditacion',
  'edith-fiore-unquiet-dead':        'srt-vela-oscuridad',
  'edith-fiore-depossession':        'srt-manos-luz',
  // Alan Sanderson
  'alan-sanderson-quien-es':         'terapia-sesion',
  'alan-sanderson-spirit-release-foundation': 'portal-luz',
  // SRT thematic
  'srt-que-es':                      'portal-luz',
  'srt-posesiones-apego':            'srt-humo-oscuro',
  'srt-exorcismo-vs-srt':            'srt-velas-seance',
  'srt-magia-negra-mal-de-ojo':      'srt-vela-oscuridad',
  'srt-entidades-oscuras-demonios':  'srt-humo-oscuro',
  'srt-extraterrestres-entidades':   'cosmos-estrellas',
  'srt-y-regresion':                 'portal-luz',
  // Hipnosis thematic
  'hipnosis-que-es-realmente':       'hipnosis-ojo-mistico',
  'hipnosis-origenes-mesmer-braid':  'libros-vintage',
  'hipnosis-chamanes-suenos':        'ritual-fuego',
  'hipnosis-milton-erickson':        'terapia-sesion',
  'hipnosis-show-vs-clinica':        'silueta-espiritual',
  'hipnosis-mitos-y-realidades':     'hipnosis-ojo-mistico',
  // Michael Newton
  'michael-newton-journey-of-souls': 'cosmos-estrellas',
  'michael-newton-vida-entre-vidas': 'portal-luz',
  // Dolores Cannon
  'dolores-cannon-qhht':             'cosmos-estrellas',
  // Ian Stevenson
  'ian-stevenson-quien-es':          'ninos-naturaleza',
  'ian-stevenson-veinte-casos':      'ninos-naturaleza',
  'ian-stevenson-division-estudios-perceptuales': 'terapia-sesion',
  'ian-stevenson-legado-jim-tucker': 'ninos-naturaleza',
  // Helen Wambach
  'helen-wambach-hipnosis-grupal':   'meditacion-grupal',
  'helen-wambach-life-before-life':  'cosmos-estrellas',
  'helen-wambach-reliving-past-lives': 'portal-luz',
  'helen-wambach-patrones-historicos': 'meditacion-grupal',
  // Existing RVP articles
  'que-es-la-regresion-a-vidas-pasadas': 'que-es-regresion',
  'beneficios-terapia-regresion-vidas-pasadas': 'beneficios-regresion',
  'que-esperar-sesion-regresion-vidas-pasadas': 'sesion-regresion',
};

export const CATEGORY: Record<string, CategoryInfo> = {
  'carl-wickland':   { label: 'SRT · Wickland',  color: '#8B3A3A', group: 'srt' },
  'william-baldwin': { label: 'SRT · Baldwin',   color: '#8B3A3A', group: 'srt' },
  'edith-fiore':     { label: 'SRT · Fiore',     color: '#8B3A3A', group: 'srt' },
  'alan-sanderson':  { label: 'SRT · Sanderson', color: '#8B3A3A', group: 'srt' },
  'srt':             { label: 'SRT',             color: '#8B3A3A', group: 'srt' },
  'hipnosis':        { label: 'Hipnosis',        color: '#4A6B8A', group: 'hipnosis' },
  'brian-weiss':     { label: 'Brian Weiss',     color: '#B8952A', group: 'rvp' },
  'michael-newton':  { label: 'Newton',          color: '#B8952A', group: 'rvp' },
  'dolores-cannon':  { label: 'Dolores Cannon',  color: '#B8952A', group: 'rvp' },
  'roger-woolger':   { label: 'Roger Woolger',   color: '#B8952A', group: 'rvp' },
  'ian-stevenson':   { label: 'Ian Stevenson',   color: '#B8952A', group: 'rvp' },
  'helen-wambach':   { label: 'Helen Wambach',   color: '#B8952A', group: 'rvp' },
};
