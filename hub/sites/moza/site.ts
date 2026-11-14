import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== موزة للتصميم الداخلي | MOZA Interior Design =====
// اللون الأساسي مأخوذ من البني في اللوجو
const theme = generateTheme("#9c7a62");

const brand = {
  name: "MOZA Interior Design",
  logo: "/sites/moza/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "موزة للتصميم الداخلي | حائل",
  description:
    "مكتب موزة للتصميم الداخلي في حائل. نصمم مساحات سكنية وتجارية تجمع بين الأناقة والراحة وسهولة التنفيذ.",
};

const projects: Project[] = [
  {
    slug: "arch-living",
    name: "صالة المعيشة بالأقواس",
    category: "تصميم داخلي / معيشة",
    image: "/sites/moza/images/projects/arch-living.webp",
    href: "#works",
  },
  {
    slug: "living-room",
    name: "جلسة المعيشة",
    category: "تصميم وتنفيذ / معيشة",
    image: "/sites/moza/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "armchair",
    name: "ركن الجلوس",
    category: "تأثيث واختيار خامات / تفاصيل",
    image: "/sites/moza/images/projects/armchair.webp",
    href: "#works",
  },
  {
    slug: "planter-corner",
    name: "ركن الضيافة",
    category: "تنسيق وألوان / تفاصيل",
    image: "/sites/moza/images/projects/planter-corner.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مكتب تصميم داخلي — حائل",
  title: "مساحات تُصمَّم لتروي قصة أناقتك",
  text: "مكتب موزة للتصميم الداخلي في حائل. نبتكر تصاميم داخلية متكاملة توازن بين الجمال والراحة والوظيفة، لنحول كل زاوية في مساحتك إلى تجربة استثنائية.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي سكني وتجاري",
      text: "تصاميم مخصصة ومدروسة بعناية لتلبي ذوقك وتستغل المساحات بأعلى كفاءة وجمالية.",
    },
    {
      key: "supervision",
      icon: "paint-roller",
      title: "إشراف وتنفيذ",
      text: "متابعة دقيقة لمراحل التنفيذ واختيار المواد لضمان تطابق الواقع مع التصميم المعتمد.",
    },
    {
      key: "consultation",
      icon: "ruler",
      title: "استشارات هندسية وتصميمية",
      text: "استشارات متخصصة لمساعدتك في اتخاذ أفضل القرارات.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "MOZA DESIGN",
  title: "أناقة التفاصيل تصنع الفارق",
  text: "نؤمن بأن كل مساحة لها طابع فريد، ومهمتنا هي إبراز هذا الطابع بتناغم الألوان والإضاءة والمواد المختارة بعناية.",
  points: [
    "باكجات تأثيث متكاملة للشقق السكنية.",
    "تصاميم فريدة تواكب أحدث معايير التصميم العالمي.",
    "حلول عملية ومبتكرة تناسب أسلوب حياتك وميزانيتك.",
  ],
  image: "/sites/moza/images/identity.webp",
  imageLabel: "MOZA DESIGN",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "شركاء النجاح",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "جاهز لبدء مشروعك؟",
  ctaTitle: "ابدأ مشروعك مع موزة للتصميم الداخلي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966506753025",
  whatsapp: "https://wa.me/966506753025",
  phone: "+966 50 675 3025",
  email: "",
  branches: [{ address: "حائل - شارع فهد العريفي، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/moza_d2017/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} MOZA Interior Design`,
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
  createdAt: "2026-11-14",
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
