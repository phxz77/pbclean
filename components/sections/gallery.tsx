"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { GALLERY_ITEMS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const active = GALLERY_ITEMS[activeIndex];

  return (
    <section id="galeria" className="section-padding bg-surface" aria-labelledby="gallery-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Resultados reais"
            title="Antes e depois em um ambiente restaurado"
            description="Comparativos claros que mostram a diferença entre uma solução técnica e uma limpeza comum."
            align="left"
          />
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <div className="mx-auto max-w-5xl">
            <div
              className="relative aspect-[16/9] cursor-ew-resize overflow-hidden rounded-[32px] shadow-soft"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(x, 5), 95));
              }}
              onTouchMove={(e) => {
                const touch = e.touches[0];
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((touch.clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(x, 5), 95));
              }}
              role="slider"
              aria-label="Comparador antes e depois"
              aria-valuenow={sliderPosition}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <Image
                src={active.after}
                alt={`Depois — ${active.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 896px"
              />
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={active.before}
                  alt={`Antes — ${active.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 896px"
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                style={{ left: `${sliderPosition}%` }}
                aria-hidden="true"
              >
                <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-medium">
                  <div className="flex gap-0.5">
                    <div className="h-4 w-0.5 rounded bg-brand-navy" />
                    <div className="h-4 w-0.5 rounded bg-brand-navy" />
                  </div>
                </div>
              </div>

              <span className="absolute top-4 left-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-navy">
                Antes
              </span>
              <span className="absolute top-4 right-4 inline-flex rounded-full bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-navy">
                Depois
              </span>
            </div>

            <div className="mt-6 flex flex-col gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-caption uppercase tracking-[0.3em] text-brand-navy/70">{active.category}</p>
                <p className="mt-2 text-h3 text-dark">{active.title}</p>
              </div>
              <div className="flex gap-2">
                {GALLERY_ITEMS.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveIndex(index);
                      setSliderPosition(50);
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300 focus-ring",
                      index === activeIndex
                        ? "w-10 bg-brand-navy"
                        : "w-2 bg-border hover:bg-brand-navy/40"
                    )}
                    aria-label={`Ver projeto: ${item.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </MotionWrapper>

        <MotionWrapper className="mt-12 text-left" delay={0.2}>
          <Button variant="default" size="lg" asChild>
            <a href={getWhatsAppUrl("Olá! Vi a galeria no site e gostaria de um orçamento.")} target="_blank" rel="noopener noreferrer">
              Quero resultados assim
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
