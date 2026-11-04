import { useEffect, useRef, useState } from "react";

// One shared IntersectionObserver for every animated element on the page (cheap + fast).
const handlers = new WeakMap();
let observer;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        handlers.get(entry.target)?.();
        observer.unobserve(entry.target); // animate once, then stop watching
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );
  return observer;
}

/** Returns [ref, visible]. `visible` flips to true once when the element scrolls into view. */
export function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    handlers.set(el, () => setVisible(true));
    getObserver().observe(el);
    return () => {
      observer?.unobserve(el);
      handlers.delete(el);
    };
  }, []);

  return [ref, visible];
}

/**
 * Scroll-reveal wrapper.
 * <Reveal variant="up|left|right|zoom" delay={120} as="section" className="...">
 */
export function Reveal({ as: Tag = "div", variant = "up", delay = 0, className = "", children, ...rest }) {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      data-reveal={variant}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Counts a number up when scrolled into view: "500+" -> 0..500 then "+" */
export function CountUp({ value, duration = 1400 }) {
  const match = String(value).match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const [ref, visible] = useInView();
  const [n, setN] = useState(prefersReducedMotion() ? target : 0);

  useEffect(() => {
    if (!visible || prefersReducedMotion()) {
      if (visible) setN(target);
      return;
    }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3)))); // ease-out cubic
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);

  if (!match) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{n}{suffix}</span>;
}
