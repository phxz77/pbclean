import { getWhatsAppUrl } from "@/lib/utils";
import type { ContactFormValues } from "@/features/contact/schema";

export function buildContactWhatsAppMessage(data: ContactFormValues): string {
  return [
    `Olá! Meu nome é ${data.name}.`,
    `Serviço: ${data.service}`,
    `Telefone: ${data.phone}`,
    `E-mail: ${data.email}`,
    "",
    data.message,
  ].join("\n");
}

export function submitContactViaWhatsApp(data: ContactFormValues): void {
  const message = buildContactWhatsAppMessage(data);
  window.open(getWhatsAppUrl(message), "_blank");
}
