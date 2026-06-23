import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional dan SEO-Friendly — Nggawe Web",
  description:
    "Jasa pembuatan website profesional untuk bisnis service, startup, UMKM, dan agency. Desain premium, cepat, responsive, SEO-ready, dan siap automation.",
  openGraph: {
    title: "Jasa Pembuatan Website Profesional dan SEO-Friendly — Nggawe Web",
    description:
      "Jasa pembuatan website profesional untuk bisnis service, startup, UMKM, dan agency. Desain premium, cepat, responsive, SEO-ready, dan siap automation.",
  },
};

const data = {
  eyebrow: "Jasa Pembuatan Website",
  h1: "Website profesional yang bikin bisnis terlihat kredibel dan siap dapat lead.",
  subheadline:
    "Kami bikin website custom yang cepat, responsive, mudah dipahami, dan dirancang dengan struktur SEO serta CTA yang jelas sejak awal.",
  primaryCta: { label: "Diskusi Website Baru", href: whatsappHref },
  secondaryCta: { label: "Cek Estimasi Biaya", href: "/tools/website-cost-calculator" },
  problems: [
    { title: "Website lama tidak meyakinkan", body: "Tampilan ketinggalan zaman bikin calon customer ragu sebelum menghubungi." },
    { title: "Tidak mobile-friendly", body: "Mayoritas traffic dari HP, tapi website tidak responsif di layar kecil." },
    { title: "Tidak ada struktur SEO", body: "Tanpa fondasi SEO yang benar, website sulit ditemukan di Google." },
    { title: "Tidak ada CTA jelas", body: "Visitor bingung harus ngapain setelah lihat website, akhirnya pergi." },
    { title: "Loading lambat", body: "Website lambat bikin visitor keluar sebelum sempat lihat isi." },
    { title: "Sulit diupdate", body: "Konten tidak bisa diubah tanpa minta bantuan developer." },
  ],
  valueProp: {
    heading: "Website yang dirancang untuk performa, bukan cuma tampilan.",
    body: "Kami gabungkan design modern, development cepat, SEO structure, dan CTA yang terarah agar website bukan hanya enak dilihat, tapi juga menghasilkan inquiry.",
  },
  deliverables: [
    "Custom design sesuai brand",
    "Responsive untuk semua device",
    "SEO basic setup (meta, sitemap, robots)",
    "Contact form / brief form",
    "WhatsApp CTA integration",
    "Google Analytics & Search Console setup",
    "Speed optimization",
    "CMS optional (blog/portfolio)",
    "Automation webhook optional",
  ],
  processSteps: [
    { title: "Discovery", body: "Kami pahami bisnis, target market, dan tujuan website." },
    { title: "Design", body: "Tampilan modern yang sesuai brand dan fokus conversion." },
    { title: "Build", body: "Website dibangun cepat, responsive, dan SEO-ready." },
    { title: "Launch", body: "Deploy, tes, dan pastikan semua berjalan lancar." },
  ],
  portfolioItems: [
    { name: "Cubiqlo", description: "Website brand dengan tampilan modern dan UX rapi." },
    { name: "Ganesha Travel", description: "Website travel dengan fokus trust dan inquiry." },
    { name: "Whale Dive Centre", description: "Website tourism dengan visual kuat dan CTA jelas." },
  ],
  pillarSections: [
    { title: "Apa itu jasa pembuatan website profesional?", body: "Jasa pembuatan website profesional adalah layanan untuk merancang, membangun, dan mengoptimasi website agar bisa menjadi aset digital bisnis. Website bukan cuma halaman online, tapi tempat calon pelanggan memahami layanan, melihat bukti kepercayaan, lalu menghubungi bisnis lewat CTA yang jelas.", points: ["Struktur halaman dibuat berdasarkan search intent dan kebutuhan calon pelanggan.", "Desain disesuaikan dengan brand agar terlihat kredibel.", "Website dibangun responsive, cepat, aman, dan siap diindex Google."] },
    { title: "Jenis website yang paling sering dibutuhkan bisnis", body: "Tidak semua bisnis butuh website kompleks. UMKM bisa mulai dari website company profile atau landing page. Bisnis yang menjual produk bisa butuh toko online. Perusahaan yang punya proses internal bisa butuh website custom dengan dashboard, CMS, atau integrasi automation.", points: ["Landing page untuk campaign dan validasi penawaran.", "Company profile untuk trust dan presentasi layanan.", "Toko online untuk katalog, order, dan pembayaran.", "Web app custom untuk proses bisnis yang lebih spesifik."] },
    { title: "Berapa biaya pembuatan website?", body: "Biaya website tergantung scope. Faktor utamanya adalah jumlah halaman, desain custom, CMS, copywriting, SEO, integrasi payment, automation, dan maintenance. Website sederhana biasanya lebih murah, sedangkan website custom dengan fitur bisnis butuh budget lebih besar karena ada riset, desain, development, testing, dan deployment.", points: ["Landing page cocok untuk promosi satu produk atau layanan.", "Company profile cocok untuk bisnis jasa, UMKM, dan perusahaan.", "Toko online cocok untuk brand yang butuh katalog dan order online.", "Custom system cocok untuk bisnis yang butuh workflow atau dashboard khusus."] },
    { title: "Struktur website SEO-friendly", body: "Website SEO-friendly harus mudah dipahami manusia dan mesin pencari. Setiap halaman perlu satu H1 yang jelas, heading H2/H3 yang rapi, meta title, meta description, internal link, sitemap, robots.txt, canonical URL, dan schema markup. Struktur ini membantu Google memahami topik utama halaman.", points: ["Gunakan URL pendek dan deskriptif.", "Buat halaman layanan khusus untuk tiap service utama.", "Tambahkan FAQ yang menjawab pertanyaan calon pelanggan.", "Link dari artikel blog ke halaman layanan utama."] },
    { title: "Proses kerja ideal dari brief sampai launch", body: "Proses terbaik dimulai dari discovery, bukan langsung desain. Kita perlu tahu target market, value proposition, kompetitor, keyword utama, dan goal konversi. Setelah itu baru susun wireframe, copywriting, design, development, QA, deploy, dan tracking.", points: ["Discovery kebutuhan bisnis dan target pelanggan.", "Wireframe dan struktur konten.", "Desain UI yang sesuai brand.", "Development, testing, deployment, dan handover."] },
    { title: "Paket dan estimasi harga", body: "Harga jasa pembuatan website sebaiknya dilihat dari output bisnis, bukan jumlah halaman saja. Website murah bisa cukup untuk validasi awal, tapi website profesional perlu copywriting, struktur SEO, desain kredibel, speed, tracking, dan CTA. Estimasi umum: landing page mulai Rp1-5 juta, company profile Rp5-15 juta, toko online Rp10-35 juta, dan custom web app mulai Rp35 juta ke atas.", points: ["Landing page: fokus satu penawaran dan satu CTA.", "Company profile: cocok untuk bisnis jasa, B2B, dan perusahaan.", "Toko online: butuh katalog, checkout, payment, dan pengelolaan order.", "Custom website: butuh dashboard, database, integrasi API, atau automation."] },
    { title: "Website murah vs website profesional", body: "Website murah tidak selalu buruk, tapi biasanya ada batasan: desain template, SEO minimal, tidak ada riset keyword, sulit di-scale, dan support terbatas. Website profesional lebih mahal karena prosesnya mencakup discovery, struktur konten, UI, development, SEO technical, analytics, testing, dan handover.", points: ["Murah cocok untuk testing ide atau profil sederhana.", "Profesional cocok jika website jadi channel utama akuisisi lead.", "Custom cocok jika bisnis butuh fitur unik atau integrasi sistem."] },
    { title: "Checklist sebelum order website", body: "Sebelum memilih vendor, siapkan tujuan bisnis, target customer, referensi desain, daftar halaman, aset brand, foto produk, testimoni, dan CTA utama. Semakin jelas brief, semakin cepat website selesai dan semakin kecil risiko revisi besar di tengah jalan.", points: ["Tentukan goal: trust, lead, sales, atau recruitment.", "Siapkan copy awal: profil, layanan, keunggulan, FAQ.", "Siapkan bukti trust: logo klien, testimoni, portofolio, sertifikat.", "Tentukan CTA: WhatsApp, form brief, booking, atau checkout."] },
    { title: "Mini case study", body: "Untuk website bisnis jasa, perubahan paling berdampak biasanya bukan animasi mahal, tapi struktur penawaran yang jelas. Contoh pola yang sering efektif: hero menjelaskan siapa yang dibantu, masalah apa yang diselesaikan, hasil yang dijanjikan, lalu bukti portofolio dan CTA WhatsApp. Struktur seperti ini membantu visitor memahami value dalam 5-10 detik.", points: ["Hero harus jelas, bukan slogan abstrak.", "Portofolio dan testimoni muncul sebelum CTA final.", "FAQ menjawab keberatan sebelum user bertanya.", "Tracking click WhatsApp membantu ukur konversi."] },
    { title: "Kapan bisnis perlu website baru atau redesign?", body: "Bisnis perlu website baru ketika calon pelanggan sulit memahami layanan, tampilan tidak lagi mewakili kualitas brand, loading lambat, atau halaman tidak menghasilkan inquiry. Redesign juga penting jika website lama tidak mobile-friendly, tidak punya tracking, dan tidak bisa diupdate sendiri. Untuk bisnis yang mulai serius mencari lead dari Google, website harus disiapkan sebagai landing hub: cepat, jelas, dan punya struktur konten yang lengkap.", points: ["Bounce rate tinggi karena visitor tidak menemukan informasi penting.", "Tim sales sering menjelaskan hal yang seharusnya bisa dijawab website.", "Kompetitor terlihat lebih profesional di Google.", "Website lama tidak punya halaman layanan spesifik dan internal link."] },
    { title: "Elemen wajib di homepage website bisnis", body: "Homepage harus menjawab tiga pertanyaan dalam beberapa detik: bisnis ini membantu siapa, masalah apa yang diselesaikan, dan bagaimana cara menghubungi. Setelah itu halaman perlu bukti trust, penjelasan layanan, portofolio, testimoni, FAQ, dan CTA. Homepage yang bagus bukan cuma cantik, tapi memandu visitor menuju keputusan.", points: ["Hero dengan value proposition yang spesifik.", "Section masalah dan solusi.", "Daftar layanan dengan link ke detail halaman.", "Portofolio atau contoh hasil kerja.", "Testimoni dan FAQ untuk mengurangi keraguan."] },
    { title: "Cara memilih vendor jasa pembuatan website", body: "Vendor yang baik tidak langsung bicara desain, tapi bertanya tentang target pelanggan, tujuan website, model bisnis, dan channel akuisisi. Hindari vendor yang hanya menjual jumlah halaman tanpa membahas struktur konten, SEO, speed, ownership, dan maintenance. Website adalah aset jangka panjang, jadi pastikan file, domain, akses hosting, dan dokumentasi jelas.", points: ["Cek portofolio dan gaya desain sebelumnya.", "Tanya proses kerja dari brief sampai launch.", "Pastikan ada testing mobile, speed, form, dan tracking.", "Pastikan ownership domain, hosting, dan source code jelas.", "Minta scope tertulis agar tidak salah ekspektasi."] },
    { title: "Maintenance setelah website live", body: "Website yang sudah live tetap perlu dirawat. Konten perlu diperbarui, plugin atau dependency perlu dipantau, form harus dites, dan data analytics harus dibaca. Maintenance membantu website tetap aman, cepat, dan relevan untuk user maupun Google.", points: ["Cek form dan CTA minimal sebulan sekali.", "Update konten layanan, harga, portofolio, dan FAQ.", "Pantau Search Console untuk error indexing.", "Backup data dan pastikan SSL aktif.", "Optimasi halaman yang mulai mendapatkan impression."] },
    { title: "Contoh struktur halaman layanan yang SEO-friendly", body: "Halaman layanan yang kuat biasanya dimulai dari H1 yang jelas, subheadline yang menjelaskan value, problem section, solusi, deliverables, proses kerja, portofolio, harga atau estimasi, FAQ, dan CTA. Struktur ini membantu user mendapatkan jawaban lengkap tanpa harus pindah ke website lain.", points: ["H1: keyword utama + manfaat bisnis.", "Intro: siapa yang dibantu dan masalah yang diselesaikan.", "Body: proses, deliverables, harga, bukti, FAQ.", "Internal link: artikel pendukung dan layanan terkait.", "CTA: WhatsApp atau form brief di beberapa titik."] },
    { title: "Framework copywriting untuk website bisnis", body: "Copywriting website harus menghubungkan masalah pelanggan dengan solusi bisnis. Hindari kalimat terlalu umum seperti “kami terbaik dan terpercaya” tanpa bukti. Gunakan struktur: masalah yang dialami, risiko jika dibiarkan, solusi yang ditawarkan, bukti pengalaman, proses kerja, dan CTA. Dengan format ini, calon pelanggan tidak hanya melihat desain, tapi memahami alasan untuk menghubungi.", points: ["Tulis headline spesifik: siapa dibantu dan hasil apa yang dicapai.", "Gunakan bahasa pelanggan, bukan istilah teknis internal.", "Tambahkan bukti seperti portofolio, angka, testimoni, atau proses.", "Letakkan CTA setelah value jelas, bukan cuma di akhir halaman."] },
    { title: "SEO technical yang wajib ada sejak awal", body: "Banyak website terlihat bagus tapi gagal perform di Google karena fondasi teknis lemah. Sejak awal, website perlu sitemap, robots.txt, canonical URL, meta title, meta description, schema, heading hierarchy, image optimization, dan struktur internal link. Jika hal ini baru diperbaiki setelah website live, biasanya perlu banyak revisi ulang.", points: ["Sitemap membantu Google menemukan halaman penting.", "Canonical mencegah duplicate content.", "Schema membantu mesin pencari memahami entitas bisnis.", "Optimasi gambar menjaga loading tetap cepat.", "Internal link menghubungkan halaman layanan dan artikel pendukung."] },
    { title: "Conversion rate optimization untuk website jasa", body: "Website jasa harus dirancang untuk mengubah visitor menjadi inquiry. Conversion rate optimization bukan hanya mengganti warna tombol, tapi memastikan pesan jelas, trust cukup, objection terjawab, dan CTA mudah ditemukan. Untuk bisnis jasa, keputusan calon klien sering terjadi setelah mereka melihat bukti dan merasa risikonya rendah.", points: ["CTA WhatsApp tampil di hero, tengah, dan akhir halaman.", "FAQ menjawab keberatan tentang harga, waktu, dan proses.", "Portofolio menunjukkan kemampuan nyata.", "Form brief memudahkan leads yang sudah siap diskusi.", "Tracking click membantu melihat bagian mana yang efektif."] },
    { title: "Checklist launch website profesional", body: "Sebelum website diluncurkan, semua elemen penting harus dites. Banyak masalah kecil seperti form tidak terkirim, gambar terlalu besar, link rusak, atau metadata kosong bisa mengurangi performa. Checklist launch memastikan website siap dilihat user dan mesin pencari.", points: ["Tes responsive di mobile, tablet, dan desktop.", "Tes semua form, WhatsApp link, dan tombol CTA.", "Cek PageSpeed dan ukuran gambar.", "Cek title, description, H1, sitemap, dan robots.", "Submit sitemap ke Google Search Console setelah live."] },
    { title: "Strategi update website setelah 30 hari", body: "Setelah website live, data awal mulai muncul. Gunakan Search Console untuk melihat query dan halaman yang mendapat impression. Gunakan Analytics atau event tracking untuk melihat CTA yang diklik. Update halaman berdasarkan data ini agar website makin relevan dan conversion lebih baik.", points: ["Tambahkan FAQ dari pertanyaan calon pelanggan.", "Perbaiki title jika impression ada tapi CTR rendah.", "Tambahkan internal link dari artikel baru.", "Update portofolio dan testimoni terbaru.", "Perbaiki section yang jarang menghasilkan klik."] },
    { title: "Peran website dalam funnel marketing", body: "Website berada di tengah funnel marketing: mengubah orang yang baru mengenal brand menjadi calon pelanggan yang siap bertanya. Traffic bisa datang dari Google, iklan, media sosial, referral, atau Google Maps. Tanpa website yang rapi, traffic dari channel lain sering bocor karena calon pelanggan tidak menemukan informasi yang cukup untuk percaya.", points: ["Awareness dari social media diarahkan ke website.", "Visitor membaca layanan, portofolio, dan FAQ.", "Prospek klik WhatsApp atau isi form brief.", "Tim sales follow-up dengan konteks kebutuhan yang lebih jelas."] },
    { title: "Konten yang harus disiapkan pemilik bisnis", body: "Vendor website bisa membantu struktur dan copywriting, tapi pemilik bisnis tetap perlu menyediakan bahan utama. Informasi paling penting adalah jenis layanan, target pelanggan, keunggulan, proses kerja, wilayah layanan, harga awal jika ada, bukti pekerjaan, dan pertanyaan yang sering muncul dari calon pelanggan.", points: ["Deskripsi layanan dan paket.", "Foto produk, team, kantor, atau proses kerja.", "Logo brand dan warna utama.", "Testimoni, portofolio, atau review pelanggan.", "Pertanyaan umum dari chat WhatsApp atau sales."] },
    { title: "Integrasi yang sering dibutuhkan website bisnis", body: "Website modern sering perlu terhubung dengan tools lain. Integrasi paling umum adalah WhatsApp, form email, Google Analytics, Search Console, Facebook Pixel, CRM, payment gateway, newsletter, dan automation webhook. Integrasi ini membuat website bukan hanya brosur digital, tapi bagian dari sistem penjualan.", points: ["WhatsApp click tracking untuk melihat minat leads.", "Form brief yang masuk ke email atau spreadsheet.", "Analytics untuk melihat traffic dan halaman populer.", "Pixel untuk retargeting iklan.", "Webhook untuk mengirim data ke automation."] },
  ],
  clusterLinks: [
    { label: "Biaya Pembuatan Website", href: "/blog/biaya-pembuatan-website" }, { label: "Harga Jasa Pembuatan Website", href: "/blog/harga-jasa-pembuatan-website" }, { label: "Jasa Pembuatan Website UMKM", href: "/blog/jasa-pembuatan-website-umkm" }, { label: "Jasa Pembuatan Website Toko Online", href: "/blog/jasa-pembuatan-website-toko-online" }, { label: "Jasa Pembuatan Website Perusahaan", href: "/blog/jasa-pembuatan-website-perusahaan" }, { label: "Jasa Buat Website", href: "/blog/jasa-buat-website" }, { label: "Contoh Website Company Profile", href: "/blog/contoh-website-company-profile" }, { label: "Contoh Website Toko Online", href: "/blog/contoh-website-toko-online" }, { label: "Cara Membuat Website Bisnis", href: "/blog/cara-membuat-website-bisnis" }, { label: "Website untuk UMKM", href: "/blog/website-untuk-umkm" }, { label: "Manfaat Website untuk Bisnis", href: "/blog/manfaat-website-untuk-bisnis" }, { label: "Website untuk Bisnis Kecil", href: "/blog/website-untuk-bisnis-kecil" }, { label: "Website Company Profile Adalah", href: "/blog/website-company-profile-adalah" }, { label: "Jasa Pembuatan Landing Page", href: "/blog/jasa-pembuatan-landing-page" }, { label: "Cara Membuat Website Toko Online", href: "/blog/cara-membuat-website-toko-online" },
  ],
  faqs: [
    { question: "Berapa biaya membuat website?", answer: "Mulai dari Rp3,5 juta untuk website starter. Scope lebih besar akan menyesuaikan kebutuhan dan fitur." },
    { question: "Berapa lama prosesnya?", answer: "Website sederhana 5–10 hari kerja. Website custom dengan CMS dan fitur khusus bisa 2–4 minggu." },
    { question: "Apakah sudah SEO-ready?", answer: "Ya. Metadata, sitemap, robots.txt, heading structure, speed optimization, dan schema basic sudah termasuk." },
    { question: "Bisa edit konten sendiri?", answer: "Bisa. Kami bisa setup CMS (blog/portfolio) supaya kamu bisa update konten tanpa developer." },
  ],
  relatedServices: [
    { label: "Jasa SEO", href: "/jasa-seo", description: "Optimasi SEO teknis dan konten agar website bisnis kamu lebih ditemukan di Google." },
    { label: "Jasa Automation", href: "/jasa-automation", description: "Workflow automation untuk hemat waktu dan rapikan proses bisnis." },
    { label: "Agency Subcontract", href: "/agency-subcontract", description: "Partner white-label untuk agency yang butuh jasa build website." },
  ],
  finalCta: {
    heading: "Siap punya website yang profesional dan menghasilkan lead?",
    body: "Ceritakan kebutuhan bisnis kamu. Kami bantu rekomendasi solusi yang paling masuk akal.",
  },
};

export default function JasaWebsitePage() {
  return <ServicePage data={data} />;
}
