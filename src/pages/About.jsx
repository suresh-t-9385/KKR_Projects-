import PageBanner from "../components/PageBanner.jsx";
import { stats, features } from "../data/siteData.js";

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Comfort in our every stitch" />

      <section className="section">
        <div className="container about-grid">
          <div className="about-visual" aria-hidden="true">
            <div className="about-card c1" />
            <div className="about-card c2" />
          </div>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>KKR Linens &amp; Fabrics — the art of hotel linens</h2>
            <p>
              KKR Linens &amp; Fabrics is a Chennai-based wholesale supplier of hotel-grade
              textiles. We provide bed linen, bath linen, bedding, table linen and furnishings
              to hotels, resorts, hospitals, restaurants and corporate guest houses.
            </p>
            <p>
              Every product is chosen for durability through repeated industrial laundering,
              comfort for the guest, and value for the buyer. We work closely with each client on
              sizes, colours and branding so the linen fits the property — not the other way around.
            </p>
            <ul className="tick-list">
              <li>Direct wholesale pricing</li>
              <li>Custom sizes, colours and logo embroidery</li>
              <li>Reliable bulk supply and re-order support</li>
              <li>Quality checked before every dispatch</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container grid grid-4">
          {stats.map((s) => (
            <div key={s.label} className="stat"><strong>{s.value}</strong><span>{s.label}</span></div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="panel">
              <h3>Our Mission</h3>
              <p>To make premium hotel linen accessible to every hospitality business through honest pricing, consistent quality and dependable service.</p>
            </div>
            <div className="panel">
              <h3>Our Vision</h3>
              <p>To be the most trusted linen partner for hotels and institutions across India.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><h2>What sets us apart</h2></div>
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
    </>
  );
}
