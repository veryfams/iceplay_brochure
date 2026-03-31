/**
 * services/scrollReveal.js
 * Servicio de animación de entrada por scroll.
 * Encapsula el IntersectionObserver — el resto del código
 * solo llama a init() sin conocer los detalles de la API.
 */

/**
 * Inicializa el observer de scroll reveal sobre todos los
 * elementos que tengan la clase CSS indicada.
 *
 * @param {object} options
 * @param {string} [options.selector=".reveal"]  - Clase CSS objetivo.
 * @param {string} [options.activeClass="visible"] - Clase que se agrega al entrar.
 * @param {number} [options.threshold=0.08]      - Fracción visible para disparar.
 * @returns {{ disconnect: () => void }}  - Handle para limpiar el observer.
 */
export function initScrollReveal({
  selector = ".reveal",
  activeClass = "visible",
  threshold = 0.08,
} = {}) {
  // Respeta la preferencia del usuario por reducción de movimiento (WCAG 2.3.3)
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    // Muestra todo de inmediato sin animación
    document.querySelectorAll(selector).forEach(el => el.classList.add(activeClass));
    return { disconnect: () => {} };
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(activeClass);
          // Una vez visible, dejamos de observar ese elemento
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  document.querySelectorAll(selector).forEach(el => observer.observe(el));

  return { disconnect: () => observer.disconnect() };
}
