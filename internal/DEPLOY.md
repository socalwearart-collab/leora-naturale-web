# Deploy

The public website is GitHub Pages, not Vercel, not localhost.

## How the live site is produced

1. `npm run build:pages` writes a static site to `out/` with `basePath=/leora-naturale`.
2. The `out/` folder is pushed to the `gh-pages` branch.
3. GitHub serves https://socalwearart-collab.github.io/leora-naturale/

Source stays on `main`. The live HTML stays on `gh-pages`.

## After you change the site

From `C:\Users\User\leora-naturale-website`:

```powershell
npm.cmd run build:pages
```

Then publish `out/` to `gh-pages` (the same steps used in the last deploy).

## Attach www.leoranaturale.com later

1. In the repo Settings → Pages → Custom domain, add `www.leoranaturale.com`.
2. At the DNS host, CNAME `www` to `socalwearart-collab.github.io`.
3. Rebuild **without** a project base path:

```
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_SITE_URL=https://www.leoranaturale.com
```

If you leave `basePath=/leora-naturale` after the domain is attached, CSS and images will 404 on the custom domain.

The repository can stay **public**. GitHub Pages on a public repo is free and works with a custom domain.
