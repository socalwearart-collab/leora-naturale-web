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
    "dehydrated-pineapple": "/images/products/pineapple.png",
    "dehydrated-sweet-jackfruit": "/images/products/sweet-jackfruit.png",
    "dehydrated-banana": "/images/products/banana.png",
    "dehydrated-banana-sesame": "/images/products/banana-sesame.png",
    "dehydrated-jackfruit": "/images/products/jackfruit.png",
    "dehydrated-jackfruit-spices": "/images/products/jackfruit-spices.png",
    "dehydrated-unripe-jackfruit": "/images/products/unripe-jackfruit.png",
    "dehydrated-unripe-jackfruit-spices": "/images/products/unripe-jackfruit-spices.png",
    "dehydrated-ash-plantain": "/images/products/ash-plantain.png",
    "dehydrated-ash-plantain-spices": "/images/products/ash-plantain-spices.png",
    "dehydrated-bitter-gourd": "/images/products/bitter-gourd.png",
    "dehydrated-kohila": "/images/products/kohila.png",
    "dehydrated-kohila-spices": "/images/products/kohila-spices.png",
    "heen-bovitiya-tea": "/images/products/heen-bovitiya-tea.jpg",
    "heen-bovitiya-powder": "/images/products/heen-bovitiya-powder.png",
  },
  categories: {
    "Fruit Snacks": "/images/products/pineapple.png",
    "Traditional Vegetables": "/images/products/jackfruit.png",
    "Spiced Range": "/images/products/jackfruit-spices.png",
    "Traditional Roots": "/images/products/kohila.png",
    "Herbal Wellness": "/images/products/heen-bovitiya-powder.png",
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