"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/utils";

export function CtaFinalSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white" aria-label="Chamada para ação final">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy/80 to-brand-navy/90" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" aria-hidden="true" />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-caption uppercase tracking-[0.3em] text-white/60">
            Pronto para retomar o controle do seu espaço
          </p>
          <h2 className="mt-6 text-balance text-[3.8rem] leading-[1.02] text-white sm:text-[4.8rem]">
            Ambientes restaurados com a precisão de uma empresa consolidada.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Menos promessas e mais resultado. Entre em contato e receba um plano claro para seu projeto.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="default" size="lg" asChild>
              <a href={getWhatsAppUrl("Olá! Quero solicitar um orçamento gratuito agora.")} target="_blank" rel="noopener noreferrer">
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="tel:+5511947683103">Ligar agora</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
