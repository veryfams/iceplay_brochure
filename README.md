# IcePlay — Landing Page

Plataforma digital para campeonatos deportivos.

---

## Arquitectura

El proyecto sigue **Separación de Responsabilidades** en capas:

```
iceplay/
│
├── index.html              ← Punto de entrada. Solo carga CSS y el módulo JS raíz.
│
├── assets/
│   ├── logo-dark.png       ← Logo versión fondo oscuro
│   └── logo-light.png      ← Logo versión fondo claro
│
├── data/                   ← CAPA DE DATOS
│   ├── content.js          ← Textos, metadatos, nav, hero, contacto, footer
│   └── plans.js            ← Estructura de planes y precios
│
├── services/               ← CAPA DE SERVICIOS / LÓGICA
│   ├── renderer.js         ← Funciones puras: datos → strings HTML (sin DOM)
│   └── scrollReveal.js     ← Encapsula IntersectionObserver (scroll animations)
│
├── components/             ← CAPA DE PRESENTACIÓN
│   ├── Nav.js              ← Navegación fija
│   ├── Hero.js             ← Sección hero
│   ├── Features.js         ← Grilla de funcionalidades
│   ├── Plans.js            ← Orquestador de tarjetas de plan
│   ├── PlanCard.js         ← Tarjeta individual de plan
│   └── sections.js         ← Sports, Sponsors, Why, CtaBanner, Contact, Footer
│
├── pages/
│   └── home.js             ← ORQUESTADOR: importa todo, construye y monta la página
│
└── styles/                 ← CAPA DE ESTILOS
    ├── tokens.css          ← Variables CSS (colores, tipografía, espaciado)
    ├── base.css            ← Reset y estilos de elementos HTML nativos
    ├── layout.css          ← Contenedor, botones, reveal, utilidades globales
    └── components.css      ← Estilos por componente (nav, hero, plans, etc.)
```

---

## Principios aplicados

| Principio | Cómo se aplica |
|---|---|
| **Single Responsibility** | Cada archivo tiene una única razón para cambiar |
| **Separation of Concerns** | Datos / Lógica / Presentación / Estilos en capas distintas |
| **DRY** | `renderer.js` centraliza toda la generación de HTML repetitivo |
| **Pure functions** | `renderer.js` no toca el DOM — solo recibe datos y devuelve strings |
| **Open/Closed** | Agregar un plan nuevo solo requiere editar `data/plans.js` |
| **WCAG 2.1 AA** | Contraste ≥ 4.5:1, focus-visible, aria-labels, skip-link, reduced-motion |

---

## Cómo ejecutar

Este proyecto usa ES Modules nativos (`type="module"`), por lo que
**requiere un servidor HTTP local** (los módulos no funcionan con `file://`).

```bash
# Opción 1 — Python
python3 -m http.server 3000

# Opción 2 — Node (npx)
npx serve .

# Opción 3 — VS Code
# Instalar extensión "Live Server" y abrir index.html con "Open with Live Server"
```

Luego abrir: **http://localhost:3000**

---

## Cómo agregar o editar contenido

### Cambiar un precio
Editar `data/plans.js` → array `rows` del grupo correspondiente. Nada más.

### Agregar una funcionalidad
Editar `data/content.js` → array `FEATURES`. Agregar `{ icon, title, desc }`.

### Agregar un deporte
Editar `data/content.js` → array `SPORTS`. Agregar `{ icon, label }`.

### Agregar un plan nuevo
1. Agregar el objeto en `data/plans.js`
2. Si tiene un bloque de precios nuevo, agregar el renderer en `services/renderer.js`
3. Agregar el caso en `components/PlanCard.js` → `renderPricingBlock()`

---

## Dependencias

**Cero dependencias externas** — HTML, CSS y JS vanilla puro.
Las fuentes se cargan desde Google Fonts (CDN).
