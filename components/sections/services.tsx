"use client";

import {
  CalendarDays,
  Flame,
  HardHat,
  Sparkles,
  Wind,
  Zap,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  HardHat,
  Sparkles,
  Wind,
  CalendarDays,
  Zap,
};

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-surface" aria-labelledby="services-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Nossos serviços"
            title="Serviços técnicos de limpeza para ambientes que exigem confiança"
            description="Equipe especializada, protocolos seguros e resultados precisos sem o visual genérico de template." 
            align="left"
          />
        </MotionWrapper>

        <StaggerContainer className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <StaggerItem key={service.id}>
                <article className="flex h-full flex-col rounded-[32px] border border-border/60 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy/20 hover:shadow-medium">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-border/80 text-brand-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-dark">{service.title}</h3>
                  <p className="mt-4 flex-1 text-body leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <a
                    href={getWhatsAppUrl(`Olá! Gostaria de saber mais sobre ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-navy transition-colors hover:text-brand-blue focus-ring"
                  >
                    Solicitar orçamento
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <MotionWrapper className="mt-16 text-left" delay={0.2}>
          <Button variant="secondary" size="lg" asChild>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Converse com um especialista
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
