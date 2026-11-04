import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";
import { company, whatsappNumber } from "../data/siteData.js";
import { Phone, Mail, Pin } from "../components/Icons.jsx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) e.phone = "Enter a valid phone number";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Please enter a message";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const text =
      `Enquiry from website%0AName: ${encodeURIComponent(form.name)}` +
      `%0APhone: ${encodeURIComponent(form.phone)}` +
      `%0AEmail: ${encodeURIComponent(form.email)}` +
      `%0ASubject: ${encodeURIComponent(form.subject)}` +
      `%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you" />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Get in touch</h2>
            <p>Tell us what your property needs and we'll send a quote, with samples on request.</p>
            <ul className="info-list">
              <li><span className="ico"><Pin /></span><div><strong>Address</strong><br />{company.address}</div></li>
              {company.phones.map((p) => (
                <li key={p}><span className="ico"><Phone /></span><div><strong>Sales</strong><br /><a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a></div></li>
              ))}
              <li><span className="ico"><Mail /></span><div><strong>Email</strong><br /><a href={`mailto:${company.email}`}>{company.email}</a></div></li>
            </ul>
          </div>

          <div className="form-card">
            {sent ? (
              <div className="success-box">
                Thank you, {form.name}! Your enquiry has been opened in WhatsApp — press send and we'll get back to you soon.
                <button className="btn" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="form" onSubmit={submit} noValidate>
                <div className="form-row">
                  <div>
                    <input name="name" placeholder="Your Name *" value={form.name} onChange={change} />
                    {errors.name && <small className="err">{errors.name}</small>}
                  </div>
                  <div>
                    <input name="phone" placeholder="Phone *" value={form.phone} onChange={change} />
                    {errors.phone && <small className="err">{errors.phone}</small>}
                  </div>
                </div>
                <div className="form-row">
                  <div>
                    <input name="email" type="email" placeholder="Email" value={form.email} onChange={change} />
                    {errors.email && <small className="err">{errors.email}</small>}
                  </div>
                  <input name="subject" placeholder="Subject" value={form.subject} onChange={change} />
                </div>
                <div>
                  <textarea name="message" rows="5" placeholder="Your Message *" value={form.message} onChange={change} />
                  {errors.message && <small className="err">{errors.message}</small>}
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
