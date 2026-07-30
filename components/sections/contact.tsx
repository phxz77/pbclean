"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, type ContactFormValues } from "@/features/contact/schema";
import { submitContactViaWhatsApp } from "@/services/contact.service";
import { SITE } from "@/lib/constants";
import { getMailUrl, getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    submitContactViaWhatsApp(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="section-padding bg-white" aria-labelledby="contact-heading">
      <div className="container-custom">
        <MotionWrapper>
          <SectionHeader
            badge="Contato"
            title="Solicite seu orçamento gratuito"
            description="Preencha o formulário ou fale diretamente conosco. Nosso atendimento é técnico, rápido e focado na solução." 
            align="left"
          />
        </MotionWrapper>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <MotionWrapper className="lg:col-span-1" delay={0.1}>
            <div className="rounded-[32px] border border-border/70 bg-surface p-10 shadow-soft">
              <div className="space-y-8">
                <div className="space-y-3">
                  <p className="text-small uppercase tracking-[0.3em] text-brand-navy/70">Atendimento</p>
                  <p className="text-3xl font-semibold text-dark">Fale com nossa equipe técnica</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 text-brand-navy">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">Telefone / WhatsApp</p>
                      <a
                        href={getTelUrl(SITE.phoneRaw)}
                        className="text-body text-brand-navy hover:underline focus-ring"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 text-brand-navy">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">E-mail</p>
                      <a
                        href={getMailUrl(SITE.email)}
                        className="text-body text-brand-navy hover:underline focus-ring"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 text-brand-navy">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-dark">Localização</p>
                      <p className="text-body text-muted-foreground">
                        {SITE.address.street}
                        <br />
                        {SITE.address.city}, {SITE.address.state} — CEP {SITE.address.postalCode}
                      </p>
                    </div>
                  </div>
                </div>

                <Button variant="default" size="lg" className="w-full" asChild>
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    Preferir WhatsApp direto
                  </a>
                </Button>
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper className="lg:col-span-1" delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 rounded-[32px] border border-border/70 bg-surface p-10 shadow-soft"
              noValidate
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-caption text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    aria-invalid={!!errors.phone}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-caption text-destructive" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-caption text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="service">Serviço</Label>
                  <select
                    id="service"
                    className="flex h-12 w-full rounded-md border border-border bg-white px-4 text-body focus-ring"
                    aria-invalid={!!errors.service}
                    {...register("service")}
                  >
                    <option value="">Selecione...</option>
                    <option value="Limpeza Pós-Incêndio">Limpeza Pós-Incêndio</option>
                    <option value="Limpeza Pós-Obra">Limpeza Pós-Obra</option>
                    <option value="Conservação">Conservação</option>
                    <option value="Sanitização com Ozônio">Sanitização com Ozônio</option>
                    <option value="Limpeza Pré e Pós Eventos">Limpeza Pré e Pós Eventos</option>
                    <option value="Outro">Outro</option>
                  </select>
                  {errors.service && (
                    <p className="text-caption text-destructive" role="alert">
                      {errors.service.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva sua necessidade..."
                  aria-invalid={!!errors.message}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-caption text-destructive" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitted && (
                <div className="flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-700" role="status">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                  Mensagem enviada! Redirecionando para o WhatsApp...
                </div>
              )}

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitação"}
                <Send className="h-5 w-5" aria-hidden="true" />
              </Button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
