import { Link } from "react-router-dom";
import { company, locations } from "../data/siteData.js";
import { Phone, Mail, Pin, Clock, Facebook, Twitter, LinkedIn, Instagram, YouTube } from "./Icons.jsx";
import { Reveal } from "../hooks/useReveal.jsx";

const socials = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "twitter", label: "Twitter", Icon: Twitter },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "youtube", label: "YouTube", Icon: YouTube },
  { key: "linkedin", label: "LinkedIn", Icon: LinkedIn },
];

function Address({ lines }) {
  return (
    <p className="f-address">
      <Pin />
      <span>{lines.join(" ")}</span>
    </p>
  );
}

export default function Footer() {
  const { social, contacts, email, emailAlt, hours, brochures } = company;
  const [factory, office, showroom] = locations;

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Reveal className="f-col" delay={0}>
          <h2 className="f-title">Address</h2>
          <h3 className="f-sub">Manufacturing Facility :</h3>
          <Address lines={factory.lines} />
          <Link to="/contact" className="f-btn">CONTACT US</Link>
        </Reveal>

        <Reveal className="f-col" delay={90}>
          <h2 className="f-title">Office</h2>
          <Address lines={office.lines} />
        </Reveal>

        <Reveal className="f-col" delay={180}>
          <h2 className="f-title">Showroom</h2>
          <Address lines={showroom.lines} />
          <p className="f-address">
            <Phone size={16} />
            <a href={`tel:${showroom.phone.replace(/\s/g, "")}`}>{showroom.phone}</a>
          </p>

          <h2 className="f-title f-title-2">Download Brochure</h2>
          <ul className="f-links">
            {brochures.map((b) => (
              <li key={b.href}>
                <a href={b.href} download>{b.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="f-col" delay={270}>
          <h2 className="f-title">Contact Us</h2>
          <ul className="f-contact">
            {contacts.map((c) => (
              <li key={c.phone}>
                <Phone size={16} />
                <a href={`tel:+91${c.phone}`}>{c.phone}</a> [ {c.label} ]
              </li>
            ))}
            <li><Mail /><a href={`mailto:${email}`}>{email}</a></li>
            <li><Mail /><a href={`mailto:${emailAlt}`}>{emailAlt}</a></li>
          </ul>

          <div className="f-social">
            {socials.map(({ key, label, Icon }) => (
              <a key={key} className={`s-${key}`} href={social[key]} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>

          <h3 className="f-sub f-sub-2">Open Hours :</h3>
          <p className="f-address f-hours">
            <Clock />
            <span>{hours.map((h) => <span key={h} className="block">{h}</span>)}</span>
          </p>
          <Link to="/privacy-policy" className="f-privacy">privacy policy</Link>
        </Reveal>
      </div>

      <div className="footer-bottom">
        <div className="container">
          Copyright &copy; {new Date().getFullYear()} <span>All right reserved</span> Designed By KKR.
        </div>
      </div>
    </footer>
  );
}
