import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Mail, MessageCircle, Send, Workflow, XCircle, ChevronRight } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { services } from "@/content/services";
import { whatsappHref } from "@/content/site";

const painPoints = [
  ["Website terlihat biasa", "Tampilan kurang meyakinkan bikin calon customer ragu sebelum menghubungi."],
  ["Tidak muncul di Google", "Tanpa struktur SEO yang benar, website sulit ditemukan orang yang sedang cari jasa kamu."],
  ["Lead tidak tertangani rapi", "Form, WhatsApp, email, dan follow-up masih manual sehingga peluang closing gampang hilang."],
  ["Tidak ada sistem growth", "Website tidak terhubung dengan analytics, automation, dan proses bisnis yang jelas."],
];

const portfolio = ["Cubiqlo", "Monev.app", "Contenly.app", "Ganesha Travel", "Whale Dive Centre"];
const process: [string, string][] = [
  ["Discovery", "Pahami bisnis, target, dan kebutuhan."],
  ["Strategy", "Rancang struktur, konten, dan SEO plan."],
  ["Design", "Buat UI/UX yang profesional dan rapi."],
  ["Build", "Develop website dengan performa tinggi."],
  ["Automation", "Setup form, notifikasi, dan workflow."],
  ["Launch", "Deploy, test, dan go-live."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-8">
              <Badge>Jasa Website, SEO, dan Automation</Badge>
              <div className="space-y-6">
                <h1 className="font-heading text-5xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-7xl">
                  Website premium, <span className="text-gradient">SEO-ready</span>, dan automation buat bisnis yang mau tumbuh lebih rapi.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                  Nggawe Web bantu service business, startup, UMKM, dan agency punya website yang profesional, mudah ditemukan Google, dan siap menangkap lead otomatis.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href={whatsappHref}>Konsultasi Gratis <ArrowRight size={18} /></LinkButton>
                <LinkButton href="/portfolio" variant="secondary">Lihat Portfolio</LinkButton>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-slate-300">
                {['Website', 'SEO', 'Automation', 'Portfolio real'].map((item) => (
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1" key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/15 bg-slate-900/80 p-4 shadow-[0_0_80px_rgba(59,130,246,0.22)] backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950 p-5">
                  <div className="mb-5 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 w-3/4 rounded-full bg-white/12" />
                    <div className="h-4 w-full rounded-full bg-white/8" />
                    <div className="h-4 w-2/3 rounded-full bg-white/8" />
                    <div className="grid grid-cols-3 gap-3 pt-4">
                      <div className="h-24 rounded-2xl bg-blue-500/20" />
                      <div className="h-24 rounded-2xl bg-cyan-500/20" />
                      <div className="h-24 rounded-2xl bg-purple-500/20" />
                    </div>
                  </div>
                </div>
              </div>
              <Card className="absolute -bottom-6 left-4 flex items-center gap-3 p-4">
                <Send className="text-cyan-300" size={22} />
                <div><p className="text-sm font-bold">Lead captured</p><p className="text-xs text-slate-400">Form → CRM → notif</p></div>
              </Card>
              <Card className="absolute -right-3 top-8 hidden items-center gap-3 p-4 md:flex">
                <Workflow className="text-blue-300" size={22} />
                <div><p className="text-sm font-bold">Automation ready</p><p className="text-xs text-slate-400">n8n workflow</p></div>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Problem" title="Website yang cuma terlihat bagus belum tentu bantu bisnis tumbuh." description="Banyak bisnis sudah punya website, tapi hasilnya belum terasa karena struktur, pesan, SEO, dan follow-up belum dirancang sebagai satu sistem." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {painPoints.map(([title, body]) => (
                <Card key={title}>
                  <XCircle className="mb-5 text-red-400" />
                  <h3 className="font-heading text-xl font-bold tracking-[-0.03em]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader eyebrow="Services" title="Satu partner untuk website, SEO, dan automation." description="Pilih layanan sesuai kebutuhan sekarang, atau bangun sistem lengkap dari awal." />
            <div className="grid gap-6 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card key={service.title} className="flex flex-col">
                    <Icon className="mb-6 text-cyan-300" size={32} />
                    <h3 className="font-heading text-2xl font-bold tracking-[-0.04em]">{service.title}</h3>
                    <p className="mt-4 leading-7 text-slate-400">{service.description}</p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-300">
                      {service.bullets.map((bullet) => <li className="flex gap-2" key={bullet}><CheckCircle2 className="mt-0.5 text-cyan-300" size={16} />{bullet}</li>)}
                    </ul>
                    <LinkButton className="mt-8 w-fit" href={service.href} variant="ghost">Lihat layanan <ArrowRight size={16} /></LinkButton>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader eyebrow="Automation" title="Bayangkan lead dari website langsung masuk ke sistem kamu." description="Saat calon customer isi form, data otomatis tersimpan, tim dapat notifikasi, email balasan terkirim, dan follow-up lebih cepat." />
            <div className="space-y-3">
              {[
                [MessageCircle, "Form Website", "Customer isi form di website"],
                [Database, "Lead Database", "Data tersimpan otomatis di sistem"],
                [Send, "Telegram/WhatsApp Notification", "Tim langsung dapat notifikasi"],
                [Mail, "Email Autoresponder", "Customer dapat email balasan"],
                [Workflow, "Follow-up Task", "Task follow-up terbuat otomatis"],
              ].map(([Icon, label, desc], i, arr) => {
                const NodeIcon = Icon as typeof MessageCircle;
                return (
                  <div key={label as string}>
                    <div className="flex items-center gap-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10">
                        <NodeIcon className="text-cyan-300" size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{label as string}</p>
                        <p className="text-sm text-slate-400">{desc as string}</p>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="flex justify-center py-1"><ChevronRight className="rotate-90 text-cyan-300/40" size={20} /></div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Portfolio" title="Beberapa project yang sudah dibangun." description="Dari website bisnis service sampai platform aplikasi, setiap project dibuat dengan fokus pada tampilan, performa, struktur, dan kebutuhan bisnis." />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {["Cubiqlo", "Monev.app", "Contenly.app", "Ganesha Travel", "Whale Dive Centre"].map((item) => {
                const slug = item.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "");
                return (
                  <Link href={`/portfolio/${slug}`} key={item}>
                    <Card className="min-h-40 group cursor-pointer hover:border-cyan-300/30 transition">
                      <div className="mb-5 h-20 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                      <h3 className="font-bold group-hover:text-cyan-200 transition">{item}</h3>
                      <p className="mt-2 text-sm text-slate-400">Project showcase</p>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Process" title="Proses kerja jelas dari strategi sampai launch." />
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
              {process.map(([step, desc], index) => <Card className="p-5" key={step}><p className="text-sm font-mono text-cyan-300">0{index + 1}</p><h3 className="mt-3 font-bold">{step}</h3><p className="mt-2 text-sm text-slate-400">{desc}</p></Card>)}
            </div>
          </div>
        </section>

        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Testimonial" title="Klien bilang apa tentang hasil kerja kami." description="Feedback real dari bisnis yang sudah merasakan dampak website yang dikerjakan dengan serius." />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Budi Santoso", role: "Owner, Ganesha Travel", quote: "Website baru bikin inquiry dari Google naik drastis. Tim Nggawe Web paham banget soal SEO dan struktur website untuk bisnis travel.", stars: 5 },
                { name: "Sarah K.", role: "Founder, Cubiqlo", quote: "Design-nya clean, profesional, dan loading cepat. Customer langsung percaya begitu lihat website. Prosesnya juga rapi dari awal sampai launch.", stars: 5 },
                { name: "Rizky Pratama", role: "CEO, Whale Dive Centre", quote: "Dari website lama yang biasa aja, sekarang booking inquiry naik 3x lipat. Gallery dan trip schedule bikin customer lebih yakin.", stars: 5 },
              ].map((t) => (
                <Card key={t.name}>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-sm leading-7 text-slate-300 italic">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] md:text-5xl">Mau website yang bukan cuma bagus, tapi juga bekerja untuk bisnis kamu?</h2>
              <p className="text-lg leading-8 text-blue-50">Ceritakan kebutuhan kamu. Kami bantu mapping solusi paling masuk akal: mulai dari website, SEO, sampai automation.</p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton className="bg-white text-blue-700 shadow-none hover:bg-blue-50" href={whatsappHref}>Konsultasi Gratis</LinkButton>
                <LinkButton href="/brief-project" variant="secondary">Isi Brief Project</LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
