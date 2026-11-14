import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Ashwaq =====
// المحتوى والصور من فولدر "ashwaq pictures".

const brand = {
  name: "Ashwaq Design",
  logo: "/sites/ashwaq/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أشواق | تصميم داخلي",
  description:
    "مصممة داخلية سعودية معتمدة من الهيئة السعودية للمهندسين. تصاميم داخلية تنبض بالحياة، من أشواق إلى العالم.",
};

const theme = {
  accent: "#c16a47", // الطوبي الدافي المستخرج من تفاصيل المشاريع
  accentSoft: "#dd9b7c",
  secondary: "#b38a5e", // الذهبي الترابي
  dark: "#171310", // بني فحمي دافي
  light: "#f7f2ea", // كريمي
  muted: "#ab9f93", // النصوص الثانوية
  onLight: "#6b3a26", // بني محروق للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "classic-majlis",
    name: "المجلس الكلاسيكي",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/ashwaq/images/projects/majlis.webp",
    href: "#works",
  },
  {
    slug: "modern-living",
    name: "صالة معاصرة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/ashwaq/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "open-kitchen",
    name: "المطبخ المفتوح",
    category: "تصميم داخلي / مطبخ",
    image: "/sites/ashwaq/images/projects/kitchen.webp",
    href: "#works",
  },
  {
    slug: "living-details",
    name: "تفاصيل المعيشة",
    category: "أثاث وإضاءة",
    image: "/sites/ashwaq/images/projects/details.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "تصميم داخلي — المملكة العربية السعودية",
  title: "من أشواق إلى العالم",
  text: "أشواق، مصممة داخلية معتمدة من الهيئة السعودية للمهندسين. نصنع تصاميم داخلية تجمع بين الدفء والمعاصرة، وتصل تفاصيلها من السعودية إلى العالم.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "تصاميم سكنية وتجارية بروح دافئة ومعاصرة، تُصمم حول طريقة حياتك.",
    },
    {
      key: "materials",
      icon: "palette",
      title: "اختيار الخامات والأثاث",
      text: "اختيار الأثاث والخامات والإضاءة بعناية لتكتمل الصورة كما تخيلتها.",
    },
    {
      key: "supervision",
      icon: "ruler",
      title: "إشراف ومتابعة",
      text: "متابعة التنفيذ خطوة بخطوة حتى تظهر المساحة كما صُممت.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "هويتنا في التصميم",
  outline: "ASHWAQ",
  title: "تصاميم تنبض بالحياة",
  text: "نؤمن أن التصميم الجيد يغيّر طريقة عيشك. نبدأ بالاستماع لاحتياجاتك، ثم نصمم مساحة متكاملة تعكس ذوقك وتضيف قيمة لكل تفصيلة.",
  points: [
    "تصميم داخلي معتمد من الهيئة السعودية للمهندسين.",
    "لمسات دافئة وخامات مختارة بعناية.",
    "متابعة من الفكرة الأولى حتى التسليم.",
  ],
  image: "/sites/ashwaq/images/identity.webp",
  imageLabel: "A.T.J DESIGN",
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
  ctaTitle: "ابدأ مشروعك مع أشواق",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966598168308",
  whatsapp: "https://wa.me/966598168308",
  phone: "0598168308",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/a.t.j_design/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Ashwaq Design",
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
