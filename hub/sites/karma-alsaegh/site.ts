import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== Karmah Alsaegh Design Studio (karmahalsaeghstudio) =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#9C8A6E");

const brand = {
  name: "Karmah Alsaegh Design Studio",
  logo: "/sites/karma-alsaegh/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "Karmah Alsaegh Design Studio | استوديو تصميم داخلي في جدة",
  description:
    "Karmah Alsaegh Design Studio استوديو تصميم داخلي في جدة، للمنازل الخاصة والضيافة. مساحات تُصمم حول الناس الذين يعيشون فيها.",
};

const projects: Project[] = [
  { slug: "project-1", name: "تصور مفاهيمي لجلسة في لوبي فندق", category: "تصور مفاهيمي", image: "/sites/karma-alsaegh/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "مساحة استقبال لمكتب قيد التنفيذ", category: "من موقع العمل", image: "/sites/karma-alsaegh/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "اختيار الخامات: إسبرانزا وكريما بيج", category: "فيلا قيد التنفيذ", image: "/sites/karma-alsaegh/images/projects/project-3.webp", href: "#works" },
];

const about = {
  eyebrow: "تصميم داخلي في جدة",
  title: "مساحات تُصمم حول الناس",
  text: "Karmah Alsaegh Design Studio استوديو تصميم داخلي في جدة، يعمل على المنازل الخاصة ومشاريع الضيافة بنهج يبدأ من التجربة: كيف يجب أن يكون شعور المكان لمن يعيش ويعمل فيه.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "homes",
      icon: "sofa",
      title: "المنازل الخاصة",
      text: "تصميم داخلي لمنازل وفلل يبدأ من طريقة عيشكم.",
    },
    {
      key: "hospitality",
      icon: "armchair",
      title: "الضيافة البوتيكية",
      text: "مساحات ضيافة بتفاصيل تصنع إحساسًا بالألفة.",
    },
    {
      key: "consult",
      icon: "compass",
      title: "من الفكرة إلى الخامات",
      text: "مخططات واختيار خامات مدروس لكل مساحة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا",
  outline: "Karmah",
  title: "نبدأ بالسؤال قبل الخط الأول",
  text: "قبل اختيار أي خامة أو رسم أي خط، نسأل: كيف يجب أن يكون شعور هذه المساحة لمن يعيش ويعمل فيها؟",
  points: [
    "تصميم يبدأ من حياتكم اليومية.",
    "مخططات ومراجعة علاقة الفراغات ببعضها.",
    "خامات تُختار مع باقي التفاصيل.",
  ],
  image: "/sites/karma-alsaegh/images/identity.webp",
  imageLabel: "Karmah Alsaegh",
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
  ctaTitle: "ابدئي مشروعك مع Karmah Alsaegh",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966566997664",
  whatsapp: "https://wa.me/966566997664",
  phone: "+966 56 699 7664",
  email: "",
  branches: [{ address: "جدة، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/karmahalsaeghstudio",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Karmah Alsaegh Design Studio",
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
