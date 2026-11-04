import { useEffect, useRef, useState } from "react";
import { company } from "../data/siteData.js";
import QuoteModal from "./QuoteModal.jsx";

// Replace public/videos/hero.mp4 with your real product video (H.264, no audio, under ~6 MB).
const VIDEO_MP4 = "/videos/hero.mp4";
const POSTER = "/videos/hero-poster.jpg";

function canPlayVideo() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const conn = navigator.connection;
  if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ""))) return false;
  return true;
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);
  const bgRef = useRef(null);

  // Start loading the video only after the page itself has loaded (keeps first paint fast).
  useEffect(() => {
    if (!canPlayVideo()) return;
    const start = () => setPlayVideo(true);
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => window.removeEventListener("load", start);
  }, []);

  // Pause when the hero is off-screen or the tab is hidden (saves battery & CPU).
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !playVideo) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    const onVis = () => (document.hidden ? v.pause() : v.play().catch(() => {}));
    document.addEventListener("visibilitychange", onVis);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [playVideo]);

  // Gentle parallax on the background while scrolling past the hero.
  useEffect(() => {
    if (!canPlayVideo()) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (bgRef.current && window.scrollY < 900) {
          bgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.25}px, 0) scale(1.08)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero-bg" ref={bgRef} aria-hidden="true">
        {/* CSS pillow artwork = instant fallback while the video loads / if it is blocked */}
        <div className="pillow p1" />
        <div className="pillow p2" />
        <div className="pillow p3" />
        <div className="bed" />
        {playVideo && (
          <video
            ref={videoRef}
            className={`hero-video ${ready ? "is-ready" : ""}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={POSTER}
            onCanPlay={() => setReady(true)}
            onError={() => setReady(false)}
          >
            <source src={VIDEO_MP4} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title hero-in" style={{ "--d": "0.1s" }}>{company.heroTitle}</h1>
        <p className="hero-sub hero-in" style={{ "--d": "0.3s" }}>{company.heroSubtitle}</p>
        <button className="btn btn-yellow hero-in" style={{ "--d": "0.55s" }} onClick={() => setOpen(true)}>
          GET A QUOTE
        </button>
      </div>
      <a href="#why" className="scroll-cue" aria-label="Scroll to content"><span /></a>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
