# Deploy and domain

The public website is GitHub Pages.

- Live today: https://socalwearart-collab.github.io/leora-naturale/
- Target domain: https://www.leoranaturale.com
- Registrar: Namecheap
- Old host to leave: Wix

Source stays on `main`. The live HTML is the `gh-pages` branch.

---

## Switch leoranaturale.com from Wix to GitHub Pages

Do these in order. The domain stays registered at Namecheap the whole time. You are only changing **where the domain points**, not transferring the domain.

### 1. Add the domain on GitHub first

1. Open [repo Pages settings](https://github.com/socalwearart-collab/leora-naturale/settings/pages).
2. Under **Custom domain**, type `www.leoranaturale.com` and click **Save**.
3. GitHub creates a `CNAME` file on the `gh-pages` branch. Leave it.
4. Do **not** turn on **Enforce HTTPS** yet. Wait until the DNS check is green.

The github.io site can keep working until step 5.

### 2. See how Namecheap is talking to Wix

1. Namecheap → **Domain List** → `leoranaturale.com` → **Manage**.
2. Open the **Domain** tab and note **Nameservers**.

**Case A — Nameservers say Wix** (for example `ns10.wixdns.net` / `ns11.wixdns.net`)

1. Change **Nameservers** to **Namecheap BasicDNS** (or PremiumDNS if you already pay for it).
2. Save. Wait 5–15 minutes.
3. Open the **Advanced DNS** tab and continue with step 3.

**Case B — Nameservers already say Namecheap**

Skip to step 3. Wix is only using host records.

### 3. Replace Wix host records with GitHub records

Namecheap → `leoranaturale.com` → **Manage** → **Advanced DNS**.

Delete every Wix-related host record. Typical Wix leftovers:

| Type | Host | Looks like |
|------|------|------------|
| A | `@` | `185.230.63.107` / `185.230.63.171` / `185.230.63.186` |
| CNAME | `www` | `www44.wixdns.net`, `cdn1.wixdns.net`, `s.wixdns.net` |
| CNAME | `@` or `www` | anything with `wixdns` |

Do **not** delete MX or email TXT records if you use email on this domain.

Add the same GitHub set you already used for `leopharmacy.org`:

| Type | Host | Value | TTL |
|------|------|--------|-----|
| A Record | `@` | `185.199.108.153` | Automatic |
| A Record | `@` | `185.199.109.153` | Automatic |
| A Record | `@` | `185.199.110.153` | Automatic |
| A Record | `@` | `185.199.111.153` | Automatic |
| CNAME Record | `www` | `socalwearart-collab.github.io` | Automatic |

`@` is the bare domain `leoranaturale.com`. `www` is `www.leoranaturale.com`.

### 4. Disconnect the domain inside Wix

Wix dashboard → **Settings** → **Domains** → `leoranaturale.com` → **Disconnect** / **Remove**.

Do this **after** the Namecheap records are saved. You are not cancelling the Namecheap registration. You are only unlinking Wix so it stops overwriting DNS.

You can leave the old Wix site unpublished. It will no longer answer on this domain.

### 5. Wait, then turn on HTTPS

1. Wait 15 minutes to a few hours (rarely up to 48 hours).
2. Refresh GitHub Pages settings. The DNS check next to `www.leoranaturale.com` should be green.
3. Turn on **Enforce HTTPS**.
4. Tell the person who publishes this repo: **rebuild without the `/leora-naturale` path**.

Until that rebuild, `www.leoranaturale.com` may load with missing CSS/images. That is expected. The current files are built for `github.io/leora-naturale/`. After the rebuild they are built for the domain root.

Rebuild env:

```
NEXT_PUBLIC_BASE_PATH=
NEXT_PUBLIC_SITE_URL=https://www.leoranaturale.com
GITHUB_PAGES=1
```

Then publish `out/` to `gh-pages` again.

### 6. Check

- https://www.leoranaturale.com loads the Leora site
- https://leoranaturale.com redirects or also loads (the four A records)
- Padlock / HTTPS works
- Logo, pack images, and Shop button work

---

## After future content edits

```powershell
cd C:\Users\User\leora-naturale-website
npm.cmd run build:pages
```

Then publish `out/` to `gh-pages`. Once the custom domain is live, build with an empty `NEXT_PUBLIC_BASE_PATH` as above.
