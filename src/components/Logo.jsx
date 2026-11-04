import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo ${light ? "logo-light" : ""}`} aria-label="KKR Linens & Fabrics home">
      <svg width="52" height="40" viewBox="0 0 64 48" aria-hidden="true">
        <rect x="6" y="22" width="52" height="14" rx="3" fill="#f5a623" />
        <rect x="8" y="12" width="16" height="11" rx="3" fill={light ? "#fff" : "#003366"} />
        <rect x="26" y="12" width="16" height="11" rx="3" fill={light ? "#fff" : "#003366"} />
        <rect x="4" y="36" width="5" height="9" fill={light ? "#fff" : "#003366"} />
        <rect x="55" y="36" width="5" height="9" fill={light ? "#fff" : "#003366"} />
      </svg>
      <span className="logo-text">
        <span className="logo-kkr">KKR</span>
        <span className="logo-name">Linens &amp; Fabrics</span>
        <span className="logo-tag">THE ART OF HOTEL LINENS</span>
      </span>
    </Link>
  );
}
