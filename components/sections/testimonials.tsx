"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Depoimentos"
            title="Comentários de clientes que acompanham resultados reais"
            description="Histórias diretas de quem contratou a PB Clean e percebeu a diferença na entrega técnica e no cuidado com o ambiente."
            align="left"
          />
        </MotionWrapper>

        <MotionWrapper delay={0.1}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.name}>
                <blockquote className="flex h-full flex-col rounded-[32px] border border-border/70 bg-white p-8 shadow-soft">
                  <div className="mb-4 flex gap-1" aria-label={`${testimonial.rating} de 5 estrelas`}>
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-brand-navy"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="flex-1 text-body leading-7 text-muted-foreground">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border/60 pt-6">
                    <cite className="not-italic">
                      <p className="font-semibold text-dark">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
                    </cite>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </MotionWrapper>

        <MotionWrapper className="text-left" delay={0.2}>
          <Button variant="secondary" size="lg" asChild>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Ser nosso próximo cliente
            </a>
          </Button>
        </MotionWrapper>
      </div>
    </section>
  );
}
