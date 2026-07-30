/**
 * Identidade visual extraída do Instagram @pb_clean
 * Fonte: https://www.instagram.com/pb_clean/
 * Data: 2026-07-29
 */
export const brandIdentity = {
  source: "https://www.instagram.com/pb_clean/",
  extractedAt: "2026-07-29",

  logo: {
    shape: "circular",
    background: "#0A1A3A",
    primaryText: "PB",
    primaryTextColor: "#FFFFFF",
    secondaryText: "CLEAN",
    secondaryTextStyle: "uppercase in red bordered box",
    accentColor: "#E31E24",
    websiteText: "www.pbclean.com.br",
    note: "Substituir por asset oficial quando disponível — placeholder SVG em /public/logo.svg",
  },

  colors: {
    primary: "#0A1A3A",
    accent: "#E31E24",
    white: "#FFFFFF",
    secondaryBlue: "#35B5FF",
    supportBlue: "#0D6EFD",
    supportTeal: "#4FD1C5",
    surface: "#F4F8FC",
    background: "#FFFFFF",
    dark: "#0F172A",
  },

  typography: {
    style: "Bold sans-serif, high contrast, uppercase headlines",
    equivalents: ["Manrope", "Inter", "Montserrat"],
    characteristics: [
      "Headlines bold and uppercase",
      "High legibility on dark backgrounds",
      "Editorial infographic style in posts",
    ],
  },

  photography: {
    style: [
      "Before/after restoration scenes",
      "Fire-damaged environments",
      "High contrast dramatic imagery",
      "Professional cleaning equipment",
      "Realistic, not overly filtered",
    ],
  },

  communication: {
    tone: "Direct, solution-oriented, authoritative",
    keywords: ["Restaura", "Especializada", "Pós-incêndio", "Pós-obra", "Conservação"],
    bio: "Prestadora de Serviços — Limpeza Pós Obra, Limpeza Pós Incêndio, Limpeza de Conservação, Limpeza Pré e Pós Eventos",
  },

  editorialPatterns: {
    postStyle: "Dark navy backgrounds with bold white typography",
    highlights: "Service categories and before/after showcases",
    ctaFocus: "Website link and direct contact",
  },
} as const;

export type BrandIdentity = typeof brandIdentity;
