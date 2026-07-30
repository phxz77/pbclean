"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/shared/brand-logo";
import { WhatsAppIcon } from "@/components/shared/whatsapp-icon";
import { primaryNavigation } from "@/data/navigation";
import { whatsappUrl } from "@/lib/contact";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`corp-header ${onHome && !scrolled ? "is-overlay" : "is-solid"} ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="corp-container corp-header__inner">
        <BrandLogo />
        <nav className="corp-nav" aria-label="Navegação principal">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="corp-header__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          Solicitar orçamento
        </a>
        <button
          type="button"
          className="corp-menu"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div className={`corp-mobile-nav ${open ? "is-open" : ""}`}>
        {primaryNavigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a href={whatsappUrl()} target="_blank" rel="noreferrer">
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
