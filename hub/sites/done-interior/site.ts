import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== Done Interior M_A (by Awaif & Muneera) =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#BC9677");

const brand = {
  name: "Done Interior للتصميم الداخلي",
  logo: "/sites/done-interior/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "Done Interior M_A | تصميم داخلي وتأثيث",
  description:
    "استوديو Done Interior للتصميم الداخلي والتأثيث في الرياض. استشارات تصميم داخلي ميدانية وعن بعد.",
};

const projects: Project[] = [
  { slug: "project-1", name: "مجلس بإطلالة على النخيل", category: "لقطات من التصاميم", image: "/sites/done-interior/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "صالة معيشة بدرجات الأزرق", category: "لقطات من التصاميم", image: "/sites/done-interior/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "جدار تلفزيون بتفاصيل خشبية", category: "لقطات من التصاميم", image: "/sites/done-interior/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "صالة جلوس بدرجات هادئة", category: "لقطات من التصاميم", image: "/sites/done-interior/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "كرسي بقماش منقوش", category: "لقطات من التصاميم", image: "/sites/done-interior/images/projects/project-5.webp", href: "#works" },
];

const about = {
  eyebrow: "تصميم داخلي وتأثيث",
  title: "نصمم ونؤثث مساحات تليق بكم",
  text: "Done Interior استوديو تصميم داخلي وتأثيث في الرياض بإدارة Awaif & Muneera، ونقدم استشارات التصميم الداخلي ميدانيًا وعن بعد.",
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
      text: "تصاميم داخلية تمنح كل مساحة هويتها.",
    },
    {
      key: "furnishing",
      icon: "armchair",
      title: "التأثيث",
      text: "تأثيث المساحات وتصنيع القطع حسب التصميم.",
    },
    {
      key: "consult",
      icon: "compass",
      title: "الاستشارات",
      text: "استشارات تصميم داخلي ميدانية وعن بعد.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "أسلوبنا",
  outline: "Done",
  title: "من الفكرة إلى التنفيذ",
  text: "نحوّل الأفكار إلى مساحات مصممة ومؤثثة بعناية.",
  points: [
    "تصميم داخلي وتأثيث.",
    "تصنيع حسب التصميم.",
    "استشارات ميدانية وعن بعد.",
  ],
  image: "/sites/done-interior/images/identity.webp",
  imageLabel: "Done Interior",
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
  ctaTitle: "احجز استشارتك مع Done Interior",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966505215388",
  whatsapp: "https://wa.me/966505215388",
  phone: "+966 50 521 5388",
  email: "ma.studio2@hotmail.com",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/done.interior.m_a",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Done Interior M_A",
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
