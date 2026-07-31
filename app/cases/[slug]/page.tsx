import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { cases, getCaseStudy } from "@/data/cases";
import { BeforeAfter } from "@/components/gallery/before-after";
import { CtaBand } from "@/components/shared/cta-band";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { StaggerArticle, StaggerGroup, StaggerItem } from "@/components/shared/stagger";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getCaseStudy((await params).slug);
  return item ? { title: `${item.title} | Cases PB Clean`, description: item.excerpt } : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const item = getCaseStudy((await params).slug);
  if (!item) notFound();
  return (
    <div className="corp-site">
      <section className="corp-case-hero">
        <div className="corp-container">
          <Link href="/cases" className="corp-back-link">← Todos os cases</Link>
          <p className="corp-eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <span><MapPin />{item.location}</span>
        </div>
      </section>
      <section className="corp-section">
        <div className="corp-container corp-case-story">
          <Reveal><BeforeAfter before={item.images[0]} after={item.images[1]} alt={item.title} /></Reveal>
          <StaggerGroup className="corp-case-story__metrics">
            {item.metrics.map((metric) => <StaggerItem key={metric.label}><AnimatedCounter value={metric.value} /><span>{metric.label}</span></StaggerItem>)}
          </StaggerGroup>
          <StaggerGroup className="corp-case-story__grid">
            <StaggerArticle><span>01</span><h2>Desafio</h2><p>{item.challenge}</p></StaggerArticle>
            <StaggerArticle><span>02</span><h2>Solução</h2><p>{item.solution}</p></StaggerArticle>
            <StaggerArticle><span>03</span><h2>Resultado</h2><p>{item.result}</p></StaggerArticle>
          </StaggerGroup>
          <StaggerGroup className="corp-case-story__images">
            {item.images.map((image, index) => <StaggerItem key={image}><Image src={image} alt={`${item.title} — imagem ${index + 1}`} fill sizes="50vw" /></StaggerItem>)}
          </StaggerGroup>
        </div>
      </section>
      <CtaBand title="Seu projeto pode ser o próximo case" />
    </div>
  );
}
