import PageBanner from "../components/PageBanner.jsx";
import { company } from "../data/siteData.js";

// NOTE: general template wording - please have it reviewed before publishing.
export default function PrivacyPolicy() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="section">
        <div className="container narrow prose">
          <p>
            {company.name} respects your privacy. This page explains what information we collect
            through this website and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you send an enquiry or quote request we receive the details you type in: your name,
            phone number, company, product interest and message. We do not collect payment card
            details on this website.
          </p>
          <h2>How we use it</h2>
          <p>
            We use your details only to reply to your enquiry, prepare quotations and follow up on
            orders. We do not sell your information to third parties.
          </p>
          <h2>Third-party services</h2>
          <p>
            This site uses Google Fonts and Google Maps, and opens WhatsApp when you use our chat
            button. These services have their own privacy policies.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
