import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م. مريم السواجي | MT Designer | مصممة داخلية =====
// اللون الأساسي مأخوذ من اللوجو الذهبي
const theme = generateTheme("#d4a373");

const brand = {
  name: "مريم السواجي للتصميم الداخلي",
  logo: "/sites/maryam_tm/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "م. مريم السواجي | تصميم داخلي | مصممة داخلية",
  description:
    "م. مريم السواجي، مصممة داخلية ديكور، تصميم وإشراف وتنفيذ. حاصلة على شهادة TOT، سجل تجاري: 1131307049. نصمم مساحات داخلية أنيقة تلبي ذوقك وتحول فكرتك إلى حقيقة.",
};

const projects: Project[] = [
  {
    slug: "before-after-transformation",
    name: "تحول كامل للمساحة",
    category: "تصميم داخلي",
    image: "/sites/maryam_tm/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "cafe-interior",
    name: "مقهى مودرن",
    category: "تصميم تجاري",
    image: "/sites/maryam_tm/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "ladies-salon",
    name: "صالون نسائي",
    category: "تصميم تجاري",
    image: "/sites/maryam_tm/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "lawyer-office",
    name: "مكتب محاماه",
    category: "تصميم مكاتب",
    image: "/sites/maryam_tm/images/projects/project-9.webp",
    href: "#works",
  },
  {
    slug: "living-room-modern",
    name: "غرفة معيشة مودرن",
    category: "معيشة",
    image: "/sites/maryam_tm/images/projects/project-10.webp",
    href: "#works",
  },
  {
    slug: "bathroom-luxury",
    name: "حمام فاخر",
    category: "حمامات",
    image: "/sites/maryam_tm/images/projects/project-11.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية ديكور",
  title: "تصميم | إشراف | تنفيذ",
  text:
    "م. مريم السواجي، مصممة داخلية ديكور متخصصة في التصميم والإشراف والتنفيذ. حاصلة على شهادة TOT وسجل تجاري رقم 1131307049. نصمم مساحات داخلية تجمع بين الفخامة والتميز، ونحول كل فكرة إلى تحفة معمارية تناسب ذوقك.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "التصميم الداخلي السكني والتجاري",
      text: "تصاميم داخلية مبتكرة للمنازل والمكاتب والمحلات comerciales بأعلى معايير الجودة والجمال.",
    },
    {
      key: "supervision",
      icon: "paint-roller",
      title: "الإشراف على التنفيذ",
      text: "إشراف هندسي دقيق على مرحلة التنفيذ لضمان مطابقة التصميم للمنفذ على أرض الواقع.",
    },
    {
      key: "consultation",
      icon: "ruler",
      title: "استشارات هندسية وتصميمية",
      text: "استشارات متخصصة لمساعدتك في اتخاذ أفضل القرارات لمساحتك وتصميمك الداخلي.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "MARYAM AL-SAWAJI INTERIOR DESIGN",
  title: "كل شيء يبدأ بخط",
  text:
    "نؤمن بأن كل مساحة لها قصة فريدة، ومهمتنا هي رواية هذه القصة من خلال التصميم. من فكرة إلى تحفة معمارية، نعمل بدقة وإبداع لتلبي توقعاتك وتجاوزها.",
  points: [
    "تصميم داخلي ديكور للمنازل والمكاتب والمحلات.",
    "إشراف وتنفيذ كامل على جميع المشاريع.",
    "حلول تصميمية تناسب جميع الميزانيات والأذواق.",
  ],
  image: "/sites/maryam_tm/images/identity.webp",
  imageLabel: "MARYAM AL-SAWAJI",
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
  ctaTitle: "ابدأ مشروعك مع م. مريم السواجي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/message/7NJFWPNLIRG5O1",
  whatsapp: "https://wa.me/message/7NJFWPNLIRG5O1",
  phone: "0501553316",
  email: "",
  branches: [{ address: "القصيم – بريدة – شارع عمر بن الخطاب" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/desinger.maryam.tm/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} م. مريم السواجي`,
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
