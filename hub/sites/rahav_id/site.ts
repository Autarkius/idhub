import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م. Rahaf | Interior Designer | مصممة داخلية =====
// اللون الأساسي مأخوذ من هويةitchie
const theme = generateTheme("#c08497");

const brand = {
  name: "رهف للتصميم الداخلي",
  logo: "/sites/rahav_id/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "م. رهف | تصميم داخلي | مصممة داخلية",
  description:
    "م. رهف، مصممة داخلية وجرافيك معتمدة من الهيئة السعودية للمهندسين. نصمم مساحات داخلية تجمع بين الأناقة والراحة، مع تأثيث وتصميم حسب الطلب.",
};

const projects: Project[] = [
  {
    slug: "interior-design-elegant",
    name: "تصميم داخلي ساحر",
    category: "تصميم داخلي",
    image: "/sites/rahav_id/images/projects/project-0.webp",
    href: "#works",
  },
  {
    slug: "villa-desert-concept",
    name: "فيلا ديزرت Concept",
    category: "تصميم فلل",
    image: "/sites/rahav_id/images/projects/project-3.webp",
    href: "#works",
  },
  {
    slug: "bedroom-first-floor",
    name: "غرفة نوم دور أول",
    category: "غرف نوم",
    image: "/sites/rahav_id/images/projects/project-4.webp",
    href: "#works",
  },
  {
    slug: "modern-majlis",
    name: "مجلس مودرن",
    category: "مجالس",
    image: "/sites/rahav_id/images/projects/project-5.webp",
    href: "#works",
  },
  {
    slug: "bedroom-modern",
    name: "غرفة نوم مودرن",
    category: "غرف نوم",
    image: "/sites/rahav_id/images/projects/project-6.webp",
    href: "#works",
  },
  {
    slug: "design-reflects-identity",
    name: "تصميم يعكس هويتك",
    category: "تصميم داخلي",
    image: "/sites/rahav_id/images/projects/project-7.webp",
    href: "#works",
  },
  {
    slug: "mediterranean-design",
    name: "تصميم متوسطي",
    category: "تصميم داخلي",
    image: "/sites/rahav_id/images/projects/project-9.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مصممة داخلية وجرافيك",
  title: "مساحات تُصمَّم لتروي قصة أناقتك",
  text:
    "م. رهف، مصممة داخلية وجرافيك معتمدة من الهيئة السعودية للمهندسين. نصمم مساحات داخلية تجمع بين الأناقة والراحة والوظيفة، مع تأثيث وتصميم حسب الطلب لتلبي ذوقك وتستغل المساحات بأعلى كفاءة وجمالية.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "التصميم الداخلي السكني والتجاري",
      text: "تصاميم مخصصة ومدروسة بعناية لتلبي ذوقك وتستغل المساحات بأعلى كفاءة وجمالية.",
    },
    {
      key: "furnishing",
      icon: "paint-roller",
      title: "تأثيث وتصميم حسب الطلب",
      text: "قطع أثاث وتصاميم تُفصَّل خصيصاً على مقاسات مساحتك وذوقك، بخامات مختارة بعناية.",
    },
    {
      key: "consultation",
      icon: "ruler",
      title: "استشارات هندسية وتصميمية",
      text: "استشارات متخصصة لمساعدتك في اتخاذ أفضل القرارات لمساحتك.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "RAHAF INTERIOR DESIGN",
  title: "أناقة التفاصيل تصنع الفارق",
  text:
    "نؤمن بأن كل مساحة لها طابع فريد، ومهمتنا هي إبراز هذا الطابع بتناغم الألوان والإضاءة والمواد المختارة بعناية، لنحول كل زاوية في مساحتك إلى تجربة استثنائية.",
  points: [
    "تصاميم داخلية وجرافيك معتمدة من الهيئة السعودية للمهندسين.",
    "تأثيث وتصميم حسب الطلب لكل مساحة.",
    "حلول عملية ومبتكرة تناسب أسلوب حياتك وميزانيتك.",
  ],
  image: "/sites/rahav_id/images/identity.webp",
  imageLabel: "RAHAF INTERIOR DESIGN",
};

const testimonials = {
  eyebrow: "آراء العملاء",
  title: "ماذا يقول عملاؤنا",
  items: [],
};

const clients = {
  title: "شركاء النجاح",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "جاهز لبدء مشروعك؟",
  ctaTitle: "ابدأ مشروعك مع م. رهف",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wsend.co/966551908476",
  whatsapp: "https://wsend.co/966551908476",
  phone: "",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/rahav_id/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} م. رهف`,
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
  greetName: "م. رهف",
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
