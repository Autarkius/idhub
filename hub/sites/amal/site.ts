import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== أمل الأحمري | Amal Alahmari Interior Designer =====
// اللون الأساسي: الذهبي بتاع اللوجو، بدرجة أعمق علشان يبان على الفاتح والغامق
const theme = generateTheme("#c9a079");

const brand = {
  name: "Amal Alahmari",
  logo: "/sites/amal/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أمل الأحمري | مصممة داخلية في أبها وخميس مشيط",
  description:
    "أمل الأحمري، مصممة داخلية في أبها وخميس مشيط. تصميم وتأثيث وإشراف على المجالس والصالات وغرف النوم، بلمسة فاخرة وتفاصيل مدروسة.",
};

const projects: Project[] = [
  {
    slug: "grand-majlis",
    name: "المجلس الفاخر",
    category: "تصميم وتنفيذ / مجالس",
    image: "/sites/amal/images/projects/grand-majlis.webp",
    href: "#works",
  },
  {
    slug: "royal-majlis",
    name: "قاعة الاستقبال الكبرى",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/amal/images/projects/royal-majlis.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "جناح النوم الرئيسي",
    category: "تصميم داخلي / غرف نوم",
    image: "/sites/amal/images/projects/master-bedroom.webp",
    href: "#works",
  },
  {
    slug: "tv-lounge",
    name: "ركن المعيشة والمدفأة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/amal/images/projects/tv-lounge.webp",
    href: "#works",
  },
  {
    slug: "reception-hall",
    name: "صالة الضيوف",
    category: "تصميم وتأثيث / ضيافة",
    image: "/sites/amal/images/projects/reception-hall.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية — أبها وخميس مشيط",
  title: "فخامة هادئة تُصمَّم على مقاسك",
  text: "أمل الأحمري، مصممة داخلية. نبتكر تصاميم داخلية متكاملة توازن بين الجمال والراحة والوظيفة، لنحول كل زاوية في مساحتك إلى تجربة استثنائية.",
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
      title: "تأثيث وتنفيذ",
      text: "أثاث وإنارة وسجاد مختارة بعناية لكل مساحة، مع تنفيذ وتأثيث متكامل عبر أوميرا للأثاث والديكور.",
    },
    {
      key: "consultation",
      icon: "ruler",
      title: "إشراف ومتابعة",
      text: "متابعة دقيقة لمراحل التنفيذ واختيار المواد لضمان تطابق الواقع مع التصميم المعتمد.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "AMAL ALAHMARI",
  title: "أناقة التفاصيل تصنع الفارق",
  text: "نؤمن بأن كل مساحة لها طابع فريد، ومهمتنا هي إبراز هذا الطابع بتناغم الألوان والإضاءة والمواد المختارة بعناية.",
  points: [
    "تصميم وتأثيث وإشراف في مكان واحد، من الفكرة حتى التسليم.",
    "تصاميم فريدة تواكب أحدث معايير التصميم العالمي.",
    "حلول عملية ومبتكرة تناسب أسلوب حياتك وميزانيتك.",
  ],
  image: "/sites/amal/images/identity.webp",
  imageLabel: "AMAL ALAHMARI",
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
  ctaTitle: "ابدأ تصميم مساحتك مع أمل الأحمري",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966554588839",
  whatsapp: "https://wa.me/966554588839",
  phone: "+966 55 458 8839",
  email: "",
  branches: [{ address: "أبها - خميس مشيط، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/al.am22/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} Amal Alahmari`,
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
