import { useMemo, useState } from "react";
import PageBanner from "../components/PageBanner.jsx";
import ProductCard from "../components/ProductCard.jsx";
import QuoteModal from "../components/QuoteModal.jsx";
import { products, categories } from "../data/siteData.js";

export default function Products() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [quote, setQuote] = useState({ open: false, product: "" });

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (category === "All" || p.category === category) &&
          p.name.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [category, search]
  );

  return (
    <>
      <PageBanner title="Our Products" subtitle="Everything your property needs, under one roof" />
      <section className="section">
        <div className="container">
          <div className="toolbar">
            <div className="tabs">
              {categories.map((c) => (
                <button key={c} className={`tab ${category === c ? "active" : ""}`} onClick={() => setCategory(c)}>
                  {c}
                </button>
              ))}
            </div>
            <input
              className="search"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="center muted">No products match your search.</p>
          ) : (
            <div className="grid grid-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onQuote={(name) => setQuote({ open: true, product: name })} />
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
