import { getProducts, Product } from "@/lib/data";
import {
  absoluteUrl,
  CONTACT_EMAIL,
  CONTACT_PHONE_E164,
  FACEBOOK_URL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

function offerPrice(price: string): string | undefined {
  const match = price.replace(/,/g, "").match(/(\d+(?:\.\d+)?)/);
  return match?.[1];
}

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "FoodEstablishment"],
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: SITE_NAME,
    alternateName: [
      "Leora Naturale Sri Lanka",
      "Leora Natural",
      "leoranaturale",
      "ලියෝරා නැචුරාලේ",
    ],
    url: SITE_URL,
    logo: absoluteUrl("/images/logo.jpg"),
    image: absoluteUrl("/images/logo.jpg"),
    description: SITE_DESCRIPTION,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_E164,
    foundingLocation: {
      "@type": "Place",
      name: "Sri Lanka",
      address: {
        "@type": "PostalAddress",
        addressCountry: "LK",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
    },
    areaServed: {
      "@type": "Country",
      name: "Sri Lanka",
    },
    knowsAbout: [
      "low-temperature dehydration",
      "preservative-free snacks",
      "dehydrated jackfruit",
      "dehydrated pineapple",
      "Heen Bovitiya herbal tea",
      "Artocarpus heterophyllus",
      "Osbeckia octandra",
      "Lasia spinosa",
      "Momordica charantia",
      "Sri Lankan dehydrated fruit",
    ],
    sameAs: [SITE_URL, FACEBOOK_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE_E164,
        areaServed: "LK",
        availableLanguage: ["en", "si", "ta"],
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: ["en", "si", "ta"],
    publisher: { "@id": ORGANIZATION_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    alternateName: [product.nameSinhala, `${product.name} Leora Naturale`].filter(Boolean),
    description: product.longDescription,
    image: absoluteUrl(product.image),
    sku: product.id,
    category: product.category,
    brand: { "@type": "Brand", name: SITE_NAME, url: SITE_URL },
    countryOfOrigin: "LK",
    material: product.scientificName,
    additionalProperty: [
      { "@type": "PropertyValue", name: "Net weight", value: product.weight },
      { "@type": "PropertyValue", name: "Preservatives", value: "None" },
      { "@type": "PropertyValue", name: "Process", value: "Low-temperature dehydration" },
    ],
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/products/${product.id}/`),
      priceCurrency: "LKR",
      ...(offerPrice(product.price) ? { price: offerPrice(product.price) } : {}),
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": ORGANIZATION_ID },
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Leora Naturale product catalogue",
    numberOfItems: getProducts().length,
    itemListElement: getProducts().map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(`/products/${product.id}/`),
      name: product.name,
    })),
  };
}
