/**
 * Camada de conteúdo do site.
 *
 * Hoje, os dados vêm dos módulos locais em /data. Em uma integração futura,
 * este arquivo pode trocar as importações por queries de Sanity, Payload,
 * Strapi ou Supabase sem exigir mudanças nos componentes de apresentação.
 */
export { blogCategories, blogPosts, getBlogPost } from "@/data/blog";
export { cases, getCaseStudy } from "@/data/cases";
export { clientPageContent, clientSegments } from "@/data/clients";
export { companyContent } from "@/data/company";
export { contactContent } from "@/data/contact";
export { faqCategories, faqItems } from "@/data/faq";
export { galleryItems } from "@/data/gallery";
export { homeContent } from "@/data/home";
export { primaryNavigation } from "@/data/navigation";
export { featuredServices, getService, services } from "@/data/services";
