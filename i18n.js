// Idioma del portafolio (ES / EN) y textos fijos de la interfaz.
// Orden de prioridad: ?lang=en|es en la URL → elección guardada → idioma del navegador → español.
(function () {
  const UI = {
    es: {
      htmlLang: 'es',
      siteTitle: 'Isabel Rodríguez · Backend & AI Agent Engineer',
      description: 'Portafolio de Isabel Esther Rodríguez Alvarez, Backend & AI Agent Engineer. Casos de estudio de agentes de IA y backend en producción: arquitectura, tecnologías e implementación.',
      home: 'Inicio',
      theme: 'Cambiar tema',
      switchLabel: 'Read in English',
      switchText: 'EN',
      portfolio: 'Portafolio',
      viewProjects: 'Ver proyectos',
      cvPrimary: { text: 'CV en español', href: 'cv/CV_Isabel_Rodriguez_ES.pdf' },
      cvSecondary: { text: 'CV in English', href: 'cv/CV_Isabel_Rodriguez_EN.pdf' },
      portfolioPdf: { text: 'Portafolio (PDF)', href: 'cv/Portafolio_Isabel_Rodriguez.pdf' },
      contact: 'Contactar',
      projects: 'Proyectos',
      skills: 'Habilidades',
      role: 'Mi rol',
      context: 'Contexto y problema',
      solution: 'Solución',
      architecture: 'Arquitectura',
      tech: 'Tecnologías',
      challenges: 'Implementación: retos y decisiones',
      shots: 'Capturas',
      results: 'Resultados',
      viewCase: 'Ver caso de estudio →',
      placeholder: 'Espacio para captura',
      logoOf: 'Logo de',
      contents: 'Contenido',
    },
    en: {
      htmlLang: 'en',
      siteTitle: 'Isabel Rodríguez · Backend & AI Agent Engineer',
      description: 'Portfolio of Isabel Esther Rodríguez Alvarez, Backend & AI Agent Engineer. Case studies of AI agents and backend services in production: architecture, technologies and implementation.',
      home: 'Home',
      theme: 'Toggle theme',
      switchLabel: 'Leer en español',
      switchText: 'ES',
      portfolio: 'Portfolio',
      viewProjects: 'View projects',
      cvPrimary: { text: 'Resume (English)', href: 'cv/CV_Isabel_Rodriguez_EN.pdf' },
      cvSecondary: { text: 'CV en español', href: 'cv/CV_Isabel_Rodriguez_ES.pdf' },
      portfolioPdf: { text: 'Portfolio (PDF)', href: 'cv/Portafolio_Isabel_Rodriguez_EN.pdf' },
      contact: 'Contact me',
      projects: 'Projects',
      skills: 'Skills',
      role: 'My role',
      context: 'Context and problem',
      solution: 'Solution',
      architecture: 'Architecture',
      tech: 'Technologies',
      challenges: 'Implementation: challenges and decisions',
      shots: 'Screenshots',
      results: 'Results',
      viewCase: 'View case study →',
      placeholder: 'Screenshot placeholder',
      logoOf: 'Logo of',
      contents: 'Contents',
    },
  };

  function pick() {
    try {
      const q = new URLSearchParams(location.search).get('lang');
      if (q === 'en' || q === 'es') return q;
    } catch (e) {}
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'es') return saved;
    } catch (e) {}
    const nav = (navigator.language || 'es').toLowerCase();
    return nav.startsWith('es') ? 'es' : (nav.startsWith('en') ? 'en' : 'es');
  }

  const lang = pick();
  window.LANG = lang;
  window.T = UI[lang];
  window.PORTFOLIO = lang === 'en' ? window.PORTFOLIO_EN : window.PORTFOLIO_ES;
  document.documentElement.lang = UI[lang].htmlLang;

  // Cambia de idioma conservando el proyecto abierto (#/proyecto/...).
  window.switchLang = function () {
    const next = lang === 'en' ? 'es' : 'en';
    try { localStorage.setItem('lang', next); } catch (e) {}
    const url = new URL(location.href);
    url.searchParams.set('lang', next);
    location.href = url.toString();
  };
})();
