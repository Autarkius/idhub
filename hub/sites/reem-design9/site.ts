import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== Reem Design =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#b08d68");

const brand = {
  name: "Reem Design",
  logo: "/sites/reem-design9/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "Reem Design | تصميم ديكور داخلي",
  description:
    "ريم ديزاين — مصممة ديكور داخلي مقيمة في الرياض - حائل، متخصصة في التصميم والتأثيث والتشطيب للمساحات السكنية والتجارية. نجمع بين الفخامة والوظيفة في كل تفصيلة، ونرافقك من الفكرة حتى التسليم.",
};

const projects: Project[] = [
  {
    slug: "sitting-room",
    name: "جلسة خارجية",
    category: "جلسات خارجية",
    image: "/sites/reem-design9/images/projects/sitting-room.webp",
    href: "#works",
  },
  {
    slug: "living-room",
    name: "تراس طعام خارجي",
    category: "تراس خارجي",
    image: "/sites/reem-design9/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "bedroom",
    name: "المسبح ليلاً",
    category: "مسابح",
    image: "/sites/reem-design9/images/projects/bedroom.webp",
    href: "#works",
  },
  {
    slug: "majlis",
    name: "واجهة منزل حديث",
    category: "واجهات خارجية",
    image: "/sites/reem-design9/images/projects/majlis.webp",
    href: "#works",
  },
  {
    slug: "dining",
    name: "جلسة بجوار المسبح",
    category: "مناطق خارجية",
    image: "/sites/reem-design9/images/projects/dining.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة ديكور داخلي",
  title: "مساحات تعكس أناقتك، من الفكرة حتى التسليم",
  text: "ريم ديزاين، مصممة ديكور داخلي مقيمة في الرياض - حائل بالمملكة العربية السعودية. أتخصص في تصميم المجالس والغرف والمساحات السكنية بخامة فاخرة وألوان هادئة، مع اهتمام بأدق التفاصيل وجودة التنفيذ العالية.",
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
      text: "تصاميم للمساحات السكنية والتجارية تجمع بين الجمال والراحة وتناسب أسلوب حياتك.",
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
  outline: "Reem Design",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/reem-design9/images/identity.webp",
  imageLabel: "Reem Design",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "نجاحك هو إلهامنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "تواصل معنا",
  ctaTitle: "ابدأ مشروعك مع Reem Design",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966531121237",
  whatsapp: "https://wa.me/966531121237",
  phone: "+966 53 112 1237",
  email: "",
  branches: [{ address: "الرياض - حائل، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/reem_design9/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Reem Design",
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
