"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn, getWhatsAppUrl } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-glass border-b border-white/10 py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Navegação principal">
        <Logo />

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-small font-medium transition-colors focus-ring",
                  scrolled ? "text-white/80 hover:text-white" : "text-white/85 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant={scrolled ? "secondary" : "glass"} size="sm" asChild>
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Fale com a equipe
            </a>
          </Button>
          <Button variant="default" size="sm" asChild>
            <a href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento gratuito.")} target="_blank" rel="noopener noreferrer">
              Orçamento grátis
            </a>
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden focus-ring",
            "text-white"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[88px] z-40 bg-brand-navy/95 lg:hidden"
          >
            <div className="container-custom py-6">
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-body font-medium text-white transition hover:border-white/20"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button variant="default" size="lg" asChild className="w-full">
                  <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
