# Hub — كل مواقع العملاء في تطبيق واحد

ده التطبيق الوحيد اللي بيتنشر على Vercel. كل موقع عميل بيتعرض على رابط فرعي:

- `/` — صفحة المواقع
- `/faten` — موقع فاتن دله
- `/almousa` — موقع مريم الموسى
- `/ashwaq` — موقع أشواق
- `/deemah` — موقع ديمة الحسن
- `/maged` — موقع ماجدان
- `/ghaidaa` — موقع غيّداء محمد

## التشغيل

من الفولدر الرئيسي للمشروع:

```
npm install
npm run dev
```

أو من الفولدر ده مباشرة:

```
npm install
npm run dev
```

ثم افتح http://localhost:3000

## إضافة موقع

1. انسخ `sites/almousa` إلى `sites/noura`.
2. عدّل `sites/noura/site.ts`: `brand` و `theme` وباقي المحتوى.
3. حط الصور في `public/sites/noura/`.
4. شغّل `npm run dev` (أو `npm run build`).

اسم الفولدر هو الـ id في الرابط (`noura` ⇒ `/noura`). السكريبت
`scripts/generate-sites.mjs` بيبني `sites/index.ts` تلقائيًا قبل `dev` وقبل `build`،
فمش محتاج تسجل الموقع بإيدك.

الراوت `app/[site]/page.tsx` بيقرأ من السجل ده، وبيعمل صفحة static لكل موقع
عبر `generateStaticParams`. أي اسم مش موجود في `sites/` بيرجع 404.

## النشر

انشر الفولدر ده لوحده:

```
cd hub
npx vercel
npx vercel --prod
```

أو من Vercel: **Root Directory = `hub`** و Framework Preset = Next.js.
سمّي المشروع `hub` لو عايز الدومين يبقى `hub.vercel.app`. مفيش Environment Variables مطلوبة.
