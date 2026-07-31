import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { BeforeAfter } from "@/components/gallery/before-after";
import { ContactForm } from "@/components/contact/contact-form";
import { FAQExplorer } from "@/components/faq/faq-explorer";
import { ServiceCard } from "@/components/services/service-card";
import { ContentIcon } from "@/components/shared/content-icon";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { StaggerArticle, StaggerGroup, StaggerItem } from "@/components/shared/stagger";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | PB Clean`,
    description: service.shortDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="corp-site">
      <section className="corp-service-hero">
        <div className="corp-container corp-service-hero__grid">
          <div>
            <Link href="/servicos" className="corp-back-link">← Todos os serviços</Link>
            <p className="corp-eyebrow">{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.shortDescription}</p>
            <div className="corp-service-hero__audiences">
              {service.audiences.map((audience) => <span key={audience}>{audience}</span>)}
            </div>
            <Link href="#orcamento" className="corp-button corp-button--blue">Solicitar orçamento <ArrowRight /></Link>
          </div>
          <div className="corp-service-hero__visual">
            <Image src={service.gallery[0].after} alt={service.gallery[0].alt} fill priority sizes="(max-width: 900px) 100vw, 50vw" />
            <ContentIcon name={service.icon} />
          </div>
        </div>
      </section>

      <section className="corp-section">
        <Reveal className="corp-container corp-service-copy">
          <div>
            <p className="corp-eyebrow">Sobre o serviço</p>
            <h2>Uma solução técnica, segura e dimensionada</h2>
          </div>
          <div>{service.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Reveal>
      </section>

      <section className="corp-section corp-section--soft">
        <Reveal className="corp-container corp-benefit-columns">
          <div>
            <p className="corp-eyebrow">Benefícios</p>
            <h2>O que este serviço entrega</h2>
            <ul>{service.benefits.map((item) => <li key={item}><BadgeCheck />{item}</li>)}</ul>
          </div>
          <div>
            <p className="corp-eyebrow">Diferenciais PB Clean</p>
            <h2>Por que contar com especialistas</h2>
            <ul>{service.differentials.map((item) => <li key={item}><BadgeCheck />{item}</li>)}</ul>
          </div>
        </Reveal>
      </section>

      <section className="corp-section corp-section--navy">
        <div className="corp-container">
          <p className="corp-eyebrow">Como funciona</p>
          <h2 className="corp-light-title">Um processo claro do diagnóstico à entrega</h2>
          <StaggerGroup className="corp-process-grid">
            {service.process.map((step, index) => <StaggerArticle key={step}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step}</h3></StaggerArticle>)}
          </StaggerGroup>
        </div>
      </section>

      <section className="corp-section">
        <Reveal className="corp-container corp-service-gallery">
          <div>
            <p className="corp-eyebrow">Galeria</p>
            <h2>Compare o antes e depois</h2>
            <p>Arraste o controle para visualizar a transformação do ambiente.</p>
          </div>
          <BeforeAfter before={service.gallery[0].before} after={service.gallery[0].after} alt={service.gallery[0].alt} />
        </Reveal>
      </section>

      <section className="corp-section corp-section--soft">
        <Reveal className="corp-container corp-service-faq">
          <div><p className="corp-eyebrow">Perguntas frequentes</p><h2>Dúvidas sobre {service.title.toLocaleLowerCase("pt-BR")}</h2></div>
          <FAQExplorer compact items={service.faq} />
        </Reveal>
      </section>

      <section id="orcamento" className="corp-section">
        <Reveal className="corp-container corp-form-layout">
          <div><p className="corp-eyebrow">Fale com a equipe</p><h2>Receba uma avaliação para seu ambiente</h2><p>Informe o cenário, a localização e o prazo desejado. Nossa equipe organizará o próximo passo.</p></div>
          <ContactForm compact />
        </Reveal>
      </section>

      <section className="corp-section corp-section--soft">
        <div className="corp-container">
          <p className="corp-eyebrow">Serviços relacionados</p>
          <h2 className="corp-section-title">Outras soluções que podem ajudar</h2>
          <StaggerGroup className="corp-service-grid">{related.map((item) => <StaggerItem className="h-full [&>*]:h-full" key={item.slug}><ServiceCard service={item} /></StaggerItem>)}</StaggerGroup>
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
