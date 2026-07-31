import type { Metadata } from "next";
import { Carousel } from "@/components/ui/3d-carousel";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { galleryImages } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galeria | PB Clean",
  description:
    "Veja registros de serviços especializados realizados pela equipe da PB Clean.",
};

export default function GalleryPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Resultados em imagem"
        title="Nosso cuidado em cada ambiente"
        description="Explore registros reais dos serviços da PB Clean e amplie cada imagem para ver os detalhes."
        current="Galeria"
      />
      <section className="corp-section">
        <div className="corp-container">
          <Carousel cards={galleryImages} />
        </div>
      </section>
      <CtaBand title="Quer transformar seu ambiente também?" />
    </div>
  );
}
