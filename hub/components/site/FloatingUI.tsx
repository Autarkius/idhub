"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, MapPin, Moon, Sun } from "lucide-react";
import type { Contact } from "@/lib/site";
import BrandIcon from "./BrandIcon";
import styles from "./FloatingUI.module.css";

// العناصر الثابتة: زرار الثيم، شريط السوشيال، زرار الرجوع لفوق، والكيرسر
export default function FloatingUI({ contact, slug }: { contact: Contact; slug: string }) {
  const [light, setLight] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLight(document.documentElement.dataset.theme === "light");
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // الكيرسر: دايرة بتتبع الماوس بنعومة + نقطة في النص
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let x = -100,
      y = -100,
      rx = -100,
      ry = -100,
      raf = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dot.current) dot.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    };
    const over = (e: MouseEvent) => {
      const hit = (e.target as HTMLElement).closest("a, button");
      ring.current?.classList.toggle(styles.cursorHover, !!hit);
    };
    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    document.documentElement.classList.add(styles.hasCursor);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove(styles.hasCursor);
    };
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    if (next) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    try {
      localStorage.setItem(`theme:${slug}`, next ? "light" : "dark");
    } catch {}
  };

  return (
    <>
      <button
        type="button"
        className={styles.theme}
        onClick={toggleTheme}
        aria-label={light ? "الوضع الداكن" : "الوضع الفاتح"}
      >
        {light ? <Sun size={22} strokeWidth={1.8} /> : <Moon size={22} strokeWidth={1.8} />}
      </button>

      <aside className={styles.rail} aria-label="تابعنا">
        <div className={styles.railIcons}>
          {contact.social.linkedin ? (
            <a href={contact.social.linkedin} aria-label="LinkedIn">
              <BrandIcon name="linkedin" size={15} />
            </a>
          ) : null}
          {contact.social.x ? (
            <a href={contact.social.x} aria-label="X">
              <BrandIcon name="x" size={14} />
            </a>
          ) : null}
          {contact.social.instagram ? (
            <a href={contact.social.instagram} aria-label="Instagram">
              <BrandIcon name="instagram" size={15} />
            </a>
          ) : null}
          {contact.social.facebook ? (
            <a href={contact.social.facebook} aria-label="Facebook">
              <BrandIcon name="facebook" size={15} />
            </a>
          ) : null}
          {contact.social.snapchat ? (
            <a href={contact.social.snapchat} aria-label="Snapchat">
              <BrandIcon name="snapchat" size={15} />
            </a>
          ) : null}
          {contact.branches[0]?.map ? (
            <a href={contact.branches[0].map} aria-label="موقعنا على الخريطة">
              <MapPin size={17.5} strokeWidth={1.9} />
            </a>
          ) : null}
        </div>
        <span className={styles.railLine} aria-hidden />
        <p className={styles.railText}>تابعنا</p>
      </aside>

      <button
        type="button"
        className={`${styles.top} ${showTop ? styles.topVisible : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="الرجوع لأعلى"
      >
        <ArrowUp size={24} strokeWidth={2} />
      </button>

      <div ref={ring} className={styles.cursor} aria-hidden />
      <div ref={dot} className={styles.cursorDot} aria-hidden />
    </>
  );
}
