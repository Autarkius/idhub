# Corvus — مواقع العملاء

كل مواقع العملاء بقت جوه موقع واحد (hub)، وكل موقع ليه رابط فرعي خاص بيه:

- الصفحة الرئيسية: `/`
- فاتن دله: `/faten`
- مريم الموسى: `/almousa`
- أشواق: `/ashwaq`
- ديمة الحسن: `/deemah`
- ماجدان: `/maged`
- غيّداء محمد: `/ghaidaa`

الموقع الوحيد اللي بيتنشر على Vercel هو فولدر `hub/`. باقي الفولدرات القديمة (`faten-dalah-site` و `wstudio-site`) اتسابت كمرجع بس.

## التشغيل

من الفولدر الرئيسي:

```
npm install
npm run dev
```

افتح http://localhost:3000

## الفولدرات المهمة

- `hub/app/[site]/page.tsx`: الراوت الديناميكي اللي بيعرض أي موقع على `/<اسم الفولدر>`.
- `hub/sites/<slug>/site.ts`: كل محتوى وألوان وبيانات الموقع، واسم الفولدر هو الـ id في الرابط.
- `hub/sites/index.ts`: ملف بيتبني تلقائيًا من فولدرات `sites/`. متعدّلوش بإيدك.
- `hub/scripts/generate-sites.mjs`: بيعمل الملف اللي فوق، وبيشتغل تلقائيًا قبل `dev` وقبل `build`.
- `hub/components/site/`: قالب الموقع المشترك (نفس التصميم لكل المواقع).
- `hub/public/sites/<slug>/`: لوجو وصور كل موقع.
- `hub/app/page.tsx`: الصفحة الرئيسية اللي بتعرض كروت المواقع.
- `hub/app/site.css`: ستايلات القالب محصورة جوه `.siteRoot` علشان المواقع ما تأثرش على بعض.

## إضافة موقع جديد

1. انسخ فولدر قالب موجود:
   ```
   cp -r hub/sites/almousa hub/sites/noura
   ```
2. افتح `hub/sites/noura/site.ts` وغيّر:
   - `brand`: الاسم واللوجو والعنوان والوصف
   - `theme`: ألوان البراند السبعة
   - باقي المحتوى: المشاريع والخدمات وآراء العملاء والتواصل
3. حط اللوجو والصور في `hub/public/sites/noura/` واستخدم المسارات في `site.ts`، مثلاً:
   `/sites/noura/brand/logo.png`
4. شغّل `npm run dev` (أو `npm run build`). الموقع هيتسجل تلقائيًا، هيظهر في الصفحة الرئيسية، وهيبقى على `/noura`.

اسم الفولدر `noura` هو الـ id في الرابط. مفيش حاجة تتسجل بإيدك في `hub/sites/index.ts`؛ الملف ده بيتبني تلقائيًا.

## النشر على Vercel

انشر `hub` بس:

**الطريقة الأسهل (Vercel CLI):**
```
cd hub
npx vercel
npx vercel --prod
```
كده اللي بيترفع هو فولدر `hub` لوحده.

**أو من GitHub:**
1. ارفع المشروع على GitHub.
2. في Vercel اعمل Import للمشروع.
3. في إعدادات المشروع حدّد **Root Directory = `hub`**.
4. Framework Preset: **Next.js**. Build Command و Output Directory سيبهم على الافتراضي.
5. Deploy. وسمّي المشروع `hub` لو عايز الدومين يبقى `hub.vercel.app`.

مش محتاج تنشر أي موقع لوحده، ولا محتاج أي Environment Variables.
