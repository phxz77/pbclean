"use client";

import { STATS } from "@/lib/constants";
import { MotionWrapper, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";

export function StatsSection() {
  return (
    <section className="border-b border-border/40 bg-surface py-20" aria-label="Estatísticas">
      <div className="container-custom">
        <StaggerContainer className="grid gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="rounded-[28px] bg-white p-8 text-center shadow-soft">
                <p className="text-5xl font-semibold text-brand-navy md:text-6xl">{stat.value}</p>
                <p className="mt-4 text-base text-muted-foreground">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
