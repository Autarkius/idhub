import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== ابتهال الرويلي Abtehal Alruwaili =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#C9AE5A");

const brand = {
  name: "ابتهال الرويلي للتصميم الداخلي",
  logo: "/sites/abtehal-h11/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "ابتهال الرويلي للتصميم الداخلي",
  description:
    "م. ابتهال الرويلي، تصميم داخلي واستشارات. نخلق الجمال ونجعل لكل زاوية تحكي قصة.",
};

const projects: Project[] = [
  { slug: "project-1", name: "غرفة نوم بتصميم هادئ", category: "لقطات من التصاميم", image: "/sites/abtehal-h11/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "صالة معيشة بتفاصيل خشبية", category: "لقطات من التصاميم", image: "/sites/abtehal-h11/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "صالة جلوس بدرجات محايدة", category: "لقطات من التصاميم", image: "/sites/abtehal-h11/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "صالة معيشة بإضاءة ناعمة", category: "لقطات من التصاميم", image: "/sites/abtehal-h11/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "غرفة ملابس بواجهات زجاجية", category: "لقطات من التصاميم", image: "/sites/abtehal-h11/images/projects/project-5.webp", href: "#works" },
];

const about = {
  eyebrow: "تصميم داخلي",
  title: "نخلق الجمال، ونجعل لكل زاوية تحكي قصة",
  text: "عبر فريقنا حولنا الأفكار إلى واقع مليء بالإبداع والابتكار. م. ابتهال الرويلي.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior",
      icon: "sofa",
      title: "التصميم الداخلي",
      text: "تصاميم داخلية تحوّل الأفكار إلى واقع.",
    },
    {
      key: "consult",
      icon: "ruler",
      title: "الاستشارات",
      text: "استشارات في التصميم الداخلي.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "أسلوبنا",
  outline: "ابتهال",
  title: "أفكار تتحول إلى واقع",
  text: "نحوّل الأفكار إلى واقع مليء بالإبداع والابتكار.",
  points: [
    "تصاميم داخلية.",
    "استشارات.",
  ],
  image: "/sites/abtehal-h11/images/identity.webp",
  imageLabel: "ابتهال الرويلي",
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
  ctaTitle: "ابدأ مشروعك مع م. ابتهال الرويلي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/message/AVFUWLD7VO2HN1",
  whatsapp: "https://wa.me/message/AVFUWLD7VO2HN1",
  phone: "+966 53 049 6976",
  email: "",
  branches: [{ address: "عرعر، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/abtehal_h11",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 ابتهال الرويلي للتصميم الداخلي",
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
  createdAt: "2026-11-25",
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
