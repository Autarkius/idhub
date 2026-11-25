import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== وجدان هوم WEJDAN HOME =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#A47F85");

const brand = {
  name: "وجدان هوم",
  logo: "/sites/wejdan-home/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "وجدان هوم",
  description:
    "وجدان الدهيلان، استوديو تصميم داخلي للمساحات السكنية والتجارية. تصميم وتنسيق وتنفيذ في الأحساء والخبر والرياض.",
};

const projects: Project[] = [
  { slug: "project-1", name: "صالة جلوس وطعام", category: "فلل سكنية", image: "/sites/wejdan-home/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "مجلس بتفاصيل هادئة", category: "مجالس", image: "/sites/wejdan-home/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "غرفة طعام بدرج", category: "غرف طعام", image: "/sites/wejdan-home/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "صالة معيشة وردية", category: "غرف معيشة", image: "/sites/wejdan-home/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "صالة مزدوجة", category: "غرف معيشة", image: "/sites/wejdan-home/images/projects/project-5.webp", href: "#works" },
  { slug: "project-6", name: "ركن جلوس أنيق", category: "غرف معيشة", image: "/sites/wejdan-home/images/projects/project-6.webp", href: "#works" },
];

const about = {
  eyebrow: "استوديو تصميم داخلي",
  title: "مساحات هادئة بلمسة أنثوية، من التصميم حتى التنفيذ",
  text: "وجدان الدهيلان، مصممة داخلية تعمل في الأحساء والخبر والرياض. نصمم وننسّق وننفّذ الفلل والمجالس والمساحات السكنية والتجارية بألوان هادئة وخامات مختارة بعناية.",
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
      title: "التنسيق والتأثيث",
      text: "اختيار الأثاث والخامات والإكسسوارات وتنسيق المساحة حتى تكتمل كما صُممت.",
    },
    {
      key: "consulting",
      icon: "ruler",
      title: "التنفيذ والإشراف",
      text: "متابعة التنفيذ في الموقع لضمان أن النتيجة النهائية مطابقة للتصميم.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا في العمل",
  outline: "وجدان هوم",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "فهم احتياجاتك ومعاينة المساحة وقياسها.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تنفيذ وإشراف ومتابعة حتى التسليم.",
  ],
  image: "/sites/wejdan-home/images/identity.webp",
  imageLabel: "وجدان هوم",
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
  ctaTitle: "ابدأ مشروعك مع وجدان هوم",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966583888069",
  whatsapp: "https://wa.me/966583888069",
  phone: "+966 58 388 8069",
  email: "",
  branches: [{ address: "الأحساء • الخبر • الرياض" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/wejdan_designer",
    x: "",
    linkedin: "",
    snapchat: "https://www.snapchat.com/add/wwejwejinterior",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 وجدان هوم",
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
  createdAt: "2026-11-25",
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
