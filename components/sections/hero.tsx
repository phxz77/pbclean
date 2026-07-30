"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { STATS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Equipe PB Clean em ambiente moderno de restauração"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/95" />
      </div>

      <div className="container-custom relative z-10 min-h-[92vh] flex items-center py-28">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-white/80">
              PB Clean
            </span>
            <h1 className="mt-12 text-balance text-[4.75rem] leading-[0.98] tracking-[-0.04em] text-white sm:text-[5.8rem] md:text-[6.4rem]">
              Recuperamos ambientes críticos com técnica e discrição.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              Limpeza pós-incêndio, pós-obra e conservação em São Paulo — resposta rápida, equipe uniforme e ambientes prontos para receber pessoas de novo.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="default" size="lg" asChild>
                <a href={getWhatsAppUrl("Olá! Preciso de um orçamento urgente.")} target="_blank" rel="noopener noreferrer">
                  Solicitar orçamento
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href="#contato">Fale com um especialista</a>
              </Button>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-sm">
                  <p className="text-4xl font-semibold text-white sm:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
