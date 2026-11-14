import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Deemah Alhassan | DSSPACE =====

const brand = {
  name: "DSSPACE",
  logo: "/sites/deemah/brand/deemah.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "ديمة الحسن | DSSPACE تصميم داخلي",
  description:
    "تصميم داخلي في المنطقة الشرقية. نصمم مساحات تعكس شخصيتك وتناسب أسلوب حياتك.",
};

// TODO: استبدل الألوان بألوان اللوجو
const theme = {
  accent: "#d8c3b3",
  accentSoft: "#e8d9ce",
  secondary: "#b8a290",
  dark: "#171311",
  light: "#f7f2ec",
  muted: "#aa9e93",
  onLight: "#5e5147",
};

const projects: Project[] = [1, 2, 3, 4, 5].map((n) => ({
  slug: `project-${n}`,
  name: `مشروع ${n}`,
  category: "تصميم داخلي",
  image: `/sites/deemah/images/projects/project-${n}.webp`,
  href: "#works",
}));

const about = {
  eyebrow: "تصميم داخلي — المنطقة الشرقية",
  title: "مساحات تشبهك",
  text: "ديمة الحسن، مصممة داخلية في المنطقة الشرقية. نصمم مساحات تجمع بين الجمال والراحة، ونترجم ذوقك وأسلوب حياتك إلى تفاصيل تعيش معك.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "تصاميم داخلية للمساحات السكنية تناسب ذوقك وأسلوب حياتك، من الفكرة الأولى حتى التفاصيل الأخيرة.",
    },
    {
      key: "space-planning",
      icon: "ruler",
      title: "تخطيط المساحات",
      text: "توزيع ذكي للمساحة يوازن بين الوظيفة والجمال ويستفيد من كل متر.",
    },
    {
      key: "consulting",
      icon: "paint-roller",
      title: "استشارات التصميم",
      text: "استشارات في اختيار الألوان والخامات والأثاث لاتخاذ قرارات واثقة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "DSSPACE",
  title: "مساحات تُروى بالتفاصيل",
  text: "نبدأ بالاستماع إلى احتياجك، ثم نترجمها إلى تصميم متكامل يجمع بين الجمال والوظيفة. كل تفصيلة مختارة بعناية لتبقى المساحة قريبة منك لسنوات.",
  points: [
    "تصميم يعكس شخصية المساحة وأهلها.",
    "اهتمام بالتفاصيل في كل مرحلة.",
    "تواصل مباشر وسهل عبر واتساب.",
  ],
  image: "/sites/deemah/images/identity.webp",
  imageLabel: "DSSPACE",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "نجاحك هو سمعتنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنصنع مساحتك القادمة",
  ctaTitle: "ابدأ مشروعك مع ديمة الحسن",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966559520706",
  whatsapp: "https://wa.me/966559520706",
  phone: "+966 55 952 0706",
  email: "",
  branches: [{ address: "المنطقة الشرقية، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/eng.deemahalhassan/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 DSSPACE by Deemah Alhassan",
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
  // تاريخ عمل الموقع: "YYYY-MM-DD"، أو "YYYY-MM" لو اليوم مش معروف
  createdAt: "2026-11",
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
