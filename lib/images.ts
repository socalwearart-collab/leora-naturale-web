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
    "dehydrated-pineapple": "/images/products/pineapple.jpg",
    "dehydrated-sweet-jackfruit": "/images/products/sweet-jackfruit.jpg",
    "dehydrated-banana": "/images/products/banana.jpg",
    "dehydrated-banana-sesame": "/images/products/banana-sesame.jpg",
    "dehydrated-jackfruit": "/images/products/jackfruit.jpg",
    "dehydrated-jackfruit-spices": "/images/products/jackfruit-spices.jpg",
    "dehydrated-unripe-jackfruit": "/images/products/unripe-jackfruit.jpg",
    "dehydrated-unripe-jackfruit-spices": "/images/products/unripe-jackfruit-spices.jpg",
    "dehydrated-ash-plantain": "/images/products/ash-plantain.jpg",
    "dehydrated-ash-plantain-spices": "/images/products/ash-plantain-spices.jpg",
    "dehydrated-bitter-gourd": "/images/products/bitter-gourd.jpg",
    "dehydrated-kohila": "/images/products/kohila.jpg",
    "dehydrated-kohila-spices": "/images/products/kohila-spices.jpg",
    "heen-bovitiya-tea": "/images/products/heen-bovitiya-tea.jpg",
    "heen-bovitiya-powder": "/images/products/heen-bovitiya-powder.jpg",
  },
  categories: {
    "Fruit Snacks": "/images/products/pineapple.jpg",
    "Traditional Vegetables": "/images/products/jackfruit.jpg",
    "Spiced Range": "/images/products/jackfruit-spices.jpg",
    "Traditional Roots": "/images/products/kohila.jpg",
    "Herbal Wellness": "/images/products/heen-bovitiya-powder.jpg",
  },
  ingredients: {
    Jackfruit: "/images/ingredients/jackfruit.jpg",
    "Bitter Gourd": "/images/ingredients/bitter-gourd.jpg",
    "Heen Bovitiya": "/images/ingredients/heen-bovitiya.jpg",
    "Banana & Sesame": "/images/ingredients/banana-sesame.jpg",
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