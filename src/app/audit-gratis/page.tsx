import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AuditForm } from "@/components/forms/audit-form";
import { CheckCircle2, Gauge, Layout, Search, Smartphone, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit Website dan SEO Gratis — Nggawe Web",
  description:
    "Minta audit singkat untuk cek tampilan, speed, SEO basic, CTA, dan peluang improvement website kamu dari Nggawe Web.",
};

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
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Audit Gratis</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-slate-900 md:text-6xl">
              Dapatkan audit singkat untuk website kamu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Kami akan cek tampilan, speed, SEO basic, struktur CTA, dan peluang improvement awal untuk website kamu.
            </p>
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
