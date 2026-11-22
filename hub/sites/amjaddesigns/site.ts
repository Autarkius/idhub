import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== أمجاد ديزاينز — أمجد الوابل =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#D4A373");

const brand = {
  name: "أمجاد ديزاينز",
  logo: "/sites/amjaddesigns/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "أمجاد ديزاينز",
  description: "تصميم داخلي وديكورات منازل فاخرة",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "مشروع 1",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-1.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-2",
    name: "مشروع 2",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-2.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-3",
    name: "مشروع 3",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-3.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-4",
    name: "مشروع 4",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-4.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-5",
    name: "مشروع 5",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-5.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-6",
    name: "مشروع 6",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-6.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-7",
    name: "مشروع 7",
    category: "تصميم داخلي",
    image: "/sites/amjaddesigns/images/projects/project-7.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-8",
    name: "مشروع 8",
    category: "أثاث مخصص",
    image: "/sites/amjaddesigns/images/projects/project-8.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "أمجد الوابل — خبير التصميم الداخلي",
  text: "مصمم داخلي متخصص في تحويل المساحات إلى أعمال فنية تجمع بين الحداثة والفخامة. من غرف المعيشة والنوم إلى الصالات الفاخرة والمطابخ المودرن، أصمم كل تفصيل ليناسب ذوقك ويجعل منزلك تحفة فنية. أهتم بأدق التفاصيل من الإضاءة إلى الأثاث المخصص، لضمان مساحة مريحة وجميلة تعكس شخصيتك.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "service-1",
      icon: "sofa",
      title: "تصميم غرف المعيشة والصالونات",
      text: "تصميم غرف معيشة وصالات فاخرة بأثاث أنيق وإضاءة راقية تناسب أسلوب حياتك.",
    },
    {
      key: "service-2",
      icon: "bed",
      title: "تصميم غرف النوم",
      text: "غرف نوم هادئة ومريحة تساعدك على الاسترخاء، مع تصميمات مخصصة للأثاث والتخزين.",
    },
    {
      key: "service-3",
      icon: "paint-roller",
      title: "الأثاث المخصص والنجارة",
      text: "تصميم وتنفيذ أثاث مخصص بما في ذلك وحدات التلفزيون، الخزائن، المكاتب، والطاولات حسب مقاس مساحتك.",
    },
    {
      key: "service-4",
      icon: "lightbulb",
      title: "تصميم الإضاءة",
      text: "تصميم أنظمة الإضاءة الداخلية بما في ذلك الإضاءة المخفية، الأرفف المضاءة، والمصابيح الفاخرة.",
    },
    {
      key: "service-5",
      icon: "ruler",
      title: "المطابخ والبارات المنزلية",
      text: "تصميم مطابخ مودرن وبارات منزلية بأثاث مخصص ومواد عالية الجودة.",
    },
    {
      key: "service-6",
      icon: "home",
      title: "المداخل والممرات",
      text: "تصميم مداخل أنيقة بمقاعد معاطف، مرايا عصرية، وطاولات كونسول تعطي انطباعاً أولياً رائعاً.",
    },
    {
      key: "service-7",
      icon: "layout",
      title: "استشارات الديكور المنزلي",
      text: "نصائح عملية وتصاميم لتحسين مظهر منزلك بأقل جهد وأفضل نتيجة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "AMJAD",
  title: "عنوان قسم الهوية",
  text: "أؤمن بأن التصميم الجيد لا يظهر فقط بشكل جميل، بل يحسن من جودة الحياة ويجعل كل يوم أكثر إلهاماً. كل تفصيل صغير أو كبير يصنع الفارق في مساحتك.",
  points: [
    "اهتمام بأدق التفاصيل من الإضاءة إلى الأثاث.",
    "جودة عالية في التنفيذ والتشطيب.",
    "تصاميم تعكس شخصية العميل وتناسب أسلوب حياته.",
    "دمج بين الحداثة والفخامة في كل مشروع.",
  ],
  image: "/sites/amjaddesigns/identity.webp",
  imageLabel: "أمجاد ديزاينز",
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
  ctaTitle: "ابدأ مشروعك مع أمجاد ديزاينز",
  ctaButton: "تواصل عبر سناب شات",
  ctaHref: "https://www.snapchat.com/@amjaddesigns",
  whatsapp: "https://wa.me/966566243429",
  phone: "+966 56 624 3429",
  email: "",
  branches: [{ address: "الرياض، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
    snapchat: "https://www.snapchat.com/@amjaddesigns",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 أمجاد ديزاينز",
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
