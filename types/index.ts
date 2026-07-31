export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlight: string | null;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}
