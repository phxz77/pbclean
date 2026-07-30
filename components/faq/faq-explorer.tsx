"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import type { FAQItem } from "@/types/content";

export function FAQExplorer({
  items,
  categories,
  compact = false,
}: {
  items: FAQItem[];
  categories?: readonly string[];
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [openId, setOpenId] = useState(items[0]?.id ?? "");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("pt-BR");
    return items.filter((item) => {
      const matchesCategory =
        !categories || category === "Todos" || item.category === category;
      const matchesQuery =
        !normalized ||
        `${item.question} ${item.answer}`.toLocaleLowerCase("pt-BR").includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, categories, items, query]);

  return (
    <div className={`corp-faq-explorer ${compact ? "is-compact" : ""}`}>
      {!compact && (
        <>
          <label className="corp-search">
            <Search />
            <span className="sr-only">Pesquisar perguntas</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Pesquise por uma dúvida..."
            />
          </label>
          {categories && (
            <div className="corp-filter-list" aria-label="Categorias de perguntas">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? "is-active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <div className="corp-accordion">
        {filtered.map((item) => {
          const open = item.id === openId;
          return (
            <article key={item.id} className={open ? "is-open" : ""}>
              <button
                type="button"
                onClick={() => setOpenId(open ? "" : item.id)}
                aria-expanded={open}
              >
                <span><small>{item.category}</small>{item.question}</span>
                <ChevronDown />
              </button>
              <div className="corp-accordion__answer">
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
        {filtered.length === 0 && (
          <p className="corp-empty">Nenhuma pergunta encontrada para sua busca.</p>
        )}
      </div>
    </div>
  );
}
