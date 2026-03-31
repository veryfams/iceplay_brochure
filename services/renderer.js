/**
 * services/renderer.js
 * Servicio de renderizado: transforma datos en strings HTML.
 * No accede al DOM directamente — devuelve strings puros.
 * Principio: separación entre "qué renderizar" y "dónde montarlo".
 */

/**
 * Escapa caracteres HTML para prevenir XSS.
 * @param {string} str
 * @returns {string}
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Renderiza una lista de features con flechas.
 * @param {string[]} features
 * @param {string} ariaLabel
 * @returns {string} HTML
 */
export function renderFeatureList(features, ariaLabel = "") {
  const items = features
    .map(f => `<li>${escapeHtml(f)}</li>`)
    .join("");
  return `<ul class="plan-features-list" aria-label="${escapeHtml(ariaLabel)}">${items}</ul>`;
}

/**
 * Renderiza una tabla de precios (filas duración / precio).
 * @param {{ duration: string, amount: string }[]} rows
 * @param {string} ariaLabel
 * @returns {string} HTML
 */
export function renderPriceTable(rows, ariaLabel = "") {
  const rowsHtml = rows
    .map(
      r => `
      <div role="row" class="price-row">
        <span role="cell" class="duration">${escapeHtml(r.duration)}</span>
        <span role="cell" class="amount">${escapeHtml(r.amount)}</span>
      </div>`
    )
    .join("");
  return `<div role="table" aria-label="${escapeHtml(ariaLabel)}">${rowsHtml}</div>`;
}

/**
 * Renderiza los tier-cards del plan Gestión.
 * @param {{ variant: string, label: string, sub: string, price: string }[]} tiers
 * @returns {string} HTML
 */
export function renderTiers(tiers) {
  const cards = tiers
    .map(
      t => `
      <div class="tier-card tier-${escapeHtml(t.variant)}">
        <div>
          <div class="tier-label">${escapeHtml(t.label)}</div>
          <div class="tier-sub">${escapeHtml(t.sub)}</div>
        </div>
        <div class="tier-price">${escapeHtml(t.price)}</div>
      </div>`
    )
    .join("");
  return `<div class="tier-stack">${cards}</div>`;
}

/**
 * Renderiza la grilla de descuentos por duración.
 * @param {{ duration: string, discount: string }[]} discounts
 * @returns {string} HTML
 */
export function renderDurationDiscounts(discounts) {
  const pills = discounts
    .map(
      d => `
      <div class="discount-pill">
        ${escapeHtml(d.duration)}
        <strong>${escapeHtml(d.discount)}</strong>
      </div>`
    )
    .join("");
  return `<div class="discount-grid">${pills}</div>`;
}

/**
 * Renderiza filas de descuentos por volumen.
 * @param {{ label: string, discount: string }[]} discounts
 * @returns {string} HTML
 */
export function renderVolumeDiscounts(discounts) {
  return discounts
    .map(
      d => `
      <div role="row" class="vol-row">
        <span role="cell" class="vol-label">${escapeHtml(d.label)}</span>
        <span role="cell" class="vol-discount">${escapeHtml(d.discount)}</span>
      </div>`
    )
    .join("");
}
