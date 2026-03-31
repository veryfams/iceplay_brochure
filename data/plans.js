/**
 * data/plans.js
 * Fuente única de verdad para los planes de IcePlay.
 * No contiene lógica — solo estructuras de datos puras.
 */

export const PLANS = [
  {
    id: "plataforma",
    badge: "Plan Plataforma",
    badgeVariant: "green",
    name: "PLATAFORMA",
    description: "Tú manejas el campeonato con todas las herramientas incluidas.",
    featured: false,
    features: [
      "Fixture y tabla de posiciones automáticos",
      "Resultados en tiempo real",
      "Perfiles de equipos y jugadores",
      "Gestión de inscripciones",
      "Personalización con tu logo y colores",
    ],
    pricingGroups: [
      {
        id: "futbol",
        label: "Fútbol",
        icon: "⚽",
        ariaLabel: "Precios plan Plataforma — Fútbol",
        rows: [
          { duration: "1 mes",    amount: "$30"  },
          { duration: "3 meses",  amount: "$80"  },
          { duration: "4 meses",  amount: "$100" },
          { duration: "5 meses",  amount: "$120" },
          { duration: "6 meses",  amount: "$140" },
        ],
      },
      {
        id: "otros",
        label: "Vóley · Básquet · Tenis · Ecuavóley",
        icon: "🏀",
        ariaLabel: "Precios plan Plataforma — Otros deportes",
        rows: [
          { duration: "1 mes",    amount: "$25"  },
          { duration: "3 meses",  amount: "$70"  },
          { duration: "4 meses",  amount: "$90"  },
          { duration: "5 meses",  amount: "$110" },
          { duration: "6 meses",  amount: "$130" },
        ],
      },
    ],
  },

  {
    id: "gestion",
    badge: "Plan Gestión",
    badgeVariant: "blue",
    name: "GESTIÓN",
    description: "Nos encargamos de todo. Tú solo organizas el campeonato.",
    featured: true,
    featuredLabel: "Más popular",
    features: [
      "Todo lo del Plan Plataforma",
      "Carga de resultados incluida",
      "Soporte técnico durante el torneo",
      "Manejo completo del sistema",
    ],
    tiers: [
      { variant: "small",  label: "Pequeño", sub: "Hasta 8 equipos",   price: "$80 – $100"  },
      { variant: "medium", label: "Mediano",  sub: "9 a 16 equipos",    price: "$120 – $150" },
      { variant: "large",  label: "Grande",   sub: "17 o más equipos",  price: "$180 – $250" },
    ],
    note: "★ Precio único por campeonato completo — no es mensual",
  },

  {
    id: "frecuentes",
    badge: "Organizadores",
    badgeVariant: "purple",
    name: "FRECUENTES",
    description: "Para entidades con múltiples campeonatos al año.",
    featured: false,
    features: [
      "Descuentos por volumen",
      "Prioridad de soporte",
      "Precios preferenciales",
      "Gestión multi-campeonato",
    ],
    volumeDiscounts: [
      { label: "2 a 3 campeonatos", discount: "−10%" },
      { label: "4 o más campeonatos", discount: "−15%" },
    ],
    durationDiscounts: [
      { duration: "3 meses",  discount: "Base"  },
      { duration: "6 meses",  discount: "−10%"  },
      { duration: "9 meses",  discount: "−15%"  },
      { duration: "12 meses", discount: "−20%"  },
    ],
    durationNote: "Aplica sobre el precio base de cualquier plan.",
  },
];
