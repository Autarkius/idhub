import type { Contact, Project, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== رواسي للاستشارات الهندسية (نموذج تجريبي، مكتب وهمي) =====
// الموقع نفسه ملفات HTML ثابتة في public/sites/rawasi، وبيتفتح على /rawasi عن طريق rewrites في next.config.mjs.
// الملف ده بس علشان الموقع يظهر في قايمة الـ hub.
const theme = generateTheme("#B48D58");

const brand = {
  name: "رواسي للاستشارات الهندسية",
  logo: "/sites/rawasi/brand/logo.svg",
  logoWidth: 60,
  logoHeight: 60,
  title: "رواسي للاستشارات الهندسية | عمارة تُبنى لتدوم",
  description: "نموذج موقع فاخر لمكتب استشارات هندسية: تصميم معماري وإنشائي وإشراف وإدارة مشاريع.",
};

const names = ["فيلا الواحة", "برج الأفق", "رواق الفنون", "منتجع وادي الصخور", "ردهة فندق الدرّة", "حي الربيع المتكامل"];
const projects: Project[] = names.map((name, i) => ({
  slug: `project-${i + 1}`,
  name,
  category: "مشاريع",
  image: `/sites/rawasi/assets/img/p${i + 1}.jpg`,
  href: "/rawasi/projects",
}));

const contact: Contact = {
  ctaEyebrow: "تواصل معنا",
  ctaTitle: "ابدأ مشروعك مع رواسي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966500000000",
  whatsapp: "https://wa.me/966500000000",
  phone: "+966 50 000 0000",
  email: "hello@rawasi-demo.sa",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: { facebook: "", instagram: "", x: "", linkedin: "" },
  apps: { microsoft: "", googlePlay: "", appStore: "" },
  copyright: "© 2026 رواسي",
};

export const site: SiteData = {
  createdAt: "2026-11-28",
  brand,
  theme,
  projects,
  about: { eyebrow: "عن المكتب", title: "عمارة تُبنى لتدوم", text: brand.description },
  services: { outline: "الخدمات", title: "خدماتنا", eyebrow: "ماذا نقدم", items: [] },
  identity: { eyebrow: "", outline: "", title: "", text: "", points: [], image: null, imageLabel: "" },
  testimonials: { eyebrow: "", title: "", items: [] },
  clients: { title: "", eyebrow: "", logos: [] },
  contact,
  nav: [{ label: "الرئيسية", href: "/rawasi" }],
};
