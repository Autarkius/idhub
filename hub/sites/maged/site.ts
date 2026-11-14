import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Majedan Interior Design =====
// المحتوى والصور من فولدر "maged".

const brand = {
  name: "Majedan",
  logo: "/sites/maged/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "ماجدان | تصميم داخلي وخارجي وتأثيث",
  description:
    "استوديو ماجدان للتصميم الداخلي والخارجي والتأثيث. حلول تصميم تحوّل المساحة إلى تجربة استثنائية.",
};

const theme = {
  accent: "#c9a87c", // نحاسي دافي من الخشب والإضاءة في المشاريع
  accentSoft: "#e4cfb3",
  secondary: "#ab8b63", // بني ذهبي للخطوط والإطارات
  dark: "#16120f", // بني فحمي دافي
  light: "#f6f0e8", // كريمي دافي
  muted: "#a89a8b", // النصوص الثانوية
  onLight: "#544537", // بني غامق للعناوين على الفاتح
};

const projects: Project[] = [
  {
    slug: "living-room",
    name: "صالة المعيشة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/maged/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "library-corner",
    name: "ركن المكتبة",
    category: "تصميم داخلي / تفاصيل",
    image: "/sites/maged/images/projects/living-detail.webp",
    href: "#works",
  },
  {
    slug: "marble-kitchen",
    name: "المطبخ الرخامي",
    category: "تصميم داخلي / مطبخ",
    image: "/sites/maged/images/projects/kitchen.webp",
    href: "#works",
  },
  {
    slug: "dining-area",
    name: "منطقة الطعام",
    category: "تصميم داخلي / طعام",
    image: "/sites/maged/images/projects/dining.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "استوديو تصميم داخلي وخارجي",
  title: "مساحات تتحول إلى تجربة استثنائية",
  text: "ماجدان، استوديو للتصميم الداخلي والخارجي والتأثيث. نقدّم حلول تصميم متكاملة تحوّل المساحة إلى تجربة استثنائية، من الفكرة الأولى حتى آخر تفصيلة.",
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
      text: "مساحات سكنية وتجارية بروح دافئة ومعاصرة، تُصمم حول طريقة حياتك.",
    },
    {
      key: "exterior",
      icon: "compass",
      title: "تصميم خارجي",
      text: "واجهات ومساحات خارجية متناسقة مع التصميم الداخلي برؤية واحدة.",
    },
    {
      key: "furnishing",
      icon: "armchair",
      title: "تأثيث وتنسيق",
      text: "اختيار الأثاث والخامات والإضاءة لتكتمل المساحة كما تخيلتها.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "هويتنا في التصميم",
  outline: "MAJEDAN",
  title: "حلول تصميم متكاملة",
  text: "نؤمن أن التصميم الجيد يجمع الخارج بالداخل في تجربة واحدة. نبدأ بالاستماع لاحتياجك، ثم نصنع حلولاً متكاملة تمنح المساحة شخصيتها وتجعلها تجربة استثنائية.",
  points: [
    "تصميم داخلي وخارجي برؤية واحدة.",
    "تأثيث وتنسيق يكمل تفاصيل المساحة.",
    "متابعة من الفكرة الأولى حتى التسليم.",
  ],
  image: "/sites/maged/images/identity.webp",
  imageLabel: "MAJEDAN",
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
  ctaEyebrow: "لنحوّل مساحتك إلى تجربة",
  ctaTitle: "ابدأ مشروعك مع ماجدان",
  ctaButton: "تواصل عبر إنستغرام",
  ctaHref: "https://www.instagram.com/majedan.design/",
  whatsapp: "",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/majedan.design/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Majedan Interior Design",
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
  startDark: true,
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
