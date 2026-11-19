import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== نورة فالح =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#c5a05f");

const brand = {
  name: "نورة فالح",
  logo: "/sites/nourah-alfalih/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "نورة فالح | مصممة ديكور داخلي",
  description:
    "نورة فالح — مصممة ديكور داخلي متخصصة في التصميم والتأثيث والتشطيب للمساحات السكنية والتجارية. نجمع بين الفخامة والوظيفة في كل تفصيلة، ونرافقك من الفكرة حتى التسليم.",
};

const projects: Project[] = [
  {
    slug: "luxury-bathroom",
    name: "حمام فاخر",
    category: "تصميم داخلي / حمامات",
    image: "/sites/nourah-alfalih/images/projects/luxury-bathroom.webp",
    href: "#works",
  },
  {
    slug: "master-bathroom",
    name: "حمام رئيسي",
    category: "تصميم داخلي / حمامات",
    image: "/sites/nourah-alfalih/images/projects/master-bathroom.webp",
    href: "#works",
  },
  {
    slug: "vanity-bathroom",
    name: "منضدة حمام",
    category: "تصميم داخلي / حمامات",
    image: "/sites/nourah-alfalih/images/projects/vanity-bathroom.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة ديكور داخلي",
  title: "مساحات تعكس أناقتك، من الفكرة حتى التسليم",
  text: "نورة فالح، مصممة ديكور داخلي مقيمة في المملكة العربية السعودية. أخصص في تصميم الحمامات والمطابخ وغرف النوم والمساحات السكنية بخامة فاخرة وألوان هادئة، مع اهتمام بأدق التفاصيل وجودة التنفيذ العالية.",
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
  outline: "نورة فالح",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/nourah-alfalih/images/identity.webp",
  imageLabel: "نورة فالح",
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
  ctaTitle: "ابدأ مشروعك مع نورة فالح",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966555594476",
  whatsapp: "https://wa.me/966555594476",
  phone: "+966 55 559 4476",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/nourah.designe/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 نورة فالح",
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
