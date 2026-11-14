// إعدادات الإحصائيات: الزيارات بتتخزن في جدول "زيارات المواقع" في نوشن.
// المفتاح السري (NOTION_TOKEN) مش مكتوب هنا. بيتحط في:
//   - على جهازك: ملف hub/.env.local  (سطر واحد: NOTION_TOKEN=المفتاح)
//   - على فيرسل: Settings > Environment Variables
// لو المفتاح مش موجود، التتبع بيقف لوحده والمواقع بتشتغل عادي.
export const NOTION_DB_ID = "418f4324379981e5992fde4ef654f8ec";
export const NOTION_VERSION = "2022-06-28";

export function notionToken() {
  return process.env.NOTION_TOKEN ?? "";
}

export function notionHeaders() {
  return {
    Authorization: `Bearer ${notionToken()}`,
    "Notion-Version": NOTION_VERSION,
    "Content-Type": "application/json",
  };
}
