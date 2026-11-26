import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م. بيان التويجري (m.bayan_tw) =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#A07C5B");

const brand = {
  name: "م. بيان التويجري",
  logo: "/sites/bayan-altuwaijri/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "م. بيان التويجري | تصميم وتنفيذ وتأثيث داخلي",
  description:
    "المهندسة بيان التويجري، تصميم داخلي وتنفيذ وتأثيث في بريدة والقصيم. مساحات تُحكى وهوية تُصاغ وفلسفة تصميمية تُلهم.",
};

const projects: Project[] = [
  { slug: "project-1", name: "تصور استوديو بيلاتس إليكسير", category: "تصور تصميمي", image: "/sites/bayan-altuwaijri/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "منطقة الجلوس في استوديو بيلاتس", category: "تصور تصميمي", image: "/sites/bayan-altuwaijri/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "جدار الزجاج المنحني", category: "تصور تصميمي", image: "/sites/bayan-altuwaijri/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "كوفي برو، بريدة", category: "قيد التنفيذ", image: "/sites/bayan-altuwaijri/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "كوفي برو: اختيار الخامات", category: "من موقع العمل", image: "/sites/bayan-altuwaijri/images/projects/project-5.webp", href: "#works" },
  { slug: "project-6", name: "شاليه القصيم: حجر البازلت", category: "اختيار الخامات", image: "/sites/bayan-altuwaijri/images/projects/project-6.webp", href: "#works" },
  { slug: "project-7", name: "شاليه في بريدة: لوحة المزاج", category: "لوحة مزاج", image: "/sites/bayan-altuwaijri/images/projects/project-7.webp", href: "#works" },
];

const about = {
  eyebrow: "تصميم وتنفيذ وتأثيث",
  title: "مساحات تُحكى وهوية تُصاغ",
  text: "المهندسة بيان التويجري مصممة داخلية في بريدة والقصيم، تعمل على التصميم والتنفيذ والتأثيث، وتبني لكل مشروع هوية وفلسفة تصميمية خاصة به.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "design",
      icon: "compass",
      title: "التصميم الداخلي",
      text: "من لوحة المزاج والمخططات إلى الخامات والتفاصيل.",
    },
    {
      key: "execution",
      icon: "sofa",
      title: "التنفيذ والإشراف",
      text: "تنفيذ وإشراف على الموقع حتى يخرج التصميم كما رُسم.",
    },
    {
      key: "furnish",
      icon: "armchair",
      title: "التأثيث",
      text: "اختيار الأثاث والتنسيق ليكمل هوية المكان.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا",
  outline: "Bayan",
  title: "نبدأ بلوحة المزاج",
  text: "تبدأ رحلة التصميم بلوحة المزاج، نجمع فيها الخامات الطبيعية والدرجات الدافئة، ثم ننتقل إلى المخططات والخامات والتنفيذ.",
  points: [
    "لوحة مزاج وفلسفة لكل مشروع.",
    "خامات طبيعية تربط التصميم بالمكان.",
    "إشراف على التنفيذ في الموقع.",
  ],
  image: "/sites/bayan-altuwaijri/images/identity.webp",
  imageLabel: "Bayan Altuwaijri",
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
  ctaTitle: "ابدئي مشروعك مع م. بيان",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966532520621",
  whatsapp: "https://wa.me/966532520621",
  phone: "+966 53 252 0621",
  email: "",
  branches: [{ address: "بريدة، القصيم، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/m.bayan_tw",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 م. بيان التويجري",
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "أعمالنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "طريقتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  createdAt: "2026-11-26",
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
