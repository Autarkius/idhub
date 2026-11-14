import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Faten Dalah =====
// المحتوى والصور من فولدر "faten dallah pictures".

const brand = {
  name: "Faten Dalah",
  logo: "/sites/faten/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "فاتن دله | استوديو تصميم داخلي في الرياض",
  description:
    "استوديو المصممة فاتن محمد دله للتصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية في الرياض.",
};

const theme = {
  accent: "#d9c1b6", // البيج الوردي بتاع اللوجو
  accentSoft: "#eadad2", // نسخة أفتح منه
  secondary: "#b9a39a", // بيج أغمق: إطار زرار "عرض" والخطوط
  dark: "#141214", // فحمي دافي قريب من حروف اللوجو
  light: "#f6f0ec", // أوف وايت مايل للوردي
  muted: "#aba0a0", // النصوص الثانوية
  onLight: "#565156", // رمادي حروف اللوجو، للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "green-majlis",
    name: "مجلس الضيافة",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/faten/images/projects/green-majlis.webp",
    href: "#works",
  },
  {
    slug: "modern-living",
    name: "صالة معيشة عصرية",
    category: "تصميم داخلي / معيشة",
    image: "/sites/faten/images/projects/modern-living.webp",
    href: "#works",
  },
  {
    slug: "main-entrance",
    name: "المدخل الرئيسي",
    category: "تصميم داخلي / مدخل",
    image: "/sites/faten/images/projects/entry.webp",
    href: "#works",
  },
  {
    slug: "home-library",
    name: "المكتبة المنزلية",
    category: "تصميم داخلي / مكتبة",
    image: "/sites/faten/images/projects/library.webp",
    href: "#works",
  },
  {
    slug: "velvet-chair",
    name: "تفاصيل فاخرة",
    category: "تأثيث / تفاصيل",
    image: "/sites/faten/images/projects/velvet-chair.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "استوديو تصميم داخلي — الرياض",
  title: "مساحات تشبهك، من الفكرة حتى التسليم",
  text: "المصممة فاتن محمد دله. نقدم التصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية في الرياض، ونرافقك في كل خطوة حتى تستلم مساحتك جاهزة.",
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
      text: "تصاميم للمساحات السكنية والتجارية تجمع الجمال والراحة وتناسب طريقة حياتك.",
    },
    {
      key: "furnishing",
      icon: "paint-roller",
      title: "التأثيث والتشطيب",
      text: "اختيار الأثاث والخامات والإشراف على التشطيب حتى تكتمل المساحة كما صُممت.",
    },
    {
      key: "consulting",
      icon: "ruler",
      title: "الاستشارات الميدانية",
      text: "زيارة للموقع وقياسات دقيقة وتوصيات عملية قبل أن تبدأ التنفيذ.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا في العمل",
  outline: "Faten Dalah",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب طريقة حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/faten/images/identity.webp",
  imageLabel: "FATEN DALAH",
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
  ctaEyebrow: "لنصمم مساحتك معًا",
  ctaTitle: "ابدأ مشروعك مع فاتن دله",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966531336649",
  whatsapp: "https://wa.me/966531336649",
  phone: "0531336649",
  email: "",
  branches: [{ address: "الرياض - المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/fa.interior14/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Faten Dalah",
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
