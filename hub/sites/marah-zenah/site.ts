import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== MARAH مهندسة ديكور (marahzenah) =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#B49A7A");

const brand = {
  name: "MARAH مهندسة ديكور",
  logo: "/sites/marah-zenah/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "MARAH | مهندسة ديكور وتصميم داخلي",
  description:
    "MARAH، مهندسة ديكور وتصميم داخلي. تصاميم حمامات ومكاتب ومساحات سكنية بأسلوب نيو كلاسيك ومودرن لعملاء في الرياض.",
};

const projects: Project[] = [
  { slug: "project-1", name: "حمام البنات بتفاصيل نيو كلاسيك", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-1.webp", href: "#works" },
  { slug: "project-2", name: "حمام نيو كلاسيك برخام الكالكتا", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-2.webp", href: "#works" },
  { slug: "project-3", name: "بلكونة داخلية لغرفة النوم الرئيسية", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-3.webp", href: "#works" },
  { slug: "project-4", name: "مكتب بخامات دافئة", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-4.webp", href: "#works" },
  { slug: "project-5", name: "حمام نيو كلاسيك بأرضية رخامية", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-5.webp", href: "#works" },
  { slug: "project-6", name: "حمام الماستر بالبانيو", category: "تصور ثلاثي الأبعاد", image: "/sites/marah-zenah/images/projects/project-6.webp", href: "#works" },
];

const about = {
  eyebrow: "ديكور وتصميم داخلي",
  title: "تفاصيل صغيرة تصنع مكانًا أفخم",
  text: "MARAH مهندسة ديكور وتصميم داخلي، تقدم تصاميم لعملاء في الرياض بأساليب نيو كلاسيك ومودرن، وتهتم بالخامات والتفاصيل التي تعطي كل مساحة طابعها.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    { key: "interior", icon: "sofa", title: "التصميم الداخلي", text: "تصميم مساحات سكنية ومكاتب بأسلوب يناسب ذوق العميل." },
    { key: "bath", icon: "armchair", title: "تصميم الحمامات", text: "حمامات نيو كلاسيك ومودرن بخامات الرخام والتفاصيل الناعمة." },
    { key: "render", icon: "compass", title: "تصور ثلاثي الأبعاد", text: "صور واقعية للتصميم قبل التنفيذ لتشوفي النتيجة من البداية." },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا",
  outline: "MARAH",
  title: "نبدأ من طلبك ونصمم حوله",
  text: "نسمع طلب العميل ونحوله إلى تصميم بتفاصيل مدروسة، ونعرضه بصور ثلاثية الأبعاد قبل التنفيذ.",
  points: [
    "تصميم على ذوق العميل وأسلوبه.",
    "خامات وتفاصيل مختارة بعناية.",
    "صور ثلاثية الأبعاد قبل التنفيذ.",
  ],
  image: "/sites/marah-zenah/images/identity.webp",
  imageLabel: "MARAH",
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
  ctaTitle: "ابدئي مشروعك مع MARAH",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966531678986",
  whatsapp: "https://wa.me/966531678986",
  phone: "+966 53 167 8986",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
    snapchat: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 MARAH",
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "أعمالنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "طريقتنا", href: "#identity" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  createdAt: "2026-11-26",
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
