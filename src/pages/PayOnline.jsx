import { useState } from "react";
import PageBanner from "../components/PageBanner.jsx";
import { company } from "../data/siteData.js";

/*
 * NOTE: This page collects payment details only. To accept real payments,
 * connect a payment gateway (e.g. Razorpay, PayU, Cashfree) inside handleSubmit.
 * Never collect card numbers in your own form.
 */
export default function PayOnline() {
  const [form, setForm] = useState({ name: "", phone: "", invoice: "", amount: "" });
  const [done, setDone] = useState(false);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call your backend to create a gateway order, then open the gateway checkout here.
    setDone(true);
  };

  return (
    <>
      <PageBanner title="Pay Online" subtitle="Quick and secure invoice payment" />
      <section className="section">
        <div className="container narrow">
          <div className="form-card">
            {done ? (
              <div className="success-box">
                Payment request noted for invoice <strong>{form.invoice}</strong> (₹{form.amount}).
                <br />
                Online checkout is not connected yet — please call {company.phones[0]} to complete payment.
                <button className="btn" onClick={() => setDone(false)}>Back</button>
              </div>
            ) : (
              <form className="form" onSubmit={handleSubmit}>
                <h2>Invoice payment</h2>
                <input name="name" placeholder="Name / Company *" required value={form.name} onChange={change} />
                <div className="form-row">
                  <input name="phone" placeholder="Phone *" required pattern="[0-9+\s-]{8,15}" value={form.phone} onChange={change} />
                  <input name="invoice" placeholder="Invoice Number *" required value={form.invoice} onChange={change} />
                </div>
                <input name="amount" type="number" min="1" step="0.01" placeholder="Amount (₹) *" required value={form.amount} onChange={change} />
                <button type="submit" className="btn btn-yellow-dark">Proceed to Pay</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
