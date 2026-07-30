import { siteConfig } from "@/config/site";

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(message)}`;
}

export function phoneUrl(phone: string = siteConfig.phoneRaw) {
  return `tel:+${phone.replace(/\D/g, "")}`;
}

export function mailUrl(subject?: string) {
  return `mailto:${siteConfig.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
}
