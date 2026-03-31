/**
 * pages/home.js
 * Página principal: orquesta todos los componentes
 * y los monta en el DOM. Es el único archivo que
 * conoce el árbol completo de la página.
 */

import { NAV_LINKS, HERO, FEATURES, SPORTS, SPONSORS, WHY_REASONS, CTA, CONTACT, FOOTER_LINKS } from "../data/content.js";
import { PLANS } from "../data/plans.js";

import { Nav }     from "../components/Nav.js";
import { Hero }    from "../components/Hero.js";
import { Features } from "../components/Features.js";
import { Plans }   from "../components/Plans.js";
import {
  Sports, Sponsors, Why, CtaBanner, Contact, Footer,
} from "../components/sections.js";

import { initScrollReveal } from "../services/scrollReveal.js";

/* ── Rutas de assets ── */
const LOGO_DARK  = "./assets/logo-dark.png";
const LOGO_LIGHT = "./assets/logo-light.png";

/**
 * Construye el HTML completo de la página.
 * @returns {string}
 */
function buildPage() {
  return `
    ${Nav({ links: NAV_LINKS, logoSrc: LOGO_DARK })}

    <main id="main">
      ${Hero({ hero: HERO, logoSrc: LOGO_DARK })}
      ${Features({ features: FEATURES })}
      ${Plans({ plans: PLANS })}
      ${Sports({ sports: SPORTS })}
      ${Sponsors({ sponsors: SPONSORS })}
      ${Why({ reasons: WHY_REASONS })}
      ${CtaBanner({ cta: CTA })}
      ${Contact({ contact: CONTACT })}
    </main>

    ${Footer({ links: FOOTER_LINKS, logoSrc: LOGO_DARK })}
  `;
}

/**
 * Punto de entrada: monta la página y arranca los servicios.
 */
function init() {
  document.body.innerHTML = buildPage();
  initScrollReveal();
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
