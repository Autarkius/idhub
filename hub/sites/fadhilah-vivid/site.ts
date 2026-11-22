import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م/ فضيله الطلالوة =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#8B7355");

const brand = {
  name: "م/ فضيله الطلالوة",
  logo: "/sites/fadhilah-vivid/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "م/ فضيله الطلالوة | تصميم ديكور داخلي",
  description:
    "فضيله الطلالوة — مهندسة تصميم داخلي مقيمة في المنطقة الشرقية، المملكة العربية السعودية. متخصصة في التصميم والتأثيث والتشطيب للمساحات السكنية. نجمع بين الفخامة والوظيفة في كل تفصيلة.",
};

const projects: Project[] = [
  {
    slug: "bedroom-1",
    name: "غرفة نوم",
    category: "غرف نوم",
    image: "/sites/fadhilah-vivid/images/projects/bedroom-1.webp",
    href: "#works",
  },
  {
    slug: "dining",
    name: "غرفة طعام",
    category: "غرف طعام",
    image: "/sites/fadhilah-vivid/images/projects/dining.webp",
    href: "#works",
  },
  {
    slug: "hallway",
    name: "رواق داخلي",
    category: "أروقة",
    image: "/sites/fadhilah-vivid/images/projects/hallway.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مهندسة تصميم داخلي",
  title: "مساحات تعكس أناقتك، من الفكرة حتى التسليم",
  text: "فضيله الطلالوة، مهندسة تصميم داخلي مقيمة في المنطقة الشرقية بالمملكة العربية السعودية. أتخصص في تصميم غرف النوم والمساحات السكنية بخامة فاخرة وألوان هادئة، مع اهتمام بأدق التفاصيل وجودة التنفيذ العالية.",
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
      text: "تصاميم للمساحات السكنية تجمع بين الجمال والراحة وتناسب أسلوب حياتك.",
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
  outline: "م/ فضيله الطلالوة",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/fadhilah-vivid/images/identity.webp",
  imageLabel: "م/ فضيله الطلالوة",
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
  ctaTitle: "ابدأ مشروعك مع م/ فضيله الطلالوة",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966541975512",
  whatsapp: "https://wa.me/966541975512",
  phone: "+966 54 197 5512",
  email: "",
  branches: [{ address: "المنطقة الشرقية، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/fadhilah_vivid",
    x: "",
    linkedin: "",
    snapchat: "https://www.snapchat.com/@fadhilah_vivid",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 م/ فضيله الطلالوة",
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
