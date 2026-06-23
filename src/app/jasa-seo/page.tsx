import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa SEO dan Optimasi Website untuk Bisnis — Nggawe Web",
  description:
    "Jasa SEO untuk membantu website lebih siap ranking di Google melalui technical SEO, keyword mapping, service page SEO, local SEO, dan content strategy.",
  openGraph: {
    title: "Jasa SEO dan Optimasi Website untuk Bisnis — Nggawe Web",
    description:
      "Jasa SEO untuk membantu website lebih siap ranking di Google melalui technical SEO, keyword mapping, service page SEO, local SEO, dan content strategy.",
  },
};

const data = {
  eyebrow: "Jasa SEO",
  h1: "Bantu calon customer menemukan bisnis kamu di Google.",
  subheadline:
    "Nggawe Web bantu susun fondasi SEO dari struktur website, keyword map, technical setup, service pages, sampai strategi konten lokal.",
  primaryCta: { label: "Audit SEO Gratis", href: "/audit-gratis" },
  secondaryCta: { label: "Lihat SEO Plan", href: whatsappHref },
  problems: [
    { title: "Tidak muncul di Google", body: "Website sudah ada tapi tidak pernah muncul di hasil pencarian." },
    { title: "Traffic sepi", body: "Tidak ada pengunjung organik dari search engine." },
    { title: "Kalah saing kompetitor", body: "Kompetitor muncul duluan di Google padahal layanan kamu lebih bagus." },
    { title: "SEO hanya pasang plugin", body: "Plugin SEO saja tidak cukup tanpa strategi konten dan struktur yang benar." },
    { title: "Tidak tahu keyword yang tepat", body: "Tidak riset keyword, konten jadi tidak relevan dengan yang dicari customer." },
    { title: "Tidak ada tracking", body: "Tidak tahu dari mana traffic datang dan halaman mana yang performa." },
  ],
  valueProp: {
    heading: "SEO bukan sekadar plugin. SEO butuh sistem.",
    body: "Kami bantu riset keyword, susun struktur halaman, optimasi technical SEO, dan siapkan konten awal agar website punya fondasi organic growth yang kuat.",
  },
  deliverables: [
    "Keyword research & mapping",
    "Technical SEO audit",
    "Metadata optimization (title & description)",
    "Service page SEO structure",
    "Local SEO setup",
    "Schema markup (JSON-LD)",
    "Sitemap & robots.txt",
    "Google Search Console setup",
    "Blog topic plan & cluster strategy",
    "Monthly SEO report template",
  ],
  processSteps: [
    { title: "Audit", body: "Cek kondisi website saat ini: technical, content, dan struktur." },
    { title: "Research", body: "Riset keyword, competitor, dan search intent lokal." },
    { title: "Optimize", body: "Perbaiki technical SEO, metadata, schema, dan struktur halaman." },
    { title: "Grow", body: "Publish konten, build internal links, dan monitor ranking." },
  ],
  portfolioItems: [
    { name: "Ganesha Travel", description: "Website travel dengan SEO structure dan local optimization." },
    { name: "Whale Dive Centre", description: "Website tourism dengan technical SEO dan content strategy." },
    { name: "Monev.app", description: "Platform SaaS dengan SEO-friendly architecture." },
  ],
  pillarSections: [
    { title: "Apa itu jasa SEO dan kenapa bisnis membutuhkannya?", body: "Jasa SEO adalah layanan optimasi website agar lebih mudah ditemukan di Google untuk keyword yang dicari calon pelanggan. SEO mencakup technical SEO, struktur halaman, riset keyword, optimasi konten, internal link, local SEO, dan monitoring performa.", points: ["SEO membantu bisnis mendapatkan traffic organik tanpa terus bergantung pada iklan.", "SEO membangun aset jangka panjang lewat konten dan struktur website.", "SEO mempertemukan halaman layanan dengan search intent calon pelanggan."] },
    { title: "Komponen utama SEO modern", body: "SEO modern tidak cukup dengan memasang plugin. Google menilai kualitas konten, pengalaman pengguna, struktur internal link, kecepatan, mobile usability, schema, dan sinyal kepercayaan. Untuk bisnis jasa, halaman layanan dan artikel pendukung harus saling terhubung dalam topic cluster.", points: ["Technical SEO: speed, sitemap, canonical, robots, indexability.", "On-page SEO: title, heading, keyword, konten, FAQ, CTA.", "Content SEO: blog cluster yang menjawab pertanyaan calon pelanggan.", "Local SEO: Google Business Profile, review, lokasi, dan NAP konsisten."] },
    { title: "Strategi SEO untuk dapat lead", body: "Tujuan SEO bisnis bukan traffic kosong. Targetnya adalah visitor yang punya intent jelas: mencari vendor, membandingkan harga, mencari solusi, atau butuh konsultasi. Karena itu keyword harus dipetakan ke halaman yang tepat: service page untuk keyword transaksional, artikel untuk keyword informasional.", points: ["Keyword transaksional diarahkan ke halaman layanan.", "Keyword informasional dibuat sebagai artikel pendukung.", "Artikel cluster link balik ke halaman jasa SEO.", "CTA ditempatkan setelah edukasi dan FAQ."] },
    { title: "Cara mengukur keberhasilan SEO", body: "SEO perlu diukur dengan data, bukan feeling. Gunakan Google Search Console untuk melihat query, impression, CTR, posisi rata-rata, dan halaman yang mulai naik. Halaman yang sudah muncul di posisi 8-20 biasanya jadi prioritas optimasi karena paling dekat ke page 1.", points: ["Pantau indexed pages dan coverage issue.", "Optimasi artikel yang ranking page 2.", "Naikkan CTR dengan title dan meta description lebih kuat.", "Tambahkan internal link dari halaman yang sudah punya traffic."] },
    { title: "Paket SEO dan estimasi biaya", body: "Biaya jasa SEO bergantung pada kondisi website, jumlah keyword, tingkat kompetisi, kebutuhan konten, dan target lokasi. SEO setup biasanya fokus pada audit, metadata, sitemap, schema, dan struktur halaman. SEO bulanan mencakup riset keyword, konten, internal link, optimasi halaman yang sudah ranking, dan laporan performa.", points: ["SEO setup: cocok untuk website baru yang butuh fondasi.", "SEO bulanan: cocok untuk bisnis yang ingin growth organik konsisten.", "Local SEO: cocok untuk bisnis berbasis area dan Google Maps.", "Content SEO: cocok untuk membangun topical authority."] },
    { title: "Timeline hasil SEO yang realistis", body: "SEO bukan channel instan. Keyword low competition bisa mulai terlihat dalam 2-8 minggu setelah index. Keyword medium biasanya 3-6 bulan. Keyword besar seperti jasa pembuatan website atau jasa SEO bisa butuh 6-12 bulan karena kompetisi tinggi dan butuh authority.", points: ["Bulan 1: audit, fixing technical, keyword map, publish konten awal.", "Bulan 2-3: index, impression mulai muncul, optimasi CTR.", "Bulan 4-6: artikel low-medium mulai masuk page 1 atau page 2.", "Bulan 6-12: compete keyword utama lewat authority dan backlink."] },
    { title: "Apa yang dikerjakan tiap bulan", body: "SEO bulanan yang sehat harus punya aktivitas jelas. Bukan sekadar kirim laporan. Setiap bulan perlu ada analisis GSC, optimasi halaman existing, publikasi konten baru, internal linking, technical check, dan rekomendasi berdasarkan query yang mulai muncul.", points: ["Review GSC: impression, click, CTR, average position.", "Update konten yang ranking posisi 8-20.", "Tambah internal link dari halaman relevan.", "Buat artikel dari People Also Ask dan query long-tail."] },
    { title: "KPI SEO yang benar", body: "Ranking penting, tapi bukan satu-satunya KPI. Untuk bisnis, SEO harus diukur dari indexed pages, impressions, clicks, CTR, ranking keyword, leads, dan conversion rate. Artikel dengan traffic tinggi tapi tanpa lead perlu diperbaiki CTA dan intent-nya.", points: ["Impression menunjukkan halaman mulai dipercaya Google.", "CTR menunjukkan title dan meta description menarik.", "Average position menunjukkan peluang optimasi ranking.", "Lead dan WhatsApp click menunjukkan dampak bisnis."] },
    { title: "Perbedaan SEO teknis, on-page, content, dan off-page", body: "SEO teknis memastikan website bisa di-crawl dan diindex dengan baik. On-page SEO memastikan tiap halaman punya struktur dan metadata yang jelas. Content SEO membangun topical authority lewat artikel yang saling terhubung. Off-page SEO membangun reputasi lewat backlink, brand mention, citation, dan sinyal kepercayaan lain.", points: ["Technical SEO: speed, sitemap, robots, canonical, schema.", "On-page SEO: title, H1, heading, internal link, keyword intent.", "Content SEO: pillar page, cluster article, FAQ, dan update rutin.", "Off-page SEO: backlink relevan, directory, PR, dan brand mention."] },
    { title: "Cara memilih keyword yang bisa menghasilkan lead", body: "Keyword SEO bisnis harus dipilih berdasarkan intent, bukan volume saja. Keyword besar bisa membawa banyak traffic, tapi keyword long-tail sering lebih dekat ke keputusan beli. Contohnya “jasa SEO” luas dan kompetitif, sedangkan “jasa SEO UMKM” atau “jasa SEO bulanan” lebih spesifik dan lebih mudah dikonversi.", points: ["Pisahkan keyword informasional dan transaksional.", "Prioritaskan keyword yang relevan dengan layanan yang dijual.", "Cari keyword long-tail dari People Also Ask dan Search Console.", "Buat halaman berbeda untuk intent yang berbeda agar tidak cannibalization."] },
    { title: "Strategi topic cluster untuk SEO", body: "Topic cluster membantu Google memahami bahwa website punya kedalaman di satu topik. Struktur idealnya adalah satu pillar page untuk topik besar, lalu banyak artikel pendukung untuk subtopik. Setiap artikel cluster link ke pillar, dan pillar link balik ke semua cluster. Ini membuat authority mengalir dan user lebih mudah menjelajah.", points: ["Pillar “Jasa SEO” menarget keyword utama.", "Cluster “jasa SEO UMKM”, “jasa SEO bulanan”, dan “SEO lokal” menarget long-tail.", "Internal link memakai anchor text deskriptif.", "Artikel lama diupdate saat cluster baru diterbitkan."] },
    { title: "Cara optimasi artikel yang sudah ranking page 2", body: "Artikel di posisi 8-20 adalah peluang terbesar. Google sudah memahami topiknya, tapi halaman belum cukup kuat untuk page 1. Optimasi bisa dilakukan dengan memperbaiki title, menambah bagian yang belum dibahas kompetitor, menambah FAQ, memperbarui data, dan memberi internal link dari halaman kuat.", points: ["Cari query utama di Google Search Console.", "Bandingkan artikel dengan 5 hasil teratas.", "Tambah section yang menjawab intent lebih lengkap.", "Perbaiki meta title agar CTR naik.", "Tambahkan internal link dari pillar dan artikel relevan."] },
    { title: "SEO untuk AI Overview dan mesin jawaban", body: "SEO modern juga perlu memikirkan AI Overview, ChatGPT, Perplexity, dan mesin jawaban lain. Konten lebih mudah dikutip jika punya jawaban langsung, struktur rapi, definisi jelas, tabel, FAQ, dan data yang bisa diverifikasi. Konten generik yang hanya mengulang hasil lain lebih sulit menjadi sumber.", points: ["Tulis definisi singkat di awal section.", "Gunakan FAQ untuk pertanyaan spesifik.", "Tambahkan contoh, angka, dan pengalaman nyata.", "Gunakan schema Article, FAQ, Service, dan Breadcrumb.", "Bangun brand mention di luar website."] },
    { title: "Audit konten kompetitor halaman 1", body: "Untuk menang di SEO, halaman tidak cukup “ada”. Konten harus lebih membantu dari halaman yang sudah ranking. Audit kompetitor dilakukan dengan melihat struktur heading, kedalaman pembahasan, FAQ, media, internal link, dan angle yang belum mereka bahas. Tujuannya bukan menyalin, tapi menemukan celah informasi yang bisa dibuat lebih baik.", points: ["Cek 5-10 hasil teratas untuk keyword utama.", "Catat heading dan subtopik yang sering muncul.", "Cari pertanyaan yang belum dijawab lengkap.", "Tambahkan contoh, tabel, checklist, dan pengalaman nyata.", "Pastikan konten punya sudut pandang brand sendiri."] },
    { title: "Internal link sebagai penguat ranking", body: "Internal link adalah salah satu kontrol SEO paling mudah karena sepenuhnya berada di website sendiri. Halaman pillar perlu link ke semua cluster, dan cluster perlu link balik ke pillar. Anchor text harus deskriptif agar Google memahami hubungan antar halaman. Link dari halaman yang sudah punya traffic bisa membantu halaman baru lebih cepat ditemukan.", points: ["Gunakan anchor seperti “jasa SEO UMKM”, bukan “klik di sini”.", "Link dari artikel informasional ke halaman layanan.", "Tambahkan related articles di akhir konten.", "Update artikel lama saat artikel baru terbit.", "Jaga semua halaman penting maksimal 3 klik dari homepage."] },
    { title: "Optimasi CTR dari Google Search Console", body: "CTR rendah berarti halaman muncul di hasil pencarian tapi kurang menarik diklik. Perbaikan CTR bisa dilakukan lewat title tag dan meta description. Title harus jelas, mengandung keyword, dan memberi alasan klik. Meta description harus menjelaskan manfaat, bukan hanya mengulang judul.", points: ["Cari query dengan impression tinggi dan CTR rendah.", "Uji title yang lebih spesifik dan benefit-driven.", "Tambahkan tahun, angka, atau outcome jika relevan.", "Pastikan meta description menjawab intent user.", "Pantau perubahan setelah 2-4 minggu."] },
    { title: "Backlink dan brand mention", body: "Backlink tetap penting, tapi kualitas lebih penting daripada jumlah. Untuk bisnis kecil, sumber backlink yang masuk akal adalah directory relevan, guest post, partner, studi kasus, press release lokal, dan profil bisnis. Brand mention juga membantu karena mesin pencari dan AI search makin memperhatikan entitas brand.", points: ["Daftar di directory bisnis yang relevan.", "Tulis guest post di blog bisnis atau teknologi.", "Publikasikan case study yang bisa dirujuk orang lain.", "Bangun profil Google Business Profile dan social media.", "Hindari backlink spam dari situs tidak jelas."] },
    { title: "SOP SEO bulanan untuk bisnis kecil", body: "SEO yang konsisten butuh SOP sederhana. Setiap bulan, cek data, pilih halaman prioritas, update konten, tambah internal link, publish artikel baru, dan catat hasil. Dengan SOP, SEO tidak jadi aktivitas random yang hanya dilakukan saat traffic turun.", points: ["Minggu 1: review GSC dan pilih prioritas.", "Minggu 2: update 2-3 halaman existing.", "Minggu 3: publish artikel cluster baru.", "Minggu 4: internal link audit dan laporan KPI."] },
  ],
  clusterLinks: [
    { label: "Jasa SEO Bulanan", href: "/blog/jasa-seo-bulanan" }, { label: "Jasa SEO UMKM", href: "/blog/jasa-seo-umkm" }, { label: "Jasa SEO Website", href: "/blog/jasa-seo-website" }, { label: "Cara agar Website Muncul di Google", href: "/blog/cara-website-muncul-di-google" }, { label: "Optimasi SEO Website", href: "/blog/optimasi-seo-website" }, { label: "Strategi SEO untuk Bisnis", href: "/blog/strategi-seo-untuk-bisnis" }, { label: "Belajar SEO untuk Pemula", href: "/blog/belajar-seo-untuk-pemula" }, { label: "SEO untuk Toko Online", href: "/blog/seo-untuk-toko-online" }, { label: "SEO Lokal Adalah", href: "/blog/seo-lokal-adalah" }, { label: "Cara Meningkatkan Traffic Website", href: "/blog/cara-meningkatkan-traffic-website" }, { label: "Optimasi Google Maps Bisnis", href: "/blog/optimasi-google-maps-bisnis" }, { label: "Jasa Digital Marketing UMKM", href: "/blog/jasa-digital-marketing-umkm" },
  ],
  faqs: [
    { question: "Berapa lama SEO mulai terlihat hasilnya?", answer: "Biasanya 3–6 bulan untuk keyword kompetitif. Keyword lokal/niche bisa lebih cepat, 1–3 bulan." },
    { question: "Apakah SEO dijamin page 1 Google?", answer: "Tidak ada yang bisa jamin page 1. Tapi kami bantu fondasi sekuat mungkin agar website lebih siap bersaing." },
    { question: "Apakah perlu blog?", answer: "Blog sangat membantu SEO karena bisa target banyak keyword. Kami bantu siapkan topic plan dan template." },
    { question: "Berapa biaya jasa SEO?", answer: "Tergantung scope. SEO basic setup mulai dari Rp5 juta. Monthly SEO retainer bisa dibahas sesuai kebutuhan." },
  ],
  relatedServices: [
    { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website", description: "Website profesional yang bikin bisnis terlihat kredibel dan siap dapat lead." },
    { label: "Jasa Automation", href: "/jasa-automation", description: "Workflow automation untuk hemat waktu dan rapikan proses bisnis." },
  ],
  finalCta: {
    heading: "Mau website kamu lebih mudah ditemukan di Google?",
    body: "Minta audit SEO gratis atau diskusi langsung tentang strategi organic growth untuk bisnis kamu.",
  },
};

export default function JasaSeoPage() {
  return <ServicePage data={data} />;
}
