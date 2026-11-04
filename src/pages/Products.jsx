import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import ProductCard from "../components/ProductCard.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import { Reveal } from "../hooks/useReveal.jsx";
import { products, categories } from "../data/siteData.js";

export default function Products() {
  // The header dropdown links here with ?q=pillow or ?category=Bath%20Linen
  const [params, setParams] = useSearchParams();
  const category = categories.includes(params.get("category")) ? params.get("category") : "All";
  const search = params.get("q") || "";
  const [quote, setQuote] = useState({ open: false, product: "" });

  const update = (next) => {
    const merged = { category, q: search, ...next };
    const clean = {};
    if (merged.category && merged.category !== "All") clean.category = merged.category;
    if (merged.q) clean.q = merged.q;
    setParams(clean, { replace: true });
  };

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [category, search]
  );

  const openQuote = (name) => setQuote({ open: true, product: name });

  return (
    <>
      <PageBanner title="Our Products" subtitle="Everything your property needs, under one roof" />
      <section className="section">
        <div className="container">
          <div className="toolbar">
            <div className="tabs" role="tablist" aria-label="Product categories">
              {categories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={category === c}
                  className={`tab ${category === c ? "active" : ""}`}
                  onClick={() => update({ category: c })}
                >
                  {c}
                </button>
              ))}
            </div>
            <input
              className="search"
              type="search"
              aria-label="Search products"
              placeholder="Search products..."
              value={search}
              onChange={(e) => update({ q: e.target.value })}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="center muted">No products match your search.</p>
          ) : (
            <div className="grid grid-4">
              {filtered.map((p, i) => (
                <Reveal key={p.id} delay={(i % 4) * 80}>
                  <ProductCard product={p} onQuote={openQuote} priority={i < 4} />
                </Reveal>
              ))}
            </div>
          )}
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
