import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== MN | INTERIORS (mn_design_8) =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#A08262");

const brand = {
  name: "MN Interiors للتصميم الداخلي",
  logo: "/sites/mn-design/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "MN | INTERIORS | استوديو تصميم داخلي",
  description:
    "MN | INTERIORS استوديو عمارة وتصميم داخلي في السعودية. تصميم، إشراف، واستشارات.",
};

const projects: Project[] = [
  { slug: "project-1", name: "صالة معيشة بدرجات دافئة", category: "لقطات من التصاميم", image: "/sites/mn-design/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "صالة بدرجات العاجي", category: "لقطات من التصاميم", image: "/sites/mn-design/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "ركن معيشة عصري", category: "لقطات من التصاميم", image: "/sites/mn-design/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "صالة كلاسيكية بمرايا وثريا", category: "لقطات من التصاميم", image: "/sites/mn-design/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "غرفة سينما منزلية", category: "لقطات من التصاميم", image: "/sites/mn-design/images/projects/project-5.webp", href: "#works" },
];

const about = {
  eyebrow: "استوديو عمارة وتصميم داخلي",
  title: "تصميم خالد، راقٍ، ومقصود",
  text: "MN | INTERIORS استوديو عمارة وتصميم داخلي في السعودية، فريق متخصص في التصميم الداخلي يقدم التصميم والإشراف والاستشارات.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "design",
      icon: "sofa",
      title: "التصميم الداخلي",
      text: "تصاميم داخلية خالدة وراقية لكل مساحة.",
    },
    {
      key: "supervision",
      icon: "clipboard-check",
      title: "الإشراف",
      text: "إشراف على تنفيذ التصاميم بعناية.",
    },
    {
      key: "consult",
      icon: "compass",
      title: "الاستشارات",
      text: "استشارات تصميم داخلي لمساحتكم.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "أسلوبنا",
  outline: "MN",
  title: "من الفكرة إلى التنفيذ",
  text: "نصمم مساحات تجمع بين الأصالة والرقي، ونرافقها من التصميم حتى التنفيذ.",
  points: [
    "تصميم داخلي بأسلوب خالد وراقٍ.",
    "إشراف على التنفيذ.",
    "استشارات تصميم داخلي.",
  ],
  image: "/sites/mn-design/images/identity.webp",
  imageLabel: "MN | INTERIORS",
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
  ctaTitle: "احجز استشارتك مع MN Interiors",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966538684525",
  whatsapp: "https://wa.me/966538684525",
  phone: "+966 53 868 4525",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/mn_design_8",
    x: "",
    linkedin: "",
    snapchat: "https://snapchat.com/t/mrvsJOfx",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 MN | INTERIORS",
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
