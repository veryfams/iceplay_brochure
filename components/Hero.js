/**
 * components/Hero.js
 * Sección hero principal.
 */

import { escapeHtml } from "../services/renderer.js";

/**
 * @param {{ hero: object, logoSrc: string }} props
 * @returns {string} HTML
 */
export function Hero({ hero, logoSrc }) {
  const headlineHtml = hero.headline
    .map((line, i) =>
      i === hero.highlightLine
        ? `<span>${escapeHtml(line)}</span>`
        : escapeHtml(line)
    )
    .join("<br>");

  return `
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <img src="${escapeHtml(logoSrc)}" class="hero-logo" alt="IcePlay" width="320" height="160">
    <p class="hero-tag">${escapeHtml(hero.tag)}</p>
    <h1 id="hero-title">${headlineHtml}</h1>
    <p class="hero-sub">${escapeHtml(hero.sub)}</p>
    <div class="hero-btns">
      <a href="${escapeHtml(hero.ctaPrimary.href)}"  class="btn-primary">${escapeHtml(hero.ctaPrimary.label)}</a>
      <a href="${escapeHtml(hero.ctaSecondary.href)}" class="btn-outline">${escapeHtml(hero.ctaSecondary.label)}</a>
    </div>
  </section>`;
}
