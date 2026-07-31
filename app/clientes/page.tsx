import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { clientPageContent, featuredClients } from "@/data/clients";
import { homeContent } from "@/data/home";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { SectionIntro } from "@/components/shared/section-intro";

export const metadata: Metadata = {
  title: "Clientes | PB Clean",
  description:
    "Conheça algumas das grandes marcas atendidas pela PB Clean ao longo de sua trajetória.",
};

export default function ClientsPage() {
  return (
    <div className="corp-site">
      <PageHero {...clientPageContent.hero} current="Clientes" />
      <section className="corp-section">
        <div className="corp-container">
          <SectionIntro
            centered
            eyebrow="Marcas atendidas"
            title="Empresas que confiam na nossa entrega"
            description="Relacionamentos construídos com qualidade, responsabilidade e capacidade para atender operações de diferentes portes."
          />
          <figure className="corp-client-showcase" aria-describedby="client-list">
            <div className="corp-client-showcase__viewport">
              <Image
                src="/clientes-pb-clean.png"
                alt="Painel com logotipos de clientes atendidos pela PB Clean"
                width={1832}
                height={862}
                sizes="(max-width: 840px) 980px, 100vw"
                priority
              />
            </div>
            <figcaption id="client-list" className="sr-only">
              Clientes apresentados: {featuredClients.join(", ")}.
            </figcaption>
          </figure>
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
