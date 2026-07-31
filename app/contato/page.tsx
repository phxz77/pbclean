import type { Metadata } from "next";
import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHero } from "@/components/shared/page-hero";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { Reveal } from "@/components/shared/reveal";
import { contactContent } from "@/data/contact";
import { siteConfig } from "@/config/site";
import { mailUrl, phoneUrl, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contato | PB Clean",
  description:
    "Solicite um orçamento e fale com a equipe da PB Clean em Guarulhos.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);
  return (
    <div className="corp-site">
      <PageHero {...contactContent.hero} current="Contato" />
      <section className="corp-section">
        <Reveal className="corp-container corp-contact-layout">
          <div className="corp-contact-info">
            <p className="corp-eyebrow">Canais de atendimento</p>
            <h2>Escolha a forma mais conveniente para conversar</h2>
            <div className="corp-contact-cards">
              <a href={phoneUrl()}><Phone /><span><small>Telefone</small>{siteConfig.phone}</span></a>
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon /><span><small>WhatsApp</small>Atendimento direto</span></a>
              <a href={mailUrl()}><Mail /><span><small>E-mail</small>{siteConfig.email}</span></a>
              <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram /><span><small>Instagram</small>{siteConfig.instagramLabel}</span></a>
            </div>
            <div className="corp-contact-details">
              <p><MapPin /><span><strong>Endereço</strong>{siteConfig.address.full}</span></p>
              <p><Clock3 /><span><strong>Horários</strong>{siteConfig.businessHours.weekdays}<br />{siteConfig.businessHours.saturday}<br />{siteConfig.businessHours.emergency}</span></p>
            </div>
          </div>
          <ContactForm />
        </Reveal>
      </section>
      <section className="corp-map">
        <iframe
          title="Localização da PB Clean"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
