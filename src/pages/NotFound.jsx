import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center">
        <h1 style={{ fontSize: "5rem", color: "#003366" }}>404</h1>
        <p>Sorry, we couldn't find that page.</p>
        <Link to="/" className="btn mt">Back to Home</Link>
      </div>
    </section>
  );
}
