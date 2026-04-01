/**
 * data/content.js
 * Textos, metadatos y listas de contenido estático del sitio.
 * Separado de la lógica para facilitar traducciones o CMS futuro.
 */

export const SITE_META = {
  title: "IcePlay — Plataforma Digital para Campeonatos Deportivos",
  description:
    "IcePlay: gestiona equipos, partidos y resultados en tiempo real. La plataforma moderna para campeonatos deportivos.",
  url: "https://iceplay.pro",
  lang: "es",
};

export const NAV_LINKS = [
  { href: "#features",  label: "Plataforma" },
  { href: "#plans",     label: "Planes"     },
  { href: "#sports",    label: "Deportes"   },
  { href: "#sponsors",  label: "Auspicios"  },
];

export const HERO = {
  tag: "Plataforma Digital para Campeonatos",
  headline: ["CONVIERTE TU", "CAMPEONATO", "EN ALGO GRANDE"],
  highlightLine: 1,
  sub: "Gestiona equipos, partidos y resultados en tiempo real con una plataforma moderna, simple y adaptada a cualquier torneo.",
  ctaPrimary:  { label: "Ver Planes",   href: "#plans"    },
  ctaSecondary:{ label: "Conocer más",  href: "#features" },
};

/** `icon`: clave en services/featureIcons.js (SVG inline). */
export const FEATURES = [
  { icon: "globe",     title: "Página Pública",      desc: "Tu campeonato con URL propia, visible para todos los participantes y seguidores."                    },
  { icon: "calendar",  title: "Fixture Automático",  desc: "Generación automática de calendarios y cruces según el formato de tu torneo."                       },
  { icon: "trophy",    title: "Tabla de Posiciones", desc: "Clasificación en tiempo real, siempre actualizada tras cada resultado."                              },
  { icon: "zap",       title: "Resultados en Vivo",  desc: "Carga de marcadores en tiempo real para mantener a todos informados al instante."                    },
  { icon: "users",     title: "Perfiles de Equipos", desc: "Página individual por equipo y jugador con estadísticas e historial."                                },
  { icon: "clipboard", title: "Inscripciones",       desc: "Gestión centralizada de inscripciones y documentación de participantes."                             },
  { icon: "chart",     title: "Estadísticas",        desc: "Métricas básicas del torneo: goles, puntos, promedios, y más."                                       },
  { icon: "palette",   title: "Personalización",     desc: "Tu logo, tus colores. La plataforma se adapta a la identidad visual de tu campeonato."               },
];

/** `icon`: clave en services/sportIcons.js (SVG inline). */
export const SPORTS = [
  { icon: "soccer",       label: "Fútbol"            },
  { icon: "basketball",   label: "Baloncesto"        },
  { icon: "volleyball",   label: "Voleibol"          },
  { icon: "table-tennis", label: "Tenis de Mesa"     },
  { icon: "ecuavoley",    label: "Ecuavóley"         },
  { icon: "more",         label: "Más en desarrollo", comingSoon: true },
];

export const SPONSORS = [
  { level: "Sponsor Pequeño",  price: "$5",  range: "Hasta $50 de auspicio",     colorVar: "--gray"        },
  { level: "Sponsor Mediano",  price: "$10", range: "$50 – $300 de auspicio",     colorVar: "--blue-bright" },
  { level: "Sponsor Grande",   price: "$20", range: "$300 – $1,000 de auspicio",  colorVar: "--ice"         },
  { level: "Sponsor Premium",  price: "5%",  range: "$1,000 o más de auspicio",   colorVar: "--gold", isPremium: true },
];

export const WHY_REASONS = [
  "Profesionaliza tu campeonato",
  "Mejora la experiencia de jugadores",
  "Centraliza toda la información",
  "Facilita la organización",
  "Adaptable a cualquier torneo",
];

export const CTA = {
  quote:      "El precio se adapta al tamaño del campeonato y al nivel de servicio que necesites.",
  quoteHighlight: "tamaño del campeonato",
  buttonLabel: "Lleva tu campeonato al siguiente nivel →",
  buttonHref:  "#contact",
};

export const CONTACT = {
  email:   "iceplay.fropen@gmail.com",
  phone:   "+593 000 000 000",
  website: "https://iceplay.pro",
  idealFor: [
    "Ligas deportivas",
    "Organizadores de torneos",
    "Instituciones",
    "Eventos deportivos",
  ],
};

export const FOOTER_LINKS = [
  { href: "#features",  label: "Plataforma" },
  { href: "#plans",     label: "Planes"     },
  { href: "#sports",    label: "Deportes"   },
  { href: "#sponsors",  label: "Auspicios"  },
  { href: "#contact",   label: "Contacto"   },
];
