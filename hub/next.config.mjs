/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // مواقع ثابتة متعددة الصفحات (مثل rawasi): ملفاتها HTML في public/sites/<slug>/،
  // والـ rewrites دي بتفتحها على /<slug> و /<slug>/<صفحة> من غير ما تعدّل القالب المشترك.
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/rawasi", destination: "/sites/rawasi/index.html" },
        { source: "/rawasi/:path((?!assets).*)", destination: "/sites/rawasi/:path/index.html" },
      ],
    };
  },
};

export default nextConfig;
