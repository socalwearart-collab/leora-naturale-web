import products from "@/data/products.json";
import blogPosts from "@/data/blog.json";

export { IMAGES } from "@/lib/images";

export type Product = {
  id: string;
  name: string;
  nameSinhala?: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  weight: string;
  image: string;
  benefits: string[];
  usage: string;
  storage: string;
  featured: boolean;
  inStock: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
};

export const WHATSAPP_NUMBER = "940718147561";
export const CONTACT_EMAIL = "leoranaturale@gmail.com";
export const CONTACT_PHONE = "071 8147561";
export const BRAND_TAGLINE_SINHALA = "රැකි ගුණි ස්වභාවික";
export const BRAND_TAGLINE_EN = "Preserved Quality, Naturally";
export const LOGO_SRC = "/images/logo.jpg";

export function getProducts(): Product[] {
  return products as Product[];
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter((product) => product.featured);
}

export function getProductById(id: string): Product | undefined {
  return getProducts().find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return getProducts().filter((product) => product.category === category);
}

export function getCategories(): string[] {
  return Array.from(new Set(getProducts().map((product) => product.category)));
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts as BlogPost[];
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}

export function getWhatsAppOrderLink(productName?: string): string {
  const message = productName
    ? `Hello Leora Naturale, I would like to order ${productName}.`
    : "Hello Leora Naturale, I would like to place an order.";
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}