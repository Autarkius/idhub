import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== حصه الفريح Interior Design =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#C4B2A0");

const brand = {
  name: "حصه الفريح للتصميم الداخلي",
  logo: "/sites/hossah-alfraih/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "حصه الفريح للتصميم الداخلي",
  description:
    "م. حصه الفريح، مصممة ديكور تبحث عن العمق في كل التفاصيل. تصميم داخلي للمساحات السكنية والتجارية.",
};

const projects: Project[] = [
  { slug: "project-1", name: "صالون بأقواس وتفاصيل راقية", category: "محلات تجارية", image: "/sites/hossah-alfraih/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "ردهة مدخل بإنارة معلّقة", category: "مداخل", image: "/sites/hossah-alfraih/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "منطقة جلوس وانتظار", category: "محلات تجارية", image: "/sites/hossah-alfraih/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "جدار بتفاصيل كلاسيكية", category: "تفاصيل جدارية", image: "/sites/hossah-alfraih/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "ركن عرض مضاء", category: "واجهات عرض", image: "/sites/hossah-alfraih/images/projects/project-5.webp", href: "#works" },
  { slug: "project-6", name: "منطقة عناية بالأظافر", category: "محلات تجارية", image: "/sites/hossah-alfraih/images/projects/project-6.webp", href: "#works" },
];

const about = {
  eyebrow: "مصممة ديكور",
  title: "عمق في كل التفاصيل، وتصميم لا يشبه المكرر",
  text: "م. حصه الفريح، مصممة ديكور معتمدة بوثيقة العمل الحر. نصمم المساحات السكنية والتجارية بعناية بالتفاصيل، من المخططات حتى التنفيذ.",
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
  outline: "حصه الفريح للتصميم الداخلي",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "فهم احتياجاتك ومعاينة المساحة وقياسها.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تنفيذ وإشراف ومتابعة حتى التسليم.",
  ],
  image: "/sites/hossah-alfraih/images/identity.webp",
  imageLabel: "حصه الفريح للتصميم الداخلي",
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
  ctaTitle: "ابدأ مشروعك مع حصه الفريح للتصميم الداخلي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966541300666",
  whatsapp: "https://wa.me/966541300666",
  phone: "+966 54 130 0666",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/hossahqwert",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 حصه الفريح للتصميم الداخلي",
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
