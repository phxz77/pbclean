import type { Metadata } from "next";
import { FAQExplorer } from "@/components/faq/faq-explorer";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { faqCategories, faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "Perguntas Frequentes | PB Clean",
  description:
    "Encontre respostas sobre orçamento, atendimento e serviços especializados da PB Clean.",
};

export default function FAQPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Central de dúvidas"
        title="Respostas claras para decisões mais seguras"
        description="Pesquise por assunto ou navegue pelas categorias para entender nossos serviços e processos."
        current="FAQ"
      />
      <section className="corp-section">
        <Reveal className="corp-container corp-faq-page">
          <FAQExplorer items={faqItems} categories={faqCategories} />
        </Reveal>
      </section>
      <CtaBand title="Não encontrou a resposta que precisava?" />
    </div>
  );
}
