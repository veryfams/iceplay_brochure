/**
 * components/sections.js
 * Secciones secundarias de la landing:
 *   Sports, Sponsors, Why, CtaBanner, Contact, Footer.
 * Agrupadas en un solo archivo por su reducida complejidad.
 */

import { escapeHtml } from "../services/renderer.js";
import { sportIconSvg } from "../services/sportIcons.js";

/* ── Sports ──────────────────────────────────────────────── */
export function Sports({ sports }) {
  const pills = sports
    .map(s => {
      const comingClass = s.comingSoon ? " coming-soon" : "";
      return `
      <div class="sport-pill${comingClass}" role="listitem">
        <span class="sport-icon" aria-hidden="true">${sportIconSvg(s.icon)}</span>
        ${escapeHtml(s.label)}
      </div>`;
    })
    .join("");

  return `
  <section class="sports" id="sports" aria-labelledby="sports-title">
    <div class="container" style="text-align:center;">
      <p class="section-label reveal" aria-hidden="true">Compatibilidad</p>
      <h2 class="section-title reveal" id="sports-title" style="text-align:center;">
        DEPORTES<br><span>DISPONIBLES</span>
      </h2>
      <div class="sports-grid reveal" role="list">${pills}</div>
    </div>
  </section>`;
}

/* ── Sponsors ────────────────────────────────────────────── */
export function Sponsors({ sponsors }) {
  const cards = sponsors
    .map(s => {
      const premiumStyle = s.isPremium ? ` style="border-color:rgba(245,200,66,0.3);"` : "";
      const priceStyle   = s.isPremium ? ` style="color:var(--gold);"` : "";
      return `
      <div class="sponsor-card"${premiumStyle}>
        <div class="sponsor-level" style="color:var(${escapeHtml(s.colorVar)});">${escapeHtml(s.level)}</div>
        <div class="sponsor-price"${priceStyle}>${escapeHtml(s.price)}</div>
        <div class="sponsor-range">${escapeHtml(s.range)}</div>
      </div>`;
    })
    .join("");

  return `
  <section class="sponsors" id="sponsors" aria-labelledby="sponsors-title">
    <div class="container">
      <p class="section-label reveal" aria-hidden="true">Monetización</p>
      <h2 class="section-title reveal" id="sponsors-title">AUSPICIOS<br><span>DIGITALES</span></h2>
      <p class="reveal section-intro">
        Monetiza tu campeonato y da visibilidad a tus patrocinadores en la plataforma,
        partidos y tabla de posiciones.
      </p>
      <div class="sponsor-grid reveal">${cards}</div>
    </div>
  </section>`;
}

/* ── Why ─────────────────────────────────────────────────── */
export function Why({ reasons }) {
  const items = reasons
    .map(
      (r, i) => `
      <div class="why-item">
        <div class="why-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</div>
        <p class="why-text">${escapeHtml(r)}</p>
      </div>`
    )
    .join("");

  return `
  <section class="why" aria-labelledby="why-title">
    <div class="container">
      <p class="section-label reveal" style="text-align:center;" aria-hidden="true">Por qué elegirnos</p>
      <h2 class="section-title reveal" id="why-title" style="text-align:center;">
        ¿POR QUÉ<br><span>ICEPLAY?</span>
      </h2>
      <div class="why-grid reveal">${items}</div>
    </div>
  </section>`;
}

/* ── CTA Banner ──────────────────────────────────────────── */
export function CtaBanner({ cta }) {
  // Resalta la frase clave dentro de la cita
  const quoteHtml = escapeHtml(cta.quote).replace(
    escapeHtml(cta.quoteHighlight),
    `<span>${escapeHtml(cta.quoteHighlight)}</span>`
  );

  return `
  <div class="cta-banner" role="complementary" aria-label="Llamada a la acción">
    <div class="container">
      <p class="cta-quote">"${quoteHtml}"</p>
      <a href="${escapeHtml(cta.buttonHref)}" class="btn-primary btn-large">
        ${escapeHtml(cta.buttonLabel)}
      </a>
    </div>
  </div>`;
}

/* ── Contact ─────────────────────────────────────────────── */
export function Contact({ contact }) {
  const idealFor = contact.idealFor
    .map(item => `<li>${escapeHtml(item)}</li>`)
    .join("");

  return `
  <section id="contact" aria-labelledby="contact-title" class="contact">
    <div class="container" style="text-align:center;">
      <p class="section-label reveal" aria-hidden="true">Contacto</p>
      <h2 class="section-title reveal" id="contact-title" style="text-align:center;">
        TRABAJEMOS<br><span>JUNTOS</span>
      </h2>
      <p class="reveal section-intro">Ideal para:</p>
      <ul class="ideal-for reveal" aria-label="Ideal para">${idealFor}</ul>
      <div class="footer-contact reveal">
        <a href="mailto:${escapeHtml(contact.email)}">📧 ${escapeHtml(contact.email)}</a>
        <a href="tel:${escapeHtml(contact.phone)}">📱 ${escapeHtml(contact.phone)}</a>
        <a href="${escapeHtml(contact.website)}" target="_blank" rel="noopener noreferrer">
          🌐 iceplay.pro
        </a>
      </div>
    </div>
  </section>`;
}

/* ── Footer ──────────────────────────────────────────────── */
export function Footer({ links, logoSrc }) {
  const linkItems = links
    .map(l => `<a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a>`)
    .join("");

  const year = new Date().getFullYear();

  return `
  <footer>
    <img src="${escapeHtml(logoSrc)}" class="footer-logo" alt="IcePlay" width="104" height="52">
    <nav aria-label="Navegación pie de página">
      <div class="footer-links">${linkItems}</div>
    </nav>
    <p class="footer-copy">© ${year} IcePlay · iceplay.pro · Todos los derechos reservados</p>
  </footer>`;
}
