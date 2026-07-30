"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock3, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/shared/brand-logo";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { siteConfig } from "@/config/site";
import { primaryNavigation } from "@/data/navigation";
import { services } from "@/data/services";
import { mailUrl, phoneUrl, whatsappUrl } from "@/lib/contact";

export function SiteFooter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="corp-footer">
      <div className="corp-container corp-footer__top">
        <div className="corp-footer__about">
          <BrandLogo />
          <p>{siteConfig.description}</p>
          <a className="corp-footer__budget" href={whatsappUrl()} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            Solicitar orçamento
          </a>
        </div>

        <div>
          <h3>Links rápidos</h3>
          <ul>
            {primaryNavigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Todos os serviços</h3>
          <ul>
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicos/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="corp-footer__contact">
          <h3>Contato</h3>
          <a href={phoneUrl()}><Phone />{siteConfig.phone}</a>
          <a href={whatsappUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp</a>
          <a href={mailUrl()}><Mail />{siteConfig.email}</a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><Instagram />{siteConfig.instagramLabel}</a>
          <span><MapPin />{siteConfig.address.full}</span>
          <span><Clock3 />{siteConfig.businessHours.weekdays}</span>
        </div>
      </div>

      <div className="corp-container corp-newsletter">
        <div>
          <p>Conteúdo e novidades</p>
          <h3>Receba orientações sobre limpeza e conservação</h3>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubscribed(true);
          }}
        >
          <label htmlFor="newsletter-email">Seu melhor e-mail</label>
          <input id="newsletter-email" type="email" required placeholder="voce@empresa.com.br" />
          <button type="submit">{subscribed ? "Cadastrado!" : "Cadastrar"}</button>
        </form>
      </div>

      <div className="corp-footer__bottom">
        <div className="corp-container">
          <span>© {new Date().getFullYear()} PB Clean Soluções. Todos os direitos reservados.</span>
          <span>Estrutura preparada para evolução contínua.</span>
        </div>
      </div>
    </footer>
  );
}
