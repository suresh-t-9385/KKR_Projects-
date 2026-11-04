# KKR Linens & Fabrics — Website (React + Vite)

## Run it

```bash
npm install
npm run dev        # opens http://localhost:3000
npm run build      # production files go to /dist
npm run preview    # preview the production build
```

Requires Node.js 18 or newer.

## Folder structure

```
kkr-linens-website/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg            # put real photos in public/images/
└── src/
    ├── main.jsx               # entry point
    ├── App.jsx                # routes
    ├── data/siteData.js       # ALL content: phones, products, blog, gallery...
    ├── styles/global.css      # all styling
    ├── hooks/useReveal.jsx    # scroll-reveal + count-up
    ├── components/
    │   ├── TopBar.jsx         # welcome badge, social, sales phones
    │   ├── Navbar.jsx         # menu + Pay Online button
    │   ├── Logo.jsx
    │   ├── Hero.jsx           # "Best hotel linen suppliers in India"
    │   ├── ProductCard.jsx
    │   ├── QuoteModal.jsx     # "Get a Quote" form (sends via WhatsApp)
    │   ├── WhatsAppChat.jsx   # floating chat bubble
    │   ├── PageBanner.jsx
    │   ├── Footer.jsx
    │   ├── Icons.jsx
    │   └── ScrollToTop.jsx
    └── pages/
        ├── Home.jsx  About.jsx  Products.jsx  Gallery.jsx
        ├── Blog.jsx  Contact.jsx  Location.jsx  PayOnline.jsx
        └── NotFound.jsx
```

## What's new in this version

- **Footer** rebuilt to match your design (Address / Office / Showroom + brochures / Contact + hours).
- **Hover dropdowns**: *Our Products* (image tiles: bed sheets, mattress, pillows...) and *Location* (factory, office, showroom). On mobile they open as tap-to-expand accordions and are keyboard accessible.
- **Hero background video**: `public/videos/hero.mp4` (+ `hero-poster.jpg`). It loads after the page is ready, pauses off-screen, and is skipped on reduced-motion / data-saver / 2G.
- **Scroll animations**: reveal-on-scroll, count-up numbers, scroll progress bar, parallax hero, compact sticky header. All switch off for users who prefer reduced motion.
- **SEO**: per-page title/description/canonical/Open Graph (`src/components/Seo.jsx`), JSON-LD business data, `robots.txt`, `sitemap.xml`, one H1 per page.
- **Speed**: lazy-loaded pages, vendor chunk, lazy images with sizes, cache headers (`public/_headers`).

## Replace these placeholders

| File | Replace with |
|---|---|
| `public/videos/hero.mp4`, `hero-poster.jpg` | your product video (H.264, no audio, under ~6 MB) and a still frame |
| `public/images/products/*.svg` | real photos (keep file names, or change the paths in `siteData.js`) |
| `public/brochures/*.pdf` | your Spa and Linen brochure PDFs (same names) |
| `SITE_URL` in `src/data/siteData.js` + `public/sitemap.xml`, `robots.txt`, `index.html` | your real domain (currently `https://www.kkrlinens.com`) |

## Things to update

1. **`src/data/siteData.js`** — set your real email, full address, map query, social links.
2. **Photos** — copy images to `public/images/` and add `image: "/images/name.jpg"` to
   products / gallery items. Until then, coloured placeholders are shown.
3. **Pay Online** — the form does not take real payments. Connect Razorpay / PayU /
   Cashfree in `src/pages/PayOnline.jsx` (see the TODO comment).
4. **Contact / Quote forms** — currently open a pre-filled WhatsApp message to your sales
   number. For email delivery, connect a backend or a service such as EmailJS or Formspree.

## Deploying

Run `npm run build` and upload the `dist` folder to any static host (Netlify, Vercel,
Hostinger, cPanel). For deep links like `/about` to work on refresh, configure the host to
serve `index.html` for all routes (Netlify: add a `_redirects` file with `/* /index.html 200`).
