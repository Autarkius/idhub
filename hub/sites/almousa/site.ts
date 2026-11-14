import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Maryam Almousa =====
// المحتوى والصور من فولدر "almousa pics".

const brand = {
  name: "Maryam Almousa",
  logo: "/sites/almousa/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "مريم الموسى | تصميم داخلي",
  description:
    "مصممة داخلية معتمدة من الهيئة السعودية للمهندسين. تصميم مخصص، مشاريع تسليم مفتاح، واستشارات احترافية.",
};

const theme = {
  accent: "#d8c3b3", // البيج الدافي المستخرج من اللوجو
  accentSoft: "#e8d9ce",
  secondary: "#b8a290", // بيج أغمق للخطوط والإطارات
  dark: "#171311", // بني فحمي دافي
  light: "#f7f2ec", // أوف وايت
  muted: "#aa9e93", // النصوص الثانوية
  onLight: "#5e5147", // بني رمادي للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "صالة المعيشة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/almousa/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "جناح النوم الرئيسي",
    category: "تصميم داخلي / نوم",
    image: "/sites/almousa/images/projects/bedroom.webp",
    href: "#works",
  },
  {
    slug: "master-bathroom",
    name: "الحمام الرئيسي",
    category: "تصميم وتنفيذ / حمام",
    image: "/sites/almousa/images/projects/bathroom.webp",
    href: "#works",
  },
  {
    slug: "walk-in-closet",
    name: "غرفة الملابس",
    category: "تصميم مخصص / ملابس",
    image: "/sites/almousa/images/projects/closet.webp",
    href: "#works",
  },
  {
    slug: "entrance",
    name: "المدخل",
    category: "تصميم داخلي / مدخل",
    image: "/sites/almousa/images/projects/entry.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية معتمدة — SCE",
  title: "حيث تتحول المساحات إلى قصص",
  text: "مريم الموسى، مصممة داخلية معتمدة من الهيئة السعودية للمهندسين. نقدم تصميماً مخصصاً ومشاريع تسليم مفتاح واستشارات احترافية، لنصنع مساحات تحكي قصتك.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "custom-design",
      icon: "sofa",
      title: "تصميم مخصص",
      text: "تصاميم داخلية تُصمم خصيصاً لتناسب أسلوب حياتك وذوقك، من الفكرة الأولى حتى أدق التفاصيل.",
    },
    {
      key: "turnkey",
      icon: "paint-roller",
      title: "مشاريع تسليم مفتاح",
      text: "نتولى التصميم والتنفيذ والتنسيق حتى تستلم مساحتك جاهزة، بكل تفاصيلها.",
    },
    {
      key: "consulting",
      icon: "ruler",
      title: "استشارات احترافية",
      text: "استشارات تصميم وهندسة معتمدة من الهيئة السعودية للمهندسين لاتخاذ قرارات واثقة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "M.A DESIGN",
  title: "مساحات تُروى بالتفاصيل",
  text: "نبدأ بالاستماع إلى قصتك، ثم نترجمها إلى تصميم متكامل يجمع بين الجمال والوظيفة. كل تفصيلة مختارة بعناية لتبقى المساحة قريبة منك لسنوات.",
  points: [
    "تصميم مخصص يعكس شخصية المساحة.",
    "تنفيذ وتسليم مفتاح بإشراف كامل.",
    "استشارات معتمدة من الهيئة السعودية للمهندسين.",
  ],
  image: "/sites/almousa/images/lounge.webp",
  imageLabel: "M.A DESIGN",
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
  ctaTitle: "ابدأ مشروعك مع مريم الموسى",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966547466121",
  whatsapp: "https://wa.me/966547466121",
  phone: "+966 54 746 6121",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/eng.maryamalmousa/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Maryam Almousa",
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
  greetName: "م. مريم",
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
