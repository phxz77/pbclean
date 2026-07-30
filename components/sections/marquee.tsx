"use client";

import { CLIENTS } from "@/lib/constants";

export function MarqueeSection() {
  const items = [...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden bg-surface py-10" aria-label="Segmentos atendidos">
      <div className="container-custom">
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex shrink-0 gap-12 whitespace-nowrap">
            {items.map((client, index) => (
              <span
                key={`${client}-${index}`}
                className="text-base font-semibold uppercase tracking-[0.25em] text-muted-foreground/60"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
