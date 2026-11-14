import { NOTION_DB_ID, notionHeaders, notionToken } from "@/lib/stats-config";

// بيستقبل الزيارة من المتصفح، يضيف الدولة والمدينة، ويكتبها سطر في جدول نوشن.
// الـ IP نفسه ما بيتخزنش.
const EVENTS: Record<string, string> = { view: "فتح", whatsapp: "واتساب", leave: "خروج" };
const DEVICES: Record<string, string> = { mobile: "موبايل", desktop: "كمبيوتر" };

const text = (v: unknown) => ({ rich_text: [{ text: { content: String(v ?? "").slice(0, 200) } }] });
const select = (v?: string) => (v ? { select: { name: v } } : { select: null });

export async function POST(req: Request) {
  if (!notionToken()) return new Response(null, { status: 204 });
  try {
    const d = await req.json();
    const h = req.headers;
    const seconds = Number(d.seconds);
    const scroll = Number(d.scroll);
    await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: notionHeaders(),
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties: {
          "الموقع": { title: [{ text: { content: String(d.slug ?? "").slice(0, 60) } }] },
          "الجهاز": text(String(d.visitor ?? "").slice(0, 60)),
          "الحدث": select(EVENTS[d.event]),
          "نوع الجهاز": select(DEVICES[d.device]),
          "البلد": text(h.get("x-vercel-ip-country") ?? ""),
          "المدينة": text(decodeURIComponent(h.get("x-vercel-ip-city") ?? "")),
          "جاي من": text(d.referrer),
          "المدة بالثواني": { number: Number.isFinite(seconds) && d.event === "leave" ? seconds : null },
          "النزول %": { number: Number.isFinite(scroll) && d.event === "leave" ? scroll : null },
        },
      }),
    });
  } catch {}
  return new Response(null, { status: 204 });
}
