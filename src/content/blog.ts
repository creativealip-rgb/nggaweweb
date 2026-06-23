export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  content: string;
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
    content: `
<p class="text-lg leading-8 text-slate-300">Salah satu pertanyaan paling sering ditanyakan saat mau bikin website: <strong class="text-white">"Berapa harganya?"</strong> Jawabannya tergantung banyak faktor. Artikel ini bantu kamu pahami rentang biaya dan apa yang mempengaruhinya.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Rentang Harga Umum</h2>
<ul class="space-y-3 text-slate-300">
  <li><strong class="text-white">Landing Page (1 halaman):</strong> Rp 1–5 juta. Cocok untuk campaign atau product launch.</li>
  <li><strong class="text-white">Company Profile (5–10 halaman):</strong> Rp 5–15 juta. Standar untuk bisnis jasa dan UMKM.</li>
  <li><strong class="text-white">Website Custom + CMS:</strong> Rp 15–50 juta. Untuk bisnis yang butuh blog, portofolio, atau integrasi sistem.</li>
  <li><strong class="text-white">Web App / SaaS:</strong> Rp 50 juta+. Aplikasi web dengan login, dashboard, dan fitur kompleks.</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Faktor yang Mempengaruhi Harga</h2>
<h3 class="text-xl font-bold text-cyan-300 mt-6 mb-2">1. Jumlah Halaman</h3>
<p class="text-slate-300 leading-7">Makin banyak halaman, makin banyak waktu desain dan development. Homepage, About, Services, Portfolio, Kontak — setiap halaman butuh desain dan konten tersendiri.</p>

<h3 class="text-xl font-bold text-cyan-300 mt-6 mb-2">2. Desain Custom vs Template</h3>
<p class="text-slate-300 leading-7">Template lebih murah tapi terlihat generik. Desain custom lebih mahal tapi bikin bisnis terlihat profesional dan beda dari kompetitor.</p>

<h3 class="text-xl font-bold text-cyan-300 mt-6 mb-2">3. Fitur dan Integrasi</h3>
<p class="text-slate-300 leading-7">Form kontak biasa murah. Tapi kalau butuh payment gateway, CRM integration, booking system, atau automation — biaya naik karena complexity development.</p>

<h3 class="text-xl font-bold text-cyan-300 mt-6 mb-2">4. SEO Setup</h3>
<p class="text-slate-300 leading-7">Website tanpa SEO setup itu seperti toko tanpa papan nama. Technical SEO, meta tags, schema markup, dan struktur URL yang benar butuh waktu ekstra tapi hasilnya jangka panjang.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Biaya Tersembunyi yang Sering Dilupakan</h2>
<ul class="space-y-3 text-slate-300">
  <li><strong class="text-white">Domain:</strong> Rp 150–300 ribu/tahun (.com atau .id)</li>
  <li><strong class="text-white">Hosting:</strong> Rp 500 ribu – 3 juta/tahun tergantung traffic</li>
  <li><strong class="text-white">SSL Certificate:</strong> Gratis (Let's Encrypt) atau Rp 500 ribu+/tahun</li>
  <li><strong class="text-white">Maintenance:</strong> Update content, backup, security patch</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Tips Hemat Budget</h2>
<p class="text-slate-300 leading-7">Mulai dari yang essential. Homepage + layanan + kontak sudah cukup untuk mulai. Tambah halaman lain seiring bisnis berkembang. Yang penting: fondasi SEO harus benar dari awal supaya tidak rebuild nanti.</p>

<p class="text-lg leading-8 text-slate-300 mt-10">Mau estimasi biaya untuk project kamu? Coba <a href="/tools/website-cost-calculator" class="text-cyan-300 underline hover:text-cyan-200">Website Cost Calculator</a> kami atau <a href="/brief-project" class="text-cyan-300 underline hover:text-cyan-200">isi brief project</a> untuk estimasi gratis.</p>
`,
  },
  {
    slug: "kenapa-website-tidak-muncul-di-google",
    title: "Kenapa Website Tidak Muncul di Google?",
    excerpt: "Penyebab umum website tidak terindex Google dan langkah-langkah memperbaikinya dari sisi teknis dan konten.",
    category: "SEO",
    tags: ["SEO", "Google", "indexing"],
    publishedAt: "2026-06-23",
    readTime: "7 min",
    content: `
<p class="text-lg leading-8 text-slate-300">Sudah bikin website tapi kalau dicari di Google tidak ketemu? Ini masalah umum dan biasanya penyebabnya teknis. Berikut alasan paling sering dan cara memperbaikinya.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">1. Belum di-Submit ke Google</h2>
<p class="text-slate-300 leading-7">Google tidak otomatis tahu website baru ada. Kamu perlu submit sitemap ke Google Search Console. Tanpa ini, Google bisa butuh berminggu-minggu untuk menemukan website kamu.</p>
<p class="text-slate-300 leading-7 mt-3"><strong class="text-white">Fix:</strong> Daftar Google Search Console, verifikasi domain, submit sitemap.xml.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">2. Robots.txt Block</h2>
<p class="text-slate-300 leading-7">File robots.txt yang salah konfigurasi bisa memblokir Google dari meng-crawl website. Cek apakah ada <code class="text-cyan-300">Disallow: /</code> yang memblokir semua halaman.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">3. Tidak Ada Meta Tags yang Relevan</h2>
<p class="text-slate-300 leading-7">Google butuh title tag dan meta description yang jelas untuk memahami halaman kamu. Tanpa ini, Google tidak tahu halaman ini tentang apa dan untuk siapa.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">4. Konten Terlalu Tipis</h2>
<p class="text-slate-300 leading-7">Halaman dengan cuma 2–3 kalimat tidak cukup untuk Google. Konten yang baik minimal 300+ kata, terstruktur dengan heading (H1, H2, H3), dan menjawab pertanyaan pencari.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">5. Loading Lambat</h2>
<p class="text-slate-300 leading-7">Google menggunakan page speed sebagai ranking factor. Website yang lambat (3+ detik) tidak hanya ranking rendah tapi juga visitor langsung pergi.</p>
<p class="text-slate-300 leading-7 mt-3"><strong class="text-white">Fix:</strong> Optimasi gambar, gunakan CDN, minimalisir JavaScript, pakai framework modern seperti Next.js.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">6. Tidak Mobile-Friendly</h2>
<p class="text-slate-300 leading-7">Google pakai mobile-first indexing. Kalau website tidak responsive di HP, ranking otomatis turun.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Cara Cek Apakah Website Terindex</h2>
<p class="text-slate-300 leading-7">Ketik <code class="text-cyan-300">site:domainkamu.com</code> di Google. Kalau tidak ada hasil, website belum terindex.</p>

<p class="text-lg leading-8 text-slate-300 mt-10">Butuh bantuan audit SEO? <a href="/audit-gratis" class="text-cyan-300 underline hover:text-cyan-200">Gunakan audit gratis</a> kami atau <a href="/jasa-seo" class="text-cyan-300 underline hover:text-cyan-200">lihat layanan SEO</a> kami.</p>
`,
  },
  {
    slug: "checklist-website-seo-friendly",
    title: "Checklist Website SEO Friendly untuk Bisnis",
    excerpt: "Checklist lengkap yang harus dipenuhi agar website bisnis kamu lebih siap ranking di Google.",
    category: "SEO",
    tags: ["SEO", "checklist", "website SEO"],
    publishedAt: "2026-06-23",
    readTime: "10 min",
    content: `
<p class="text-lg leading-8 text-slate-300">Mau website yang langsung siap ranking? Ini checklist yang harus dipenuhi sebelum launch. Simpan artikel ini sebagai panduan.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Technical SEO</h2>
<ul class="space-y-3 text-slate-300">
  <li>✅ <strong class="text-white">SSL/HTTPS aktif</strong> — URL harus https://, bukan http://</li>
  <li>✅ <strong class="text-white">Mobile responsive</strong> — Tampilan rapi di semua ukuran layar</li>
  <li>✅ <strong class="text-white">Page speed &lt; 3 detik</strong> — Cek di PageSpeed Insights</li>
  <li>✅ <strong class="text-white">Sitemap.xml ada</strong> — Submit ke Google Search Console</li>
  <li>✅ <strong class="text-white">Robots.txt benar</strong> — Tidak blokir halaman penting</li>
  <li>✅ <strong class="text-white">Canonical URL</strong> — Hindari duplicate content</li>
  <li>✅ <strong class="text-white">Structured data (Schema)</strong> — Bantu Google pahami konten</li>
  <li>✅ <strong class="text-white">Clean URL structure</strong> — /jasa-website bukan /page?id=123</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">On-Page SEO</h2>
<ul class="space-y-3 text-slate-300">
  <li>✅ <strong class="text-white">H1 tag unik per halaman</strong> — Satu H1, bukan banyak</li>
  <li>✅ <strong class="text-white">Title tag 50-60 karakter</strong> — Include keyword utama</li>
  <li>✅ <strong class="text-white">Meta description 150-160 karakter</strong> — Deskripsi yang mengundang klik</li>
  <li>✅ <strong class="text-white">Heading hierarchy</strong> — H1 → H2 → H3 berurutan</li>
  <li>✅ <strong class="text-white">Alt text di semua gambar</strong> — Deskripsi gambar untuk Google</li>
  <li>✅ <strong class="text-white">Internal linking</strong> — Hubungkan halaman satu sama lain</li>
  <li>✅ <strong class="text-white">Konten minimal 300 kata per halaman</strong> — Lebih banyak = lebih baik</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Local SEO (untuk Bisnis Lokal)</h2>
<ul class="space-y-3 text-slate-300">
  <li>✅ <strong class="text-white">Google Business Profile</strong> — Klaim dan optimasi</li>
  <li>✅ <strong class="text-white">NAP konsisten</strong> — Nama, Alamat, Telepon sama di semua tempat</li>
  <li>✅ <strong class="text-white">Halaman kontak lengkap</strong> — Alamat, peta, jam operasional</li>
  <li>✅ <strong class="text-white">Schema LocalBusiness</strong> — Bantu Google tahu lokasi kamu</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Content Strategy</h2>
<p class="text-slate-300 leading-7">Website tanpa konten berkala stagnan. Minimal 1-2 artikel per bulan yang relevan dengan bisnis kamu. Fokus pada pertanyaan yang sering ditanyakan customer.</p>

<p class="text-lg leading-8 text-slate-300 mt-10">Mau cek apakah website kamu sudah SEO-friendly? <a href="/audit-gratis" class="text-cyan-300 underline hover:text-cyan-200">Gunakan audit gratis</a> kami.</p>
`,
  },
  {
    slug: "contoh-automation-untuk-umkm",
    title: "Contoh Automation untuk UMKM",
    excerpt: "Contoh nyata workflow automation yang bisa diterapkan UMKM untuk hemat waktu dan rapikan proses bisnis.",
    category: "Automation",
    tags: ["automation", "UMKM", "n8n"],
    publishedAt: "2026-06-23",
    readTime: "6 min",
    content: `
<p class="text-lg leading-8 text-slate-300">Automation bukan cuma untuk perusahaan besar. UMKM juga bisa mulai dari hal kecil yang dampaknya besar. Berikut contoh nyata yang bisa diterapkan.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">1. Auto-Reply WhatsApp saat Form Diisi</h2>
<p class="text-slate-300 leading-7">Customer isi form di website → otomatis dapat WhatsApp confirmation → kamu dapat notifikasi di email atau spreadsheet. Tidak perlu balas manual satu-satu.</p>
<p class="text-slate-300 leading-7 mt-3"><strong class="text-white">Tools:</strong> n8n / Google Forms + WhatsApp API</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">2. Follow-Up Lead Otomatis</h2>
<p class="text-slate-300 leading-7">Lead baru masuk → tunggu 24 jam → kalau belum dihubungi, kirim reminder ke sales. Atau kirim email follow-up otomatis ke customer yang belum closing.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">3. Invoice Otomatis</h2>
<p class="text-slate-300 leading-7">Project selesai → invoice otomatis dibuat → dikirim ke customer via email → reminder otomatis kalau belum bayar dalam 7 hari.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">4. Laporan Mingguan Otomatis</h2>
<p class="text-slate-300 leading-7">Setiap Senin pagi → data dari Google Sheets / database → jadi laporan singkat → dikirim ke email atau WhatsApp. Tanpa buka laptop.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">5. Social Media Scheduling</h2>
<p class="text-slate-300 leading-7">Upload konten sekaligus → schedule posting ke Instagram, Facebook, LinkedIn sesuai waktu optimal. Satu kali setup, jalan terus.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Mulai dari Mana?</h2>
<p class="text-slate-300 leading-7">Identifikasi 1 proses yang paling makan waktu dan sering diulang. Mulai dari situ. Biasanya: lead management dan follow-up. Dampaknya langsung terasa ke revenue.</p>

<p class="text-lg leading-8 text-slate-300 mt-10">Butuh bantuan setup automation? <a href="/jasa-automation" class="text-cyan-300 underline hover:text-cyan-200">Lihat layanan automation</a> kami atau <a href="/kontak" class="text-cyan-300 underline hover:text-cyan-200">hubungi langsung</a>.</p>
`,
  },
  {
    slug: "website-vs-landing-page",
    title: "Website vs Landing Page: Mana yang Cocok?",
    excerpt: "Perbedaan website dan landing page, kapan harus pakai yang mana, dan mana yang lebih efektif untuk bisnis kamu.",
    category: "Website",
    tags: ["website", "landing page", "konversi"],
    publishedAt: "2026-06-23",
    readTime: "5 min",
    content: `
<p class="text-lg leading-8 text-slate-300">Bingung harus bikin website lengkap atau landing page saja? Keduanya punya fungsi berbeda. Pilih yang tepat sesuai kebutuhan bisnis kamu.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Apa itu Landing Page?</h2>
<p class="text-slate-300 leading-7">Landing page adalah satu halaman dengan satu tujuan: <strong class="text-white">konversi</strong>. Pengunjung datang, baca informasi, dan ambil aksi (isi form, beli, daftar). Tidak ada navigasi ke halaman lain.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Apa itu Website?</h2>
<p class="text-slate-300 leading-7">Website adalah kumpulan halaman yang saling terhubung. Homepage, About, Services, Blog, Kontak. Tujuannya membangun presence dan trust jangka panjang.</p>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Kapan Pakai Landing Page?</h2>
<ul class="space-y-3 text-slate-300">
  <li>🎯 Kampanye iklan spesifik (Google Ads, Meta Ads)</li>
  <li>🎯 Product launch atau promo terbatas</li>
  <li>🎯 Testing market sebelum bikin full website</li>
  <li>🎯 Budget terbatas tapi butuh online presence cepat</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Kapan Pakai Website?</h2>
<ul class="space-y-3 text-slate-300">
  <li>🏢 Bisnis jasa yang butuh trust (company profile)</li>
  <li>🏢 Banyak layanan yang perlu dijelaskan terpisah</li>
  <li>🏢 Butuh blog untuk SEO jangka panjang</li>
  <li>🏢 Ingin ditemukan di Google untuk banyak keyword</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Perbandingan Cepat</h2>
<ul class="space-y-3 text-slate-300">
  <li><strong class="text-white">Biaya:</strong> Landing page lebih murah (1 halaman vs banyak)</li>
  <li><strong class="text-white">Waktu:</strong> Landing page bisa selesai 1–3 hari, website 1–4 minggu</li>
  <li><strong class="text-white">SEO:</strong> Website jauh lebih kuat untuk organic traffic</li>
  <li><strong class="text-white">Konversi:</strong> Landing page lebih tinggi (fokus satu tujuan)</li>
  <li><strong class="text-white">Trust:</strong> Website lebih meyakinkan untuk bisnis serius</li>
</ul>

<h2 class="font-heading text-2xl font-bold text-white mt-10 mb-4">Rekomendasi</h2>
<p class="text-slate-300 leading-7">Kalau baru mulai dan budget terbatas: landing page dulu. Kalau bisnis sudah jalan dan butuh credibility: website lengkap. Yang terbaik: <strong class="text-white">keduanya</strong>. Website sebagai base, landing page untuk campaign spesifik.</p>

<p class="text-lg leading-8 text-slate-300 mt-10">Bingung pilih yang mana? <a href="/brief-project" class="text-cyan-300 underline hover:text-cyan-200">Isi brief project</a> kami dan kami bantu rekomendasi yang tepat.</p>
`,
  },
];
