import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AuditForm } from "@/components/forms/audit-form";
import { CheckCircle2, FileText, Gauge, Layout, MessageCircle, Search, Smartphone, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = {
  title: "Audit Website dan SEO Gratis — Nggawe Web",
  description:
    "Minta audit singkat untuk cek tampilan, speed, SEO basic, CTA, dan peluang improvement website kamu dari Nggawe Web.",
};


const auditOutput = [
  "3–5 poin masalah paling penting di website / online presence",
  "Cek cepat SEO basic: title, heading, sitemap, indexability, dan struktur halaman",
  "Cek trust & CTA: apakah visitor cukup yakin untuk chat atau isi form",
  "Peluang automation: form, WhatsApp, CRM/sheet, notifikasi, dan follow-up",
  "Rekomendasi paket: Starter, Growth System, atau Automation System",
];

const nextSteps = [
  [FileText, "Isi form audit", "Kirim URL website dan kendala utama yang paling terasa."],
  [Search, "Kami cek cepat", "Kami review tampilan, SEO basic, CTA, speed, dan lead flow."],
  [MessageCircle, "Follow-up rekomendasi", "Kamu dapat ringkasan awal dan opsi solusi paling masuk akal."],
] as const;

const checks = [
  { icon: Layout, title: "Tampilan & Trust", body: "Apakah website terlihat profesional dan meyakinkan?" },
  { icon: Smartphone, title: "Mobile Experience", body: "Apakah website responsif dan nyaman di HP?" },
  { icon: Gauge, title: "Speed Basic", body: "Seberapa cepat website dimuat?" },
  { icon: Search, title: "SEO Basic", body: "Apakah metadata, heading, dan struktur sudah benar?" },
  { icon: Zap, title: "CTA Clarity", body: "Apakah visitor tahu harus ngapain setelah lihat website?" },
  { icon: CheckCircle2, title: "Lead Flow", body: "Apakah form dan follow-up sudah terhubung dengan baik?" },
];

export default function AuditGratisPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container-shell py-4">
          <Breadcrumbs items={[{ label: "Audit Gratis" }]} />
        </div>
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Audit Gratis</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[1.05] tracking-[-0.06em] text-slate-900 md:text-6xl">
              Dapatkan audit singkat untuk website kamu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700">
              Kami akan cek tampilan, speed, SEO basic, struktur CTA, dan peluang improvement awal untuk website kamu.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Card className="p-7">
                <Badge>Output Audit</Badge>
                <h2 className="mt-5 font-heading text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-4xl">
                  Bukan audit teoritis — kamu dapat rekomendasi langkah berikutnya.
                </h2>
                <ul className="mt-6 space-y-4">
                  {auditOutput.map((item) => (
                    <li className="flex gap-3 text-sm leading-7 text-slate-600" key={item}>
                      <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <div className="space-y-4">
                {nextSteps.map(([Icon, title, body], index) => (
                  <Card className="flex items-start gap-4 p-5" key={title}>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={21} />
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold text-blue-600">0{index + 1}</p>
                      <h3 className="mt-1 font-heading text-xl font-bold text-slate-900">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-10">
              <div>
                <h2 className="font-heading text-2xl font-bold tracking-[-0.04em] text-slate-900">Yang kami cek</h2>
                <p className="mt-3 text-slate-400">Audit ringkas mencakup area utama yang paling berpengaruh ke performa website.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {checks.map((check) => {
                  const Icon = check.icon;
                  return (
                    <Card key={check.title} className="p-5">
                      <Icon className="mb-3 text-blue-600" size={24} />
                      <h3 className="font-bold">{check.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{check.body}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/[0.03] p-6">
                <p className="text-sm text-slate-400">
                  <span className="font-bold text-slate-900">Catatan:</span> Audit gratis bersifat ringkas. Untuk audit mendalam, kami bisa siapkan technical SEO dan conversion audit terpisah.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 md:p-8">
              <AuditForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
