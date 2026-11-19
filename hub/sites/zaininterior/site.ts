import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";
import { generateTheme } from "@/lib/generate-theme";

// ===== م / زين العتيبي =====
// غيّر اللون الأساسي هنا وكل الألوان هتتحسب تلقائي 👇
const theme = generateTheme("#d4a373");

const brand = {
  name: "م / زين العتيبي",
  logo: "/sites/zaininterior/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "م / زين العتيبي | ديكورات داخلية وتشطيب",
  description:
    "زين العتيبي — تصميم، استشارات، تنفيذ. ديكورات داخلية، تأثيث، تشطيب وترميم للمساحات السكنية والتجارية في المملكة العربية السعودية ودول الخليج. احصل على استشارة الآن.",
};

const projects: Project[] = [
  {
    slug: "project-2",
    name: "صالون فخم مع ديكورات ذهبية",
    category: "تصميم داخلي / صالون",
    image: "/sites/zaininterior/images/projects/insta-project-4.webp",
    href: "#works",
  },
  {
    slug: "project-3",
    name: "صالون كلاسيكي مع ثريّا كريستال",
    category: "تصميم داخلي / صالون",
    image: "/sites/zaininterior/images/projects/insta-project-5.webp",
    href: "#works",
  },
  {
    slug: "project-4",
    name: "مدخل صالون أنيق بكراسي",
    category: "تصميم داخلي / مدخل",
    image: "/sites/zaininterior/images/projects/insta-project-7.webp",
    href: "#works",
  },
  {
    slug: "project-5",
    name: "صالون واسع فاخر مع ثريّا",
    category: "تصميم داخلي / صالون",
    image: "/sites/zaininterior/images/projects/insta-project-8.webp",
    href: "#works",
  },
  {
    slug: "project-6",
    name: "صالون مع أريكة مزدوجة وشجرة داخلية",
    category: "تصميم داخلي / صالون",
    image: "/sites/zaininterior/images/projects/insta-project-9.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "من نحن",
  title: "تصميم واستشارات وتنفيذ ديكورات داخلية",
  text: "م / زين العتيبي — مختص في التصميم الداخلي، التأثيث، التشطيب والترميم للمساحات السكنية والتجارية. نجمع بين الأصالة والمعاصرة في كل تفصيلة، ونرافقك من الفكرة حتى التسليم. 📍 السعودية ودول الخليج",
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
  outline: "م / زين العتيبي",
  title: "كيف نصمم مساحتك؟",
  text: "نبدأ بالاستماع لاحتياجاتك وذوقك، ثم نحولها إلى تصميم واضح تراه قبل التنفيذ، ونتابع معك التأثيث والتشطيب حتى آخر تفصيلة.",
  points: [
    "زيارة ميدانية وقياسات دقيقة للمساحة.",
    "تصميم ومخططات تناسب أسلوب حياتك.",
    "تأثيث وتشطيب ومتابعة حتى التسليم.",
  ],
  image: "/sites/zaininterior/images/identity.webp",
  imageLabel: "م / زين العتيبي",
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
  ctaTitle: "ابدأ مشروعك مع م / زين العتيبي",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966555661762",
  whatsapp: "https://wa.me/966555661762",
  phone: "+966 55 566 1762",
  email: "",
  branches: [{ address: "المملكة العربية السعودية – مدن ودول الخليج" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/zaininterior.sa/",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 م / زين العتيبي",
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
