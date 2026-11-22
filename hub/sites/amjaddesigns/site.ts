import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== أمجد ديزاينز =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#5D4037");

const brand = {
  name: "أمجد ديزاينز",
  logo: "/sites/amjaddesigns/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أمجد ديزاينز",
  description: "تصميم داخلي وإبداعات منزلية",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "غرفة معيشة عصرية",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "project-2",
    name: "جلسة مريحة بإضاءة دافئة",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "طاولة سرير معاصرة",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-3.webp",
    href: "#works",
  },
  {
    slug: "project-4",
    name: "غرفة نوم بشجرة داخلية",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "project-5",
    name: "كرسي أخضر بسيط",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-5.webp",
    href: "#works",
  },
  {
    slug: "project-6",
    name: "صالون فاخر بمصعد كريستال",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-6.webp",
    href: "#works",
  },
  {
    slug: "project-7",
    name: "مداخل 현대ية",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-7.webp",
    href: "#works",
  },
  {
    slug: "project-8",
    name: "بار ومطابخ عصرية",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-8.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "أمجد الوابل — خبير التصميم الداخلي",
  text: "مصمم داخلي متخصص في تحويل المساحات إلى أعمال فنية تجمع بين الحداثة والفخامة. من خلال حس إبداعي عالٍ واهتمام بأدق التفاصيل، أصمم مساحات تعكس شخصية ساكنيها وتوفر الراحة والجمال في آن واحد.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "service-1",
      icon: "sofa",
      title: "تصميم غرف المعيشة",
      text: "تصميم غرف معيشة عصرية ومريحة تناسب أسلوب حياتك.",
    },
    {
      key: "service-2",
      icon: "paint-roller",
      title: "تصميم غرف النوم",
      text: "غرف نوم هادئة ومريحة تساعدك على الاسترخاء والنوم الهادئ.",
    },
    {
      key: "service-3",
      icon: "ruler",
      title: "الأثاث المخصص",
      text: "تصميم وتنفيذ أثاث مخصص يناسب مساحتك وذوقك الخاص.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "AMJAD",
  title: "عنوان قسم الهوية",
  text: "أؤمن بأن التصميم الجيد لا يظهر فقط بشكل جميل، بل يحسن من جودة الحياة ويجعل كل يوم أكثر إلهاماً.",
  points: [
    "اهتمام بأدق التفاصيل.",
    "جودة عالية في التنفيذ.",
    "تصاميم تعكس شخصية العميل.",
  ],
  image: "/sites/amjaddesigns/identity.webp",
  imageLabel: "أمجد ديزاينز",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "عملاؤنا",
  eyebrow: "شركاء النجاح",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "تواصل معنا",
  ctaTitle: "ابدأ مشروعك مع أمجد ديزاينز",
  ctaButton: "تواصل عبر سناب شات",
  ctaHref: "https://www.snapchat.com/@amjaddesigns",
  whatsapp: "https://wa.me/966XXXXXXXXX",
  phone: "+966 XX XXX XXXX",
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
  copyright: "© 2026 أمجد ديزاينز",
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
  createdAt: "2026-11-22",
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
