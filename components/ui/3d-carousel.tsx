"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, domMax, LazyMotion, m, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveHorizontal, X } from "lucide-react";
import type { GalleryImage } from "@/types/content";

type CarouselProps = {
  cards: GalleryImage[];
};

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;

  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;

  return offset;
}

export function Carousel({ cards }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [dimensions, setDimensions] = useState({ cardWidth: 236, step: 164 });
  const carouselRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const draggedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  const goTo = useCallback(
    (index: number) => {
      if (!cards.length) return;
      setActiveIndex((index + cards.length) % cards.length);
    },
    [cards.length]
  );

  const goPrevious = useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo]
  );
  const goNext = useCallback(
    () => goTo(activeIndex + 1),
    [activeIndex, goTo]
  );

  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const updateDimensions = () => {
      const width = element.clientWidth;
      const cardWidth = Math.min(330, Math.max(220, width * (width < 640 ? 0.63 : 0.34)));
      const step = cardWidth * (width < 640 ? 0.68 : 0.82);
      setDimensions({ cardWidth, step });
    };

    updateDimensions();
    const observer = new ResizeObserver(updateDimensions);
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (!cards.length) return null;

  return (
    <LazyMotion features={domMax}>
      <div
        ref={carouselRef}
        className="relative h-[440px] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#001a38] shadow-[0_28px_80px_rgba(0,26,56,0.18)] [perspective:1400px] sm:h-[570px] lg:h-[640px]"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Galeria de serviços da PB Clean"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") goPrevious();
          if (event.key === "ArrowRight") goNext();
        }}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#075ee8]/20 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#001226] via-[#001226]/75 to-transparent" />

        <m.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing [transform-style:preserve-3d]"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          dragMomentum={false}
          onDragStart={() => {
            draggedRef.current = true;
          }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -45 || info.velocity.x < -450) goNext();
            if (info.offset.x > 45 || info.velocity.x > 450) goPrevious();
            window.setTimeout(() => {
              draggedRef.current = false;
            }, 0);
          }}
        >
          {cards.map((image, index) => {
            const offset = getCircularOffset(index, activeIndex, cards.length);
            const distance = Math.abs(offset);
            const isVisible = distance <= 3;
            const isActive = offset === 0;

            if (!isVisible) return null;

            return (
              <m.button
                key={image.src}
                type="button"
                className="group absolute left-1/2 top-1/2 select-none overflow-hidden rounded-[18px] border bg-[#071a31] shadow-2xl outline-none focus-visible:ring-4 focus-visible:ring-[#5da2ff]/70"
                style={{
                  width: dimensions.cardWidth,
                  aspectRatio: "3 / 4",
                  pointerEvents: "auto",
                }}
                initial={false}
                animate={{
                  x: offset * dimensions.step - dimensions.cardWidth / 2,
                  y: "-50%",
                  rotateY: offset === 0 ? 0 : offset < 0 ? 48 : -48,
                  scale: isActive ? 1 : Math.max(0.72, 1 - distance * 0.11),
                  opacity: Math.max(0.16, 1 - distance * 0.27),
                  zIndex: cards.length - distance,
                  borderColor: isActive
                    ? "rgba(93, 162, 255, 0.9)"
                    : "rgba(255, 255, 255, 0.12)",
                }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 220, damping: 26, mass: 0.8 }
                }
                onClick={() => {
                  if (draggedRef.current) return;
                  setActiveIndex(index);
                  setSelectedImage(image);
                }}
                aria-label={`Ampliar imagem ${index + 1}: ${image.alt}`}
                aria-hidden={false}
                tabIndex={isActive ? 0 : -1}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 63vw, (max-width: 1024px) 34vw, 330px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025] motion-reduce:transition-none"
                  loading={isActive ? "eager" : "lazy"}
                  quality={86}
                  draggable={false}
                />
                <span
                  className={`absolute inset-0 bg-gradient-to-t from-[#001226]/70 via-transparent to-transparent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                />
                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#001226]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </m.button>
            );
          })}
        </m.div>

        <button
          type="button"
          onClick={goPrevious}
          className="absolute bottom-5 left-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5da2ff]/70 sm:bottom-7 sm:left-7"
          aria-label="Ver imagem anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 text-white sm:bottom-7">
          <MoveHorizontal className="hidden h-4 w-4 text-[#72adff] sm:block" aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-wide">
            {activeIndex + 1} / {cards.length}
          </span>
          <span className="sr-only" aria-live="polite">
            Imagem {activeIndex + 1} de {cards.length}: {cards[activeIndex].alt}
          </span>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="absolute bottom-5 right-5 z-30 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5da2ff]/70 sm:bottom-7 sm:right-7"
          aria-label="Ver próxima imagem"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
        <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
        Arraste para navegar e clique em uma imagem para ampliar
      </p>

      <AnimatePresence>
        {selectedImage && (
          <m.div
            className="fixed inset-0 z-[200] grid place-items-center bg-[#000d1e]/95 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedImage(null);
            }}
          >
            <m.div
              className="relative h-[calc(100dvh-2rem)] w-full max-w-[960px] sm:h-[calc(100dvh-4rem)]"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reduceMotion ? 0 : 0.22 }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 640px) 100vw, 92vw"
                className="object-contain"
                quality={92}
              />
            </m.div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/25 bg-[#001a38]/90 text-white shadow-xl backdrop-blur-md transition hover:bg-[#075ee8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#5da2ff]/70 sm:right-7 sm:top-7"
              aria-label="Fechar imagem ampliada"
            >
              <X className="h-6 w-6" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
