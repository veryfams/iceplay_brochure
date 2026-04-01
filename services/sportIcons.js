/**
 * services/sportIcons.js
 * Iconos de deportes vía Font Awesome 6 (CDN, ver index.html).
 * Heredan color del .sport-icon (currentColor en la fuente de iconos).
 *
 * @see https://fontawesome.com/search?o=r&m=free&s=solid
 */

/** Claves = campo `icon` en data/content.js (SPORTS). */
const FA_SOLID = {
  soccer: "fa-solid fa-futbol",
  basketball: "fa-solid fa-basketball",
  volleyball: "fa-solid fa-volleyball",
  "table-tennis": "fa-solid fa-table-tennis-paddle-ball",
  /** Arena / exterior (ecuavóley en playa). */
  ecuavoley: "fa-solid fa-umbrella-beach",
  more: "fa-solid fa-circle-plus",
};

/**
 * @param {string} id
 * @returns {string} HTML del icono o cadena vacía si no existe.
 */
export function sportIconSvg(id) {
  const cls = FA_SOLID[id];
  return cls ? `<i class="${cls} sport-fa-icon" aria-hidden="true"></i>` : "";
}
