import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { cases } from "@/data/cases";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Cases | PB Clean",
  description:
    "Conheça desafios, soluções e resultados de projetos realizados pela PB Clean.",
};

export default function CasesPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Projetos realizados"
        title="Desafios reais. Soluções planejadas. Resultados consistentes."
        description="Uma estrutura preparada para receber novos projetos e formar um histórico completo de entregas."
        current="Cases"
      />
      <section className="corp-section">
        <div className="corp-container corp-case-grid">
          {cases.map((item) => (
            <article className="corp-case-card" key={item.slug}>
              <Link href={`/cases/${item.slug}`} className="corp-case-card__image">
                <Image src={item.cover} alt={item.title} fill sizes="(max-width: 800px) 100vw, 50vw" />
                <span>{item.category}</span>
              </Link>
              <div>
                <p><MapPin />{item.location}</p>
                <h2>{item.title}</h2>
                <span>{item.excerpt}</span>
                <Link href={`/cases/${item.slug}`} className="corp-text-link">Ver case completo <ArrowUpRight /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </div>
  );
}
