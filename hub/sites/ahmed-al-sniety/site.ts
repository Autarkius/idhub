import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== أحمد السنيتي =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#0f766e");

const brand = {
  name: "أحمد السنيتي",
  logo: "/sites/ahmed-al-sniety/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أحمد السنيتي | استوديو تصميم داخلي",
  description:
    "استوديو أحمد السنيتي للتصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية. نصمم مساحات سكنية وتجارية تجمع بين الجمال والوظيفة، ونرافقك من الفكرة حتى التسليم.",
};

const projects: Project[] = [
  {
    slug: "royal-majlis",
    name: "المجلس الملكي",
    category: "تصميم داخلي / مجالس",
    image: "/sites/ahmed-al-sniety/images/projects/royal-majlis.webp",
    href: "#works",
  },
  {
    slug: "modern-living",
    name: "صاله معيشة عصرية",
    category: "تصميم داخلي / معيشة",
    image: "/sites/ahmed-al-sniety/images/projects/modern-living.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "غرفة نوم رئيسية",
    category: "تصميم داخلي / غرف نوم",
    image: "/sites/ahmed-al-sniety/images/projects/master-bedroom.webp",
    href: "#works",
  },
  {
    slug: "contemporary-kitchen",
    name: "مطبخ معاصر",
    category: "تصميم داخلي / مطابخ",
    image: "/sites/ahmed-al-sniety/images/projects/contemporary-kitchen.webp",
    href: "#works",
  },
  {
    slug: "home-office",
    name: "مكتب منزلي",
    category: "تصميم داخلي / مكاتب",
    image: "/sites/ahmed-al-sniety/images/projects/home-office.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "استوديو تصميم داخلي",
  title: "مساحات تعكس شخصيتك، من الفكرة حتى التسليم",
  text: "أحمد السنيتي — استوديو متخصص في التصميم الداخلي والتأثيث والتشطيب والاستشارات الميدانية. نحول رؤيتك إلى مساحة حقيقية تناسب نمط حياتك، مع اهتمام بأدق التفاصيل وجودة التنفيذ.",
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
      text: "تصاميم للمساحات السكنية والتجارية تجمع بين الجمال والراحة وتناسب طريقة حياتك.",
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
  outline: "أحمد السنيتي",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب طريقة حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/ahmed-al-sniety/images/identity.webp",
  imageLabel: "أحمد السنيتي",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: " نجاحك هو إلهامنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنصمم مساحتك معًا",
  ctaTitle: "ابدأ مشروعك مع أحمد السنيتي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966500000000",
  whatsapp: "https://wa.me/966500000000",
  phone: "+966 50 000 0000",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 أحمد السنيتي",
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
