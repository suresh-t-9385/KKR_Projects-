import { useState } from "react";
import { company } from "../data/siteData.js";
import QuoteModal from "./QuoteModal.jsx";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="pillow p1" />
        <div className="pillow p2" />
        <div className="pillow p3" />
        <div className="bed" />
      </div>
      <div className="hero-content">
        <h2 className="hero-title">{company.heroTitle}</h2>
        <h1 className="hero-sub">{company.heroSubtitle}</h1>
        <button className="btn btn-yellow" onClick={() => setOpen(true)}>GET A QUOTE</button>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
