import { siAppstore, siFacebook, siGoogleplay, siInstagram, siSnapchat, siWhatsapp, siX } from "simple-icons";

// لوجوهات البراندات من Simple Icons.
// LinkedIn وMicrosoft Store مش موجودين في المكتبة، فمكانهم أشكال مؤقتة لحد ما توصل ملفات SVG.

type Brand =
  | "facebook"
  | "instagram"
  | "x"
  | "linkedin"
  | "whatsapp"
  | "googleplay"
  | "appstore"
  | "microsoft"
  | "snapchat";

const paths: Partial<Record<Brand, string>> = {
  facebook: siFacebook.path,
  instagram: siInstagram.path,
  x: siX.path,
  whatsapp: siWhatsapp.path,
  googleplay: siGoogleplay.path,
  appstore: siAppstore.path,
  snapchat: siSnapchat.path,
};

export default function BrandIcon({
  name,
  size = 16,
  color = "currentColor",
  title,
}: {
  name: Brand;
  size?: number;
  color?: string;
  title?: string;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: color,
    "aria-hidden": title ? undefined : true,
    role: title ? "img" : undefined,
  } as const;

  if (name === "linkedin") {
    // مؤقت: لحد ما يوصل SVG لينكدإن
    return (
      <svg {...common}>
        {title ? <title>{title}</title> : null}
        <rect x="2.5" y="9" width="4" height="12.5" rx="0.6" />
        <circle cx="4.5" cy="4.6" r="2.3" />
        <path d="M9.5 9h3.8v1.8c.6-1.1 2-2.1 4.1-2.1 3.6 0 4.1 2.4 4.1 5.4v7.4h-4v-6.5c0-1.6 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.6h-4V9z" />
      </svg>
    );
  }

  if (name === "microsoft") {
    // مؤقت: لحد ما يوصل SVG مايكروسوفت ستور
    return (
      <svg {...common}>
        {title ? <title>{title}</title> : null}
        <rect x="2" y="2" width="9.5" height="9.5" />
        <rect x="12.5" y="2" width="9.5" height="9.5" />
        <rect x="2" y="12.5" width="9.5" height="9.5" />
        <rect x="12.5" y="12.5" width="9.5" height="9.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      {title ? <title>{title}</title> : null}
      <path d={paths[name]} />
    </svg>
  );
}
