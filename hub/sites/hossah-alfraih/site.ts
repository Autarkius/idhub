import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== حصه الفريح Interior Design =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#C4B2A0");

const brand = {
  name: "حصه الفريح للتصميم الداخلي",
  logo: "/sites/hossah-alfraih/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "حصه الفريح للتصميم الداخلي",
  description:
    "م. حصه الفريح، مصممة ديكور تبحث عن العمق في كل التفاصيل. تصميم داخلي للمساحات السكنية والتجارية.",
};

const projects: Project[] = [
  { slug: "project-1", name: "تصميم صالون: أقواس ورفوف عرض", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "ردهة بإنارة معلّقة", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "منطقة جلوس وأرضيات", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "لوحة فنية وتفاصيل جدارية", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "جلسة وطاولات جانبية", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-5.webp", href: "#works" },
  { slug: "project-6", name: "رفوف عرض مضاءة", category: "لقطات من التصاميم", image: "/sites/hossah-alfraih/images/projects/project-6.webp", href: "#works" },
];

const about = {
  eyebrow: "مصممة ديكور",
  title: "عمق في كل التفاصيل، وتصميم لا يشبه المكرر",
  text: "م. حصه الفريح، مصممة ديكور حاصلة على وثيقة العمل الحر. تهتم بالتفاصيل في تصميم المساحات الداخلية.",
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
      text: "تصميم داخلي للمساحات السكنية والتجارية بعناية في التفاصيل.",
    },
    {
      key: "kitchens",
      icon: "paint-roller",
      title: "المطابخ والخزائن",
      text: "تصميم مطابخ وخزائن ملابس ضمن أعمالها المعروضة.",
    },
    {
      key: "plans",
      icon: "ruler",
      title: "المخططات والتصور",
      text: "مخططات وتصاميم ثلاثية الأبعاد توضح الفكرة قبل التنفيذ.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "أسلوبنا",
  outline: "حصه الفريح",
  title: "التفاصيل أولًا",
  text: "نبحث عن العمق في كل تفصيلة، ونبتعد عن التفاصيل السطحية المكررة.",
  points: [
    "اهتمام بالتفاصيل الدقيقة.",
    "تصاميم سكنية وتجارية.",
    "مخططات وتصور ثلاثي الأبعاد.",
  ],
  image: "/sites/hossah-alfraih/images/identity.webp",
  imageLabel: "حصه الفريح",
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
  ctaTitle: "ابدأ مشروعك مع حصه الفريح للتصميم الداخلي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966541300666",
  whatsapp: "https://wa.me/966541300666",
  phone: "+966 54 130 0666",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/hossahqwert",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 حصه الفريح للتصميم الداخلي",
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
