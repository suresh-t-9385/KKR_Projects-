import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { company, navLinks } from "../data/siteData.js";
import { Phone, Mail, Pin, Facebook, Twitter, LinkedIn, Instagram, YouTube } from "./Icons.jsx";

export default function Footer() {
  const { social, phones, email, address } = company;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo light />
          <p className="footer-about">
            Supplying hotel-grade bed linen, bath linen, bedding and furnishings to hotels,
            resorts, hospitals and institutions across India.
          </p>
          <div className="social social-footer">
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTube /></a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
            <li><Link to="/pay-online">Pay Online</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><Pin /> <span>{address}</span></li>
            {phones.map((p) => (
              <li key={p}><Phone /> <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></li>
            ))}
            <li><Mail /> <a href={`mailto:${email}`}>{email}</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} KKR Linens &amp; Fabrics. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
