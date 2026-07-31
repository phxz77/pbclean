import Link from "next/link";
import { Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { phoneUrl, whatsappUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Reveal } from "@/components/shared/reveal";

export function CtaBand({
  eyebrow = "Vamos conversar",
  title = "Precisa de uma solução especializada?",
  description = "Nossa equipe está pronta para entender seu cenário e preparar um orçamento personalizado.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="corp-cta">
      <Reveal className="corp-container corp-cta__inner">
        <div>
          <p>{eyebrow}</p>
          <h2>{title}</h2>
          <span>{description}</span>
        </div>
        <div className="corp-cta__actions">
          <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="corp-button corp-button--blue">
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
          <Link href="/contato" className="corp-button corp-button--white">
            Solicitar orçamento
          </Link>
          <a href={phoneUrl()} className="corp-cta__phone"><Phone />{siteConfig.phone}</a>
        </div>
      </Reveal>
    </section>
  );
}
