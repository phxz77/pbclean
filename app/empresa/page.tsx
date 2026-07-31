import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { companyContent } from "@/data/company";
import { homeContent } from "@/data/home";
import { ContentIcon } from "@/components/shared/content-icon";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionIntro } from "@/components/shared/section-intro";

export const metadata: Metadata = {
  title: "Empresa | PB Clean",
  description:
    "Conheça a história, os princípios, a equipe e a estrutura da PB Clean Soluções.",
};

export default function CompanyPage() {
  return (
    <div className="corp-site">
      <PageHero {...companyContent.hero} current="Empresa" />

      <section className="corp-section">
        <div className="corp-container corp-team">
          <div>
            <SectionIntro {...companyContent.team} />
            <ul>{companyContent.structure.map((item) => <li key={item}><BadgeCheck />{item}</li>)}</ul>
          </div>
          <div className="corp-team__visual">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.youtube.com/embed/nPE77LnHDjw"
              title="Vídeo institucional da PB Clean"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="corp-section">
        <div className="corp-container corp-company-intro">
          <Reveal className="corp-company-intro__image">
            <Image src="/post-construction-team.png" alt="Estrutura profissional da PB Clean" fill sizes="(max-width: 900px) 100vw, 45vw" />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionIntro eyebrow="Quem somos" title={companyContent.introduction.title} />
            {companyContent.introduction.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="corp-mini-stats">
              {homeContent.stats.slice(0, 3).map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section--soft">
        <div className="corp-container">
          <SectionIntro centered eyebrow="Nossa essência" title="Princípios que orientam cada entrega" />
          <div className="corp-principles">
            {companyContent.principles.map((principle) => (
              <article key={principle.title}>
                <ContentIcon name={principle.icon} />
                <h2>{principle.title}</h2>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="corp-section corp-section--navy">
        <div className="corp-container">
          <SectionIntro light eyebrow="Linha do tempo" title="Uma história construída com evolução contínua" />
          <div className="corp-timeline">
            {companyContent.timeline.map((item) => (
              <article key={item.year}>
                <strong>{item.year}</strong>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Experiência e estrutura para cuidar do seu ambiente" />
    </div>
  );
}
