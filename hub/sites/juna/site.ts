import type { Contact, Project, ServiceItem, TestimonialItem, SiteData } from "@/lib/site";

// ===== Juna Design (جنى ديزاين) =====
// المصممة والمهندسة الداخلية جنى خان (@juna_khan) — جدة، المملكة العربية السعودية

const brand = {
  name: "Juna Design",
  logo: "/sites/juna/brand/logo.webp",
  logoWidth: 60,
  logoHeight: 60,
  title: "جنى ديزاين | هندسة وتصميم داخلي",
  description:
    "جنى خان، مهندسة ومصممة داخلية في جدة (@juna_khan). تصميم داخلي ومعماري فاخر، استشارات هندسية، تنسيق إنارة وثريات، وتنفيذ متكامل يصنع مساحات تنبض بالحياة.",
};

const theme = {
  accent: "#4b95cb", // ياقوت سماوي مضيء للوضع الداكن — تباين 5.4:1 على البطاقات
  accentLight: "#2a6b9b", // ياقوت أعمق للوضع الفاتح — تباين 4.6:1 على العاجي
  accentSoft: "#8ab6dc", // سماوي فاتح للنصوص التكميلية على الكحلي
  accentSoftLight: "#2d648d", // أزرق فولاذي أعمق للنصوص التكميلية على العاجي
  secondary: "#d4af6a", // شامبانيا ذهبية من الثريات والتفاصيل المعدنية
  dark: "#07121f", // كحلي ليلي أعمق وأفخم
  light: "#f8f3ea", // عاجي دافئ مكان الأوف وايت البارد
  muted: "#93a7ba", // رمادي سماوي أفتح وأوضح على الكحلي
  mutedLight: "#55606b", // رمادي فحمي دافئ للنصوص الثانوية على العاجي
  onLight: "#0e2438", // كحلي عميق للعناوين على العاجي
};

const projects: Project[] = [
  {
    slug: "dining-chandelier-tour",
    name: "جولة غرفة الطعام الفاخرة والثريا الكريستالية",
    category: "جولة فيديو سينمائية / تصميم وتنفيذ كامل",
    image: "/sites/juna/video/tour.mp4",
    href: "#works",
  },
  {
    slug: "royal-blue-majlis",
    name: "مجلس الضيافة الملكي بنقوش الشينوازري",
    category: "تصميم داخلي وتأثيث / مجالس وصالونات",
    image: "/sites/juna/images/projects/royal-majlis.webp",
    href: "#works",
  },
  {
    slug: "contemporary-lounge",
    name: "صالون المعيشة العصري والإنارة الزجاجية المتدلية",
    category: "تصميم فراغي وتأثيث / صالونات عائلية",
    image: "/sites/juna/images/projects/contemporary-lounge.webp",
    href: "#works",
  },
  {
    slug: "dining-art-details",
    name: "مائدة الطعام الرخامية وتنسيق اللوحات الجدارية",
    category: "تنسيق طاولات وإكسسوارات / سفرة وطعام",
    image: "/sites/juna/images/projects/dining-details.webp",
    href: "#works",
  },
  {
    slug: "crystal-lighting",
    name: "هندسة الإنارة المعمارية والثريات الكريستالية",
    category: "تصميم وتوزيع إنارة / ثريات وتجهيزات",
    image: "/sites/juna/images/projects/crystal-chandelier.webp",
    href: "#works",
  },
];

const about = {
  eyebrow: "مهندسة ومصممة داخلية — جدة",
  title: "يدفعني الشغف لأشارككم إبداعاً يُصنع بكل حب",
  text: "جنى ديزاين (@juna_khan)، رؤية هندسية وتصميمية حديثة تتخذ من عروس البحر الأحمر جدة مقراً لإبداعها. ندمج بين جماليات الطراز المعاصر ونقاء التفاصيل الفاخرة، من توزيع المساحات واختيار أنظمة الإضاءة إلى تنسيق الأثاث والمواد الطبيعية، لنبتكر مساحات تعبر عن شخصيتكم وتمنحكم إحساساً دائماً بالراحة والتميز.",
};

const services = {
  outline: "خدماتنا",
  title: "حلول تصميم واستشارات هندسية متكاملة",
  eyebrow: "ماذا نقدم",
  items: [
    {
      key: "interior-design",
      icon: "sofa",
      title: "تصميم داخلي وسكني متكامل",
      text: "تصميم مخططات ثلاثية الأبعاد للفلل والقصور والشقق والمجالس الفاخرة، مع توزيع فراغي يحقق التوازن المثالي بين الجمال وسهولة الاستخدام.",
    },
    {
      key: "lighting-bespoke",
      icon: "paint-roller",
      title: "تنسيق الإنارة والثريات الفاخرة",
      text: "دراسة وتوزيع متقن للإضاءة المباشرة والمخفية واختيار الثريات الكريستالية والتحف الفنية لإضفاء أجواء ساحرة على كل زاوية.",
    },
    {
      key: "consultations-execution",
      icon: "ruler",
      title: "استشارات هندسية وديكورية",
      text: "جلسات استشارية متخصصة ومتابعة مراحل التنفيذ واختيار الخامات والألوان لضمان خروج المشروع بأعلى معايير الجودة.",
    },
  ] satisfies ServiceItem[],
};

const identity = {
  eyebrow: "فلسفتنا في التصميم",
  outline: "JUNA DESIGN",
  title: "حيث يلتقي الحس الفني بالدقة الهندسية",
  text: "في جنى ديزاين، نعتبر كل مشروع لوحة فريدة تبدأ بفهم عميق لاحتياجات العميل ورؤيته للمكان. نصمم المساحات لتكون مريحة وعملية ومترفة في آن واحد، مستندين إلى شغف لا يتوقف باكتشاف أحدث خطوط الموضة العالمية في عالم الديكور والعمارة.",
  points: [
    "تصاميم مخصصة تعكس ذوق العميل وأسلوب حياته اليومي.",
    "عناية فائقة بتفاصيل الألوان، الأقمشة، وتوزيع الإضاءة.",
    "استشارات فورية وتصاميم متقنة للفلل والمشاريع السكنية.",
    "مقرنا في جدة ونخدم كافة مدن المملكة برؤية استثنائية.",
  ],
  image: "/sites/juna/images/identity.webp",
  imageLabel: "JUNA DESIGN",
};

const testimonials = {
  eyebrow: "آراء عملائنا",
  title: "تجارب نعتز بها",
  items: [
    {
      rating: 5,
      quote:
        "التعامل مع المهندسة جنى كان تجربة ممتعة جداً. اهتمامها الدقيق بالتفاصيل وتنسيق الإضاءة والألوان حوّل مجلس الضيافة إلى تحفة فنية.",
      name: "سارة القحطاني",
      role: "فيلا خاصة — جدة",
      avatar: null,
    },
    {
      rating: 5,
      quote:
        "ذوق راقي جداً واحترافية في المواعيد. جولة الفيديو والمخططات كانت واضحة وسهّلت علينا مرحلة التنفيذ بالكامل.",
      name: "عبدالله الحربي",
      role: "مشروع سكني — مكة المكرمة",
      avatar: null,
    },
  ] satisfies TestimonialItem[],
};

const clients = {
  title: "شغف وإبداع مستمر",
  eyebrow: "مجتمعنا",
  logos: [] as { name: string; src: string }[],
};

const contact: Contact = {
  ctaEyebrow: "لنصنع مساحتك القادمة بكل حب",
  ctaTitle: "احجز استشارتك مع المهندسة جنى",
  ctaButton: "تواصل عبر واتساب",
  ctaHref: "https://wa.me/966580527500",
  whatsapp: "https://wa.me/966580527500",
  phone: "+966 58 052 7500",
  email: "",
  branches: [{ address: "جدة، المملكة العربية السعودية" }],
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/juna_khan",
    x: "",
    linkedin: "",
  },
  apps: {
    microsoft: "",
    googlePlay: "",
    appStore: "",
  },
  copyright: `© ${new Date().getFullYear()} Juna Design. جميع الحقوق محفوظة`,
};

const nav = [
  { label: "الرئيسية", href: "#top" },
  { label: "من نحن", href: "#about" },
  { label: "مشاريعنا", href: "#works" },
  { label: "خدماتنا", href: "#services" },
  { label: "فلسفتنا", href: "#identity" },
  { label: "آراء العملاء", href: "#testimonials" },
  { label: "تواصل معنا", href: "#contact" },
];

export const site: SiteData = {
  greetName: "م. جنى",
  createdAt: "2026-11-14",
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
