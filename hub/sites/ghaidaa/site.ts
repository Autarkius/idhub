import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Ghaida Mohammed | Interior Designer =====
// المحتوى والصور من فولدر "ghaidaa".

const brand = {
  name: "Ghaida Mohammed",
  logo: "/sites/ghaidaa/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "غيّداء محمد | تصميم داخلي وتنفيذ وإشراف",
  description:
    "غيّداء محمد، مصممة داخلية وعضو في الهيئة السعودية للمهندسين. تصميم وتنفيذ وإشراف لمساحات تحمل هوية أصحابها.",
};

const theme = {
  accent: "#d6a83f", // ذهبي زعفراني من هوية مطعم شاورما
  accentSoft: "#ecd8a0",
  secondary: "#87945a", // أخضر زيتوني من تفاصيل المشروع
  dark: "#14160f", // فحمي مايل للزيتوني
  light: "#f4f1e8", // كريمي دافي
  muted: "#a3a18f", // النصوص الثانوية
  onLight: "#494d35", // زيتوني غامق للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "shawarma-hall",
    name: "صالة المطعم",
    category: "تصميم تجاري / مطاعم",
    image: "/sites/ghaidaa/images/projects/hall.webp",
    href: "#works",
  },
  {
    slug: "entrance",
    name: "واجهة المطعم",
    category: "تصميم تجاري / واجهات",
    image: "/sites/ghaidaa/images/projects/entrance.webp",
    href: "#works",
  },
  {
    slug: "order-counter",
    name: "منطقة الطلبات",
    category: "تصميم تجاري / كاونتر",
    image: "/sites/ghaidaa/images/projects/counter.webp",
    href: "#works",
  },
  {
    slug: "menu-wall",
    name: "جدار المنيو",
    category: "تصميم تجاري / تفاصيل",
    image: "/sites/ghaidaa/images/projects/menu-wall.webp",
    href: "#works",
  },
  {
    slug: "seating-corner",
    name: "ركن الجلسات",
    category: "تصميم تجاري / جلسات",
    image: "/sites/ghaidaa/images/projects/seating.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "تصميم داخلي — عضو هيئة المهندسين",
  title: "نُخلّد الجمال ونصنع المستحيل",
  text: "هامةٌ كطويق... نُخلّد الجمال ونصنع المستحيل. غيّداء محمد، مصممة داخلية وعضو في الهيئة السعودية للمهندسين، تقدّم التصميم والتنفيذ والإشراف لمساحات تحمل هوية أصحابها وتفاصيلها الخاصة.",
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
      text: "تصاميم سكنية وتجارية تُبنى على فهم المساحة وذوق أصحابها، من الفكرة الأولى حتى أدق التفاصيل.",
    },
    {
      key: "execution",
      icon: "hammer",
      title: "التنفيذ",
      text: "تنفيذ دقيق للمخططات والخامات بإشراف مباشر، حتى تظهر المساحة كما صُممت.",
    },
    {
      key: "supervision",
      icon: "clipboard-check",
      title: "الإشراف",
      text: "متابعة مراحل التنفيذ والمواد والتشطيبات لضمان الجودة والالتزام بالتفاصيل.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "GHAIDA",
  title: "تفاصيل تصنع الفرق",
  text: "نؤمن أن كل مساحة تحمل قصة، ونبدأ من تفاصيلها لنصنع تصميماً يجمع الجمال والوظيفة. من الفكرة الأولى إلى التنفيذ والإشراف، نرافقك حتى تتحول المساحة إلى ما تخيلته.",
  points: [
    "عضو الهيئة السعودية للمهندسين.",
    "تصميم وتنفيذ وإشراف متكامل.",
    "اهتمام بالتفاصيل من الفكرة حتى التسليم.",
  ],
  image: "/sites/ghaidaa/images/identity.webp",
  imageLabel: "GHAIDA MOHAMMED",
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
  ctaTitle: "ابدأ مشروعك مع غيّداء محمد",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966500385200",
  whatsapp: "https://wa.me/966500385200",
  phone: "+966 50 038 5200",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/id.ghaida2/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Ghaida Mohammed",
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
