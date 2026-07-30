"use client";

import { Award, ShieldCheck, Users, Wrench, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import {
  MotionWrapper,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/motion-wrapper";
import { DIFFERENTIALS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Users,
  Wrench,
  ShieldCheck,
  Award,
};

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="section-padding" aria-labelledby="differentials-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Por que a PB Clean"
            title="Diferenciais que comprovam nossa experiência"
            description="Confiança construída e processos refinados para ambientes críticos, com entrega clara e profissionalismo humano."
            align="left"
          />
        </MotionWrapper>

        <StaggerContainer className="grid gap-6 lg:grid-cols-4">
          {DIFFERENTIALS.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <StaggerItem key={item.title}>
                <div className="flex h-full flex-col rounded-[32px] border border-border/70 bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-border/80 text-brand-navy">
                    <Icon className="h-7 w-7" strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-h3 text-dark">{item.title}</h3>
                  <p className="mt-4 text-body leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
