"use client";

import { useEffect, useMemo, useRef } from "react";

function parseCounter(value: string) {
  const match = value.match(/[\d.]+/);
  const numericText = match?.[0] ?? "0";
  const target = Number(numericText.replaceAll(".", ""));
  const suffix = value.slice((match?.index ?? 0) + numericText.length);

  return { target, suffix };
}

export function AnimatedCounter({ value }: { value: string }) {
  const elementRef = useRef<HTMLElement>(null);
  const { target, suffix } = useMemo(() => parseCounter(value), [value]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        element.textContent = `0${suffix}`;
        const start = performance.now();

        const update = (now: number) => {
          const progress = Math.min((now - start) / 1150, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          const current = Math.round(target * eased);
          element.textContent = `${current.toLocaleString("pt-BR")}${suffix}`;
          if (progress < 1) frameId = requestAnimationFrame(update);
        };

        frameId = requestAnimationFrame(update);
      },
      { threshold: 0.7 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [suffix, target]);

  return (
    <strong
      ref={elementRef}
      aria-label={value}
      style={{ display: "inline-block", minWidth: `${value.length}ch` }}
    >
      {value}
    </strong>
  );
}
