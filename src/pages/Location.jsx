import PageBanner from "../components/PageBanner.jsx";
import { company } from "../data/siteData.js";

export default function Location() {
  const q = encodeURIComponent(company.mapQuery);
  return (
    <>
      <PageBanner title="Location" subtitle="Visit our showroom and warehouse" />
      <section className="section">
        <div className="container">
          <div className="map-card">
            <iframe
              title="KKR Linens location map"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="center mt">
            <p><strong>{company.address}</strong></p>
            <a
              className="btn"
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
            >
              Get Directions
            </a>
            <p className="muted mt">
              Tip: set <code>mapQuery</code> in <code>src/data/siteData.js</code> to your exact street address.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
