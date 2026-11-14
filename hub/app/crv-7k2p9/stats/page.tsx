import { siteList } from "@/sites";
import { STATS_TOKEN, STATS_URL } from "@/lib/stats-config";
import styles from "../../page.module.css";

export const dynamic = "force-dynamic";
export const metadata = { title: "Corvus | الإحصائيات" };

// صف في الشيت: time, slug, visitor, event, device, country, city, referrer, seconds, scroll
type Row = [string, string, string, string, string, string, string, string, number | "", number | ""];

const COUNTRY: Record<string, string> = { SA: "السعودية", EG: "مصر", AE: "الإمارات", KW: "الكويت", QA: "قطر", BH: "البحرين", OM: "عمان" };

async function loadRows(): Promise<Row[] | null> {
  if (!STATS_URL) return null;
  try {
    const res = await fetch(`${STATS_URL}?token=${STATS_TOKEN}`, { cache: "no-store" });
    const data = await res.json();
    return data.ok ? data.rows : null;
  } catch {
    return null;
  }
}

function fmt(d: Date) {
  return d.toLocaleString("ar-EG", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit", timeZone: "Africa/Cairo" });
}

export default async function Stats() {
  const rows = await loadRows();
  const names = Object.fromEntries(siteList.map(({ slug, site }) => [slug, site.brand.name]));

  const stats = siteList.map(({ slug }) => {
    const r = (rows ?? []).filter((x) => x[1] === slug);
    const views = r.filter((x) => x[3] === "view");
    const leaves = r.filter((x) => x[3] === "leave" && x[8] !== "");
    const visitors = new Set(views.map((x) => x[2]));
    const countries = new Map<string, Set<string>>();
    for (const x of views) {
      const c = COUNTRY[x[5]] ?? (x[5] || "غير معروف");
      const place = x[6] ? `${c} - ${x[6]}` : c;
      if (!countries.has(place)) countries.set(place, new Set());
      countries.get(place)!.add(x[2]);
    }
    const last = views.length ? new Date(views[views.length - 1][0]) : null;
    return {
      slug,
      name: names[slug],
      visitors: visitors.size,
      views: views.length,
      mobile: new Set(views.filter((x) => x[4] === "mobile").map((x) => x[2])).size,
      whatsapp: r.filter((x) => x[3] === "whatsapp").length,
      avgSeconds: leaves.length ? Math.round(leaves.reduce((s, x) => s + Number(x[8]), 0) / leaves.length) : null,
      maxScroll: leaves.length ? Math.max(...leaves.map((x) => Number(x[9]) || 0)) : null,
      places: [...countries.entries()].map(([p, v]) => `${p} (${v.size})`).join("، "),
      last,
    };
  }).sort((a, b) => (b.last?.getTime() ?? 0) - (a.last?.getTime() ?? 0));

  const th: React.CSSProperties = { textAlign: "right", padding: "10px 12px", color: "var(--muted)", fontSize: 13, borderBottom: "1px solid var(--line)", whiteSpace: "nowrap" };
  const td: React.CSSProperties = { padding: "12px", borderBottom: "1px solid var(--line)", fontSize: 14, verticalAlign: "top" };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          <a href="/crv-7k2p9">Corvus ← المواقع</a>
        </p>
        <h1 className={styles.title}>الإحصائيات</h1>
        <p className={styles.sub}>زيارات الفريق مش محسوبة. كل جهاز بيتحسب زائر واحد.</p>
      </header>

      {rows === null ? (
        <p className={styles.empty}>
          الإحصائيات مش متوصلة لسه. اتبع الخطوات اللي في <code>hub/scripts/stats-sheet.gs</code>.
        </p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 860 }}>
            <thead>
              <tr>
                {["الموقع", "أجهزة مختلفة", "زيارات", "موبايل", "واتساب", "متوسط المدة", "أبعد نزول", "منين", "آخر زيارة"].map((h) => (
                  <th key={h} style={th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {stats.map((s) => (
                <tr key={s.slug}>
                  <td style={td}>
                    <a href={`/${s.slug}`} style={{ fontWeight: 800 }}>{s.name}</a>
                    <div style={{ color: "var(--muted)", fontSize: 12 }}>/{s.slug}</div>
                  </td>
                  <td style={{ ...td, fontWeight: 800, fontSize: 18 }}>{s.visitors}</td>
                  <td style={td}>{s.views}</td>
                  <td style={td}>{s.mobile}</td>
                  <td style={td}>{s.whatsapp}</td>
                  <td style={td}>{s.avgSeconds === null ? "-" : `${s.avgSeconds} ث`}</td>
                  <td style={td}>{s.maxScroll === null ? "-" : `${s.maxScroll}%`}</td>
                  <td style={{ ...td, color: "var(--muted)" }}>{s.places || "-"}</td>
                  <td style={{ ...td, whiteSpace: "nowrap" }}>{s.last ? fmt(s.last) : "ما اتفتحش"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </main>
  );
}
