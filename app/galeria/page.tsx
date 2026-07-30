import type { Metadata } from "next";
import { GalleryExplorer } from "@/components/gallery/gallery-explorer";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeria | PB Clean",
  description:
    "Veja comparativos antes e depois de serviços especializados realizados pela PB Clean.",
};

export default function GalleryPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Resultados em imagem"
        title="Transformações que demonstram método e cuidado"
        description="Explore projetos por categoria, compare antes e depois e amplie os resultados."
        current="Galeria"
      />
      <section className="corp-section">
        <div className="corp-container">
          <GalleryExplorer items={galleryItems} />
        </div>
      </section>
      <CtaBand title="Quer transformar seu ambiente também?" />
    </div>
  );
}
