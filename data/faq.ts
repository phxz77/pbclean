import type { FAQItem } from "@/types/content";
import { services } from "@/data/services";

export const faqCategories = [
  "Todos",
  "Orçamento",
  "Atendimento",
  "Pós Incêndio",
  "Pós Obra",
  "Conservação",
  "Sanitização",
] as const;

const generalFaq: FAQItem[] = [
  {
    id: "geral-1",
    category: "Orçamento",
    question: "Como solicitar um orçamento?",
    answer:
      "Você pode preencher o formulário do site ou falar pelo WhatsApp. Quanto mais informações, fotos e medidas enviar, mais rápida será a análise inicial.",
  },
  {
    id: "geral-2",
    category: "Orçamento",
    question: "O orçamento é feito por metragem?",
    answer:
      "A metragem é um dos fatores. Também consideramos o estado do ambiente, acessos, superfícies, nível de sujidade, equipamentos e prazo desejado.",
  },
  {
    id: "geral-3",
    category: "Atendimento",
    question: "Quais regiões são atendidas?",
    answer:
      "A base da PB Clean fica em Guarulhos e o atendimento é analisado conforme localidade, escopo e disponibilidade da operação.",
  },
  {
    id: "geral-4",
    category: "Atendimento",
    question: "A equipe leva produtos e equipamentos?",
    answer:
      "Sim. O dimensionamento define os materiais, equipamentos e produtos profissionais necessários para o escopo contratado.",
  },
];

export const faqItems = [
  ...generalFaq,
  ...services.flatMap((service) => service.faq),
];
