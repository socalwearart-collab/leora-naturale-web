# SEO and LLMO

## Search

- One H1 per page. Product pages use the English pack name.
- Canonical URLs and `sitemap.xml` / `robots.txt` are generated at build time.
- FAQ, Product, Organization, Article, and Breadcrumb JSON-LD are on the relevant pages.
- Botanical names sit next to kitchen names (waraka / Artocarpus heterophyllus).

## Language-model optimisation

- `/llms.txt` — short index for crawlers and assistants
- `/llms-full.txt` — citeable fact sheet (who, where, catalogue, what not to invent)
- About page states entity facts in plain sentences
- FAQ answers the questions people and models actually ask
- Catalogue JSON is also at `/api/products.json` on the static site

When the custom domain is live, rebuild so those files list `www.leoranaturale.com` as the canonical host.
