"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { contactContent } from "@/data/contact";
import { whatsappUrl } from "@/lib/contact";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update(key: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      `Olá! Meu nome é ${form.name}.`,
      form.company && `Empresa: ${form.company}`,
      `Telefone: ${form.phone}`,
      `E-mail: ${form.email}`,
      `Serviço: ${form.service}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");
    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className={`corp-contact-form ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      {!compact && (
        <div className="corp-contact-form__header">
          <p>Orçamento personalizado</p>
          <h2>{contactContent.form.title}</h2>
          <span>{contactContent.form.description}</span>
        </div>
      )}
      <div className="corp-form-grid">
        <label>
          Nome completo
          <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Seu nome" />
        </label>
        <label>
          Empresa
          <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Nome da empresa" />
        </label>
        <label>
          E-mail
          <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="voce@empresa.com.br" />
        </label>
        <label>
          Telefone / WhatsApp
          <input required type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(11) 99999-9999" />
        </label>
        <label className="is-wide">
          Serviço de interesse
          <select required value={form.service} onChange={(e) => update("service", e.target.value)}>
            <option value="">Selecione uma opção</option>
            {contactContent.form.serviceOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="is-wide">
          Conte um pouco sobre a necessidade
          <textarea required minLength={10} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Tipo de ambiente, localização, prazo e outras informações importantes..." />
        </label>
      </div>
      {submitted && (
        <div className="corp-form-success" role="status">
          <CheckCircle2 />
          Dados organizados. Abrimos o WhatsApp para concluir o envio.
        </div>
      )}
      <button type="submit" className="corp-button corp-button--blue">
        Enviar solicitação <Send />
      </button>
    </form>
  );
}
