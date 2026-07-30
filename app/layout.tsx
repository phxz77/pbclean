import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingContact } from "@/components/shared/floating-contact";
import "@/styles/globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#001a38",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pbclean.com.br"),
  title: "PB Clean — Limpeza Pós-Incêndio, Pós-Obra e Conservação",
  description:
    "Especialistas em limpeza pós-incêndio, pós-obra e conservação. Tecnologia, experiência e compromisso em cada detalhe.",
  keywords: [
    "limpeza pós-incêndio",
    "limpeza pós-obra",
    "conservação",
    "limpeza especializada",
    "PB Clean",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pbclean.com.br",
    siteName: "PB Clean",
    title: "PB Clean — Limpeza Especializada",
    description:
      "Limpeza pós-incêndio, pós-obra e conservação com equipe especializada.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PB Clean — Limpeza especializada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PB Clean — Limpeza Especializada",
    description:
      "Soluções profissionais para ambientes residenciais, empresariais, industriais e comerciais.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <FloatingContact />
      </body>
    </html>
  );
}
