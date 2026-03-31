/**
 * components/Plans.js
 * Sección de planes — orquesta las PlanCards.
 */

import { PlanCard } from "./PlanCard.js";

/**
 * @param {{ plans: object[] }} props
 * @returns {string} HTML
 */
export function Plans({ plans }) {
  const cards = plans.map(plan => PlanCard({ plan })).join("");

  return `
  <section class="plans" id="plans" aria-labelledby="plans-title">
    <div class="container">
      <p class="section-label reveal" aria-hidden="true">Planes y precios</p>
      <h2 class="section-title reveal" id="plans-title">ELIGE TU<br><span>PLAN</span></h2>
      <div class="plans-grid reveal">${cards}</div>
    </div>
  </section>`;
}
