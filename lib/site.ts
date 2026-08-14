/** Public origin of the live website. Override when attaching the custom domain. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://socalwearart-collab.github.io/leora-naturale-web"
).replace(/\/$/, "");

/** Project-page prefix on github.io. Empty string once the custom domain is live. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const SITE_NAME = "Leora Naturale";
export const SITE_LEGAL_NAME = "Leora Naturale";
export const SITE_TAGLINE_EN = "Preserved Quality, Naturally";
export const SITE_TAGLINE_SI = "රැකි ගුණි ස්වභාවික";
export const SITE_DESCRIPTION =
  "Leora Naturale is a Sri Lankan brand of preservative-free dehydrated fruits, traditional vegetables, and herbal wellness products. Low-temperature dehydration locks in nutrients without artificial colours, flavours, or additives.";

export const CONTACT_EMAIL = "leoranaturale@gmail.com";
export const CONTACT_PHONE = "071 8147561";
export const CONTACT_PHONE_E164 = "+94718147561";
export const WHATSAPP_NUMBER = "940718147561";
export const ORIGIN_COUNTRY = "Sri Lanka";

export function asset(path: string): string {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalised}`;
}

export function absoluteUrl(path = "/"): string {
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalised}`;
}

export function getWhatsAppLink(message?: string): string {
  const text =
    message || "Hello Leora Naturale, I would like to place an order.";
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
}
