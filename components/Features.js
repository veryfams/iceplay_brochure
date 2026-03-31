/**
 * components/Features.js
 * Grilla de funcionalidades de la plataforma.
 */

import { escapeHtml } from "../services/renderer.js";

/**
 * @param {{ features: {icon:string, title:string, desc:string}[] }} props
 * @returns {string} HTML
 */
export function Features({ features }) {
  const cards = features
    .map(
      f => `
      <article class="feature-card" role="listitem">
        <span class="feature-icon" aria-hidden="true">${f.icon}</span>
        <h3>${escapeHtml(f.title)}</h3>
        <p>${escapeHtml(f.desc)}</p>
      </article>`
    )
    .join("");

  return `
  <section class="features" id="features" aria-labelledby="features-title">
    <div class="container">
      <p class="section-label reveal" aria-hidden="true">Lo que incluye</p>
      <h2 class="section-title reveal" id="features-title">TODO LO QUE<br><span>NECESITAS</span></h2>
      <div class="features-grid reveal" role="list">${cards}</div>
    </div>
  </section>`;
}
