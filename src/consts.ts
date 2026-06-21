// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Regresión a Vidas Pasadas';
export const SITE_DESCRIPTION = 'Artículos y recursos sobre terapia de regresión a vidas pasadas. Conoce qué es, cómo funciona y sus beneficios.';

export interface CategoryInfo {
  label: string;
  color: string;
  group: 'rvp' | 'srt' | 'hipnosis';
}

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
