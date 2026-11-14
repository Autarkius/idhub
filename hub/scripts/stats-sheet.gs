// ===== كود جوجل شيت لتخزين زيارات مواقع العملاء =====
// الخطوات (مرة واحدة):
// 1. اعمل Google Sheet جديد.
// 2. من القايمة: Extensions > Apps Script، امسح اللي موجود والصق الملف ده كله.
// 3. Deploy > New deployment > نوع Web app
//    Execute as: Me    |    Who has access: Anyone
// 4. انسخ لينك الـ Web app وحطه في STATS_URL في hub/lib/stats-config.ts
const TOKEN = "crv_5f3847e217d33282ceb1a489";
const HEAD = ["time", "slug", "visitor", "event", "device", "country", "city", "referrer", "seconds", "scroll"];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sh = ss.getSheetByName("visits") || ss.insertSheet("visits");
  if (sh.getLastRow() === 0) sh.appendRow(HEAD);
  return sh;
}

function out_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  if (d.token !== TOKEN) return out_({ ok: false });
  sheet_().appendRow([new Date(), d.slug, d.visitor, d.event, d.device, d.country, d.city, d.referrer, d.seconds, d.scroll]);
  return out_({ ok: true });
}

function doGet(e) {
  if (e.parameter.token !== TOKEN) return out_({ ok: false });
  const rows = sheet_().getDataRange().getValues().slice(1);
  return out_({ ok: true, rows: rows });
}
