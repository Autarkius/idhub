"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

export type SiteCard = {
  slug: string;
  name: string;
  title: string;
  logo: string;
  accent: string;
  dark: string;
  light: string;
  // "2026-11-14" أو "2026-11" أو null
  createdAt: string | null;
  greetName: string | null;
};

const MONTHS = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

const NO_DATE = "none";

// قالب رسالة واتساب للعميل
function buildMessage(greetName: string | null, url: string) {
  const hello = greetName ? `تفضلي ${greetName}،` : "تفضلي،";
  return `${hello} هذا النموذج المبدئي لصفحة أعمالكم بمشاريعكم وألوان حسابكم 🤍
${url}
تقدرين تفتحينه من الجوال مثل ما يشوفه العميل، وأي ملاحظة أو تعديل تحبينه أنفذه لك مباشرة إن شاء الله.`;
}

// "2026-11-14" ⇒ { month: "2026-11", day: 14 }
function parseDate(createdAt: string | null) {
  const m = createdAt?.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);
  if (!m) return { month: NO_DATE, day: null as number | null };
  return { month: `${m[1]}-${m[2]}`, day: m[3] ? Number(m[3]) : null };
}

function monthLabel(month: string) {
  if (month === NO_DATE) return "بدون تاريخ";
  const [y, mo] = month.split("-");
  return `${MONTHS[Number(mo) - 1]} ${y}`;
}

function dayLabel(month: string, day: number) {
  const mo = Number(month.split("-")[1]);
  return `${day} ${MONTHS[mo - 1]}`;
}

export default function SitesBrowser({ sites }: { sites: SiteCard[] }) {
  const [month, setMonth] = useState<string>("all");
  const [day, setDay] = useState<number | "all">("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 1500);
    } catch {
      window.prompt("انسخ من هنا:", text);
    }
  };

  // الأحدث الأول: بالشهر، وبعدين باليوم، واللي من غير يوم في آخر الشهر
  const sorted = useMemo(
    () =>
      sites
        .map((s) => ({ ...s, ...parseDate(s.createdAt) }))
        .sort((a, b) => {
          if (a.month !== b.month) {
            if (a.month === NO_DATE) return 1;
            if (b.month === NO_DATE) return -1;
            return b.month.localeCompare(a.month);
          }
          return (b.day ?? 0) - (a.day ?? 0);
        }),
    [sites],
  );

  const months = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of sorted) counts.set(s.month, (counts.get(s.month) ?? 0) + 1);
    return [...counts.entries()];
  }, [sorted]);

  const days = useMemo(() => {
    if (month === "all") return [];
    const counts = new Map<number, number>();
    for (const s of sorted) if (s.month === month && s.day) counts.set(s.day, (counts.get(s.day) ?? 0) + 1);
    return [...counts.entries()];
  }, [sorted, month]);

  const q = query.trim().toLowerCase();
  const visible = sorted.filter(
    (s) =>
      (month === "all" || s.month === month) &&
      (day === "all" || s.day === day) &&
      (!q || `${s.name} ${s.title} ${s.slug}`.toLowerCase().includes(q)),
  );

  // تقسيم المواقع الظاهرة على الشهور
  const groups: { month: string; items: typeof visible }[] = [];
  for (const s of visible) {
    const last = groups[groups.length - 1];
    if (last && last.month === s.month) last.items.push(s);
    else groups.push({ month: s.month, items: [s] });
  }

  const pickMonth = (m: string) => {
    setMonth(m);
    setDay("all");
  };

  return (
    <>
      <div className={styles.filters}>
        <input
          type="search"
          className={styles.search}
          placeholder="ابحث باسم العميل أو الرابط..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className={styles.chips} role="group" aria-label="فلتر بالشهر">
          <button
            type="button"
            className={`${styles.chip} ${month === "all" ? styles.chipActive : ""}`}
            onClick={() => pickMonth("all")}
          >
            الكل <span>{sites.length}</span>
          </button>
          {months.map(([m, n]) => (
            <button
              key={m}
              type="button"
              className={`${styles.chip} ${month === m ? styles.chipActive : ""}`}
              onClick={() => pickMonth(m)}
            >
              {monthLabel(m)} <span>{n}</span>
            </button>
          ))}
        </div>

        {days.length > 0 ? (
          <div className={styles.chips} role="group" aria-label="فلتر باليوم">
            <button
              type="button"
              className={`${styles.chip} ${styles.chipSmall} ${day === "all" ? styles.chipActive : ""}`}
              onClick={() => setDay("all")}
            >
              كل الأيام
            </button>
            {days.map(([d, n]) => (
              <button
                key={d}
                type="button"
                className={`${styles.chip} ${styles.chipSmall} ${day === d ? styles.chipActive : ""}`}
                onClick={() => setDay(d)}
              >
                {dayLabel(month, d)} <span>{n}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>

      {groups.length === 0 ? <p className={styles.empty}>مفيش مواقع بالاسم ده.</p> : null}

      {groups.map((g) => (
        <section key={g.month} className={styles.group}>
          <h2 className={styles.groupTitle}>
            {monthLabel(g.month)} <span>{g.items.length}</span>
          </h2>
          <div className={styles.grid}>
            {g.items.map((s) => {
              const url = `/${s.slug}`;
              return (
                <div key={s.slug} className={styles.card}>
                <a href={url} className={styles.cardLink}>
                  <div className={styles.cover} style={{ background: s.dark }}>
                    <span className={styles.glow} style={{ background: s.accent }} aria-hidden />
                    {s.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.logo} alt={s.name} className={styles.logo} />
                    ) : null}
                    <span className={styles.swatches} aria-hidden>
                      <i style={{ background: s.accent }} />
                      <i style={{ background: s.dark }} />
                      <i style={{ background: s.light }} />
                    </span>
                  </div>
                  <div className={styles.body}>
                    <h2 className={styles.name}>{s.name}</h2>
                    {s.title ? <p className={styles.desc}>{s.title}</p> : null}
                    <div className={styles.meta}>
                      <code>{s.slug}</code>
                      {s.day ? <span className={styles.date}>{dayLabel(s.month, s.day)}</span> : null}
                      <span className={styles.open}>
                        {url}
                        <span aria-hidden>←</span>
                      </span>
                    </div>
                  </div>
                </a>
                <div className={styles.actions}>
                  <button
                    type="button"
                    className={styles.action}
                    onClick={() => copy(`${s.slug}:link`, `${window.location.origin}${url}`)}
                  >
                    {copied === `${s.slug}:link` ? "اتنسخ" : "نسخ الرابط"}
                  </button>
                  <button
                    type="button"
                    className={styles.action}
                    onClick={() =>
                      copy(`${s.slug}:msg`, buildMessage(s.greetName, `${window.location.origin}${url}`))
                    }
                  >
                    {copied === `${s.slug}:msg` ? "اتنسخت" : "نسخ رسالة واتساب"}
                  </button>
                </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
}
