export default function ProductCard({ product, onQuote }) {
  const [c1, c2] = product.color;
  return (
    <article className="product-card">
      <div
        className="product-img"
        style={
          product.image
            ? { backgroundImage: `url(${product.image})` }
            : { background: `linear-gradient(135deg, ${c1}, ${c2})` }
        }
      >
        {!product.image && <span className="product-initial">{product.name.charAt(0)}</span>}
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
