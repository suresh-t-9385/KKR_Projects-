import { memo } from "react";

function ProductCard({ product, onQuote, priority = false }) {
  const [c1, c2] = product.color;
  return (
    <article className="product-card">
      <div className="product-img" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}>
        {product.image ? (
          <img
            src={product.image}
            alt={`${product.name} - hotel quality ${product.category.toLowerCase()}`}
            width="800"
            height="600"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        ) : (
          <span className="product-initial">{product.name.charAt(0)}</span>
        )}
        <span className="product-cat">{product.category}</span>
      </div>
      <div className="product-body">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <button className="btn btn-sm" onClick={() => onQuote(product.name)}>Get a Quote</button>
      </div>
    </article>
  );
}

export default memo(ProductCard);
