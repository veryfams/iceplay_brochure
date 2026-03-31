/**
 * components/Nav.js
 * Componente de navegación fija.
 * Recibe datos → devuelve HTML string.
 */

import { escapeHtml } from "../services/renderer.js";

/**
 * @param {{ links: {href:string, label:string}[], logoSrc: string }} props
 * @returns {string} HTML
 */
export function Nav({ links, logoSrc }) {
  const linkItems = links
    .map(
      l => `<li><a href="${escapeHtml(l.href)}">${escapeHtml(l.label)}</a></li>`
    )
    .join("");

  return `
  <nav aria-label="Navegación principal">
    <a href="#main" class="skip-link">Saltar al contenido principal</a>
    <a href="#" aria-label="IcePlay — inicio">
      <img src="${escapeHtml(logoSrc)}" class="nav-logo" alt="IcePlay" width="120" height="48">
    </a>
    <ul class="nav-links" role="list">${linkItems}</ul>
    <a href="#contact" class="nav-cta">Comenzar</a>
  </nav>`;
}
