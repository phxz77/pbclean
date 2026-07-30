export type IconName =
  | "award"
  | "badge-check"
  | "building"
  | "check"
  | "clock"
  | "droplets"
  | "factory"
  | "flame"
  | "hard-hat"
  | "heart"
  | "home"
  | "leaf"
  | "shield"
  | "sparkles"
  | "spray-can"
  | "users"
  | "wind";

export type FAQItem = {
  id: string;
  category: string;
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  description: string[];
  icon: IconName;
  audiences: string[];
  benefits: string[];
  differentials: string[];
  process: string[];
  faq: FAQItem[];
  gallery: { before: string; after: string; alt: string }[];
  related: string[];
  featured?: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: "Pós Incêndio" | "Pós Obra" | "Conservação" | "Sanitização";
  before: string;
  after: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  location: string;
  excerpt: string;
  challenge: string;
  solution: string;
  result: string;
  cover: string;
  images: string[];
  metrics: { value: string; label: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover: string;
  content: { heading: string; paragraphs: string[] }[];
  related: string[];
};
