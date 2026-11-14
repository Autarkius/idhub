import type { CSSProperties } from "react";

// لون واحد بس وبيطلعلك الثيم كامل
export { generateTheme } from "./generate-theme";

// شكل بيانات أي موقع عميل. أي موقع جديد بيتكتب بنفس الشكل ده.
export type SiteTheme = {
  accent: string;
  accentSoft: string;
  secondary: string;
  dark: string;
  light: string;
  muted: string;
  onLight: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  image: string | null;
  href: string;
};

export type ServiceItem = {
  key: string;
  icon: string;
  title: string;
  text: string;
};

export type TestimonialItem = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
};

export type Branch = { address: string; zip?: string; map?: string };

export type Contact = {
  ctaEyebrow: string;
  ctaTitle: string;
  ctaButton: string;
  ctaHref: string;
  whatsapp: string;
  phone?: string;
  email: string;
  branches: Branch[];
  social: { facebook: string; instagram: string; x: string; linkedin: string };
  apps: { microsoft: string; googlePlay: string; appStore: string };
  copyright: string;
};

export type SiteData = {
  // تاريخ عمل الموقع: "2026-11-14"، أو "2026-11" لو اليوم مش معروف.
  // الصفحة الرئيسية بترتب وتفلتر المواقع بيه.
  createdAt?: string;
  // اسم المناداة في رسالة واتساب، مثلاً "م. عبير". لو فاضي الرسالة بتبدأ بـ "تفضلي،"
  greetName?: string;
  // لو true، الموقع يبدأ داكن دايمًا ويتجاهل أي وضع فاتح محفوظ.
  startDark?: boolean;
  brand: {
    name: string;
    logo: string;
    logoWidth: number;
    logoHeight: number;
    title: string;
    description: string;
  };
  // ألوان البراند — بديل app/brand.css في النسخة القديمة
  theme: SiteTheme;
  projects: Project[];
  about: { eyebrow: string; title: string; text: string };
  services: { outline: string; title: string; eyebrow: string; items: ServiceItem[] };
  identity: {
    eyebrow: string;
    outline: string;
    title: string;
    text: string;
    points: string[];
    image: string | null;
    imageLabel: string;
  };
  testimonials: { eyebrow: string; title: string; items: TestimonialItem[] };
  clients: { title: string; eyebrow: string; logos: { name: string; src: string }[] };
  contact: Contact;
  nav: { label: string; href: string }[];
};

// بتحوّل ألوان الموقع لمتغيرات CSS على غلاف الصفحة.
// كده كل موقع بياخد ثيمه لوحده من غير ما يأثر على الـ hub أو على أي موقع تاني.
export function siteThemeStyle(theme: SiteTheme): CSSProperties {
  return {
    "--brand-accent": theme.accent,
    "--brand-accent-soft": theme.accentSoft,
    "--brand-secondary": theme.secondary,
    "--brand-dark": theme.dark,
    "--brand-light": theme.light,
    "--brand-muted": theme.muted,
    "--brand-on-light": theme.onLight,
  } as CSSProperties;
}
