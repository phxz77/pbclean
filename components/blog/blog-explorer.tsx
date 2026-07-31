"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import type { BlogPost } from "@/types/content";
import { staggerContainerVariants, staggerItemVariants } from "@/lib/motion";

export function BlogExplorer({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: readonly string[];
}) {
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const reduceMotion = useReducedMotion();
  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return posts.filter((post) => {
      const matchesCategory = category === "Todos" || post.category === category;
      const matchesQuery =
        !normalized ||
        `${post.title} ${post.excerpt} ${post.category}`
          .toLocaleLowerCase("pt-BR")
          .includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, posts, query]);

  return (
    <>
      <div className="corp-blog-tools">
        <label className="corp-search">
          <Search />
          <span className="sr-only">Pesquisar artigos</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no blog..." />
        </label>
        <div className="corp-filter-list">
          {categories.map((item) => (
            <button key={item} type="button" className={category === item ? "is-active" : ""} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <m.div
        className="corp-blog-grid"
        variants={staggerContainerVariants}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
      >
        <AnimatePresence initial={false}>
          {filtered.map((post) => (
          <m.article
            key={post.slug}
            className="corp-blog-card"
            variants={staggerItemVariants}
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
          >
            <Link href={`/blog/${post.slug}`} className="corp-blog-card__image">
              <Image src={post.cover} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" />
            </Link>
            <div>
              <p>{post.category} <span>•</span> {post.readingTime}</p>
              <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
              <span>{post.excerpt}</span>
              <Link href={`/blog/${post.slug}`} className="corp-text-link">Ler artigo <ArrowUpRight /></Link>
            </div>
          </m.article>
          ))}
        </AnimatePresence>
      </m.div>
      {filtered.length === 0 && <p className="corp-empty">Nenhum artigo encontrado.</p>}
    </>
  );
}
