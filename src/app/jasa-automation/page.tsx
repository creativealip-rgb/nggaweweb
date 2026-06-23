import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/service-page";
import { whatsappHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Jasa Automation Bisnis dan n8n Workflow — Nggawe Web",
  description:
    "Jasa automation bisnis untuk merapikan lead, form, follow-up, notifikasi, email, spreadsheet, CRM, dan workflow internal dengan n8n atau tools automation lain.",
  openGraph: {
    title: "Jasa Automation Bisnis dan n8n Workflow — Nggawe Web",
    description:
      "Jasa automation bisnis untuk merapikan lead, form, follow-up, notifikasi, email, spreadsheet, CRM, dan workflow internal dengan n8n atau tools automation lain.",
  },
};

const data = {
  eyebrow: "Jasa Business Automation",
  h1: "Jasa Automation Bisnis untuk Merapikan Lead, CRM, dan Workflow.",
  subheadline:
    "Kami bantu otomatisasi bisnis, WhatsApp automation, CRM sederhana, n8n workflow, form, database, email, spreadsheet, dan notifikasi agar proses bisnis berjalan lebih otomatis.",
  primaryCta: { label: "Audit Workflow Gratis", href: "/audit-gratis" },
  secondaryCta: { label: "Lihat Demo Automation", href: whatsappHref },
  problems: [
    { title: "Lead masuk berantakan", body: "Form masuk ke WhatsApp, email, dan DM tanpa ada sistem yang mengumpulkan." },
    { title: "Follow-up terlambat", body: "Lead baru tidak langsung di-follow-up karena tim tidak tahu ada inquiry masuk." },
    { title: "Data tidak tersimpan rapi", body: "Data customer tersebar di banyak tempat, sulit dilacak dan dianalisa." },
    { title: "Kerja manual berulang", body: "Setiap lead harus dicatat manual, dikirim notifikasi manual, di-follow-up manual." },
    { title: "Tidak ada reporting", body: "Tidak tahu berapa lead masuk, berapa yang di-follow-up, dan berapa closing." },
    { title: "Tim tidak terkoordinasi", body: "Tidak ada sistem yang memberi tahu siapa yang harus follow-up dan kapan." },
  ],
  valueProp: {
    heading: "Automation bukan mengganti orang. Automation bantu orang kerja lebih efisien.",
    body: "Kami bantu desain workflow yang otomatis menangkap lead, menyimpan data, mengirim notifikasi, dan membuat task follow-up supaya tidak ada yang terlewat.",
  },
  deliverables: [
    "Workflow audit & mapping",
    "n8n / Make automation setup",
    "Form webhook integration",
    "Google Sheets / Airtable / Supabase sync",
    "Telegram & WhatsApp notification",
    "Email autoresponder",
    "Lead tagging & categorization",
    "Follow-up reminder system",
    "Documentation & handover",
  ],
  processSteps: [
    { title: "Audit", body: "Mapping proses bisnis saat ini dan cari titik yang bisa diotomasi." },
    { title: "Design", body: "Desain workflow automation yang sesuai kebutuhan tim." },
    { title: "Build", body: "Bangun workflow di n8n, hubungkan semua tools." },
    { title: "Test & Launch", body: "Tes real scenario, pastikan semua jalan, dan handover ke tim." },
  ],
  portfolioItems: [
    { name: "Monev.app", description: "Platform monitoring dengan automation workflow internal." },
    { name: "Contenly.app", description: "Platform content dengan automated pipeline dan notifications." },
    { name: "Internal Tools", description: "Workflow automation untuk lead intake, reporting, dan follow-up." },
  ],
  pillarSections: [
    { title: "Apa itu jasa automation bisnis dan otomatisasi bisnis?", body: "Jasa automation bisnis adalah layanan membuat alur kerja otomatis agar tugas berulang tidak selalu dikerjakan manual. Otomatisasi bisnis bisa menghubungkan website, WhatsApp automation, CRM, spreadsheet, email, dan notifikasi. Contohnya lead dari website otomatis masuk spreadsheet, tim dapat notifikasi, customer menerima balasan, dan follow-up dibuat sebagai reminder.", points: ["Mengurangi input data manual.", "Mempercepat respons ke calon pelanggan.", "Merapikan data lead dan aktivitas follow-up.", "Membuat laporan lebih konsisten."] },
    { title: "Workflow yang paling cepat memberi dampak", body: "Automation paling efektif dimulai dari proses yang sering berulang dan punya dampak langsung ke revenue. Untuk UMKM dan bisnis jasa, area paling umum adalah lead intake, WhatsApp notification, CRM sederhana, invoice, reminder pembayaran, dan report mingguan.", points: ["Form website ke WhatsApp atau Telegram.", "Lead masuk otomatis ke Google Sheets, Airtable, atau CRM.", "Follow-up reminder untuk sales.", "Email autoresponder setelah form diisi."] },
    { title: "Tools yang bisa dipakai", body: "Automation bisa dibuat dengan banyak tools. n8n cocok untuk workflow fleksibel dan self-hosted. Make dan Zapier cocok untuk integrasi cepat. Google Sheets bisa jadi database awal untuk UMKM. Pilihan tools tergantung budget, kompleksitas, dan kebutuhan keamanan data.", points: ["n8n untuk workflow custom dan self-hosted.", "Make/Zapier untuk integrasi cepat tanpa banyak setup server.", "Google Sheets/Airtable untuk database sederhana.", "WhatsApp API, Telegram, dan email untuk notifikasi."] },
    { title: "Cara mulai tanpa bikin sistem terlalu kompleks", body: "Kesalahan umum adalah langsung ingin mengotomasi semua proses. Cara aman adalah mulai dari satu workflow yang jelas, ukur hasilnya, lalu tambah alur lain. Automation harus membantu tim, bukan membuat proses makin sulit dipahami.", points: ["Pilih satu proses yang paling banyak makan waktu.", "Buat flow sederhana: trigger, action, notification, log.", "Test dengan skenario real.", "Dokumentasikan cara pakai dan cara memperbaiki error." ] },
    { title: "Paket automation dan estimasi biaya", body: "Biaya jasa automation bisnis tergantung jumlah workflow, integrasi tools, kebutuhan API, dan tingkat error handling. Workflow sederhana seperti form ke Google Sheets + notifikasi biasanya lebih cepat. Workflow kompleks seperti CRM, invoice, reminder, dan dashboard membutuhkan desain sistem yang lebih matang.", points: ["Workflow sederhana: form, spreadsheet, notifikasi.", "Workflow menengah: CRM, tagging lead, follow-up reminder.", "Workflow kompleks: multi-step approval, invoice, dashboard, API custom."] },
    { title: "Contoh workflow lead masuk", body: "Workflow paling umum: visitor isi form website, data masuk ke spreadsheet/CRM, tim sales dapat notifikasi WhatsApp atau Telegram, customer menerima auto-reply, lalu sistem membuat reminder follow-up. Alur sederhana ini mencegah lead hilang dan mempercepat respons.", points: ["Trigger: form website dikirim.", "Action 1: simpan data ke Google Sheets atau CRM.", "Action 2: kirim notifikasi ke tim.", "Action 3: kirim balasan otomatis ke customer.", "Action 4: buat reminder follow-up H+1 atau H+3."] },
    { title: "n8n vs Make vs Zapier", body: "n8n cocok jika butuh workflow fleksibel, self-hosted, dan kontrol data lebih besar. Make cocok untuk visual workflow yang mudah dipakai. Zapier cocok untuk integrasi cepat dan stabil dengan banyak SaaS. Pilihan terbaik tergantung budget, data privacy, dan kompleksitas proses.", points: ["n8n: fleksibel, self-hosted, cocok untuk custom logic.", "Make: visual, cepat, cocok untuk marketing automation.", "Zapier: mudah, banyak integrasi, tapi biaya bisa naik.", "Custom API: dipakai kalau tools standar tidak cukup."] },
    { title: "Risiko dan maintenance automation", body: "Automation tetap butuh monitoring. API bisa berubah, token bisa expired, format data bisa salah, atau user mengisi form tidak sesuai. Karena itu workflow harus punya logging, fallback, notifikasi error, dan dokumentasi agar mudah diperbaiki.", points: ["Buat log untuk setiap workflow penting.", "Siapkan alert jika automation gagal.", "Dokumentasikan trigger, action, dan owner workflow.", "Review workflow tiap bulan berdasarkan kasus real."] },
    { title: "Kapan bisnis perlu automation?", body: "Bisnis mulai perlu automation ketika jumlah lead, order, atau pekerjaan administratif membuat tim lambat merespons. Tanda paling jelas adalah data tercecer, follow-up lupa, invoice telat, dan laporan dibuat manual berulang. Automation membantu membuat proses lebih konsisten tanpa menambah banyak orang.", points: ["Lead sering telat dibalas.", "Data customer tersebar di chat, email, dan spreadsheet.", "Tim tidak tahu status follow-up terakhir.", "Owner masih membuat laporan manual setiap minggu."] },
    { title: "Automation WhatsApp untuk lead dan sales", body: "WhatsApp sering menjadi channel utama bisnis di Indonesia. Automation bisa membantu balasan awal, notifikasi lead, reminder follow-up, segmentasi prospek, dan broadcast yang lebih tertib. Tujuannya bukan spam, tapi memastikan calon pelanggan mendapat respons cepat dan tim punya data yang rapi.", points: ["Auto-reply setelah form website diisi.", "Notifikasi lead baru ke tim sales.", "Tagging prospek berdasarkan kebutuhan.", "Reminder follow-up H+1 dan H+3.", "Rekap lead harian ke owner atau manager."] },
    { title: "CRM sederhana untuk UMKM", body: "CRM tidak harus mahal. Banyak UMKM bisa mulai dari Google Sheets atau Airtable dengan kolom yang jelas: nama, kontak, kebutuhan, sumber lead, status, nilai potensi, PIC, dan tanggal follow-up. Setelah volume lead naik, sistem bisa ditingkatkan ke CRM khusus atau dashboard custom.", points: ["Status lead: baru, follow-up, nego, closing, lost.", "Sumber lead: website, Google Maps, Instagram, referral.", "PIC sales dan jadwal follow-up.", "Catatan kebutuhan dan keberatan pelanggan."] },
    { title: "Automation untuk invoice dan pembayaran", body: "Workflow invoice membantu bisnis mengurangi pekerjaan administratif. Setelah deal dibuat, sistem bisa membuat invoice, mengirim email, memberi reminder jatuh tempo, dan mencatat status pembayaran. Ini berguna untuk agency, konsultan, toko online, dan bisnis jasa yang punya pembayaran bertahap.", points: ["Generate invoice dari data order atau deal.", "Kirim invoice via email atau WhatsApp.", "Reminder otomatis sebelum dan setelah jatuh tempo.", "Update status pembayaran di spreadsheet atau CRM."] },
    { title: "Cara menghitung ROI automation", body: "ROI automation bisa dihitung dari waktu yang dihemat, lead yang tidak hilang, respons yang lebih cepat, dan pekerjaan admin yang berkurang. Jika automation menghemat 10 jam kerja per minggu atau mencegah beberapa lead besar terlewat, nilai bisnisnya bisa jauh lebih besar dari biaya setup awal.", points: ["Hitung jam kerja manual yang bisa dihemat per minggu.", "Hitung nilai rata-rata satu lead atau satu order.", "Ukur response time sebelum dan sesudah automation.", "Pantau jumlah follow-up yang selesai tepat waktu."] },
    { title: "Automation untuk customer support", body: "Customer support sering penuh pertanyaan berulang: harga, jam operasional, lokasi, cara order, status pembayaran, dan estimasi pengerjaan. Automation bisa membantu menjawab pertanyaan awal, mengarahkan user ke halaman tepat, dan membuat tiket jika pertanyaan butuh bantuan manusia. Hasilnya tim tidak habis waktu menjawab pertanyaan yang sama.", points: ["Auto-reply untuk pertanyaan umum.", "Routing pertanyaan ke tim yang tepat.", "Template jawaban yang konsisten.", "Ticket atau task untuk kasus yang perlu follow-up."] },
    { title: "Automation untuk marketing", body: "Marketing automation membantu menjaga komunikasi dengan calon pelanggan setelah mereka masuk sebagai lead. Contohnya: kirim email edukasi, follow-up WhatsApp, segmentasi berdasarkan kebutuhan, dan reminder promo. Untuk bisnis jasa, automation juga bisa mengirim materi portofolio atau checklist sebelum meeting.", points: ["Lead magnet dikirim otomatis setelah form diisi.", "Follow-up edukasi H+1, H+3, dan H+7.", "Segmentasi lead berdasarkan layanan yang diminati.", "Notifikasi ke sales jika lead membuka link penting."] },
    { title: "Automation untuk operasional internal", body: "Selain sales dan marketing, automation bisa merapikan operasional internal. Contohnya approval dokumen, reminder tugas, rekap absensi, laporan harian, atau sinkronisasi data antar tools. Proses internal yang rapi membuat bisnis lebih mudah scale tanpa menambah beban koordinasi manual.", points: ["Reminder task otomatis ke PIC.", "Rekap data harian ke manager.", "Approval sederhana lewat form dan notifikasi.", "Sinkronisasi data antar spreadsheet, CRM, dan database."] },
    { title: "Desain workflow yang aman", body: "Workflow automation harus dirancang dengan fallback. Jika API gagal, sistem harus memberi notifikasi error. Jika data tidak lengkap, workflow harus berhenti dengan pesan jelas. Jika ada duplikasi lead, sistem perlu aturan merge atau flag. Desain aman mencegah automation membuat masalah baru.", points: ["Validasi input sebelum data diproses.", "Logging setiap eksekusi workflow penting.", "Alert error ke admin atau tim teknis.", "Rate limit dan retry untuk API yang sering gagal.", "Backup data untuk workflow kritikal."] },
    { title: "Roadmap implementasi 30 hari", body: "Implementasi automation bisa dibuat bertahap selama 30 hari. Minggu pertama audit proses. Minggu kedua bangun workflow prioritas. Minggu ketiga testing dengan data real. Minggu keempat dokumentasi, training, dan evaluasi. Cara bertahap membuat tim lebih mudah adaptasi.", points: ["Minggu 1: mapping proses dan pilih quick win.", "Minggu 2: build workflow pertama.", "Minggu 3: test dengan skenario real dan edge case.", "Minggu 4: handover, dokumentasi, dan monitoring."] },
    { title: "Dokumentasi dan training tim", body: "Automation yang bagus harus bisa dipahami tim, bukan hanya developer. Setelah workflow selesai, tim perlu dokumentasi sederhana: tujuan workflow, trigger, data yang masuk, notifikasi yang dikirim, cara membaca log, dan siapa yang harus dihubungi saat error. Training singkat membuat automation benar-benar dipakai, bukan ditinggalkan.", points: ["Dokumentasi alur kerja dalam bahasa non-teknis.", "Panduan troubleshooting sederhana.", "Daftar owner untuk setiap workflow.", "Training tim sales, admin, atau operasional yang memakai sistem."] },
  ],
  clusterLinks: [
    { label: "Automation Bisnis Adalah", href: "/blog/automation-bisnis-adalah" }, { label: "Otomatisasi WhatsApp Bisnis", href: "/blog/otomatisasi-whatsapp-bisnis" }, { label: "Chatbot WhatsApp untuk Bisnis", href: "/blog/chatbot-whatsapp-untuk-bisnis" }, { label: "CRM untuk UMKM", href: "/blog/crm-untuk-umkm" }, { label: "Otomasi Bisnis", href: "/blog/otomasi-bisnis" }, { label: "Jasa Automation Bisnis", href: "/blog/jasa-automation-bisnis" }, { label: "WhatsApp Automation", href: "/blog/whatsapp-automation" }, { label: "Automation untuk Ecommerce", href: "/blog/automation-untuk-ecommerce" },
  ],
  faqs: [
    { question: "Apa itu n8n?", answer: "n8n adalah platform automation open-source yang bisa menghubungkan berbagai tools dan service tanpa coding." },
    { question: "Bisnis kecil cocok pakai automation?", answer: "Sangat cocok. Justru bisnis kecil yang paling untung karena bisa hemat waktu dan tidak perlu hire orang tambahan." },
    { question: "Berapa biaya automation?", answer: "Mulai dari Rp5 juta untuk workflow sederhana. Workflow kompleks dengan banyak integrasi akan menyesuaikan scope." },
    { question: "Apakah perlu coding?", answer: "Tidak. n8n dan Make pakai visual workflow builder. Kami yang setup, kamu yang pakai." },
    { question: "Apa itu otomatisasi bisnis?", answer: "Otomatisasi bisnis adalah proses menghubungkan tools dan alur kerja agar tugas berulang seperti input data, notifikasi, follow-up, dan laporan berjalan otomatis." },
    { question: "Apakah WhatsApp automation aman untuk bisnis?", answer: "Aman jika dipakai untuk respons, notifikasi, dan follow-up yang relevan. Hindari spam broadcast tanpa izin karena bisa merusak trust dan berisiko pada akun." },
    { question: "Apakah automation cocok untuk UMKM?", answer: "Cocok. UMKM bisa mulai dari workflow sederhana seperti form ke spreadsheet, notifikasi WhatsApp, CRM sederhana, reminder follow-up, dan automation UMKM yang fokus menghemat waktu operasional." },
    { question: "Apakah n8n bisa dihubungkan ke website?", answer: "Bisa. n8n bisa menerima webhook dari website, memproses data form, mengirim notifikasi, menyimpan data ke CRM, dan menjalankan workflow lanjutan." },
  ],
  relatedServices: [
    { label: "Jasa Pembuatan Website", href: "/jasa-pembuatan-website", description: "Website profesional yang bikin bisnis terlihat kredibel dan siap dapat lead." },
    { label: "Jasa SEO", href: "/jasa-seo", description: "Optimasi SEO teknis dan konten agar website bisnis kamu lebih ditemukan di Google." },
  ],
  finalCta: {
    heading: "Siap kurangi kerja manual dan rapikan sistem lead kamu?",
    body: "Ceritakan proses bisnis kamu saat ini. Kami bantu identifikasi bagian yang bisa diotomasi.",
  },
};

export default function JasaAutomationPage() {
  return <ServicePage data={data} />;
}
