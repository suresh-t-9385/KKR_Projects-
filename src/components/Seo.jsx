import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL, company } from "../data/siteData.js";

const DEFAULT_IMAGE = `${SITE_URL}/images/products/bedsheet.svg`;

// Per-page title + description. Titles stay under ~60 chars, descriptions under ~160.
const pages = {
  "/": {
    title: "KKR Linens & Fabrics | Best Hotel Linen Suppliers in India",
    description: "Hotel-grade bed sheets, mattresses, pillows, towels and duvets direct from our Karur factory. Wholesale linen for hotels, resorts and hospitals across India.",
  },
  "/about": {
    title: "About Us | KKR Linens & Fabrics",
    description: "Learn about KKR Linens & Fabrics, a Tamil Nadu manufacturer of hotel-grade bed, bath and table linen supplying hotels and institutions across India.",
  },
  "/products": {
    title: "Hotel Linen Products - Bed Sheets, Mattress, Pillows | KKR Linens",
    description: "Browse wholesale bed sheets, mattresses, pillows, duvets, bath towels, robes, table linen and curtains. Custom sizes and logo embroidery available.",
  },
  "/gallery": {
    title: "Gallery | KKR Linens & Fabrics",
    description: "See our hotel linen in real rooms: bed sheets, towels, duvets, pillows, spa linen and banquet table linen.",
  },
  "/blog": {
    title: "Hotel Linen Guides & Tips | KKR Linens Blog",
    description: "Practical guides on thread count, GSM, fabric choice and linen care for hotels and resorts.",
  },
  "/contact": {
    title: "Contact Us | KKR Linens & Fabrics",
    description: `Call ${company.phones[0]} or email ${company.email} for a wholesale hotel linen quote. Factory in Karur, office in Chennai, showroom in Puducherry.`,
  },
  "/location": {
    title: "Our Locations - Factory, Office & Showroom | KKR Linens",
    description: "Find the KKR Linens manufacturing facility in Karur, our Chennai office in Pallikaranai and our showroom in Kottakuppam, Puducherry.",
  },
  "/pay-online": {
    title: "Pay Online | KKR Linens & Fabrics",
    description: "Make a secure online payment to KKR Linens & Fabrics.",
    noindex: true,
  },
  "/privacy-policy": {
    title: "Privacy Policy | KKR Linens & Fabrics",
    description: "How KKR Linens & Fabrics collects, uses and protects your information.",
  },
};

function setMeta(selector, attr, key, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

/** Updates <title>, description, canonical and social tags on every route change. Render once in App. */
export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pages[pathname] || {
      title: "Page not found | KKR Linens & Fabrics",
      description: "The page you are looking for could not be found.",
      noindex: true,
    };
    const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "name", "description", meta.description);
    setMeta('meta[name="robots"]', "name", "robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta('meta[property="og:title"]', "property", "og:title", meta.title);
    setMeta('meta[property="og:description"]', "property", "og:description", meta.description);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", meta.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", meta.description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [pathname]);

  return null;
}
