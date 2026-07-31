"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  staggerContainerVariants,
  staggerItemVariants,
  viewportOnce,
} from "@/lib/motion";

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn(className)}
      variants={staggerContainerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div className={cn(className)} variants={staggerItemVariants}>
      {children}
    </m.div>
  );
}

export function StaggerArticle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.article className={cn(className)} variants={staggerItemVariants}>
      {children}
    </m.article>
  );
}
