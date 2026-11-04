import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import ProductCard from "../components/ProductCard.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import { features, products, stats, clients, testimonials, company } from "../data/siteData.js";

export default function Home() {
  const [quote, setQuote] = useState({ open: false, product: "" });
  const featured = products.filter((p) => [1, 4, 8, 11].includes(p.id));

  return (
    <>
      <Hero />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why KKR Linens</span>
            <h2>Linen your guests will remember</h2>
            <p>We pair hotel-grade quality with dependable wholesale service, so your rooms always look and feel their best.</p>
          </div>
          <div className="grid grid-4">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Products</span>
            <h2>Featured collections</h2>
          </div>
          <div className="grid grid-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} onQuote={(name) => setQuote({ open: true, product: name })} />
            ))}
          </div>
          <div className="center mt">
            <Link to="/products" className="btn">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container grid grid-4">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Who we serve</span>
            <h2>Trusted by the hospitality &amp; institutional sector</h2>
          </div>
          <div className="chips">
            {clients.map((c) => <span key={c} className="chip">{c}</span>)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What our clients say</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.map((t) => (
              <blockquote className="testimonial" key={t.org}>
                <p>“{t.text}”</p>
                <footer><strong>{t.name}</strong><span>{t.org}</span></footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-inner">
          <div>
            <h2>Need linen for your property?</h2>
            <p>Call us on {company.phones[0]} or send an enquiry — we'll respond with a quote quickly.</p>
          </div>
          <Link to="/contact" className="btn btn-yellow">Contact Us</Link>
        </div>
      </section>

      <QuoteModal
        open={quote.open}
        defaultProduct={quote.product}
        onClose={() => setQuote({ open: false, product: "" })}
      />
    </>
  );
}
