import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== دالال ديزاين — DALAL | DESIGN =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#111827");

const brand = {
  name: "دالال ديزاين",
  logo: "/sites/hams2014/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "دالال ديزاين",
  description: "تصميم داخلي، تشطيبات، وتنسيق ضيافة",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "جولة منزلية مودرن مزر",
    category: "تصميم داخلي",
    image: "/sites/hams2014/images/projects/project-1.webp",
    href: "#works",
  },
  {
    slug: "project-2",
    name: "لياسة وتشطيبات جدران",
    category: "أشغال داخلية",
    image: "/sites/hams2014/images/projects/project-2.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "مشاريع دهان وطلاء",
    category: "أشغال داخلية",
    image: "/sites/hams2014/images/projects/project-3.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "دالال — مصممة داخلية ومنسقة ضيافة",
  text: "مصممة داخلية متخصصة في تحويل المساحات إلى تجارب بصرية ملهِمة، مع اهتمام بأدق تفاصيل التصميم والتنفيذ. من ديكورات المنازل إلى التشطيبات الداخلية وتنسيق الضيافة، نقدم تصاميم تجمع بين الجمال والوظيفة بأسلوب عصري يناسب ذوقك.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "service-1",
      icon: "sofa",
      title: "تصميم داخلي وديكورات منازل",
      text: "تصميم مساحات داخلية تجمع بين الحداثة والراحة والفخامة، من غرف المعيشة إلى المطابخ والحمامات.",
    },
    {
      key: "service-2",
      icon: "paint-roller",
      title: "اللياسة والتشطيبات",
      text: "تنفيذ لياسة ودهانات احترافية للمساحات الداخلية والخارجية، مع تشطيبات دقيقة ونظيفة.",
    },
    {
      key: "service-3",
      icon: "brush",
      title: "الدهانات والطلاء",
      text: "مشاريع دهان وطلاء بألوان عصرية ومواد عالية الجودة لإضفاء لمسة جمالية على جدران منزلك.",
    },
    {
      key: "service-4",
      icon: "cup",
      title: "تنسيق الضيافة والطاولات",
      text: "تنسيق طاولات القهوة والشاي، وعروض الضيافة للمناسبات والكافيهات بأناقة واحترافية.",
    },
    {
      key: "service-5",
      icon: "cake",
      title: "تنسيق الحلويات والحلويات الفاخرة",
      text: "تنسيق وتصميم عروض الحلويات والكعكات الفاخرة للمناسبات الخاصة بأسلوب أنيق وجذاب.",
    },
    {
      key: "service-6",
      icon: "layout",
      title: "استشارات الديكور والتنسيق",
      text: "نصائح عملية وتصاميم لتنسيق منزلك أو مناسبتك بأقل جهد وأفضل نتيجة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "DALAL",
  title: "عنوان قسم الهوية",
  text: "نؤمن بأن التصميم ليس مجرد شكل، بل تجربة يعيشها الناس كل يوم. كل التفاصيل صغيرة كانت أو كبيرة تصنع الفارق في مساحة المنزل أو المناسبة.",
  points: [
    "اهتمام بأدق تفاصيل التصميم والتنسيق.",
    "جودة عالية في التنفيذ والتشطيب.",
    "تصاميم تعكس ذوق العميل وشخصيته.",
    "أناقة واحترافية في كل تفاصيل الضيافة.",
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
