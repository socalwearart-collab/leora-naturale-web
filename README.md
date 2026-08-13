# Leora Naturale

**Live website:** [https://socalwearart-collab.github.io/leora-naturale/](https://socalwearart-collab.github.io/leora-naturale/)

Public site for [Leora Naturale](https://www.leoranaturale.com) — preservative-free dehydrated fruit, traditional vegetables, and herbal wellness from Sri Lanka.

This repository **is** the website. The public pages are built as static files and served by **GitHub Pages**. There is no Vercel app and no need to run a local server to view the live site.

## Public link

| What | URL |
|------|-----|
| Live site (use this) | https://socalwearart-collab.github.io/leora-naturale/ |
| Product catalogue | https://socalwearart-collab.github.io/leora-naturale/products/ |
| About | https://socalwearart-collab.github.io/leora-naturale/about/ |
| Source | https://github.com/socalwearart-collab/leora-naturale |
| Planned custom domain | www.leoranaturale.com (attach later) |

`localhost` only appears if someone runs `npm run dev` on their own computer. That is optional for editing. Visitors use the GitHub Pages link above.

## Stack

- Next.js 14 static export (`output: "export"`)
- GitHub Pages from the `gh-pages` branch
- WhatsApp + email ordering (no checkout cart, no server API)

## Local preview (optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000 while that command is running. Close the terminal and localhost stops — that is expected.

To rebuild the public site after edits:

```bash
npm run build:pages
```

Then publish the `out/` folder to the `gh-pages` branch.

## Custom domain later

1. Add a `CNAME` file with `www.leoranaturale.com` (see `internal/DEPLOY.md`).
2. Rebuild **without** `NEXT_PUBLIC_BASE_PATH` so asset paths sit at the domain root.
3. Point DNS: `www` CNAME → `socalwearart-collab.github.io`.

The site stays public. A custom domain does not require a private repo.

## Internal notes

Brand, deploy, and SEO notes live in [`internal/`](./internal/). They stay in this public repo but are **not** part of the published website.

## Contact

- Email: leoranaturale@gmail.com
- Phone / WhatsApp: 071 814 7561
