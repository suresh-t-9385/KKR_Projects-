import { useSearchParams, Link } from "react-router-dom";
import PageBanner from "../components/PageBanner.jsx";
import { Reveal } from "../hooks/useReveal.jsx";
import { locations } from "../data/siteData.js";
import { Pin, Phone, Clock } from "../components/Icons.jsx";

export default function Location() {
  const [params, setParams] = useSearchParams();
  const active = locations.find((l) => l.id === params.get("site")) || locations[0];
  const q = encodeURIComponent(active.mapQuery);

  return (
    <>
      <PageBanner title="Location" subtitle="Visit our factory, office and showroom" />
      <section className="section">
        <div className="container">
          <div className="tabs loc-tabs" role="tablist" aria-label="Choose a location">
            {locations.map((l) => (
              <button
                key={l.id}
                role="tab"
                aria-selected={active.id === l.id}
                className={`tab ${active.id === l.id ? "active" : ""}`}
                onClick={() => setParams({ site: l.id }, { replace: true })}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Reveal className="loc-grid" key={active.id}>
            <div className="loc-info">
              <h2>{active.label}</h2>
              <address>
                <p><Pin /> <span>{active.lines.join(" ")}</span></p>
                {active.phone && <p><Phone size={16} /> <a href={`tel:${active.phone.replace(/\s/g, "")}`}>{active.phone}</a></p>}
                {active.hours && <p><Clock /> <span>{active.hours}</span></p>}
              </address>
              <a
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${q}`}
              >
                Get Directions
              </a>
              <Link to="/contact" className="btn btn-yellow loc-contact">Contact Us</Link>
            </div>
            <div className="map-card">
              <iframe
                title={`${active.label} map`}
                src={`https://www.google.com/maps?q=${q}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
