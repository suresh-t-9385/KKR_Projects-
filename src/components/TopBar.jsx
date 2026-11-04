import { company } from "../data/siteData.js";
import { Facebook, Twitter, LinkedIn, Instagram, YouTube, Phone } from "./Icons.jsx";

export default function TopBar() {
  const { social, phones } = company;
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <div className="welcome-badge">Welcome to KKR Linens !</div>
          <div className="social">
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href={social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter /></a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a>
            <a href={social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><YouTube /></a>
          </div>
        </div>
        <div className="topbar-sales">
          <strong>Sales :</strong>
          <div className="sales-row">
            <span className="sales-icon"><Phone size={34} /></span>
            <div>
              {phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
