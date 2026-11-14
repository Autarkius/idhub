import { STATS_TOKEN, STATS_URL } from "@/lib/stats-config";

// بيستقبل الزيارة من المتصفح، يضيف الدولة والمدينة، ويبعتها للشيت.
// الـ IP نفسه ما بيتخزنش.
export async function POST(req: Request) {
  if (!STATS_URL) return new Response(null, { status: 204 });
  try {
    const d = await req.json();
    const h = req.headers;
    const row = {
      token: STATS_TOKEN,
      slug: String(d.slug ?? "").slice(0, 60),
      visitor: String(d.visitor ?? "").slice(0, 60),
      event: String(d.event ?? "").slice(0, 20),
      device: String(d.device ?? "").slice(0, 20),
      referrer: String(d.referrer ?? "").slice(0, 100),
      seconds: Number(d.seconds) || "",
      scroll: Number(d.scroll) || "",
      country: h.get("x-vercel-ip-country") ?? "",
      city: decodeURIComponent(h.get("x-vercel-ip-city") ?? ""),
    };
    await fetch(STATS_URL, { method: "POST", body: JSON.stringify(row), headers: { "Content-Type": "application/json" } });
  } catch {}
  return new Response(null, { status: 204 });
}
