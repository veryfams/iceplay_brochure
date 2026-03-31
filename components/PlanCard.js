/**
 * components/PlanCard.js
 * Tarjeta individual de plan. Soporta los tres tipos:
 *   - "plataforma" → pricingGroups
 *   - "gestion"    → tiers + note
 *   - "frecuentes" → volumeDiscounts + durationDiscounts
 */

import {
  renderFeatureList,
  renderPriceTable,
  renderTiers,
  renderVolumeDiscounts,
  renderDurationDiscounts,
  escapeHtml,
} from "../services/renderer.js";

/**
 * Devuelve el bloque de precios específico según el tipo de plan.
 * @param {object} plan
 * @returns {string} HTML
 */
function renderPricingBlock(plan) {
  // Plan Plataforma: grupos de precios por deporte
  if (plan.pricingGroups) {
    return plan.pricingGroups
      .map(
        group => `
        <hr class="price-divider">
        <div>
          <p class="price-section-title">
            <span aria-hidden="true">${group.icon}</span>
            ${escapeHtml(group.label)}
          </p>
          ${renderPriceTable(group.rows, group.ariaLabel)}
        </div>`
      )
      .join("");
  }

  // Plan Gestión: tiers por tamaño
  if (plan.tiers) {
    return `
      <hr class="price-divider">
      <div>
        <p class="price-section-title">Precio por tamaño de torneo</p>
        ${renderTiers(plan.tiers)}
      </div>
      ${plan.note ? `<div class="plan-note" role="note">${escapeHtml(plan.note)}</div>` : ""}`;
  }

  // Plan Frecuentes: descuentos por volumen y duración
  if (plan.volumeDiscounts) {
    return `
      <hr class="price-divider">
      <div>
        <p class="price-section-title">Descuentos por volumen</p>
        <div role="table" aria-label="Descuentos por número de campeonatos">
          ${renderVolumeDiscounts(plan.volumeDiscounts)}
        </div>
      </div>
      <hr class="price-divider">
      <div>
        <p class="price-section-title">Descuentos por duración</p>
        ${plan.durationNote
          ? `<p class="price-duration-note">${escapeHtml(plan.durationNote)}</p>`
          : ""}
        ${renderDurationDiscounts(plan.durationDiscounts)}
      </div>`;
  }

  return "";
}

/**
 * @param {{ plan: object }} props
 * @returns {string} HTML
 */
export function PlanCard({ plan }) {
  const featuredBadge = plan.featured
    ? `<span class="plan-featured-badge" aria-label="${escapeHtml(plan.featuredLabel)}">${escapeHtml(plan.featuredLabel)}</span>`
    : "";

  const cardClass = `plan-card${plan.featured ? " featured" : ""}`;

  return `
  <article class="${cardClass}" aria-labelledby="plan-${escapeHtml(plan.id)}-title">
    ${featuredBadge}
    <div class="plan-header">
      <span class="plan-badge badge-${escapeHtml(plan.badgeVariant)}">${escapeHtml(plan.badge)}</span>
      <h3 class="plan-name" id="plan-${escapeHtml(plan.id)}-title">${escapeHtml(plan.name)}</h3>
      <p class="plan-desc">${escapeHtml(plan.description)}</p>
    </div>
    <div class="plan-body">
      ${renderFeatureList(plan.features, `Características del plan ${plan.name}`)}
      ${renderPricingBlock(plan)}
    </div>
  </article>`;
}
