"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import type { GalleryItem } from "@/types/content";
import { BeforeAfter } from "@/components/gallery/before-after";

const allCategory = "Todos";

export function GalleryExplorer({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState(allCategory);
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const categories = [allCategory, ...Array.from(new Set(items.map((item) => item.category)))];
  const filtered = useMemo(
    () => items.filter((item) => category === allCategory || item.category === category),
    [category, items]
  );

  return (
    <>
      <div className="corp-filter-list">
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            className={category === item ? "is-active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered[0] && (
        <div className="corp-gallery-featured">
          <BeforeAfter
            before={filtered[0].before}
            after={filtered[0].after}
            alt={filtered[0].title}
          />
          <div>
            <p>{filtered[0].category}</p>
            <h2>{filtered[0].title}</h2>
            <span>{filtered[0].description}</span>
          </div>
        </div>
      )}

      <div className="corp-gallery-grid">
        {filtered.map((item) => (
          <article key={item.id}>
            <button type="button" onClick={() => setSelected(item)}>
              <Image src={item.after} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" loading="lazy" />
              <span><Maximize2 />Ampliar</span>
            </button>
            <p>{item.category}</p>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      {selected && (
        <div className="corp-lightbox" role="dialog" aria-modal="true" aria-label={selected.title}>
          <button type="button" onClick={() => setSelected(null)} aria-label="Fechar imagem"><X /></button>
          <div>
            <Image src={selected.after} alt={selected.title} fill sizes="90vw" />
          </div>
          <p>{selected.category}</p>
          <h2>{selected.title}</h2>
        </div>
      )}
    </>
  );
}
