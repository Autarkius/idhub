import type { Contact, Project, ServiceItem, SiteData } from "@/lib/site";

// ===== Asmaa Alrasheed (modern828) =====
// المحتوى والصور من فولدر asmaa على سطح المكتب.

const brand = {
  name: "Asmaa Alrasheed",
  logo: "/sites/asmaa/brand/logo.png",
  logoWidth: 60,
  logoHeight: 60,
  title: "أسماء الرشيد | عمارة وتصميم داخلي",
  description:
    "أسماء الرشيد (@modern828)، تصميم معماري وتصميم داخلي وتأثيث وتنفيذ وإشراف واستشارات هندسية وديكورية متكاملة.",
};

const theme = {
  accent: "#a88950", // ذهبي راقي من الشعار الكوفي والمعدن
  accentSoft: "#d8c59f",
  secondary: "#7c6439", // برونزي دافئ للإطارات والخطوط
  dark: "#141311", // فحم دافئ فاخر
  light: "#f8f5ef", // كريمي كتاني دافئ
  muted: "#a39b90", // رمادي ترابي للنصوص الثانوية
  onLight: "#4b3e2a", // برونزي غامق للعناوين على الخلفية الفاتحة
};

const projects: Project[] = [
  {
    slug: "reading-lounge",
    name: "ركن القراءة والمكتبة الحائطية",
    category: "تصميم داخلي / مساحات معيشة",
    image: "/sites/asmaa/images/projects/reading-lounge.jpg",
    href: "#works",
  },
  {
    slug: "goat-coffee-kiosk",
    name: "كشك قهوة GOAT المعماري",
    category: "تصميم معماري وتجاري / أكشاك",
    image: "/sites/asmaa/images/projects/goat-kiosk.jpg",
    href: "#works",
  },
  {
    slug: "contemporary-salon",
    name: "صالون الجلوس العصري",
    category: "تأثيث وتصميم داخلي / صالونات",
    image: "/sites/asmaa/images/projects/contemporary-salon.jpg",
    href: "#works",
  },
  {
    slug: "luxury-majlis",
    name: "مجلس الضيافة الفاخر",
    category: "تصميم داخلي / ضيافة ومجالس",
    image: "/sites/asmaa/images/projects/luxury-majlis.jpg",
    href: "#works",
  },
];

const about = {
  eyebrow: "تصميم معماري وداخلي — المملكة العربية السعودية",
  title: "مساحات تُبنى بحس معماري وتنبض بدفء التفاصيل",
  text: "أسماء الرشيد (@modern828)، مصممة معمارية وداخلية. نبتكر تصاميم سكنية وتجارية متكاملة تجمع بين نقاء الخطوط المعمارية وفخامة التأثيث، ونحوّل المساحات إلى بيئات مريحة تحكي قصة أصحابها وتلبي تطلعاتهم اليومية.",
};

const services = {
  outline: "خدماتنا",
  title: "حلول شاملة من الفكرة إلى اكتمال البناء",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "architecture",
      icon: "compass",
      title: "تصميم معماري",
      text: "دراسة وتخطيط المساحات والكتل والواجهات الخارجية برؤية هندسية عصرية تستثمر كل متر وتوفر تدفق حركة مثالي.",
    },
    {
      key: "interior",
      icon: "sofa",
      title: "تصميم داخلي وتأثيث",
      text: "اختيار وتنسيق الخامات والألوان والإضاءة وقطع الأثاث بعناية لخلق تجربة فراغية دافئة تجمع بين الأناقة والراحة.",
    },
    {
      key: "supervision",
      icon: "clipboard-check",
      title: "تنفيذ وإشراف واستشارات",
      text: "إشراف هندسي ميداني لضمان مطابقة التنفيذ للتصميم، وتقديم استشارات متخصصة تضمن اتخاذ القرارات الصحيحة في مشروعك.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "ASMAA",
  title: "حين يلتقي الفكر المعماري بروح الديكور",
  text: "نؤمن بأن كل تصميم ناجح يبدأ من فهم دقيق لأسلوب حياة العميل وطبيعة المكان. نصوغ حلولاً تجمع بين وضوح الوظيفة ورقيّ التفاصيل، مستندين إلى شغفنا بالخامات الطبيعية والإنارة المدروسة.",
  points: [
    "تصميم معماري وتجاري وسكني متكامل.",
    "تأثيث مخصص واختيار خامات وإضاءة استثنائية.",
    "إشراف ميداني ومتابعة مستمرة لمراحل التشطيب.",
    "استشارات هندسية وديكورية مرنة تلائم احتياجاتك.",
  ],
  image: "/sites/asmaa/images/identity.jpg",
  imageLabel: "ASMA AL RASHEED",
};

const testimonials = {
  eyebrow: "آراء عملائنا",
  title: "تجارب نعتز بها",
  items: [
    {
      rating: 5,
      quote:
        "تعامل راقٍ وذوق هندسي استثنائي. أسماء ساعدتنا في تنسيق كامل الفيلا والأثاث، والنتيجة كانت تحفة تفوق كل التوقعات.",
      name: "عبدالرحمن الشمري",
      role: "مشروع سكني خاص",
      avatar: null,
    },
    {
      rating: 5,
      quote:
        "تصميم كشك القهوة GOAT أحدث صدى واسع من أول أسبوع. الواجهات والإنارة وتفاصيل الجلسات الخارجية جذبت الزوار بشكل لافت.",
      name: "سعود الهذلي",
      role: "مشروع تجاري — GOAT",
      avatar: null,
    },
    {
      rating: 5,
      quote:
        "الاستشارة المعمارية والداخلية وفرت علينا وقت وتكاليف كبيرة، وأعطتنا رؤية واضحة جداً لتوزيع المساحات واختيار الخامات.",
      name: "نورة القحطاني",
      role: "استشارة تصميم داخلي",
      avatar: null,
    },
  ],
};

const clients = {
  title: "نجاحك هو بصمتنا",
  eyebrow: "عملاؤنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنبدأ رحلة تصميم مساحتك القادمة",
  ctaTitle: "تواصل مع أسماء الرشيد",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966553853414",
  whatsapp: "https://wa.me/966553853414",
  phone: "+966 55 385 3414",
  email: "modern828@gmail.com",
  branches: [{ address: "المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/modern828/",
    x: "https://twitter.com/modern828",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: "© 2026 Asmaa Alrasheed (modern828)",
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
