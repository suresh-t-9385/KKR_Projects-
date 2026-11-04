import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, CountUp } from "../hooks/useReveal.jsx";
import Hero from "../components/Hero.jsx";
import ProductCard from "../components/ProductCard.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import { features, products, stats, clients, testimonials, company, productMenu } from "../data/siteData.js";

export default function Home() {
  const [quote, setQuote] = useState({ open: false, product: "" });
  const openQuote = (name) => setQuote({ open: true, product: name });
  const featured = products.filter((p) => [1, 4, 8, 11].includes(p.id));

  return (
    <>
      <Hero />

      <section className="section" id="why">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Why KKR Linens</span>
            <h2>Linen your guests will remember</h2>
            <p>We pair hotel-grade quality with dependable wholesale service, so your rooms always look and feel their best.</p>
          </Reveal>
          <div className="grid grid-4">
            {features.map((f, i) => (
              <Reveal className="feature" key={f.title} delay={i * 90}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-labelledby="shop-title">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Shop by linen</span>
            <h2 id="shop-title">Bed sheets, mattresses, pillows &amp; more</h2>
          </Reveal>
          <ul className="tile-grid">
            {productMenu.map((item, i) => (
              <Reveal as="li" variant="zoom" delay={i * 70} key={item.label}>
                <Link to={item.to} className="linen-tile">
                  <img src={item.image} alt={`${item.label} for hotels`} width="800" height="600" loading="lazy" decoding="async" />
                  <span>{item.label}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Products</span>
            <h2>Featured collections</h2>
          </Reveal>
          <div className="grid grid-4">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <ProductCard product={p} onQuote={openQuote} />
              </Reveal>
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
              <strong><CountUp value={s.value} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Who we serve</span>
            <h2>Trusted by the hospitality &amp; institutional sector</h2>
          </Reveal>
          <div className="chips">
            {clients.map((c, i) => <Reveal as="span" variant="zoom" delay={i * 70} key={c} className="chip">{c}</Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Testimonials</span>
            <h2>What our clients say</h2>
          </Reveal>
          <div className="grid grid-3">
            {testimonials.map((t, i) => (
              <Reveal as="blockquote" className="testimonial" key={t.org} delay={i * 110}>
                <p>“{t.text}”</p>
                <footer><strong>{t.name}</strong><span>{t.org}</span></footer>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <Reveal className="container cta-inner">
          <div>
            <h2>Need linen for your property?</h2>
            <p>Call us on {company.phones[0]} or send an enquiry — we'll respond with a quote quickly.</p>
          </div>
          <Link to="/contact" className="btn btn-yellow">Contact Us</Link>
        </Reveal>
      </section>

      <QuoteModal
        open={quote.open}
        defaultProduct={quote.product}
        onClose={() => setQuote({ open: false, product: "" })}
      />
    </>
  );
}
