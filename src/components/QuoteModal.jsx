import { useState, useEffect } from "react";
import { whatsappNumber } from "../data/siteData.js";

const empty = { name: "", phone: "", company: "", product: "", quantity: "", message: "" };

export default function QuoteModal({ open, onClose, defaultProduct = "" }) {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      setForm({ ...empty, product: defaultProduct });
      setSent(false);
    }
  }, [open, defaultProduct]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const text =
      `Quote request from website%0A` +
      `Name: ${encodeURIComponent(form.name)}%0A` +
      `Phone: ${encodeURIComponent(form.phone)}%0A` +
      `Company: ${encodeURIComponent(form.company)}%0A` +
      `Product: ${encodeURIComponent(form.product)}%0A` +
      `Quantity: ${encodeURIComponent(form.quantity)}%0A` +
      `Message: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
        <h3>Get a Quote</h3>
        {sent ? (
          <div className="success-box">
            Thank you! Your request has been opened in WhatsApp — just press send and our
            team will reply shortly.
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <form onSubmit={submit} className="form">
            <div className="form-row">
              <input name="name" placeholder="Your Name *" required value={form.name} onChange={change} />
              <input name="phone" placeholder="Phone Number *" required pattern="[0-9+\s-]{8,15}" value={form.phone} onChange={change} />
            </div>
            <input name="company" placeholder="Hotel / Company Name" value={form.company} onChange={change} />
            <div className="form-row">
              <input name="product" placeholder="Product(s) needed *" required value={form.product} onChange={change} />
              <input name="quantity" placeholder="Approx. Quantity" value={form.quantity} onChange={change} />
            </div>
            <textarea name="message" rows="3" placeholder="Additional requirements (size, colour, logo...)" value={form.message} onChange={change} />
            <button type="submit" className="btn">Send Request</button>
          </form>
        )}
      </div>
    </div>
  );
}
