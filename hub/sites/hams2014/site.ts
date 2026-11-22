import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== DALAL | DESIGN =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#8B4513");

const brand = {
  name: "دالال ديزاين",
  logo: "/sites/hams2014/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "دالال ديزاين",
  description: "تصميم داخلي وتنسيق ضيافة",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "جولة منزلية مودرن",
    category: "تصميم داخلي",
    image: "/sites/hams2014/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "project-2",
    name: "تنسيق طاولة شاي أنيق",
    category: "تنسيق ضيافة",
    image: "/sites/hams2014/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "عرض تذوق القهوة",
    category: "ضيافة وكافيهات",
    image: "/sites/hams2014/images/projects/project-3.webp",
    href: "#works",
  },
  {
    slug: "project-4",
    name: "تقديم شاي النعناع",
    category: "تنسيق ضيافة",
    image: "/sites/hams2014/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "project-5",
    name: "تنسيق كابتشينو",
    category: "ضيافة وكافيهات",
    image: "/sites/hams2014/images/projects/project-5.webp",
    href: "#works",
  },
  {
    slug: "project-6",
    name: "رول الشوكولاتة الفاخر",
    category: "تنسيق حلويات",
    image: "/sites/hams2014/images/projects/project-6.webp",
    href: "#works",
  },
  {
    slug: "project-7",
    name: "اللياسة والتشطيبات",
    category: "أشغال داخلية",
    image: "/sites/hams2014/images/projects/project-7.webp",
    href: "#works",
  },
  {
    slug: "project-8",
    name: "ساندويشات مصغرة للمناسبات",
    category: "تنسيق ضيافة",
    image: "/sites/hams2014/images/projects/project-8.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "دالال — مصممة داخلية ومنسقة ضيافة",
  text: "مصممة داخلية متخصصة في تحويل المساحات إلى تجارب بصرية ملهِمة، ومنسقة ضيافة تهتم بأدق تفاصيل التقديم والتنسيق. نجمع بين الإبداع والاحترافية لنصمم لك مساحات ومناسبات تترك انطباعاً يدوم.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "service-1",
      icon: "sofa",
      title: "تصميم داخلي",
      text: "تصميم مساحات داخلية تجمع بين الحداثة والراحة والفخامة.",
    },
    {
      key: "service-2",
      icon: "paint-roller",
      title: "التشطيبات والدهانات",
      text: "تنفيذ لياسة ودهانات احترافية لمساحات داخلية وخارجية.",
    },
    {
      key: "service-3",
      icon: "ruler",
      title: "تنسيق الضيافة",
      text: "تنسيق طاولات وضيافة للمناسبات، الكافيهات، والفعاليات الخاصة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "DALAL",
  title: "عنوان قسم الهوية",
  text: "نؤمن بأن التصميم ليس مجرد شكل، بل تجربة vivenها الناس every day. كل التفاصيل صغيرة كانت أو كبيرة تصنع الفارق.",
  points: [
    "اهتمام بأدق تفاصيل التقديم.",
    "جودة عالية في التنفيذ والتشطيب.",
    "تصاميم تعكس ذوق العميل وشخصيته.",
  ],
  image: "/sites/hams2014/identity.webp",
  imageLabel: "دالال ديزاين",
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
  ctaTitle: "ابدأ مشروعك مع دالال ديزاين",
  ctaButton: "تواصل عبر سناب شات",
  ctaHref: "https://www.snapchat.com/@hams2014",
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
  copyright: "© 2026 دالال ديزاين",
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
