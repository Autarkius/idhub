"use client";

import { useEffect, useRef, useState } from "react";
import type { Project, SiteData } from "@/lib/site";
import Media from "./Media";
import styles from "./Works.module.css";

// السكشن بيثبت والمشاريع بتتحرك بالعرض وانت بتنزل بالسكرول
export default function Works({
  brand,
  projects,
  portrait = false,
}: {
  brand: SiteData["brand"];
  projects: Project[];
  portrait?: boolean;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mq = window.matchMedia("(min-width: 901px)");
    let raf = 0;

    const measure = () => {
      const d = mq.matches ? Math.max(0, track.scrollWidth - window.innerWidth) : 0;
      setDistance(d);
      update();
    };

    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!mq.matches) {
          track.style.transform = "";
          return;
        }
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0;
        const d = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.transform = `translate3d(${-p * d}px, 0, 0)`;
      });
    };

    measure();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    mq.addEventListener("change", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
      mq.removeEventListener("change", measure);
    };
  }, []);

  return (
    <section
      id="works"
      ref={sectionRef}
      className={styles.works}
      style={{ height: distance ? `calc(100vh + ${distance}px)` : undefined }}
    >
      <div className={styles.sticky}>
        <div ref={trackRef} className={`${styles.track} ${portrait ? styles.portrait : ""}`}>
          <article className={styles.intro}>
            <h2 className={`outline-text ${styles.introTitle}`}>مشاريعنا</h2>
          </article>

          {projects.map((p, i) => (
            <article key={p.slug} className={`${styles.project} ${i % 2 === 0 ? styles.offset : ""}`}>
              <a href={p.href} className={styles.media} aria-label={`افتح ${p.name}`}>
                <Media src={p.image} alt={p.name} className={styles.image} />
                <div className={styles.posterOverlay} aria-hidden>
                  <strong>{p.name}</strong>
                  <small>{brand.name}</small>
                </div>
              </a>
              <div className={styles.info}>
                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.category}>{p.category}</p>
                <h3 className={styles.name}>{p.name}</h3>
                {p.description && (
                  <p className={styles.category}>{p.description}</p>
                )}
                <a href={p.href} className={styles.view}>
                  عرض
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
