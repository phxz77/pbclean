import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { cases } from "@/data/cases";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/empresa",
    "/servicos",
    "/galeria",
    "/cases",
    "/clientes",
    "/blog",
    "/faq",
    "/contato",
  ];

  const routes = [
    ...staticRoutes,
    ...services.map((service) => `/servicos/${service.slug}`),
    ...cases.map((item) => `/cases/${item.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/blog/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7,
  }));
}
