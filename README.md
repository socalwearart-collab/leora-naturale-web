# Leora Naturale Website

Modern brand website for [Leora Naturale](https://www.leoranaturale.com) — premium dehydrated snacks and herbal wellness products from Sri Lanka.

Inspired by the live Wix site and the official pack artwork (pineapple, kos, waraka, polos, banana, ash plantain, karavila, kohila, and Heen Bovitiya).

## Features

- Hero banner, 15-product catalog, category browsing
- Official bilingual pack labels (English + Sinhala)
- About page with brand story
- Contact form API with validation
- WhatsApp ordering integration
- FAQ, testimonials, newsletter sections
- Fully responsive design

## Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Backend API:** Next.js API Routes (`/api/products`, `/api/contact`, `/api/health`)
- **Hosting:** Vercel (recommended) or any Node.js host

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project → select this repo
3. Deploy (zero config needed for Next.js)
4. Add custom domain `www.leoranaturale.com` in Vercel → Settings → Domains
5. Update DNS at your domain registrar:
   - `CNAME` record: `www` → `cname.vercel-dns.com`
   - `A` record: `@` → `76.76.21.21` (Vercel apex)

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/products` | GET | Product catalog JSON |
| `/api/contact` | POST | Submit contact form |

## Contact

- Email: leoranaturale@gmail.com
- Phone: 071 8147561
- WhatsApp: +94 071 8147561