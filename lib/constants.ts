export const SITE = {
  name: "PB Clean",
  legalName: "PB Clean Soluções",
  description:
    "Especialistas em limpeza pós-incêndio, pós-obra e conservação. Restauramos ambientes com rapidez, segurança e profissionalismo há mais de 15 anos em São Paulo.",
  url: "https://pbclean.com.br",
  locale: "pt_BR",
  phone: "+55 11 94768-3103",
  phoneRaw: "5511947683103",
  email: "contato@pbcleanlimpeza.com.br",
  instagram: "https://www.instagram.com/pb_clean",
  address: {
    street: "Av. Paulista, 2300 - Bela Vista",
    city: "São Paulo",
    state: "SP",
    country: "BR",
    postalCode: "01310-300",
  },
  experienceYears: 15,
} as const;

export const NAV_LINKS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
] as const;

export const SERVICES = [
  {
    id: "pos-incendio",
    title: "Limpeza Pós-Incêndio",
    description:
      "Remoção técnica de fuligem, resíduos tóxicos e odores persistentes. Restauramos ambientes residenciais, comerciais e industriais com protocolos de descontaminação.",
    icon: "Flame",
    highlight: "Mais solicitado",
  },
  {
    id: "pos-obra",
    title: "Limpeza Pós-Obra",
    description:
      "Entrega impecável após reformas e construções. Eliminamos poeira fina, resíduos de gesso, tinta e entulho para você receber o espaço pronto para uso.",
    icon: "HardHat",
    highlight: null,
  },
  {
    id: "conservacao",
    title: "Conservação",
    description:
      "Manutenção contínua de condomínios, empresas e indústrias. Preservamos a qualidade do ambiente com equipes dedicadas e cronogramas personalizados.",
    icon: "Sparkles",
    highlight: null,
  },
  {
    id: "sanitizacao",
    title: "Sanitização com Ozônio",
    description:
      "Desinfecção profunda do ar e superfícies. Eliminação de bactérias, fungos e odores com tecnologia de ozônio — ideal para ambientes sensíveis.",
    icon: "Wind",
    highlight: null,
  },
  {
    id: "eventos",
    title: "Limpeza Pré e Pós Eventos",
    description:
      "Preparação e finalização de espaços para eventos corporativos e sociais. Agilidade e discrição para que seu evento aconteça sem preocupações.",
    icon: "CalendarDays",
    highlight: null,
  },
  {
    id: "express",
    title: "Limpeza Express",
    description:
      "Atendimento emergencial para situações que não podem esperar. Equipe mobilizada rapidamente com equipamentos profissionais.",
    icon: "Zap",
    highlight: null,
  },
] as const;

export const STATS = [
  { value: "15+", label: "Anos de experiência" },
  { value: "500+", label: "Projetos concluídos" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "24h", label: "Resposta emergencial" },
] as const;

export const PROBLEMS = [
  {
    title: "Fuligem e resíduos tóxicos",
    description:
      "Após um incêndio, partículas microscópicas se infiltram em paredes, tetos e dutos. Sem limpeza técnica, o risco à saúde persiste.",
    icon: "AlertTriangle",
  },
  {
    title: "Odores persistentes",
    description:
      "Cheiros de fumaça e mofo não desaparecem com produtos comuns. Exigem protocolos especializados e equipamentos profissionais.",
    icon: "Wind",
  },
  {
    title: "Poeira pós-obra",
    description:
      "Reformas deixam camadas finas de poeira em cada superfície. A limpeza inadequada compromete acabamentos e a saúde dos ocupantes.",
    icon: "Construction",
  },
  {
    title: "Prazos apertados",
    description:
      "Entregas de obra, eventos ou reabertura comercial não podem esperar. Você precisa de uma equipe que entrega no prazo, sem atalhos.",
    icon: "Clock",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Diagnóstico gratuito",
    description:
      "Nossa equipe avalia o ambiente, identifica o tipo de contaminação e define o protocolo ideal — sem compromisso.",
  },
  {
    step: 2,
    title: "Proposta personalizada",
    description:
      "Orçamento detalhado com escopo, prazo e materiais. Transparência total antes de qualquer execução.",
  },
  {
    step: 3,
    title: "Execução técnica",
    description:
      "Equipe uniformizada, EPIs completos e equipamentos de última geração. Seguimos normas de segurança rigorosas.",
  },
  {
    step: 4,
    title: "Inspeção de qualidade",
    description:
      "Checklist final com o cliente. Garantimos que cada detalhe atende ao padrão PB Clean antes da entrega.",
  },
  {
    step: 5,
    title: "Acompanhamento",
    description:
      "Suporte pós-serviço e garantia de satisfação. Estamos disponíveis para qualquer necessidade futura.",
  },
] as const;

export const DIFFERENTIALS = [
  {
    title: "Equipe especializada",
    description: "Profissionais treinados em limpeza técnica pós-incêndio e pós-obra, com certificações em segurança.",
    icon: "Users",
  },
  {
    title: "Equipamentos profissionais",
    description: "Extratoras, geradores de ozônio, aspiradores HEPA e produtos de grau industrial.",
    icon: "Wrench",
  },
  {
    title: "Atendimento emergencial",
    description: "Disponibilidade 24h para situações críticas. Resposta em até 2 horas na região metropolitana.",
    icon: "ShieldCheck",
  },
  {
    title: "15 anos de referência",
    description: "Histórico comprovado com clientes residenciais, corporativos e industriais em São Paulo.",
    icon: "Award",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    role: "Síndico — Condomínio Residencial",
    content:
      "Após um incêndio na área comum, a PB Clean restaurou tudo em 3 dias. Profissionalismo impecável e equipe muito educada.",
    rating: 5,
  },
  {
    name: "Ana Paula Ribeiro",
    role: "Gerente de Facilities — Empresa de Tecnologia",
    content:
      "Contratamos para limpeza pós-obra do novo escritório. Entregaram antes do prazo e o espaço ficou impecável para a inauguração.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    role: "Construtor — Obra Comercial",
    content:
      "Parceiro fixo em todas as nossas entregas. A qualidade da limpeza pós-obra da PB Clean é referência no mercado.",
    rating: 5,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quanto tempo leva uma limpeza pós-incêndio?",
    answer:
      "Depende da extensão dos danos. Ambientes residenciais levam de 1 a 3 dias; comerciais e industriais podem exigir de 3 a 10 dias. Fazemos diagnóstico gratuito com prazo estimado.",
  },
  {
    question: "Vocês atendem emergências?",
    answer:
      "Sim. Temos equipe de plantão 24h para situações críticas. Entre em contato pelo WhatsApp e respondemos em até 2 horas na região metropolitana de São Paulo.",
  },
  {
    question: "Quais produtos e equipamentos utilizam?",
    answer:
      "Utilizamos extratoras industriais, aspiradores HEPA, geradores de ozônio e produtos biodegradáveis de grau profissional, adequados para cada tipo de superfície e contaminação.",
  },
  {
    question: "A limpeza pós-obra inclui vidros e fachadas?",
    answer:
      "Sim. Nosso escopo pós-obra é completo: remoção de poeira fina, limpeza de vidros, pisos, rejuntes, armários e áreas externas conforme necessidade.",
  },
  {
    question: "Como funciona o orçamento?",
    answer:
      "Após o diagnóstico gratuito, enviamos proposta detalhada com escopo, materiais, prazo e valor fixo. Sem taxas ocultas ou surpresas na fatura.",
  },
  {
    question: "Atendem fora de São Paulo?",
    answer:
      "Nossa base é São Paulo capital e região metropolitana. Para outras regiões, consulte disponibilidade pelo WhatsApp — avaliamos caso a caso.",
  },
] as const;

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Restauração pós-incêndio — Sala comercial",
    category: "Pós-Incêndio",
    before: "/gallery-1-before.jpg",
    after: "/gallery-1-after.jpg",
  },
  {
    id: 2,
    title: "Limpeza pós-obra — Escritório corporativo",
    category: "Pós-Obra",
    before: "/gallery-2-before.jpg",
    after: "/gallery-2-after.jpg",
  },
  {
    id: 3,
    title: "Sanitização — Ambiente industrial",
    category: "Sanitização",
    before: "/gallery-3-before.jpg",
    after: "/gallery-3-after.jpg",
  },
] as const;

export const CLIENTS = [
  "Condomínios",
  "Construtoras",
  "Indústrias",
  "Escritórios",
  "Clínicas",
  "Shoppings",
  "Restaurantes",
  "Hotéis",
] as const;
