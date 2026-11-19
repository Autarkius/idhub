import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== أج ديزاين =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#b08d68");

const brand = {
  name: "أج ديزاين",
  logo: "/sites/ajdesignsa/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أج ديزاين | م/ عبير الجاسر",
  description:
    "أج ديزاين — تصميم داخلي، تشطيب، ترميم وتأثيث للمساحات السكنية والتجارية. تصاميم تجمع بين الفخامة والعملية، مع تنفيذ دقيق وإشراف كامل من الفكرة حتى التسليم. 📍 المملكة العربية السعودية",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "صالون مودرن مع أريكة بيج",
    category: "تصميم داخلي / صالون",
    image: "/sites/ajdesignsa/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "project-2",
    name: "مدخل فخم مع أبواب خشبية",
    category: "تشطيب / مداخل",
    image: "/sites/ajdesignsa/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "صالون مع سقف خشبي وقبو حجري",
    category: "تصميم داخلي / صالون",
    image: "/sites/ajdesignsa/images/projects/project-3.webp",
    href: "#works",
  },
  {
    slug: "project-4",
    name: "لوحة الألوان والخامات",
    category: "التصميم والمواد",
    image: "/sites/ajdesignsa/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "project-5",
    name: "تكسية جدران بالرخام",
    category: "تشطيب / جدران",
    image: "/sites/ajdesignsa/images/projects/project-5.webp",
    href: "#works",
  },
  {
    slug: "project-6",
    name: "واجهة فيلا حديثة",
    category: "التصميم الخارجي",
    image: "/sites/ajdesignsa/images/projects/project-6.webp",
    href: "#works",
  },
  {
    slug: "project-7",
    name: "مطبخ مع باركيه رخام وإضاءة تحتية",
    category: "تصميم داخلي / مطابخ",
    image: "/sites/ajdesignsa/images/projects/project-7.webp",
    href: "#works",
  },
  {
    slug: "project-8",
    name: "ديكورات جدران بطباشير",
    category: "تشطيب / جدران",
    image: "/sites/ajdesignsa/images/projects/project-8.webp",
    href: "#works",
  },
  {
    slug: "project-9",
    name: "واجهة فيلا ليلاً مع إضاءة",
    category: "التصميم الخارجي",
    image: "/sites/ajdesignsa/images/projects/project-9.webp",
    href: "#works",
  },
  {
    slug: "project-10",
    name: "عينة سجاد وخامات أرضية",
    category: "الأرضيات والمفروشات",
    image: "/sites/ajdesignsa/images/projects/project-10.webp",
    href: "#works",
  },
  {
    slug: "project-11",
    name: "غرفة طعام مع إضاءة معلقة",
    category: "تصميم داخلي / طعام",
    image: "/sites/ajdesignsa/images/projects/project-11.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "تصميم داخلي تشطيب وترميم بأج ديزاين",
  text: "أج ديزاين بإشراف م/ عبير الجاسر — متخصصون في التصميم الداخلي، التشطيب، الترميم والتأثيث للمساحات السكنية والتجارية في المملكة العربية السعودية. نقدم تصاميم عصرية فاخرة مع جودة تنفيذ عالية واهتمام بأدق التفاصيل.",
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
      key: "renovation",
      icon: "ruler",
      title: "الترميم والتجديد",
      text: "ترميم المساحات القائمة وتجديدها بأحدث الخامات وأيدٍ عاملة محترفة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "طريقتنا في العمل",
  outline: "أج ديزاين",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/ajdesignsa/images/identity.webp",
  imageLabel: "أج ديزاين",
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
  ctaTitle: "ابدأ مشروعك مع أج ديزاين",
  ctaButton: "تواصل عبر إنستجرام",
  ctaHref: "https://www.instagram.com/aj_designsa/",
  whatsapp: "https://www.instagram.com/aj_designsa/",
  phone: "",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/aj_designsa/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 أج ديزاين – م/ عبير الجاسر",
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
