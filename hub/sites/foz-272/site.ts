import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== شيخه القحطاني ديكور استشارات =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#8B7355");

const brand = {
  name: "شيخه القحطاني ديكور استشارات",
  logo: "/sites/foz-272/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "شيخه القحطاني ديكور استشارات",
  description:
    "شيخه القحطاني — خبيرة ديكور واستشارات داخلية، متخصصة في التصميم والتأثيث للمساحات السكنية والتجارية. نجمع بين الفخامة والبساطة في كل تفصيلة.",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "أعمال تركيب",
    category: "تنفيذ وتركيب",
    image: "/sites/foz-272/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "project-2",
    name: "تراس خارجي",
    category: "مساحات خارجية",
    image: "/sites/foz-272/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "جلسات داخلية",
    category: "غرف معيشة",
    image: "/sites/foz-272/images/projects/project-3.webp",
    href: "#works",
  },
  {
    slug: "project-4",
    name: "مجلس شرقي",
    category: "مجالس",
    image: "/sites/foz-272/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "project-5",
    name: "تفاصيل ديكور",
    category: "إكسسوارات",
    image: "/sites/foz-272/images/projects/project-5.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "خبيرة ديكور واستشارات",
  title: "مساحات تعكس أناقتك، من الفكرة حتى التسليم",
  text: "شيخه القحطاني، خبيرة ديكور واستشارات داخلية. متخصصة في تصميم المجالس والغرف والمساحات السكنية بخامة فاخرة وألوان هادئة، مع اهتمام بأدق التفاصيل وجودة التنفيذ العالية.",
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
  outline: "شيخه القحطاني ديكور استشارات",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/foz-272/images/identity.webp",
  imageLabel: "شيخه القحطاني ديكور استشارات",
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
  ctaTitle: "ابدأ مشروعك مع شيخه القحطاني ديكور استشارات",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966564064888",
  whatsapp: "https://wa.me/966564064888",
  phone: "+966 56 406 4888",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/foz_272",
    x: "",
    linkedin: "",
    snapchat: "https://www.snapchat.com/@foz_272",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 شيخه القحطاني ديكور استشارات",
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
