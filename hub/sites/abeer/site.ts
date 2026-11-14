import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م. عبير علي | Abeer Ali Alsaree Interior Design =====
// اللون الأساسي مأخوذ من الموف اللي في اللوجو
const theme = generateTheme("#9c6b78");

const brand = {
  name: "Abeer Ali Alsaree",
  logo: "/sites/abeer/brand/logo.png",
  logoWidth: 70,
  logoHeight: 54,
  title: "م. عبير علي | استوديو تصميم داخلي",
  description:
    "م. عبير علي، مهندسة ديكور واستوديو تصميم داخلي. نصمم مساحات تجمع بين الأناقة والراحة، مع تفصيل أثاث حسب الطلب.",
};

const projects: Project[] = [
  {
    slug: "meeting-room",
    name: "قاعة الاجتماعات",
    category: "تصميم داخلي / مكاتب",
    image: "/sites/abeer/images/projects/meeting-room.jpg",
    href: "#works",
  },
  {
    slug: "executive-office",
    name: "المكتب التنفيذي",
    category: "تصميم داخلي / مكاتب",
    image: "/sites/abeer/images/projects/executive-office.jpg",
    href: "#works",
  },
  {
    slug: "reception-lounge",
    name: "جلسة الاستقبال",
    category: "تصميم داخلي / ضيافة",
    image: "/sites/abeer/images/projects/reception-lounge.jpg",
    href: "#works",
  },
  {
    slug: "meeting-table",
    name: "تفاصيل طاولة الاجتماعات",
    category: "تأثيث واختيار خامات / تفاصيل",
    image: "/sites/abeer/images/projects/meeting-table.jpg",
    href: "#works",
  },
  {
    slug: "office-moodboard",
    name: "مودبورد المكتب",
    category: "تصميم وتنسيق / مودبورد",
    image: "/sites/abeer/images/projects/office-moodboard.jpg",
    href: "#works",
  },
];

const about = {
  eyebrow: "مهندسة ديكور — استوديو تصميم داخلي",
  title: "مساحات تُصمَّم لتروي قصة أناقتك",
  text: "م. عبير علي، مهندسة ديكور. نبتكر تصاميم داخلية متكاملة توازن بين الجمال والراحة والوظيفة، لنحول كل زاوية في مساحتك إلى تجربة استثنائية.",
};

const services = {
  outline: "خدماتنا",
  title: "تعرّف على خدماتنا",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي سكني وتجاري",
      text: "تصاميم مخصصة ومدروسة بعناية لتلبي ذوقك وتستغل المساحات بأعلى كفاءة وجمالية.",
    },
    {
      key: "supervision",
      icon: "paint-roller",
      title: "تفصيل أثاث حسب الطلب",
      text: "قطع أثاث تُفصَّل خصيصاً على مقاسات مساحتك وذوقك، بخامات مختارة بعناية.",
    },
    {
      key: "consultation",
      icon: "ruler",
      title: "استشارات هندسية وتصميمية",
      text: "استشارات متخصصة لمساعدتك في اتخاذ أفضل القرارات.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "ABEER DESIGN",
  title: "أناقة التفاصيل تصنع الفارق",
  text: "نؤمن بأن كل مساحة لها طابع فريد، ومهمتنا هي إبراز هذا الطابع بتناغم الألوان والإضاءة والمواد المختارة بعناية.",
  points: [
    "تفصيل أثاث حسب الطلب لكل مساحة.",
    "تصاميم فريدة تواكب أحدث معايير التصميم العالمي.",
    "حلول عملية ومبتكرة تناسب أسلوب حياتك وميزانيتك.",
  ],
  image: "/sites/abeer/images/identity.jpg",
  imageLabel: "ABEER DESIGN",
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
  ctaTitle: "ابدأ مشروعك مع م. عبير علي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/message/DIXSWFYLVWREJ1",
  whatsapp: "https://wa.me/message/DIXSWFYLVWREJ1",
  phone: "",
  email: "",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/eng.abeer1149/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} Abeer Ali Alsaree`,
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
