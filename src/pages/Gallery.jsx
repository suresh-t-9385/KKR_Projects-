import { useState, useEffect } from "react";
import PageBanner from "../components/PageBanner.jsx";
import { galleryItems } from "../data/siteData.js";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const styleFor = (item) =>
    item.image
      ? { backgroundImage: `url(${item.image})` }
      : { background: `linear-gradient(135deg, ${item.color[0]}, ${item.color[1]})` };

  return (
    <>
      <PageBanner title="Gallery" subtitle="A glimpse of our linen in action" />
      <section className="section">
        <div className="container">
          <div className="gallery">
            {galleryItems.map((g) => (
              <button key={g.id} className="gallery-item" style={styleFor(g)} onClick={() => setActive(g)}>
                <span>{g.title}</span>
              </button>
            ))}
          </div>
          <p className="center muted mt">
            Add your real photos in <code>public/images</code> and set <code>image</code> in
            <code> src/data/siteData.js</code>.
          </p>
        </div>
      </section>

      {active && (
        <div className="modal-backdrop" onClick={() => setActive(null)}>
          <div className="lightbox" style={styleFor(active)} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActive(null)} aria-label="Close">×</button>
            <h3>{active.title}</h3>
          </div>
        </div>
      )}
    </>
  );
}
