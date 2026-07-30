import type { CaseStudy } from "@/types/content";

export const cases: CaseStudy[] = [
  {
    slug: "recuperacao-ambiente-pos-incendio",
    title: "Recuperação de ambiente após incêndio",
    category: "Pós Incêndio",
    location: "São Paulo — SP",
    excerpt:
      "Operação técnica para remoção de fuligem, neutralização de odores e preparação do imóvel.",
    challenge:
      "O ambiente apresentava fuligem disseminada, odor persistente e superfícies sensíveis que precisavam ser preservadas antes da etapa de recuperação.",
    solution:
      "A equipe realizou setorização, aspiração técnica, limpeza por tipo de material e tratamento complementar do ambiente, com supervisão em todas as etapas.",
    result:
      "O imóvel foi entregue limpo, organizado e preparado para receber as equipes responsáveis pelos reparos e acabamentos.",
    cover: "/case-fire-bedroom-after.jpeg",
    images: ["/case-fire-bedroom-before.jpeg", "/case-fire-bedroom-after.jpeg"],
    metrics: [
      { value: "5", label: "etapas controladas" },
      { value: "100%", label: "escopo vistoriado" },
      { value: "1", label: "equipe dedicada" },
    ],
  },
  {
    slug: "entrega-corporativa-pos-obra",
    title: "Entrega corporativa pós-obra",
    category: "Pós Obra",
    location: "Guarulhos — SP",
    excerpt:
      "Limpeza pesada e fina para liberação de um espaço corporativo recém-reformado.",
    challenge:
      "Poeira fina, resíduos aderidos e prazo curto entre a conclusão da reforma e o início da operação.",
    solution:
      "Dimensionamento por setores, remoção de resíduos, limpeza técnica de acabamentos e inspeção final com o responsável pelo projeto.",
    result:
      "Ambiente liberado no prazo, com acabamentos valorizados e pronto para receber colaboradores e clientes.",
    cover: "/post-construction-team.png",
    images: ["/gallery-2-before.jpg", "/post-construction-team.png"],
    metrics: [
      { value: "3", label: "setores de execução" },
      { value: "0", label: "interferências na operação" },
      { value: "1", label: "entrega validada" },
    ],
  },
  {
    slug: "plano-conservacao-areas-comuns",
    title: "Plano de conservação para áreas comuns",
    category: "Conservação",
    location: "Grande São Paulo",
    excerpt:
      "Rotina de limpeza organizada para manter padrão constante em áreas de circulação.",
    challenge:
      "Grande fluxo de pessoas, diferentes tipos de superfície e necessidade de manter a operação ativa.",
    solution:
      "Criação de cronograma por frequência e criticidade, equipe orientada e supervisão periódica dos resultados.",
    result:
      "Melhor percepção de cuidado, previsibilidade da rotina e preservação das áreas atendidas.",
    cover: "/industrial-cleaning-team.png",
    images: ["/gallery-3-before.jpg", "/industrial-cleaning-team.png"],
    metrics: [
      { value: "4", label: "rotinas programadas" },
      { value: "7d", label: "cobertura semanal" },
      { value: "1", label: "padrão de qualidade" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return cases.find((item) => item.slug === slug);
}
