"use client";

import { m, useReducedMotion } from "framer-motion";
import { pageVariants } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      variants={pageVariants}
      initial={reduceMotion ? false : { opacity: 1, y: 6 }}
      animate="visible"
    >
      {children}
    </m.div>
  );
}
