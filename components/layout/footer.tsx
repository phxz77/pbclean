import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { getMailUrl, getTelUrl, getWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      <div className="container-custom section-padding pb-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo className="text-white" />
            <p className="max-w-md text-body text-white/65">
              Uma presença sólida no mercado, com atendimento técnico e serviços de alta confiabilidade para clientes residenciais, corporativos e industriais.
            </p>
            <p className="text-small text-white/45">
              © {currentYear} {SITE.legalName}.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-small font-semibold uppercase tracking-[0.28em] text-white/40">
              Links úteis
            </h3>
            <ul className="space-y-3 text-body text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-small font-semibold uppercase tracking-[0.28em] text-white/40">
              Contato
            </h3>
            <ul className="space-y-4 text-body text-white/70">
              <li className="inline-flex items-center gap-3">
                <Phone className="h-4 w-4 text-white/70" aria-hidden="true" />
                <a href={getTelUrl(SITE.phoneRaw)} className="transition-colors hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <Mail className="h-4 w-4 text-white/70" aria-hidden="true" />
                <a href={getMailUrl(SITE.email)} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <Instagram className="h-4 w-4 text-white/70" aria-hidden="true" />
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  @pb_clean
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-caption text-white/40">
          {SITE.address.city}, {SITE.address.state} — Brasil
        </div>
      </div>
    </footer>
  );
}
