import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== هنادي HANADI Professional Design =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#B5C4AB");

const brand = {
  name: "هنادي للتصميم الداخلي",
  logo: "/sites/hanadi-design/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "هنادي للتصميم الداخلي",
  description:
    "هنادي، تصميم داخلي: تصميم ثلاثي الأبعاد واستشارات وتنفيذ وتأثيث للمساحات السكنية.",
};

const projects: Project[] = [
  { slug: "project-1", name: "صالة معيشة بدرجات رمادية", category: "لقطات من التصاميم", image: "/sites/hanadi-design/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "غرفة نوم بإضاءة معلّقة", category: "لقطات من التصاميم", image: "/sites/hanadi-design/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "حمام رخامي بنافذة كبيرة", category: "لقطات من التصاميم", image: "/sites/hanadi-design/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "فناء داخلي ومطبخ مفتوح", category: "لقطات من التصاميم", image: "/sites/hanadi-design/images/projects/project-4.webp", href: "#works" },
];

const about = {
  eyebrow: "تصميم داخلي",
  title: "تصميم يبدأ من فكرتك",
  text: "هنادي، تصميم داخلي: تصميم ثلاثي الأبعاد واستشارات وتنفيذ وتأثيث.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "3d",
      icon: "ruler",
      title: "تصميم ثلاثي الأبعاد",
      text: "تصور ثلاثي الأبعاد للمساحة قبل البدء.",
    },
    {
      key: "consult",
      icon: "sofa",
      title: "استشارات التصميم",
      text: "استشارات في التصميم الداخلي.",
    },
    {
      key: "furnish",
      icon: "paint-roller",
      title: "التنفيذ والتأثيث",
      text: "تنفيذ وتأثيث حسب ما تعلنه في صفحتها.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "أسلوبنا",
  outline: "هنادي",
  title: "مساحة تشبهك",
  text: "تصميم داخلي للمساحات السكنية بلمسة هادئة.",
  points: [
    "تصميم ثلاثي الأبعاد.",
    "استشارات تصميم.",
    "تنفيذ وتأثيث.",
  ],
  image: "/sites/hanadi-design/images/identity.webp",
  imageLabel: "هنادي",
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
  ctaTitle: "ابدأ مشروعك مع هنادي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966533974232",
  whatsapp: "https://wa.me/966533974232",
  phone: "+966 53 397 4232",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/home_00021",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 هنادي للتصميم الداخلي",
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
