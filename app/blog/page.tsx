import type { Metadata } from "next";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { CtaBand } from "@/components/shared/cta-band";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { blogCategories, blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | PB Clean",
  description:
    "Conteúdos sobre limpeza pós-incêndio, pós-obra, conservação, sanitização e gestão de ambientes.",
};

export default function BlogPage() {
  return (
    <div className="corp-site">
      <PageHero
        eyebrow="Conteúdo especializado"
        title="Informação para preservar ambientes e tomar decisões melhores"
        description="Artigos práticos produzidos para empresas, gestores, condomínios e proprietários."
        current="Blog"
      />
      <section className="corp-section">
        <Reveal className="corp-container">
          <BlogExplorer posts={blogPosts} categories={blogCategories} />
        </Reveal>
      </section>
      <CtaBand />
    </div>
  );
}
