import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== موزة للتصميم الداخلي | MOZA Interior Design =====
// اللون الأساسي مأخوذ من البني في اللوجو
const theme = generateTheme("#9c7a62");

const brand = {
  name: "MOZA Interior Design",
  logo: "/sites/moza/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "موزة للتصميم الداخلي | حائل",
  description:
    "مكتب موزة للتصميم الداخلي في حائل. نصمم مساحات سكنية وتجارية تجمع بين الأناقة والراحة وسهولة التنفيذ.",
};

const projects: Project[] = [
  {
    slug: "luxury-living-room",
    name: "صالة المعيشة الفاخرة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/sara/images/projects/living-room.jpg",
    href: "#works",
  },
  {
    slug: "dining-concept",
    name: "غرفة الطعام والضيافة",
    category: "تصميم داخلي / ضيافة ومودبورد",
    image: "/sites/sara/images/projects/dining-concept.jpg",
    href: "#works",
  },
  {
    slug: "home-office-study",
    name: "مكتب ومساحة دراسة",
    category: "تصميم وتنفيذ مخصص / عمل",
    image: "/sites/sara/images/projects/home-office.jpg",
    href: "#works",
  },
  {
    slug: "furniture-styling",
    name: "تفاصيل وتنسيق الأثاث",
    category: "تأثيث واختيار خامات / تفاصيل",
    image: "/sites/sara/images/projects/living-details.jpg",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "جناح النوم الرئيسي",
    category: "تصميم داخلي / نوم",
    image: "/sites/sara/images/projects/bedroom.jpg",
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
  image: "/sites/sara/images/identity.jpg",
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
  ctaButton: "تواصل معنا",
  ctaHref: "https://linktr.ee/Moza_d2017",
  whatsapp: "https://linktr.ee/Moza_d2017",
  phone: "",
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
