// Funciones de renderizado compartidas por la web (index.html) y el PDF (print.html).
(function () {
  const T = window.T;
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
          <span>${T.placeholder}</span>
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
      <a class="back-link" href="#proyectos">${T.allProjects}</a>
      <header class="case-hero">
        <div class="case-hero-text">
          <p class="eyebrow">${T.caseStudy} · ${esc(c.kind)}</p>
          <h1>${esc(c.name)}</h1>
          <p class="case-title">${esc(c.title)}</p>
          <p class="lead">${esc(c.tagline)}</p>
          ${chips(c.tags)}
        </div>
        ${c.logo ? `<img class="case-logo" src="img/${c.slug}/${c.logo}" alt="${T.logoOf} ${esc(c.name)}">` : ''}
      </header>

      <section class="metrics">${c.metrics.map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</section>

      <section class="block">
        <h2>${T.role}</h2>
        <p class="role">${esc(c.role)}</p>
      </section>

      <section class="block">
        <h2>${T.context}</h2>
        <p>${esc(c.context)}</p>
      </section>

      <section class="block">
        <h2>${T.solution}</h2>
        <div class="cards">${c.solution.map((s) => `<article class="card"><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></article>`).join('')}</div>
      </section>

      <section class="block keep">
        <h2>${T.architecture}</h2>
        ${architecture(c.architecture)}
      </section>

      <section class="block keep">${flow(c.flow)}</section>

      <section class="block">
        <h2>${T.tech}</h2>
        <dl class="tech">${c.tech.map((t) => `<div><dt>${esc(t.group)}</dt><dd>${esc(t.items)}</dd></div>`).join('')}</dl>
      </section>

      <section class="block">
        <h2>${T.challenges}</h2>
        <div class="challenges">${c.challenges.map((s, i) => `<article class="challenge"><span class="ch-n">${String(i + 1).padStart(2, '0')}</span><div><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p></div></article>`).join('')}</div>
      </section>

      <section class="block">
        <h2>${T.shots}</h2>
        <div class="shots">${c.shots.map((s) => shot(c.slug, s)).join('')}</div>
      </section>

      <section class="block">
        <h2>${T.results}</h2>
        <ul class="results">${c.results.map((r) => `<li>${esc(r)}</li>`).join('')}</ul>
      </section>`;
  }

  // Iconos SVG en línea (heredan el color del texto)
  const ICONS = {
    mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>',
    github: '<path fill="currentColor" stroke="none" d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    file: '<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>',
  };
  const icon = (n) => `<svg class="ico" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

  function caseCard(c, i) {
    const cover = c.cover ? `<div class="pc-cover"><img src="img/${c.slug}/${c.cover}" alt="" loading="lazy"></div>` : '';
    return `<a class="project-card" href="#/proyecto/${c.slug}">
      ${cover}
      <div class="pc-body">
        <div class="pc-top"><span class="pc-num">${String((i || 0) + 1).padStart(2, '0')}</span><p class="eyebrow">${esc(c.kind)}</p></div>
        <h3>${esc(c.name)}</h3>
        <p class="pc-title">${esc(c.title)}</p>
        <p class="pc-tagline">${esc(c.tagline)}</p>
        ${chips(c.tags.slice(0, 5))}
        <span class="more">${T.viewCase}</span>
      </div>
    </a>`;
  }

  function contactLinks(p) {
    return `<ul class="contact-links">
      <li>${icon('pin')}<span>${esc(p.location)}</span></li>
      <li><a href="mailto:${esc(p.email)}">${icon('mail')}<span>${esc(p.email)}</span></a></li>
      <li><a href="${esc(p.linkedin)}" target="_blank" rel="noopener">${icon('linkedin')}<span>LinkedIn</span></a></li>
      ${p.github ? `<li><a href="${esc(p.github)}" target="_blank" rel="noopener">${icon('github')}<span>GitHub</span></a></li>` : ''}
    </ul>`;
  }

  function profileBlock(p) {
    const photo = p.photo
      ? `<div class="hero-photo-wrap"><img class="hero-photo" src="${esc(p.photo)}" alt="${esc(p.photoAlt || p.name)}" width="560" height="700"></div>`
      : '';
    return `
      <div class="hero-intro${p.photo ? ' has-photo' : ''}">
        <div class="hero-text">
          <p class="badge"><span class="dot" aria-hidden="true"></span>${esc(T.available)}</p>
          <h1>${esc(p.name)}</h1>
          <p class="hero-title">${esc(p.title)}</p>
          <ul class="stack-pills">${p.stack.map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
          <p class="lead">${esc(p.summary)}</p>
          ${contactLinks(p)}
        </div>
        ${photo}
      </div>
      ${p.highlights ? `<div class="metrics hero-metrics">${p.highlights.map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</div>` : ''}`;
  }

  function sectionHead(eyebrow, title, intro) {
    return `<div class="section-head"><p class="eyebrow">${esc(eyebrow)}</p><h2>${esc(title)}</h2>${intro ? `<p class="section-intro">${esc(intro)}</p>` : ''}</div>`;
  }

  function skills(p) {
    return `<div class="skills">${p.skills.map((s) => `<div class="skill-group"><h3>${esc(s.group)}</h3>${chips(s.items)}</div>`).join('')}</div>`;
  }

  window.Render = { esc, icon, caseBody, caseCard, profileBlock, skills, sectionHead, contactLinks };
})();
