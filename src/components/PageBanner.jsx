import { Link } from "react-router-dom";

export default function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <div className="crumbs">
          <Link to="/">Home</Link> / <span>{title}</span>
        </div>
      </div>
    </section>
  );
}
