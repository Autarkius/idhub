import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== تريند هاوس — روابي العياف =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#D4A373");

const brand = {
  name: "تريند هاوس",
  logo: "/sites/r-design79/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "تريند هاوس — روابي العياف",
  description: "مصممة ديكور داخلي، أول مصممة في منطقة الجوف. تصاميم داخلية فاخرة للمنازل والمكاتب.",
};

const projects: Project[] = [
  {
    slug: "project-1",
    name: "مشروع 1",
    category: "تصميم داخلي",
    image: "/sites/r-design79/images/projects/project-1.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-2",
    name: "مشروع 2",
    category: "تصميم داخلي",
    image: "/sites/r-design79/images/projects/project-2.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-3",
    name: "مشروع 3",
    category: "تصميم داخلي",
    image: "/sites/r-design79/images/projects/project-3.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-4",
    name: "مشروع 4",
    category: "تصميم داخلي",
    image: "/sites/r-design79/images/projects/project-4.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
  {
    slug: "project-5",
    name: "مشروع 5",
    category: "أثاث مخصص",
    image: "/sites/r-design79/images/projects/project-5.webp",
    href: "#works",
    description: "يمكنك وضع وصف المشروع هنا",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "روابي العياف — مصممة ديكور داخلي",
  text: "مصممة ديكور داخلي متخصصة في تحويل المساحات إلى أعمال فنية تجمع بين الحداثة والفخامة. أول مصممة ديكور في منطقة الجوف، ومؤسسة علامة تريند هاوس للمنزل الحديث. أصمم غرف المعيشة والنوم، الصالات الفاخرة، المطابخ المودرن، والأثاث المخصص، مع الاهتمام بأدق التفاصيل من الإضاءة إلى التشطيب، لضمان مساحة مريحة وجميلة تعكس شخصيتك.",
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
      icon: "home",
      title: "المطابخ والبارات المنزلية",
      text: "تصميم مطابخ مودرن وبارات منزلية بأثاث مخصص ومواد عالية الجودة.",
    },
    {
      key: "service-6",
      icon: "layout",
      title: "المداخل والممرات",
      text: "تصميم مداخل أنيقة بمقاعد معاطف، مرايا عصرية، وطاولات كونسول تعطي انطباعاً أولياً رائعاً.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا",
  outline: "تريند هاوس",
  title: "المنزل الحديث بأيدٍ سعودية",
  text: "أؤمن بأن التصميم الجيد لا يظهر فقط بشكل جميل، بل يحسن من جودة الحياة ويجعل كل يوم أكثر إلهاماً. كل تفصيل صغير أو كبير يصنع الفارق في مساحتك، وأنا هنا لأحول منزلك إلى تحفة فنية تعكس ذوقك وشخصيتك.",
  points: [
    "اهتمام بأدق التفاصيل من الإضاءة إلى الأثاث.",
    "جودة عالية في التنفيذ والتشطيب.",
    "تصاميم تعكس شخصية العميل وتناسب أسلوب حياته.",
    "دمج بين الحداثة والفخامة في كل مشروع.",
  ],
  image: "/sites/r-design79/identity.webp",
  imageLabel: "تريند هاوس",
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
  ctaTitle: "ابدأ مشروعك مع تريند هاوس",
  ctaButton: "تواصل عبر سناب شات",
  ctaHref: "https://www.snapchat.com/@r.design79",
  whatsapp: "https://wa.me/966501337169",
  phone: "+966 50 133 7169",
  email: "",
  branches: [{ address: "منطقة الجوف، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
    snapchat: "https://www.snapchat.com/@r.design79",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 تريند هاوس",
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
