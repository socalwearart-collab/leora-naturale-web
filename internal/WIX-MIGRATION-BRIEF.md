# Leora Naturale → Wix Migration Brief

Use this document to rebuild the Leora Naturale website on Wix. It is extracted from the existing Next.js/Vercel codebase at `C:\Users\User\leora-naturale-website`.

---

## Claude Prompt (copy-paste this)

```
I need you to help me rebuild the Leora Naturale website on Wix.

CONTEXT:
- This is a Sri Lankan wellness/food brand selling dehydrated snacks and herbal products
- The current site is built with Next.js on Vercel — I want a Wix version that looks and feels the same
- I have a full migration brief, product data, blog posts, and all images in a folder

YOUR TASK:
1. Guide me step-by-step to build this on Wix (Wix Editor or Wix Studio — recommend which is better for this site)
2. Map each section of the original site to the best Wix elements/apps
3. Set up Wix Stores for the 6 products with categories, pricing, and WhatsApp ordering
4. Recreate the design system (colors, fonts, layout) in Wix
5. Set up blog posts, contact form, newsletter, and floating WhatsApp button
6. Help me connect my domain www.leoranaturale.com to Wix

IMPORTANT BEHAVIOR TO PRESERVE:
- Primary ordering flow is WhatsApp (not checkout cart) — each product has "Order via WhatsApp" button
- WhatsApp number: +94 071 8147561 (940718147561)
- Contact: leoranaturale@gmail.com, 071 8147561
- Design: warm cream background, forest green (#2d6b3a), Playfair Display headings, Inter body text
- Inspired by sewanagalaayurvedaya.com and laknature.com

ATTACHED FILES:
- WIX-MIGRATION-BRIEF.md (this file — full site structure)
- site-data.json (structured content)
- products.json (6 products with full details)
- blog.json (3 blog posts)
- images/ folder (all site images)

Start by giving me a Wix site architecture plan (pages, collections, apps needed), then walk me through building the homepage section by section.
```

---

## Site Overview

| Item | Value |
|------|-------|
| Brand | Leora Naturale |
| Tagline (EN) | Preserved Quality, Naturally |
| Tagline (SI) | රැකි ගුණි ස්වභාවික |
| Domain | www.leoranaturale.com |
| Email | leoranaturale@gmail.com |
| Phone | 071 8147561 |
| WhatsApp | +94 071 8147561 |

---

## Pages to Create on Wix

| Page | URL slug | Notes |
|------|----------|-------|
| Home | `/` | Long scroll page with all sections below |
| Products | `/products` | Full catalog with category filter |
| Product Detail | `/product/{slug}` | One page per product (6 total) |
| About | `/about` | Brand story + values |
| Blog | `/blog` | Blog listing |
| Blog Post | `/post/{slug}` | 3 posts |

---

## Design System

### Colors
| Token | Hex | Wix usage |
|-------|-----|-----------|
| Forest (primary) | `#2d6b3a` | Buttons, headings, nav |
| Forest dark | `#1f4d2e` | Button hover |
| Sage | `#5a8f5e` | Section labels, italic emphasis |
| Cream | `#f5f0e6` | Page background |
| Gold | `#c4a035` | Newsletter subscribe button |
| WhatsApp green | `#25d366` | Order/WhatsApp buttons |
| Text | `#2c2c2c` | Body copy |
| Text muted | `#5a5a5a` | Subtitles |

### Typography
- **Headings:** Playfair Display (600 weight, italic for emphasis words)
- **Body:** Inter or similar clean sans-serif
- **Section labels:** Uppercase, letter-spaced, sage color, 0.8rem

### UI Patterns
- Rounded pill buttons (50px border-radius)
- Section padding: ~5rem desktop, ~3.5rem mobile
- Max content width: 1200px
- Cards with soft green shadows
- Hero: full-width background image with dark overlay, white text

---

## Homepage Sections (in order)

1. **Hero** — Background: `images/hero/banner.jpg`
   - Sinhala tagline, eyebrow "Healthy & Preservative Free"
   - H1: "The Art of *Natural* Preservation"
   - CTAs: Shop Collection → /products, Our Story → /about

2. **Brand Banner** — Logo + tagline + "Explore Product Range" CTA

3. **About Preview** — Image `images/about/market.jpg` + intro copy + About Us button

4. **Featured Products** — Grid of 6 products (see products.json)

5. **Category Cards** — 4 categories with images:
   - Dehydrated Snacks
   - Herbal Wellness
   - Herbal Powders
   - Traditional Roots

6. **Process** (anchor: `#process`) — 4 numbered steps

7. **Ingredients** — 4 ingredient spotlight cards

8. **Impact** (anchor: `#impact`) — Community story + `images/impact/community.jpg`

9. **Testimonials** — 3 customer quotes

10. **Blog Preview** — 3 latest posts

11. **Certifications** — 4 quality promise cards

12. **FAQ** — 4 accordion items

13. **Contact** (anchor: `#contact`) — Form + email/phone/WhatsApp

14. **Newsletter** — Email subscribe strip

### Global Elements
- **Sticky header** with logo + nav (Home, Products, About, Blog, Our Process, Contact)
- **Footer** with 4 columns
- **Floating WhatsApp button** bottom-right on all pages

---

## Products (Wix Stores Setup)

Import all 6 products from `products.json`. Suggested Wix collections:

| Collection | Products |
|------------|----------|
| Dehydrated Snacks | Dehydrated Jackfruit, Dehydrated Bitter Gourd, Dehydrated Banana with Sesame Seeds |
| Herbal Wellness | Heen Bovitiya Herbal Tea |
| Herbal Powders | Heen Bovitiya Powder |
| Traditional Roots | Dehydrated Kohila |

### Per-product fields to include
- Name, category, short description, long description
- Price (LKR), weight/pack size
- Image (from `images/products/`)
- Benefits (bullet list)
- How to Use
- Storage instructions
- **Custom button:** "Order via WhatsApp" linking to:
  `https://api.whatsapp.com/send?phone=940718147561&text=Hello%20Leora%20Naturale%2C%20I%20would%20like%20to%20order%20{ProductName}.`

### Ordering model
The Vercel site does **not** use a shopping cart. Orders go through WhatsApp. On Wix you can either:
- **Option A (recommended):** Wix Stores for catalog display only + custom WhatsApp buttons (disable checkout)
- **Option B:** Wix Stores with checkout + WhatsApp as secondary CTA

---

## Blog Posts

| Slug | Title | Date | Image |
|------|-------|------|-------|
| art-of-dehydration | The Art of Natural Dehydration | Mar 15, 2026 | images/blog/art-of-dehydration.jpg |
| heen-bovitiya-wellness | Heen Bovitiya: A Sri Lankan Wellness Treasure | Feb 20, 2026 | images/blog/heen-bovitiya-wellness.jpg |
| preservative-free-living | Why Preservative-Free Food Matters | Jan 10, 2026 | images/blog/preservative-free-living.jpg |

Full content in `blog.json`.

---

## Wix Apps & Features Mapping

| Original feature | Wix equivalent |
|-----------------|----------------|
| Product catalog | Wix Stores |
| Category filter | Wix Stores collections + filter |
| Blog | Wix Blog |
| Contact form | Wix Forms → sends to leoranaturale@gmail.com |
| Newsletter | Wix Ascend / Email Marketing / or Mailchimp integration |
| WhatsApp ordering | Custom link buttons + Wix WhatsApp chat widget |
| FAQ accordion | Wix FAQ element or collapsible containers |
| SEO metadata | Wix SEO settings per page |

---

## Image Inventory

All images are in the `images/` subfolder:

```
images/logo.jpg
images/hero/banner.jpg
images/about/market.jpg
images/about/wellness.jpg
images/impact/community.jpg
images/products/ (6 product photos)
images/categories/ (4 category photos)
images/ingredients/ (4 ingredient photos)
images/blog/ (3 blog photos)
```

Upload these to Wix Media Manager before building pages.

---

## Domain Migration (Vercel → Wix)

When the Wix site is ready:
1. In Wix: Settings → Domains → Connect existing domain → `leoranaturale.com`
2. Update DNS at your registrar:
   - Point `www` CNAME to Wix's servers (Wix will provide exact values)
   - Point apex `@` to Wix A record
3. Remove or redirect the old Vercel deployment to avoid duplicate content

---

## Source Code Reference

Original codebase location: `C:\Users\User\leora-naturale-website`
- Framework: Next.js 14, React 18, TypeScript
- Live preview: https://leora-naturale-website.vercel.app

If Claude needs to inspect original code, key files are:
- `app/page.tsx` — homepage section order
- `data/products.json` — product catalog
- `data/blog.json` — blog posts
- `app/globals.css` — design tokens
- `components/` — all UI sections