#!/usr/bin/env node

/**
 * create-site — أمر واحد بيعملك موقع جديد كامل.
 *
 * الاستخدام:
 *   node hub/scripts/create-site.mjs <slug> <accent-color> <brand-name>
 *
 * مثال:
 *   node hub/scripts/create-site.mjs noura "#4a90d9" "Noura Design"
 *
 * ده بيعمل:
 *   hub/sites/noura/site.ts         — ملف البيانات بالألوان المحسوبة تلقائي
 *   hub/public/sites/noura/brand/   — فولدر اللوجو (حط logo.webp فيه)
 *   hub/public/sites/noura/images/  — فولدر الصور
 */

import { mkdirSync, existsSync, writeFileSync } from "fs";
import { join } from "path";

const [slug, accent, brandName] = process.argv.slice(2);

if (!slug || !accent || !brandName) {
  console.error(`
  ❌ ناقص بيانات!

  الاستخدام:
    node hub/scripts/create-site.mjs <slug> <accent-color> <brand-name>

  مثال:
    node hub/scripts/create-site.mjs noura "#4a90d9" "Noura Design"
  `);
  process.exit(1);
}

// تأكد إن اللون صح
if (!/^#[0-9a-fA-F]{6}$/.test(accent)) {
  console.error(`❌ اللون "${accent}" مش صحيح. لازم يبقى hex زي "#4a90d9"`);
  process.exit(1);
}

const hubRoot = join(import.meta.dirname, "..");
const siteDir = join(hubRoot, "sites", slug);
const publicBrand = join(hubRoot, "public", "sites", slug, "brand");
const publicImages = join(hubRoot, "public", "sites", slug, "images", "projects");

// تأكد إن الموقع مش موجود
if (existsSync(siteDir)) {
  console.error(`❌ الموقع "${slug}" موجود فعلاً في hub/sites/${slug}/`);
  process.exit(1);
}

// اعمل الفولدرات
mkdirSync(siteDir, { recursive: true });
mkdirSync(publicBrand, { recursive: true });
mkdirSync(publicImages, { recursive: true });

// اكتب site.ts
const siteTs = `import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== ${brandName} =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("${accent}");

const brand = {
  name: "${brandName}",
  logo: "/sites/${slug}/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "${brandName}",
  description: "وصف الموقع هنا.",
};

const projects: Project[] = [1, 2, 3, 4, 5].map((n) => ({
  slug: \`project-\${n}\`,
  name: \`مشروع \${n}\`,
  category: "تصميم داخلي",
  image: \`/sites/${slug}/images/projects/project-\${n}.webp\`,
  href: "#works",
}));

const about = {
  eyebrow: "من نحن",
  title: "عنوان قسم من نحن",
  text: "نص تعريفي عن الشركة أو الشخص.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "service-1",
      icon: "sofa",
      title: "خدمة ١",
      text: "وصف الخدمة الأولى.",
    },
    {
      key: "service-2",
      icon: "paint-roller",
      title: "خدمة ٢",
      text: "وصف الخدمة الثانية.",
    },
    {
      key: "service-3",
      icon: "ruler",
      title: "خدمة ٣",
      text: "وصف الخدمة الثالثة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "${brandName.toUpperCase()}",
  title: "عنوان قسم الهوية",
  text: "نص عن فلسفة الشركة أو الشخص في العمل.",
  points: [
    "ميزة أولى.",
    "ميزة ثانية.",
    "ميزة ثالثة.",
  ],
  image: null,
  imageLabel: "${brandName}",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "عملاؤنا",
  eyebrow: "شركاء النجاح",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "تواصل معنا",
  ctaTitle: "ابدأ مشروعك مع ${brandName}",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966XXXXXXXXX",
  whatsapp: "https://wa.me/966XXXXXXXXX",
  phone: "+966 XX XXX XXXX",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© ${new Date().getFullYear()} ${brandName}",
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "طريقتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  // تاريخ عمل الموقع — بيتحط تلقائي بتاريخ النهاردة
  createdAt: "${new Date().toISOString().slice(0, 10)}",
  brand,
  theme,
  projects,
  about,
  services,
  identity,
  testimonials,
  clients,
  contact,
  nav,
};
`;

writeFileSync(join(siteDir, "site.ts"), siteTs, "utf-8");

console.log(`
  ✅ تم إنشاء موقع "${brandName}" بنجاح!

  📁 الملفات اللي اتعملت:
     hub/sites/${slug}/site.ts              ← بيانات الموقع (غيّر اللون هنا بس)
     hub/public/sites/${slug}/brand/        ← حط logo.webp هنا
     hub/public/sites/${slug}/images/       ← حط صور المشاريع هنا

  🎨 اللون الأساسي: ${accent}
     باقي الألوان محسوبة تلقائي من generateTheme()

  🚀 الخطوة الجاية:
     1. حط اللوجو في hub/public/sites/${slug}/brand/logo.webp
     2. عدّل البيانات في hub/sites/${slug}/site.ts
     3. شغّل: npm run dev
     4. افتح: http://localhost:3000/${slug}

  💡 عايز تغيّر اللون؟ عدّل سطر واحد بس:
     const theme = generateTheme("${accent}");  ←  غيّر اللون هنا
`);

