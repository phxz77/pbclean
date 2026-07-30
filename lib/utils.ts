import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppUrl(message?: string): string {
  const phone = "5511947683103";
  const text = encodeURIComponent(
    message ??
      "Olá! Vim pelo site da PB Clean e gostaria de solicitar um orçamento."
  );
  return `https://wa.me/${phone}?text=${text}`;
}

export function getTelUrl(phone: string): string {
  return `tel:+${formatPhone(phone)}`;
}

export function getMailUrl(email: string): string {
  return `mailto:${email}`;
}
