import { SITE } from "./constants";

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.legalName,
    image: `${SITE.url}/og-image.jpg`,
    "@id": SITE.url,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    sameAs: [SITE.instagram],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de Limpeza Especializada",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpeza Pós-Incêndio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpeza Pós-Obra",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conservação",
          },
        },
      ],
    },
  };
}

export const metadataKeywords = [
  "limpeza pós incêndio",
  "limpeza pós obra",
  "PB Clean",
  "restauração ambientes",
  "descontaminação",
  "sanitização ozônio",
  "limpeza técnica São Paulo",
  "limpeza conservação",
  "limpeza emergencial",
];
