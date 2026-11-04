import PageBanner from "../components/PageBanner.jsx";
import { blogPosts } from "../data/siteData.js";

export default function Blog() {
  return (
    <>
      <PageBanner title="Blog" subtitle="Guides and tips for hotel linen buyers" />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {blogPosts.map((p, i) => (
              <article className="blog-card" key={p.id}>
                <div
                  className="blog-img"
                  style={{ background: `linear-gradient(135deg, hsl(${(i * 47) % 360} 45% 92%), hsl(${(i * 47) % 360} 40% 80%))` }}
                >
                  <span className="product-cat">{p.tag}</span>
                </div>
                <div className="blog-body">
                  <time>{p.date}</time>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className="read-more">Read more →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
