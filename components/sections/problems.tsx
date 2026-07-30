"use client";

import {
  AlertTriangle,
  Clock,
  Construction,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { PROBLEMS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  AlertTriangle,
  Wind,
  Construction,
  Clock,
};

export function ProblemsSection() {
  return (
    <section id="problemas" className="section-padding" aria-labelledby="problems-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Entenda o problema"
            title="Quando um serviço comum não é suficiente"
            description="Contaminações profundas exigem processamento técnico. A PB Clean atua com equipamentos e protocolos que vão além da limpeza superficial."
            align="left"
          />
        </MotionWrapper>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {PROBLEMS.map((problem) => {
            const Icon = iconMap[problem.icon] ?? AlertTriangle;
            return (
              <StaggerItem key={problem.title}>
                <div className="rounded-[32px] border border-border/60 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 text-brand-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-dark">{problem.title}</h3>
                  <p className="mt-4 text-body leading-7 text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <MotionWrapper className="mt-12 text-left" delay={0.2}>
          <p className="mb-6 max-w-2xl text-body text-muted-foreground">
            Reconheceu algum desses sinais? Fale com nossa equipe técnica para um diagnóstico rápido.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href={getWhatsAppUrl("Olá! Tenho uma situação urgente e preciso de ajuda.")} target="_blank" rel="noopener noreferrer">
              Resolver agora
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
