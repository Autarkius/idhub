"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// تتبع زيارات مواقع العملاء: كل جهاز ليه رقم ثابت، فبنعرف كام جهاز مختلف فتح كل موقع.
// زيارات الفريق ما بتتحسبش: أي جهاز فتح قايمة المواقع السرية مرة بيتعلّم إنه بتاعنا.
export const TEAM_FLAG = "crv-team";
const VISITOR_KEY = "crv-vid";

type Payload = { slug: string; visitor: string; event: string; device: string; referrer: string; seconds?: number; scroll?: number };

function send(data: Payload) {
  const body = JSON.stringify(data);
  if (!navigator.sendBeacon?.("/api/track", new Blob([body], { type: "application/json" }))) {
    fetch("/api/track", { method: "POST", body, keepalive: true }).catch(() => {});
  }
}

export default function TrackVisits() {
  const pathname = usePathname();

  useEffect(() => {
    const slug = pathname.split("/").filter(Boolean)[0];
    if (!slug || slug.startsWith("crv-")) return;
    let visitor = "";
    try {
      if (localStorage.getItem(TEAM_FLAG) === "1") return;
      visitor = localStorage.getItem(VISITOR_KEY) ?? "";
      if (!visitor) {
        visitor = crypto.randomUUID();
        localStorage.setItem(VISITOR_KEY, visitor);
      }
    } catch {
      return;
    }

    const base = {
      slug,
      visitor,
      device: /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? "mobile" : "desktop",
      referrer: document.referrer ? new URL(document.referrer).hostname : "",
    };
    const start = Date.now();
    let maxScroll = 0;
    let left = false;

    send({ ...base, event: "view" });

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - innerHeight;
      if (h > 0) maxScroll = Math.max(maxScroll, Math.round((scrollY / h) * 100));
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (a && /wa\.me|wa\.link|whatsapp/i.test(a.href)) send({ ...base, event: "whatsapp" });
    };
    const onLeave = () => {
      if (left) return;
      left = true;
      send({ ...base, event: "leave", seconds: Math.round((Date.now() - start) / 1000), scroll: maxScroll });
    };

    addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick);
    addEventListener("pagehide", onLeave);
    return () => {
      onLeave();
      removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      removeEventListener("pagehide", onLeave);
    };
  }, [pathname]);

  return null;
}
