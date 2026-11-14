import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== سارا الحيدري | Sara Alhaidari =====
// اللون الأساسي متناسق مع هوية البراند واللوجو
const theme = generateTheme("#c49f75");

const brand = {
  name: "Sara Alhaidari",
  logo: "/sites/sara/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "سارا الحيدري | تصميم داخلي",
  description:
    "سارا الحيدري، مصممة داخلية وعضو في الهيئة السعودية للمهندسين. نصمم مساحات تجمع بين الرقي والوظيفة لتعكس هويتك وأسلوب حياتك.",
};

const projects: Project[] = [
  {
    slug: "luxury-living-room",
    name: "صالة المعيشة الفاخرة",
    category: "تصميم داخلي / معيشة",
    image: "/sites/sara/images/projects/living-room.webp",
    href: "#works",
  },
  {
    slug: "dining-concept",
    name: "غرفة الطعام والضيافة",
    category: "تصميم داخلي / ضيافة ومودبورد",
    image: "/sites/sara/images/projects/dining-concept.webp",
    href: "#works",
  },
  {
    slug: "home-office-study",
    name: "مكتب ومساحة دراسة",
    category: "تصميم وتنفيذ مخصص / عمل",
    image: "/sites/sara/images/projects/home-office.webp",
    href: "#works",
  },
  {
    slug: "furniture-styling",
    name: "تفاصيل وتنسيق الأثاث",
    category: "تأثيث واختيار خامات / تفاصيل",
    image: "/sites/sara/images/projects/living-details.webp",
    href: "#works",
  },
  {
    slug: "master-bedroom",
    name: "جناح النوم الرئيسي",
    category: "تصميم داخلي / نوم",
    image: "/sites/sara/images/projects/bedroom.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية معتمدة — SCE",
  title: "مساحات تُصمَّم لتروي قصة أناقتك",
  text: "سارا الحيدري، مصممة داخلية وعضو في الهيئة السعودية للمهندسين. نبتكر تصاميم داخلية متكاملة توازن بين الجمال والراحة والوظيفة، لنحول كل زاوية في مساحتك إلى تجربة استثنائية.",
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
      text: "استشارات متخصصة معتمدة من الهيئة السعودية للمهندسين لمساعدتك في اتخاذ أفضل القرارات.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "SARA ALHAIDARI",
  title: "أناقة التفاصيل تصنع الفارق",
  text: "نؤمن بأن كل مساحة لها طابع فريد، ومهمتنا هي إبراز هذا الطابع بتناغم الألوان والإضاءة والمواد المختارة بعناية.",
  points: [
    "عضو معتمد في الهيئة السعودية للمهندسين (SCE).",
    "تصاميم فريدة تواكب أحدث معايير التصميم العالمي.",
    "حلول عملية ومبتكرة تناسب أسلوب حياتك وميزانيتك.",
  ],
  image: "/sites/sara/images/identity.webp",
  imageLabel: "SARA ALHAIDARI",
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
  ctaTitle: "تواصل مع سارا الحيدري اليوم",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.link/3uowge",
  whatsapp: "https://wa.link/3uowge",
  phone: "",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/sara.design.sa/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} Sara Alhaidari`,
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
  greetName: "م. سارا",
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
