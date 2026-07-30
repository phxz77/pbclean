import type { Service } from "@/types/content";

const sharedDifferentials = [
  "Avaliação técnica e escopo personalizado",
  "Equipe treinada, uniformizada e supervisionada",
  "Equipamentos e produtos profissionais",
  "Proteção das superfícies e do patrimônio",
  "Comunicação clara do início à entrega",
];

const sharedProcess = [
  "Levantamento das necessidades e características do ambiente",
  "Definição do protocolo, equipe, equipamentos e produtos",
  "Isolamento e preparação segura das áreas de trabalho",
  "Execução técnica com acompanhamento e controle de qualidade",
  "Vistoria final e liberação do ambiente",
];

export const services: Service[] = [
  {
    slug: "limpeza-pos-incendio",
    title: "Limpeza Pós-Incêndio",
    eyebrow: "Recuperação de ambientes críticos",
    shortDescription:
      "Remoção técnica de fuligem, resíduos corrosivos e odores para preparar o ambiente para recuperação.",
    description: [
      "A limpeza pós-incêndio exige resposta técnica. Fuligem, fumaça e resíduos podem se espalhar por superfícies, mobiliário e sistemas do imóvel, comprometendo a qualidade do ar e acelerando a corrosão de materiais.",
      "A PB Clean atua com profissionais experientes, equipamentos de proteção, aspiradores adequados e produtos específicos para neutralizar os efeitos do incêndio. Quando indicado, aplicamos sanitização com ozônio para auxiliar na eliminação de odores persistentes.",
    ],
    icon: "flame",
    audiences: ["Residências", "Empresas", "Indústrias", "Condomínios", "Comércios"],
    benefits: [
      "Remoção de fuligem e particulados",
      "Neutralização de odores de fumaça e queimado",
      "Redução de resíduos corrosivos",
      "Preparação para reforma e recuperação",
      "Mais segurança para projetistas e equipes de obra",
    ],
    differentials: [...sharedDifferentials, "Atendimento emergencial sob consulta"],
    process: sharedProcess,
    faq: [
      { id: "pi-1", category: "Pós Incêndio", question: "Quando a limpeza pode começar?", answer: "Após a liberação do local pelos responsáveis técnicos e autoridades competentes, realizamos a avaliação para definir o protocolo seguro." },
      { id: "pi-2", category: "Pós Incêndio", question: "É possível remover o cheiro de fumaça?", answer: "Na maioria dos cenários, sim. A estratégia combina limpeza das superfícies, remoção das fontes contaminantes e, quando indicado, tratamento com ozônio." },
      { id: "pi-3", category: "Pós Incêndio", question: "Vocês atendem imóveis comerciais e industriais?", answer: "Sim. Dimensionamos equipe, equipamentos e cronograma conforme a escala e as restrições operacionais do ambiente." },
    ],
    gallery: [
      { before: "/case-fire-bedroom-before.jpeg", after: "/case-fire-bedroom-after.jpeg", alt: "Recuperação de dormitório após incêndio" },
      { before: "/gallery-3-before.jpg", after: "/industrial-cleaning-team.png", alt: "Limpeza técnica de resíduos e fuligem" },
    ],
    related: ["sanitizacao-ozonio", "limpeza-para-industrias", "limpeza-pos-obra"],
    featured: true,
  },
  {
    slug: "limpeza-pos-obra",
    title: "Limpeza Pós-Obra",
    eyebrow: "A etapa final de uma grande entrega",
    shortDescription:
      "Da limpeza pesada ao acabamento fino, com cuidado para preservar revestimentos e materiais recém-instalados.",
    description: [
      "A conclusão de uma obra ou reforma só acontece quando o espaço está limpo, seguro e pronto para uso. A PB Clean remove poeira fina, resíduos de materiais, marcas e sujidades difíceis sem comprometer os acabamentos.",
      "O serviço é planejado por tipo de superfície e pode incluir vidros, fachadas, áreas internas e externas. Nossa equipe utiliza técnicas e produtos compatíveis com cada material.",
    ],
    icon: "hard-hat",
    audiences: ["Construtoras", "Arquitetos", "Empresas", "Comércios", "Residências"],
    benefits: [
      "Remoção de resíduos de obra",
      "Limpeza fina de acabamentos",
      "Cuidado com vidros, metais e revestimentos",
      "Ambiente pronto para ocupação",
      "Apoio à entrega técnica do projeto",
    ],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [
      { id: "po-1", category: "Pós Obra", question: "A limpeza inclui vidros e áreas externas?", answer: "O escopo é personalizado e pode incluir vidros, fachadas acessíveis, áreas externas e demais ambientes definidos na avaliação." },
      { id: "po-2", category: "Pós Obra", question: "Os produtos podem danificar acabamentos?", answer: "Selecionamos métodos e produtos conforme cada superfície e realizamos testes quando necessário para preservar os materiais." },
      { id: "po-3", category: "Pós Obra", question: "Atendem obras de grande porte?", answer: "Sim. A equipe e o cronograma são dimensionados de acordo com metragem, prazo, complexidade e fases de entrega." },
    ],
    gallery: [
      { before: "/gallery-2-before.jpg", after: "/post-construction-team.png", alt: "Limpeza fina após obra" },
      { before: "/gallery-3-before.jpg", after: "/fine-finishing-cleaning.png", alt: "Limpeza fina de acabamentos em ambiente reformado" },
    ],
    related: ["limpeza-para-empresas", "limpeza-para-residencias", "conservacao"],
    featured: true,
  },
  {
    slug: "conservacao",
    title: "Limpeza e Conservação",
    eyebrow: "Cuidado contínuo com seu patrimônio",
    shortDescription:
      "Rotinas recorrentes de limpeza com equipe qualificada, supervisão e padrão consistente de entrega.",
    description: [
      "A conservação profissional preserva ambientes, contribui para o bem-estar e fortalece a imagem da organização. Criamos planos de trabalho compatíveis com fluxo, horários e características do imóvel.",
      "As equipes recebem orientação de postura, atendimento, segurança e utilização correta de produtos e equipamentos, com supervisão e acompanhamento de qualidade.",
    ],
    icon: "sparkles",
    audiences: ["Empresas", "Indústrias", "Condomínios", "Comércios", "Instituições"],
    benefits: ["Ambientes limpos de forma consistente", "Rotinas adaptadas à operação", "Preservação de superfícies", "Supervisão e controle", "Melhor experiência para usuários"],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [
      { id: "co-1", category: "Conservação", question: "O plano pode ser diário ou periódico?", answer: "Sim. A frequência, os horários e o dimensionamento são definidos conforme o fluxo e as necessidades do cliente." },
      { id: "co-2", category: "Conservação", question: "Há supervisão da equipe?", answer: "Sim. O acompanhamento faz parte do controle de qualidade e da melhoria contínua do serviço." },
    ],
    gallery: [{ before: "/gallery-3-before.jpg", after: "/corporate-conservation-team.png", alt: "Conservação de ambiente corporativo" }],
    related: ["limpeza-para-empresas", "limpeza-para-condominios", "limpeza-para-industrias"],
    featured: true,
  },
  {
    slug: "sanitizacao-ozonio",
    title: "Sanitização com Ozônio",
    eyebrow: "Tecnologia para ambientes mais saudáveis",
    shortDescription:
      "Tratamento técnico para auxiliar na purificação do ambiente e neutralização de odores persistentes.",
    description: [
      "O ozônio pode ser utilizado, mediante avaliação, como parte de protocolos de sanitização e neutralização de odores de fumaça, mofo, cigarro, animais e outras fontes.",
      "A aplicação é realizada em ambiente controlado, sem pessoas ou animais durante o procedimento, e segue critérios de tempo, concentração e ventilação definidos pela equipe.",
    ],
    icon: "wind",
    audiences: ["Residências", "Veículos", "Empresas", "Hotéis", "Ambientes pós-incêndio"],
    benefits: ["Neutralização de odores persistentes", "Tratamento do ar e superfícies expostas", "Aplicação planejada por ambiente", "Complemento para limpezas técnicas"],
    differentials: [...sharedDifferentials, "Aplicação controlada e ambiente isolado"],
    process: sharedProcess,
    faq: [
      { id: "oz-1", category: "Sanitização", question: "É seguro permanecer no local durante a aplicação?", answer: "Não. O ambiente deve permanecer desocupado durante o tratamento e só é liberado após o período de ventilação definido pela equipe." },
      { id: "oz-2", category: "Sanitização", question: "O ozônio remove qualquer odor?", answer: "A eficácia depende da origem e da permanência da fonte. Por isso, avaliamos o ambiente e combinamos o tratamento com limpeza quando necessário." },
    ],
    gallery: [{ before: "/gallery-1-before.jpg", after: "/ozone-sanitization-room.png", alt: "Sanitização técnica de ambiente com ozônio" }],
    related: ["limpeza-pos-incendio", "limpeza-para-residencias", "limpeza-para-empresas"],
    featured: true,
  },
  {
    slug: "limpeza-para-empresas",
    title: "Limpeza para Empresas",
    eyebrow: "Ambientes profissionais à altura da sua marca",
    shortDescription:
      "Soluções pontuais ou recorrentes para escritórios, lojas, operações comerciais e sedes corporativas.",
    description: [
      "Um ambiente corporativo limpo comunica cuidado, organização e respeito. A PB Clean planeja rotinas que preservam a produtividade e se adaptam aos horários da operação.",
      "Atendemos demandas recorrentes, limpezas técnicas, entregas pós-obra, mudanças e necessidades emergenciais sob consulta.",
    ],
    icon: "building",
    audiences: ["Escritórios", "Lojas", "Clínicas", "Escolas", "Sedes corporativas"],
    benefits: ["Rotina adaptada ao negócio", "Equipe com postura profissional", "Menor impacto na operação", "Padronização dos ambientes"],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [{ id: "em-1", category: "Empresas", question: "É possível realizar o serviço fora do horário comercial?", answer: "Sim. O cronograma pode ser planejado para reduzir interferências na rotina da empresa." }],
    gallery: [{ before: "/gallery-2-before.jpg", after: "/corporate-conservation-team.png", alt: "Limpeza de ambiente empresarial" }],
    related: ["conservacao", "limpeza-pos-obra", "sanitizacao-ozonio"],
  },
  {
    slug: "limpeza-para-industrias",
    title: "Limpeza para Indústrias",
    eyebrow: "Planejamento para ambientes técnicos",
    shortDescription:
      "Operações dimensionadas para áreas industriais, administrativas e de apoio, respeitando normas e rotinas locais.",
    description: [
      "Ambientes industriais exigem planejamento, integração com a segurança local e atenção às particularidades da operação. O escopo é definido após análise técnica.",
      "A PB Clean organiza equipe, materiais e execução de acordo com acessos, áreas críticas, superfícies e horários disponíveis.",
    ],
    icon: "factory",
    audiences: ["Indústrias", "Galpões", "Centros logísticos", "Áreas administrativas"],
    benefits: ["Planejamento técnico", "Integração com normas locais", "Dimensionamento de equipe", "Conservação do patrimônio"],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [{ id: "in-1", category: "Indústrias", question: "Vocês seguem as regras de segurança da planta?", answer: "Sim. A operação é planejada em conjunto com o cliente e respeita os procedimentos de acesso e segurança informados." }],
    gallery: [{ before: "/gallery-1-before.jpg", after: "/industrial-cleaning-team.png", alt: "Limpeza técnica industrial" }],
    related: ["conservacao", "limpeza-pos-incendio", "limpeza-pos-obra"],
  },
  {
    slug: "limpeza-para-condominios",
    title: "Limpeza para Condomínios",
    eyebrow: "Cuidado diário com áreas compartilhadas",
    shortDescription:
      "Conservação de áreas comuns, administrativas e de circulação com rotina, supervisão e discrição.",
    description: [
      "A limpeza de condomínios influencia diretamente a segurança, o conforto e a percepção de moradores e visitantes. Criamos planos adequados ao fluxo e à estrutura de cada empreendimento.",
      "O serviço pode contemplar halls, corredores, elevadores, áreas de lazer, garagens e espaços administrativos conforme o contrato.",
    ],
    icon: "users",
    audiences: ["Condomínios residenciais", "Condomínios comerciais", "Administradoras"],
    benefits: ["Áreas comuns bem cuidadas", "Rotinas claras", "Equipe orientada ao atendimento", "Supervisão recorrente"],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [{ id: "cd-1", category: "Condomínios", question: "O plano contempla áreas de lazer e garagens?", answer: "Pode contemplar. O escopo é montado conforme as áreas, frequências e prioridades definidas pelo condomínio." }],
    gallery: [{ before: "/gallery-3-before.jpg", after: "/corporate-conservation-team.png", alt: "Conservação de áreas comuns" }],
    related: ["conservacao", "sanitizacao-ozonio", "limpeza-pos-obra"],
  },
  {
    slug: "limpeza-para-residencias",
    title: "Limpeza para Residências",
    eyebrow: "Seu espaço pronto para viver",
    shortDescription:
      "Limpezas especiais, pós-obra, pré e pós-mudança realizadas com cuidado e respeito ao imóvel.",
    description: [
      "Cada residência reúne materiais, objetos e necessidades diferentes. Por isso, avaliamos o ambiente e definimos uma solução personalizada.",
      "Atendemos limpezas pós-obra, pós-incêndio, pré e pós-mudança, sanitização e demandas especiais, sempre com atenção à integridade das superfícies.",
    ],
    icon: "home",
    audiences: ["Casas", "Apartamentos", "Imóveis para mudança", "Imóveis reformados"],
    benefits: ["Atendimento cuidadoso", "Produtos adequados", "Proteção de móveis e superfícies", "Ambiente pronto para uso"],
    differentials: sharedDifferentials,
    process: sharedProcess,
    faq: [{ id: "re-1", category: "Residências", question: "É necessário retirar todos os móveis?", answer: "Depende do serviço. Durante a avaliação orientamos o que precisa ser removido, protegido ou reposicionado." }],
    gallery: [{ before: "/gallery-2-before.jpg", after: "/fine-finishing-cleaning.png", alt: "Limpeza especializada residencial" }],
    related: ["limpeza-pos-obra", "sanitizacao-ozonio", "limpeza-pos-incendio"],
  },
];

export const featuredServices = services.filter((service) => service.featured);

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
