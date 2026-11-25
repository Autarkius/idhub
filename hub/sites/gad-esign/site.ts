import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== غدي زاين Ghadi Zain Design =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#D9C29A");

const brand = {
  name: "غدي زاين للتصميم الداخلي",
  logo: "/sites/gad-esign/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "غدي زاين للتصميم الداخلي",
  description:
    "غدي زاين، استوديو تصميم داخلي: تصميم داخلي وتنفيذ واستشارات. نمنح كل مساحة هوية تليق بها.",
};

const projects: Project[] = [
  { slug: "project-1", name: "ردهة بإضاءة معلّقة وشجرة زيتون", category: "لقطات من التصاميم", image: "/sites/gad-esign/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "صالة معيشة بإنارة معلّقة", category: "لقطات من التصاميم", image: "/sites/gad-esign/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "مدخل بتفاصيل جدارية", category: "لقطات من التصاميم", image: "/sites/gad-esign/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "غرفة نوم بإضاءة معلّقة", category: "لقطات من التصاميم", image: "/sites/gad-esign/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "صالة جلوس بسجادة", category: "لقطات من التصاميم", image: "/sites/gad-esign/images/projects/project-5.webp", href: "#works" },
];

const about = {
  eyebrow: "استوديو تصميم داخلي",
  title: "خبرة تصنع الفرق، وتفاصيل تروي الحكاية",
  text: "غدي زاين، استوديو تصميم داخلي: تصميم داخلي وتنفيذ واستشارات. نمنح كل مساحة هوية تليق بها.",
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
      text: "تصميم داخلي يمنح كل مساحة هوية تليق بها.",
    },
    {
      key: "execution",
      icon: "paint-roller",
      title: "التنفيذ",
      text: "تنفيذ التصميم الداخلي.",
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
  outline: "غدي زاين",
  title: "هوية تليق بمساحتك",
  text: "تصميم داخلي بتفاصيل تروي الحكاية.",
  points: [
    "تصميم داخلي.",
    "تنفيذ.",
    "استشارات.",
  ],
  image: "/sites/gad-esign/images/identity.webp",
  imageLabel: "غدي زاين",
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
  ctaTitle: "ابدأ مشروعك مع غدي زاين",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966539488088",
  whatsapp: "https://wa.me/966539488088",
  phone: "+966 53 948 8088",
  email: "",
  branches: [{ address: "ينبع، المدينة المنورة، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/gad.esign",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 غدي زاين للتصميم الداخلي",
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
