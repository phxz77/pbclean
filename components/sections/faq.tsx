"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-surface" aria-labelledby="faq-heading">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <MotionWrapper>
            <SectionHeader
              badge="Perguntas frequentes"
              title="Tire suas dúvidas rapidamente"
              description="Respostas objetivas sobre nosso processo, prazos e atendimento para você decidir com segurança."
              align="left"
            />
            <Button variant="default" size="lg" asChild>
              <a href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre os serviços.")} target="_blank" rel="noopener noreferrer">
                Tirar dúvida no WhatsApp
              </a>
            </Button>
          </MotionWrapper>

          <MotionWrapper delay={0.15}>
            <Accordion type="single" collapsible className="space-y-4">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="rounded-[28px] border border-border/70 bg-white p-6 text-left text-h3">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="rounded-b-[28px] border border-border/70 border-t-0 bg-white p-6 text-body text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
