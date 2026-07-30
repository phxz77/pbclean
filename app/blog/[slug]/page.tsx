import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Clock3 } from "lucide-react";
import { blogPosts, getBlogPost } from "@/data/blog";
import { CtaBand } from "@/components/shared/cta-band";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getBlogPost((await params).slug);
  return post
    ? {
        title: `${post.title} | Blog PB Clean`,
        description: post.excerpt,
        alternates: { canonical: `/blog/${post.slug}` },
        openGraph: { images: [post.cover] },
      }
    : {};
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getBlogPost((await params).slug);
  if (!post) notFound();
  const related = post.related.map(getBlogPost).filter((item): item is NonNullable<typeof item> => Boolean(item));
  return (
    <div className="corp-site">
      <article className="corp-article">
        <header className="corp-article__header">
          <div className="corp-container">
            <Link href="/blog" className="corp-back-link">← Voltar ao blog</Link>
            <p className="corp-eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div><span>{post.date}</span><span><Clock3 />{post.readingTime} de leitura</span></div>
          </div>
        </header>
        <div className="corp-container corp-article__body">
          <div className="corp-article__cover"><Image src={post.cover} alt="" fill priority sizes="(max-width: 900px) 100vw, 900px" /></div>
          <div className="corp-article__content">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
          <aside className="corp-article__related">
            <h2>Conteúdos relacionados</h2>
            <div>{related.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`}><span>{item.category}</span><strong>{item.title}</strong><ArrowUpRight /></Link>)}</div>
          </aside>
        </div>
      </article>
      <CtaBand title="Precisa de orientação para seu ambiente?" />
    </div>
  );
}
