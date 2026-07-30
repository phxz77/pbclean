"use client";

import { SectionHeader } from "@/components/shared/section-header";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { PROCESS_STEPS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export function ProcessSection() {
  return (
    <section id="processo" className="section-padding bg-brand-navy text-white" aria-labelledby="process-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Como funciona"
            title="Um processo claro para recuperação confiável"
            description="Cada etapa é orientada para qualidade, com entrega organizada e comunicação transparente do começo ao fim."
            dark
            align="left"
          />
        </MotionWrapper>

        <StaggerContainer className="relative">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" aria-hidden="true" />

          <div className="space-y-10 md:space-y-14">
            {PROCESS_STEPS.map((step, index) => (
              <StaggerItem key={step.step}>
                <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
                  <div className={index % 2 === 0 ? "md:mr-10 md:text-right" : "md:ml-10 md:text-left"}>
                    <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                      <span className="text-caption font-semibold uppercase tracking-[0.3em] text-brand-blue-light">
                        Etapa {step.step}
                      </span>
                      <h3 className="mt-3 text-h3 text-white">{step.title}</h3>
                      <p className="mt-4 text-body text-white/70">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-navy font-semibold shadow-soft md:left-1/2 md:-translate-x-1/2">
                    {step.step}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <MotionWrapper className="mt-16 text-left" delay={0.2}>
          <Button variant="secondary" size="lg" asChild>
            <a href={getWhatsAppUrl("Olá! Gostaria de agendar um diagnóstico gratuito.")} target="_blank" rel="noopener noreferrer">
              Agendar diagnóstico
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
