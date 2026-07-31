import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BeforeAfter } from "@/components/gallery/before-after";
import { FAQExplorer } from "@/components/faq/faq-explorer";
import { ServiceCard } from "@/components/services/service-card";
import { ContentIcon } from "@/components/shared/content-icon";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { StaggerArticle, StaggerGroup, StaggerItem } from "@/components/shared/stagger";
import { SectionIntro } from "@/components/shared/section-intro";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { homeContent } from "@/data/home";
import { companyContent } from "@/data/company";
import { featuredServices } from "@/data/services";
import { cases } from "@/data/cases";
import { clientSegments } from "@/data/clients";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/config/site";
import { phoneUrl, whatsappUrl } from "@/lib/contact";

export default function HomePage() {
  return (
    <div className="corp-site">
      <section className="corp-home-hero">
        <Image
          className="corp-home-hero__background"
          src="/hero-fire-restoration-pbclean.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={78}
        />
        <div className="corp-container corp-home-hero__inner">
          <Reveal className="corp-home-hero__copy" eager>
            <p className="corp-eyebrow">{homeContent.hero.eyebrow}</p>
            <h1>
              {homeContent.hero.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p>{homeContent.hero.description}</p>
            <div className="corp-home-hero__actions">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="corp-button corp-button--blue">
                <WhatsAppIcon />{homeContent.hero.primaryCta.label}
              </a>
              <Link href={homeContent.hero.secondaryCta.href} className="corp-button corp-button--outline">
                {homeContent.hero.secondaryCta.label}<ArrowRight />
              </Link>
            </div>
            <a href={phoneUrl()} className="corp-home-hero__phone"><Phone />{siteConfig.phone}</a>
          </Reveal>

          <div className="corp-home-hero__assurances">
            <div><Clock3 /><span>Atendimento rápido<br />e humanizado</span></div>
            <div><ShieldCheck /><span>Equipe treinada<br />e especializada</span></div>
            <div><BadgeCheck /><span>Qualidade comprovada<br />em cada entrega</span></div>
          </div>
        </div>
      </section>

      <section className="corp-stats">
        <StaggerGroup className="corp-container">
          {homeContent.stats.map((stat) => (
            <StaggerItem key={stat.label}><AnimatedCounter value={stat.value} /><span>{stat.label}</span></StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="corp-section">
        <div className="corp-container corp-about-preview">
          <Reveal className="corp-about-preview__image">
            <Image src="/industrial-cleaning-team.png" alt="Equipe e estrutura PB Clean" fill sizes="(max-width: 900px) 100vw, 48vw" />
            <div><strong>15+</strong><span>anos entregando confiança</span></div>
          </Reveal>
          <Reveal className="corp-about-preview__copy" delay={0.1}>
            <SectionIntro {...homeContent.about} />
            <ul>
              {companyContent.structure.slice(0, 4).map((item) => <li key={item}><BadgeCheck />{item}</li>)}
            </ul>
            <Link href="/empresa" className="corp-text-link">Conheça nossa história <ArrowRight /></Link>
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section--soft">
        <div className="corp-container">
          <Reveal>
            <SectionIntro
              eyebrow="Soluções especializadas"
              title="Serviços completos para cada necessidade"
              description="Da recuperação de ambientes críticos à conservação recorrente, entregamos o protocolo adequado para cada cenário."
            />
          </Reveal>
          <div className="corp-service-grid">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <div className="corp-section-action">
            <Link href="/servicos" className="corp-button corp-button--navy">Ver todos os serviços <ArrowRight /></Link>
          </div>
        </div>
      </section>

      <section className="corp-section corp-segments">
        <div className="corp-container">
          <Reveal>
            <SectionIntro
              eyebrow="Atuação multissegmento"
              title="Estrutura para diferentes ambientes e operações"
              description="A mesma exigência técnica, adaptada à realidade de cada cliente."
            />
          </Reveal>
          <StaggerGroup className="corp-segment-grid">
            {homeContent.segments.map((segment) => (
              <StaggerArticle key={segment.title}>
                <ContentIcon name={segment.icon} />
                <h3>{segment.title}</h3>
                <p>{segment.text}</p>
              </StaggerArticle>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="corp-section corp-section--navy">
        <div className="corp-container">
          <Reveal>
            <SectionIntro
              light
              eyebrow="Processo de trabalho"
              title="Clareza do primeiro contato à entrega"
              description="Um fluxo simples, documentável e preparado para projetos de diferentes escalas."
            />
          </Reveal>
          <StaggerGroup className="corp-process-grid">
            {homeContent.process.map((step) => (
              <StaggerArticle key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </StaggerArticle>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="corp-section">
        <div className="corp-container corp-case-feature">
          <Reveal>
            <SectionIntro
              eyebrow="Resultados reais"
              title={cases[0].title}
              description={cases[0].excerpt}
            />
            <div className="corp-case-feature__facts">
              {cases[0].metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
            </div>
            <Link href={`/cases/${cases[0].slug}`} className="corp-text-link">Conhecer este case <ArrowRight /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <BeforeAfter
              before={cases[0].images[0]}
              after={cases[0].images[1]}
              alt={cases[0].title}
            />
          </Reveal>
        </div>
      </section>

      <section className="corp-section corp-section--soft">
        <div className="corp-container">
          <Reveal>
            <SectionIntro
              centered
              eyebrow="Confiança em diferentes setores"
              title="Estrutura preparada para grandes responsabilidades"
              description="Atendimento para construção civil, indústrias, condomínios, varejo, escritórios e residências."
            />
          </Reveal>
          <StaggerGroup className="corp-logo-cloud">
            {clientSegments.map((client) => <StaggerItem key={client.name}><strong>{client.mark}</strong><span>{client.name}</span></StaggerItem>)}
          </StaggerGroup>
          <div className="corp-section-action"><Link href="/clientes" className="corp-text-link">Conheça nossa atuação <ArrowRight /></Link></div>
        </div>
      </section>

      <section className="corp-section">
        <div className="corp-container corp-home-faq">
          <Reveal>
            <SectionIntro
              eyebrow="Perguntas frequentes"
              title="Informação para decidir com segurança"
              description="Reunimos respostas objetivas sobre orçamento, atendimento e execução."
            />
          </Reveal>
          <FAQExplorer compact items={faqItems.slice(0, 6)} />
          <Link href="/faq" className="corp-button corp-button--navy">Ver todas as perguntas</Link>
        </div>
      </section>
    </div>
  );
}
