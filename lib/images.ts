/**
 * All site images live in /public/images/
 * To replace any image: save your file to the path shown below (same filename).
 */

export const IMAGES = {
  logo: "/images/logo.jpg",
  hero: "/images/hero/banner.jpg",
  about: "/images/about/market.jpg",
  impact: "/images/impact/community.jpg",
  aboutPage: "/images/about/wellness.jpg",
  products: {
    "dehydrated-jackfruit": "/images/products/kiri-kos.jpg",
    "heen-bovitiya-tea": "/images/products/heen-bovitiya-tea.jpg",
    "heen-bovitiya-powder": "/images/products/heen-bovitiya-powder.jpg",
    "butterfly-pea-flower": "/images/products/butterfly-pea-flower.jpg",
    "chai-masala": "/images/products/chai-masala.jpg",
  },
  categories: {
    "Traditional Vegetables": "/images/products/kiri-kos.jpg",
    "Herbal Wellness": "/images/products/butterfly-pea-flower.jpg",
    "Spice Blends": "/images/products/chai-masala.jpg",
  },
  ingredients: {
    Jackfruit: "/images/ingredients/jackfruit.jpg",
    "Heen Bovitiya": "/images/ingredients/heen-bovitiya.jpg",
    "Butterfly Pea": "/images/ingredients/butterfly-pea.jpg",
    "Chai Spices": "/images/ingredients/chai-spices.jpg",
  },
  blog: {
    "art-of-dehydration": "/images/blog/art-of-dehydration.jpg",
    "heen-bovitiya-wellness": "/images/blog/heen-bovitiya-wellness.jpg",
    "preservative-free-living": "/images/blog/preservative-free-living.jpg",
  },
} as const;

export function productImage(id: string): string {
  return IMAGES.products[id as keyof typeof IMAGES.products] ?? IMAGES.logo;
}