"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { motionEase, revealVariants, viewportOnce } from "@/lib/motion";

export function Reveal({
  children,
  className = "",
  delay = 0,
  eager = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  eager?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={className}
      variants={revealVariants}
      initial={reduceMotion || eager ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ duration: 0.58, delay, ease: motionEase }}
    >
      {children}
    </m.div>
  );
}
