# PB Clean — Site Institucional Premium

Site institucional focado em conversão para WhatsApp, desenvolvido com Next.js 15, TypeScript, Tailwind CSS, Shadcn/UI e Framer Motion.

## Identidade Visual (extraída do Instagram @pb_clean)

| Elemento | Valor |
|---|---|
| **Primary (Navy)** | `#0A1A3A` |
| **Accent (Red)** | `#E31E24` |
| **Support Blue** | `#0D6EFD` / `#35B5FF` |
| **Logo** | Circular navy, "PB" branco itálico, "CLEAN" em caixa vermelha |
| **Tipografia** | Sans-serif bold, headlines uppercase |
| **Estilo** | Editorial escuro, before/after, comunicação direta |
| **Bio** | Limpeza Pós Obra, Pós Incêndio, Conservação, Pré e Pós Eventos |

> Detalhes completos em `lib/brand.ts`

## Placeholders a substituir

- Endereço e CEP preenchidos em `lib/constants.ts`
- Fotos da galeria e hero atualizadas para ativos locais da marca
- `/public/og-image.jpg` criado (1200×630)
- `/public/apple-touch-icon.png` criado (180×180)
- Logo SVG oficial em `public/logo.svg`

## Instalação

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção |
| `npm run lint` | ESLint |

## Arquitetura de Pastas

```
pbclean/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx          # Layout raiz, metadata, JSON-LD
│   ├── page.tsx            # Homepage com dynamic imports
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts           # Robots.txt
├── components/
│   ├── ui/                 # Shadcn/UI (Button, Accordion, Input...)
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Seções da homepage
│   └── shared/             # Logo, Motion, GlassCard, WhatsApp
├── features/               # Lógica por domínio (schemas, etc.)
│   └── contact/
├── hooks/                  # Custom hooks React
├── lib/                    # Utilitários, constantes, brand, SEO
├── services/               # Serviços (ex: envio WhatsApp)
├── types/                  # TypeScript types globais
├── styles/                 # globals.css + tokens Tailwind
└── public/                 # Assets estáticos, manifest, favicon
```

## Seções da Homepage

1. **Hero** — Glass panel, CTA principal, headline da marca
2. **Stats** — Números de credibilidade
3. **Marquee** — Segmentos atendidos
4. **Problemas** — Pain points do cliente
5. **Serviços** — Grid de 6 serviços
6. **Processo** — Timeline 5 etapas
7. **Diferenciais** — 4 pilares de confiança
8. **Galeria** — Before/After slider interativo
9. **Depoimentos** — Carousel Swiper
10. **FAQ** — Accordion
11. **Contato** — Formulário + WhatsApp
12. **CTA Final** — Conversão final

## Componentes 21st.dev (referência)

Padrões adaptados de componentes modernos:
- **Glassmorphism Trust Hero** → Hero com glass panel
- **Minimalist Hero** → Hierarquia e whitespace
- **Timeline** → Seção de processo
- **FAQ Accordion** → Perguntas frequentes
- **Testimonials Carousel** → Depoimentos Swiper
- **Before/After Slider** → Galeria interativa
- **Marquee** → Logo cloud de segmentos

## SEO & Performance

- Metadata completa (OpenGraph, Twitter Card)
- JSON-LD LocalBusiness
- Sitemap + Robots
- `next/image` com AVIF/WebP
- `next/font` (Manrope)
- Dynamic imports para seções below-the-fold
- Server Components por padrão

## Conversão

- Botão flutuante WhatsApp
- CTA em todas as seções
- Telefone e e-mail clicáveis
- Formulário com validação Zod → redirect WhatsApp

## Design System

Baseado em `DesingSistem.json` + identidade Instagram.
