// Funciones de renderizado compartidas por la web (index.html) y el PDF (print.html).
(function () {
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const chips = (items, cls = 'chip') => `<ul class="chips">${items.map((i) => `<li class="${cls}">${esc(i)}</li>`).join('')}</ul>`;

  // Si la imagen no existe todavía, se muestra un hueco con el nombre de archivo esperado.
  function shot(slug, s) {
    const path = `img/${slug}/${s.file}`;
    return `<figure class="shot">
      <a class="shot-frame" href="${path}" target="_blank" rel="noopener" data-zoom>
        <img src="${path}" alt="${esc(s.caption)}" loading="lazy"
             onerror="this.closest('figure').remove();">
        <div class="shot-placeholder" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="28" height="28"><path fill="none" stroke="currentColor" stroke-width="1.5" d="M4 5h16v14H4zM4 15l4-4 4 4 3-3 5 5M15 9.5a1.5 1.5 0 1 0 0-.01"/></svg>
          <span>Espacio para captura</span>
          <code>${esc(path)}</code>
        </div>
      </a>
      <figcaption>${esc(s.caption)}</figcaption>
    </figure>`;
  }

  function architecture(a) {
    const lane = (l) => `<div class="lane">
      <div class="lane-label">${esc(l.label)}</div>
      <div class="lane-nodes">${l.nodes
        .map((n, i) => `${i ? '<span class="arrow" aria-hidden="true">→</span>' : ''}<div class="node"><strong>${esc(n.t)}</strong><span>${esc(n.s)}</span></div>`)
        .join('')}</div>
    </div>`;
    return `<div class="diagram">${a.lanes.map(lane).join('')}</div><p class="caption">${esc(a.caption)}</p>`;
  }

  function flow(f) {
    return `<h3>${esc(f.title)}</h3><ol class="flow">${f.steps
      .map((s, i) => `<li><span class="step-n">${i + 1}</span><strong>${esc(s.t)}</strong><p>${esc(s.p)}</p></li>`)
      .join('')}</ol>`;
  }

  function caseBody(c) {
    return `
      <header class="case-hero">
        <div class="case-hero-text">
          <p class="eyebrow">${esc(c.kind)}</p>
          <h1>${esc(c.name)}</h1>
          <p class="case-title">${esc(c.title)}</p>
          <p class="lead">${esc(c.tagline)}</p>
          ${chips(c.tags)}
        </div>
        ${c.logo ? `<img class="case-logo" src="img/${c.slug}/${c.logo}" alt="Logo de ${esc(c.name)}">` : ''}
      </header>

      <section class="metrics">${c.metrics.map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</section>

      <section class="block">
        <h2>Mi rol</h2>
        <p class="role">${esc(c.role)}</p>
      </section>

      <section class="block">
        <h2>Contexto y problema</h2>
        <p>${esc(c.context)}</p>
      </section>

      <section class="block">
        <h2>Solución</h2>
        <div class="cards">${c.solution.map((s) => `<article class="card"><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></article>`).join('')}</div>
      </section>

      <section class="block keep">
        <h2>Arquitectura</h2>
        ${architecture(c.architecture)}
      </section>

      <section class="block keep">${flow(c.flow)}</section>

      <section class="block">
        <h2>Tecnologías</h2>
        <dl class="tech">${c.tech.map((t) => `<div><dt>${esc(t.group)}</dt><dd>${esc(t.items)}</dd></div>`).join('')}</dl>
      </section>

      <section class="block">
        <h2>Implementación: retos y decisiones</h2>
        <div class="challenges">${c.challenges.map((s, i) => `<article class="challenge"><span class="ch-n">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></div></article>`).join('')}</div>
      </section>

      <section class="block">
        <h2>Capturas</h2>
        <div class="shots">${c.shots.map((s) => shot(c.slug, s)).join('')}</div>
      </section>

      <section class="block">
        <h2>Resultados</h2>
        <ul class="results">${c.results.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      </section>`;
  }

  function caseCard(c) {
    return `<a class="project-card" href="#/proyecto/${c.slug}">
      <p class="eyebrow">${esc(c.kind)}</p>
      <h3>${esc(c.name)}</h3>
      <p class="pc-title">${esc(c.title)}</p>
      <p>${esc(c.tagline)}</p>
      ${chips(c.tags.slice(0, 5))}
      <span class="more">Ver caso de estudio →</span>
    </a>`;
  }

  function profileBlock(p, { links = true } = {}) {
    return `
      <p class="eyebrow">Portafolio</p>
      <h1>${esc(p.name)}</h1>
      <p class="case-title">${esc(p.title)}</p>
      <p class="stackline">${p.stack.map(esc).join(' · ')}</p>
      <p class="lead">${esc(p.summary)}</p>
      <p class="meta">${esc(p.location)} · <a href="mailto:${esc(p.email)}">${esc(p.email)}</a>${links ? ` · <a href="${esc(p.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>${p.github ? ` · <a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>` : ''}` : ''}</p>
      ${p.highlights ? `<div class="metrics hero-metrics">${p.highlights.map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</div>` : ''}`;
  }

  function skills(p) {
    return `<div class="skills">${p.skills.map((s) => `<div class="skill-group"><h3>${esc(s.group)}</h3>${chips(s.items)}</div>`).join('')}</div>`;
  }

  window.Render = { esc, caseBody, caseCard, profileBlock, skills };
})();
