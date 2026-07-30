import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { clientPageContent, clientSegments } from "@/data/clients";
import { homeContent } from "@/data/home";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIntro } from "@/components/shared/section-intro";

export const metadata: Metadata = {
  title: "Clientes | PB Clean",
  description:
    "Conheça os segmentos atendidos e o compromisso da PB Clean com cada operação.",
};

export default function ClientsPage() {
  return (
    <div className="corp-site">
      <PageHero {...clientPageContent.hero} current="Clientes" />
      <section className="corp-section">
        <div className="corp-container">
          <SectionIntro
            centered
            eyebrow="Segmentos atendidos"
            title="Experiência aplicada a diferentes realidades"
            description="Nossa estrutura de dados permite incluir novos logos, depoimentos e projetos sem alterar os componentes."
          />
          <div className="corp-logo-cloud corp-logo-cloud--large">
            {clientSegments.map((client) => <div key={client.name}><strong>{client.mark}</strong><span>{client.name}</span></div>)}
          </div>
          <p className="corp-client-note">{clientPageContent.note}</p>
        </div>
      </section>
      <section className="corp-section corp-section--navy">
        <div className="corp-container corp-client-proof">
          <div>
            <SectionIntro light eyebrow="Nosso compromisso" title="Uma relação construída com previsibilidade e transparência" />
            <ul>{clientPageContent.criteria.map((item) => <li key={item}><BadgeCheck />{item}</li>)}</ul>
          </div>
          <div className="corp-testimonial-slider">
            {homeContent.testimonials.map((item) => (
              <blockquote key={item.author}><p>“{item.quote}”</p><footer><strong>{item.author}</strong><span>{item.role}</span></footer></blockquote>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Vamos construir uma parceria duradoura?" />
    </div>
  );
}
