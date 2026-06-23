export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "berapa-biaya-pembuatan-website-profesional",
    title: "Berapa Biaya Pembuatan Website Profesional di Indonesia?",
    excerpt: "Panduan lengkap estimasi biaya pembuatan website dari starter sampai custom, termasuk faktor yang mempengaruhi harga.",
    category: "Website",
    tags: ["biaya website", "harga website", "jasa website"],
    publishedAt: "2026-06-23",
    readTime: "8 min",
  },
  {
    slug: "kenapa-website-tidak-muncul-di-google",
    title: "Kenapa Website Tidak Muncul di Google?",
    excerpt: "Penyebab umum website tidak terindex Google dan langkah-langkah memperbaikinya dari sisi teknis dan konten.",
    category: "SEO",
    tags: ["SEO", "Google", "indexing"],
    publishedAt: "2026-06-23",
    readTime: "7 min",
  },
  {
    slug: "checklist-website-seo-friendly",
    title: "Checklist Website SEO Friendly untuk Bisnis",
    excerpt: "Checklist lengkap yang harus dipenuhi agar website bisnis kamu lebih siap ranking di Google.",
    category: "SEO",
    tags: ["SEO", "checklist", "website SEO"],
    publishedAt: "2026-06-23",
    readTime: "10 min",
  },
  {
    slug: "contoh-automation-untuk-umkm",
    title: "Contoh Automation untuk UMKM",
    excerpt: "Contoh nyata workflow automation yang bisa diterapkan UMKM untuk hemat waktu dan rapikan proses bisnis.",
    category: "Automation",
    tags: ["automation", "UMKM", "n8n"],
    publishedAt: "2026-06-23",
    readTime: "6 min",
  },
  {
    slug: "website-vs-landing-page",
    title: "Website vs Landing Page: Mana yang Cocok?",
    excerpt: "Perbedaan website dan landing page, kapan harus pakai yang mana, dan mana yang lebih efektif untuk bisnis kamu.",
    category: "Website",
    tags: ["website", "landing page", "konversi"],
    publishedAt: "2026-06-23",
    readTime: "5 min",
  },
];
