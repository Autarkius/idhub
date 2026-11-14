import type { Metadata, Viewport } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { notFound } from "next/navigation";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Works from "@/components/site/Works";
import Services from "@/components/site/Services";
import Identity from "@/components/site/Identity";
import Testimonials from "@/components/site/Testimonials";
import Clients from "@/components/site/Clients";
import Footer from "@/components/site/Footer";
import FloatingUI from "@/components/site/FloatingUI";
import { siteThemeStyle } from "@/lib/site";
import { siteList, sites } from "@/sites";

type Params = { params: Promise<{ site: string }> };

// كل فولدر جوه sites/ فيه site.ts بيبقى صفحة على /<اسم الفولدر> تلقائيًا.
export function generateStaticParams() {
  return siteList.map(({ slug }) => ({ site: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { site: slug } = await params;
  const site = sites[slug];
  if (!site) return {};
  // صورة المعاينة اللي بتظهر لما الرابط يتبعت على واتساب: public/sites/<slug>/og.jpg
  // لو مش موجودة بيستخدم اللوجو.
  const ogPath = `/sites/${slug}/og.jpg`;
  const image = existsSync(join(process.cwd(), "public", ogPath))
    ? { url: ogPath, width: 1200, height: 630 }
    : { url: site.brand.logo };
  return {
    title: site.brand.title,
    description: site.brand.description,
    openGraph: {
      type: "website",
      url: `/${slug}`,
      title: site.brand.title,
      description: site.brand.description,
      siteName: site.brand.name,
      locale: "ar_SA",
      images: [image],
    },
    twitter: { card: "summary_large_image", images: [image.url] },
  };
}

export async function generateViewport({ params }: Params): Promise<Viewport> {
  const { site: slug } = await params;
  return { themeColor: sites[slug]?.theme.dark ?? "#0d0d0d" };
}

export default async function SitePage({ params }: Params) {
  const { site: slug } = await params;
  const site = sites[slug];
  if (!site) notFound();

  return (
    <div className="siteRoot" style={siteThemeStyle(site.theme)}>
      <Header site={site} />
      <main>
        <Hero projects={site.projects} />
        <About about={site.about} />
        <Works brand={site.brand} projects={site.projects} />
        <Services services={site.services} />
        <Identity identity={site.identity} />
        <Testimonials testimonials={site.testimonials} />
        <Clients clients={site.clients} />
      </main>
      <Footer contact={site.contact} />
      <FloatingUI contact={site.contact} slug={slug} />
    </div>
  );
}
