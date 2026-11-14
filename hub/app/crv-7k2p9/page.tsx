import { siteList } from "@/sites";
import SitesBrowser, { type SiteCard } from "../SitesBrowser";
import styles from "../page.module.css";

export default function Home() {
  const sites: SiteCard[] = siteList.map(({ slug, site: s }) => ({
    slug,
    name: s.brand.name,
    title: s.brand.title,
    logo: s.brand.logo,
    accent: s.theme.accent,
    dark: s.theme.dark,
    light: s.theme.light,
    createdAt: s.createdAt ?? null,
    greetName: s.greetName ?? null,
  }));

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Corvus</p>
        <h1 className={styles.title}>مواقع العملاء</h1>
        <p className={styles.sub}>
          {sites.length} {sites.length === 1 ? "موقع" : "مواقع"} متاحين على الروابط دي.
        </p>
        <p className={styles.sub}>
          <a href="/crv-7k2p9/stats" style={{ color: "var(--accent)", fontWeight: 700 }}>
            الإحصائيات ←
          </a>
        </p>
      </header>

      {sites.length === 0 ? (
        <p className={styles.empty}>
          مفيش مواقع. ضيف موقع جديد في فولدر <code>sites</code>.
        </p>
      ) : (
        <SitesBrowser sites={sites} />
      )}

      <footer className={styles.howto}>
        <h2>إضافة موقع جديد</h2>
        <ol>
          <li>
            انسخ فولدر <code>sites/almousa</code> وسمّيه باسم العميل، مثلاً <code>sites/noura</code>.
          </li>
          <li>
            في <code>sites/noura/site.ts</code> غيّر <code>brand</code> و<code>theme</code> وباقي المحتوى، وحط تاريخ
            النهاردة في <code>createdAt</code>. اسم الفولدر <code>noura</code> هو اللي هيبقى الـ id في الرابط.
          </li>
          <li>
            حط اللوجو والصور في <code>public/sites/noura</code> واستخدم المسارات دي في <code>site.ts</code>.
          </li>
          <li>
            شغّل <code>npm run dev</code>. الموقع هيتسجل تلقائيًا ويظهر هنا على <code>/&lt;slug&gt;</code>.
          </li>
        </ol>
      </footer>
    </main>
  );
}
