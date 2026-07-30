import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";
import { cases, getCaseStudy } from "@/data/cases";
import { BeforeAfter } from "@/components/gallery/before-after";
import { CtaBand } from "@/components/shared/cta-band";

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
          <BeforeAfter before={item.images[0]} after={item.images[1]} alt={item.title} />
          <div className="corp-case-story__metrics">
            {item.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
          <div className="corp-case-story__grid">
            <article><span>01</span><h2>Desafio</h2><p>{item.challenge}</p></article>
            <article><span>02</span><h2>Solução</h2><p>{item.solution}</p></article>
            <article><span>03</span><h2>Resultado</h2><p>{item.result}</p></article>
          </div>
          <div className="corp-case-story__images">
            {item.images.map((image, index) => <div key={image}><Image src={image} alt={`${item.title} — imagem ${index + 1}`} fill sizes="50vw" /></div>)}
          </div>
        </div>
      </section>
      <CtaBand title="Seu projeto pode ser o próximo case" />
    </div>
  );
}
