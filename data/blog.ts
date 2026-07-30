import type { BlogPost } from "@/types/content";

export const blogCategories = [
  "Todos",
  "Pós Incêndio",
  "Pós Obra",
  "Conservação",
  "Sanitização",
  "Gestão",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "primeiros-cuidados-apos-incendio",
    title: "Primeiros cuidados com o imóvel após um incêndio",
    excerpt:
      "Entenda por que fuligem e resíduos exigem avaliação técnica antes de qualquer tentativa de limpeza.",
    category: "Pós Incêndio",
    date: "20 jul 2026",
    readingTime: "6 min",
    cover: "/gallery-1-before.jpg",
    content: [
      {
        heading: "Segurança vem antes da limpeza",
        paragraphs: [
          "O acesso ao imóvel deve ocorrer somente após a liberação dos responsáveis técnicos e autoridades competentes. Estruturas, instalações elétricas e materiais queimados podem apresentar riscos que não são visíveis.",
          "Também é importante evitar espalhar a fuligem. Tentativas sem técnica podem fixar resíduos em superfícies porosas e ampliar a área contaminada.",
        ],
      },
      {
        heading: "Por que a avaliação profissional é importante",
        paragraphs: [
          "Cada material reage de uma forma ao calor, à fumaça e aos produtos de limpeza. A avaliação define o que pode ser recuperado e quais métodos são adequados.",
          "Fotos, informações sobre o evento e a planta do imóvel ajudam a preparar a visita e dimensionar a resposta.",
        ],
      },
    ],
    related: ["como-remover-odor-fumaca", "limpeza-tecnica-ou-convencional"],
  },
  {
    slug: "como-remover-odor-fumaca",
    title: "Como funciona a neutralização do odor de fumaça",
    excerpt:
      "A origem do odor precisa ser removida antes do tratamento complementar do ambiente.",
    category: "Sanitização",
    date: "12 jul 2026",
    readingTime: "5 min",
    cover: "/hero-fire-restoration.png",
    content: [
      {
        heading: "O odor não está apenas no ar",
        paragraphs: [
          "Partículas de fumaça se depositam em paredes, tetos, tecidos, mobiliário e sistemas de ventilação. Por isso, mascarar o cheiro não resolve a causa.",
          "O protocolo pode combinar remoção física dos resíduos, limpeza de superfícies e tratamento complementar, conforme a avaliação.",
        ],
      },
      {
        heading: "O papel da sanitização com ozônio",
        paragraphs: [
          "Quando tecnicamente indicada, a aplicação de ozônio pode auxiliar na neutralização de odores persistentes. O ambiente deve ficar desocupado e ser ventilado antes da liberação.",
        ],
      },
    ],
    related: ["primeiros-cuidados-apos-incendio", "sanitizacao-com-ozonio-cuidados"],
  },
  {
    slug: "checklist-limpeza-pos-obra",
    title: "Checklist para uma limpeza pós-obra segura",
    excerpt:
      "O que avaliar antes de iniciar a limpeza final de uma construção ou reforma.",
    category: "Pós Obra",
    date: "02 jul 2026",
    readingTime: "7 min",
    cover: "/post-construction-team.png",
    content: [
      {
        heading: "Mapeie materiais e resíduos",
        paragraphs: [
          "Pisos, metais, vidros e pedras exigem produtos e técnicas diferentes. Identificar os acabamentos reduz o risco de manchas, riscos e perda de brilho.",
          "Também é necessário remover entulho e concluir intervenções que gerem poeira antes da limpeza fina.",
        ],
      },
      {
        heading: "Organize a entrega por etapas",
        paragraphs: [
          "A divisão por setores facilita o controle de qualidade e evita que equipes de obra voltem a contaminar áreas concluídas.",
        ],
      },
    ],
    related: ["limpeza-tecnica-ou-convencional", "plano-conservacao-empresas"],
  },
  {
    slug: "plano-conservacao-empresas",
    title: "Como montar um plano de conservação para empresas",
    excerpt:
      "Frequência, fluxo, criticidade e horários definem uma rotina realmente eficiente.",
    category: "Conservação",
    date: "24 jun 2026",
    readingTime: "6 min",
    cover: "/industrial-cleaning-team.png",
    content: [
      {
        heading: "Comece pelo uso de cada ambiente",
        paragraphs: [
          "Recepções, banheiros, áreas administrativas e espaços de grande circulação possuem necessidades distintas. A frequência deve acompanhar o uso real.",
          "Indicadores simples e supervisão ajudam a manter consistência e corrigir desvios rapidamente.",
        ],
      },
    ],
    related: ["checklist-limpeza-pos-obra", "limpeza-tecnica-ou-convencional"],
  },
  {
    slug: "sanitizacao-com-ozonio-cuidados",
    title: "Sanitização com ozônio: indicações e cuidados",
    excerpt:
      "Conheça os critérios de segurança para uma aplicação planejada e responsável.",
    category: "Sanitização",
    date: "15 jun 2026",
    readingTime: "5 min",
    cover: "/gallery-3-before.jpg",
    content: [
      {
        heading: "Aplicação controlada",
        paragraphs: [
          "A sanitização com ozônio requer ambiente desocupado, tempo de aplicação definido e ventilação posterior. Pessoas, animais e plantas não devem permanecer no local.",
          "O tratamento não substitui automaticamente a limpeza física; sua indicação depende do problema encontrado.",
        ],
      },
    ],
    related: ["como-remover-odor-fumaca", "primeiros-cuidados-apos-incendio"],
  },
  {
    slug: "limpeza-tecnica-ou-convencional",
    title: "Limpeza técnica ou convencional: qual a diferença?",
    excerpt:
      "Entenda quando o ambiente exige protocolo, equipamentos e produtos especializados.",
    category: "Gestão",
    date: "05 jun 2026",
    readingTime: "4 min",
    cover: "/gallery-2-before.jpg",
    content: [
      {
        heading: "O risco define o método",
        paragraphs: [
          "Situações pós-incêndio, pós-obra e industriais envolvem resíduos, superfícies e riscos diferentes da limpeza cotidiana.",
          "A limpeza técnica parte de uma avaliação, seleciona métodos compatíveis e estabelece critérios objetivos de entrega.",
        ],
      },
    ],
    related: ["checklist-limpeza-pos-obra", "plano-conservacao-empresas"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
