import { useEffect, useState } from "react";
import { whatsappNumber } from "../data/siteData.js";
import { Whatsapp } from "./Icons.jsx";

export default function WhatsAppChat() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const link = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello KKR Linens, I would like to know more about your products."
  )}`;

  return (
    <div className="chat-widget">
      {showBubble && (
        <div className="chat-bubble">
          Greetings from KKR Linen!
          <button aria-label="Dismiss" onClick={() => setShowBubble(false)}>×</button>
        </div>
      )}
      <a className="chat-btn" href={link} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <Whatsapp />
        <span className="online-dot" />
      </a>
    </div>
  );
}
