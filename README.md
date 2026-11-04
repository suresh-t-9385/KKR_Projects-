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
