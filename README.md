# Proactive Pixels — Landing Page

Built with [Astro](https://astro.build). Single-page, high-converting landing page for the free Business Leak Report offer.

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

---

## Before Going Live — Checklist

### Required
- [ ] **Hero image**: Add your photo as `/public/images/hero-jose.png` (WebP preferred, max 300kb)
- [ ] **Alex's phone number**: Replace `(XXX) XXX-XXXX` and `tel:+1XXXXXXXXXX` in `src/components/Form.astro`
- [ ] **Webhook URL**: Replace `YOUR_WEBHOOK_URL_HERE` in `src/components/Form.astro` with your Airtable/GoHighLevel/Make webhook
- [ ] **Business hours**: Update the hours line in `src/components/Form.astro`
- [ ] **Privacy email**: Update `hello@proactivepixels.com` in `src/pages/privacy.astro`

### Tracking (when ready)
- [ ] **Google Analytics 4**: Uncomment and add your `G-XXXXXXXXXX` ID in `src/layouts/BaseLayout.astro`
- [ ] **Meta Pixel**: Uncomment and add your Pixel ID in `src/layouts/BaseLayout.astro`

---

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── hero-jose.png        ← ADD YOUR HERO IMAGE HERE
├── src/
│   ├── components/
│   │   ├── Hero.astro           ← Headline, sub-headline, hero image, CTA
│   │   ├── Form.astro           ← 3-field form + post-submission Alex disclosure
│   │   ├── Objections.astro     ← 3 objection bullets + repeat CTA
│   │   └── Footer.astro         ← Legal copy
│   ├── layouts/
│   │   └── BaseLayout.astro     ← HTML shell, fonts, global CSS, tracking placeholders
│   └── pages/
│       ├── index.astro          ← Main landing page
│       └── privacy.astro        ← Privacy policy (required for ads)
└── astro.config.mjs
```

---

## Niche-Specific Pages

This page is built to be cloned for individual niches. To create an HVAC-specific version:

1. Duplicate `src/pages/index.astro` as `src/pages/hvac.astro`
2. Pass niche-specific props to `Hero.astro` (headline, sub-headline, hero image)
3. Update the form dropdown to pre-select HVAC
4. Point your HVAC ad traffic to `/hvac`

---

## Deploy to GitHub + Netlify / Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial landing page"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then connect your GitHub repo to Netlify or Vercel for automatic deploys.

**Build command:** `npm run build`
**Output directory:** `dist`

---

## Adding Your First Case Study

When your first case study is complete, add it above the CTA button in `src/components/Objections.astro`:

```astro
<div class="case-study">
  <p class="case-study__result">"We found $38,400 in annual revenue sitting in missed after-hours calls."</p>
  <p class="case-study__attribution">— [Business Name], [City], [Industry]</p>
</div>
```

One real result with a real business name will meaningfully increase conversions.
