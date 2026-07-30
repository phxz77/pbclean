import type { Metadata } from "next";
import { ServiceCard } from "@/components/services/service-card";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIntro } from "@/components/shared/section-intro";
import { services } from "@/data/services";
import { homeContent } from "@/data/home";

export const metadata: Metadata = {
  title: "Serviços | PB Clean",
  description:
    "Conheça todas as soluções da PB Clean para residências, empresas, indústrias e condomínios.",
};

export default function ServicesPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Nossas soluções"
        title="Serviços especializados para cada tipo de ambiente"
        description="Técnica, equipamentos, produtos e equipes dimensionados para entregar segurança e qualidade."
        current="Serviços"
      />
      <section className="corp-section">
        <div className="corp-container">
          <SectionIntro
            eyebrow="Portfólio completo"
            title="Encontre a solução ideal para sua necessidade"
            description="Cada serviço possui escopo personalizado e uma página completa com benefícios, processo, dúvidas e formas de contato."
          />
          <div className="corp-service-grid corp-service-grid--all">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>
      <section className="corp-section corp-section--navy">
        <div className="corp-container">
          <SectionIntro light eyebrow="Nosso método" title="Planejamento e controle em todas as etapas" />
          <div className="corp-process-grid">
            {homeContent.process.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
