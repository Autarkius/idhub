import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== حياة الهزاع =====
// اللون الأساسي مأخوذ من ألوان مشاريعها الفعلية (بيج دافئ من صورة البودر روم)
// غيّر اللون هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#9A8873");

const brand = {
  name: "حياة الهزاع",
  logo: "/sites/hayat-alhazzaa/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "حياة الهزاع | ديكورات داخلية وتشطيب",
  description:
    "حياة الهزاع — تصميم داخلي، تنسيق وتنفيذ. كل ما يزيد أماكننا حياة. تصاميم للمساحات السكنية والتجارية في الرياض والمملكة العربية السعودية. 📍 الرياض، المملكة العربية السعودية",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "دورة مياه أنيقة ببيج دافئ وفيروزي منعش",
    category: "تصميم داخلي / دورة مياه",
    image: "/sites/hayat-alhazzaa/images/projects/project-1.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-2",
    name: "مجلس يجمع بين الفخامة والراحة وأدق التفاصيل",
    category: "تصميم داخلي / مجلس",
    image: "/sites/hayat-alhazzaa/images/projects/project-2.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-3",
    name: "جلسة راقية ودافئة بألوان وخامات مختارة بعناية",
    category: "تصميم داخلي / جلسة",
    image: "/sites/hayat-alhazzaa/images/projects/project-3.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-4",
    name: "تصميم فاخر يدمج الرقي بالرمزية الفنية",
    category: "تصميم داخلي / فخامة",
    image: "/sites/hayat-alhazzaa/images/projects/project-4.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-5",
    name: "تصميم فاخر تتناغم فيه الأعمال الفنية مع المكان",
    category: "تصميم داخلي / لوحات فنية",
    image: "/sites/hayat-alhazzaa/images/projects/project-5.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "تصميم داخلي وتنفيذ ديكورات",
  text:
    "حياة الهزاع — مختصة في التصميم الداخلي، التأثيث والتشطيب للمساحات السكنية والتجارية. كل ما يزيد أماكننا حياة، من الفكرة حتى التسليم. 📍 الرياض، المملكة العربية السعودية",
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
      key: "consultation",
      icon: "ruler",
      title: "استشارات تصميم",
      text: "استشارة تصميمية في اختيار الألوان والخامات والتوزيع قبل البدء في التنفيذ.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "حياة الهزاع",
  title: "كيف نعمل؟",
  text:
    "نبدأ بالاستماع إلى ذوقك واحتياجاتك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونرافقك في التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "استماع وتصميم يناسب أسلوب حياتك",
    "اختيار خامات وأثاث بجودة عالية",
    "تنفيذ ومتابعة حتى التسليم",
  ],
  image: "/sites/hayat-alhazzaa/images/identity.webp",
  imageLabel: "حياة الهزاع",
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
  ctaTitle: "ابدأ مشروعك مع حياة الهزاع",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966550394555",
  whatsapp: "https://wa.me/966550394555",
  phone: "+966 55 039 4555",
  email: "",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/hayat_alhazzaa/",
    x: "",
    linkedin: "",
    snapchat: "hayat.official",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 حياة الهزاع",
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
  greetName: "م. حياة الهزاع",
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
