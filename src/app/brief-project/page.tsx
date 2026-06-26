import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BriefForm } from "@/components/forms/brief-form";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CheckCircle2, Clock, Target, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: "Brief Project Website, SEO, atau Automation — Nggawe Web",
  description:
    "Isi brief singkat untuk website, SEO, automation, atau white-label project. Nggawe Web akan review kebutuhan dan memberi rekomendasi langkah awal.",
};

export default function BriefProjectPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div className="container-shell py-4">
          <Breadcrumbs items={[{ label: "Brief Project" }]} />
        </div>
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <Badge>Brief Project</Badge>
              <h1 className="font-heading text-4xl font-black leading-[1.05] tracking-[-0.06em] text-slate-900 md:text-6xl">
                Ceritakan project kamu. Kami mapping ke paket yang paling masuk akal.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-700">
                Form ini dibuat untuk qualifying lead: kebutuhan website, SEO, automation, budget, timeline, dan paket yang paling mendekati.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  [Target, "Scope", "Website, SEO, automation, atau kombinasi."],
                  [Wallet, "Budget", "Starter, Growth, atau custom system."],
                  [Clock, "Timeline", "Urgent, bulan ini, atau fleksibel."],
                ].map(([Icon, title, body]) => {
                  const ItemIcon = Icon as typeof Target;
                  return (
                    <Card className="p-4" key={title as string}>
                      <ItemIcon className="mb-3 text-blue-600" size={20} />
                      <h3 className="font-heading text-base font-bold text-slate-900">{title as string}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{body as string}</p>
                    </Card>
                  );
                })}
              </div>
              <div className="space-y-4 rounded-2xl border border-blue-200 bg-blue-50/70 p-6">
                <h3 className="font-heading text-lg font-bold text-slate-900">Yang terjadi setelah kamu isi brief:</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} /> Kami review kebutuhan dan website kamu</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} /> Kami kasih rekomendasi paket + estimasi</li>
                  <li className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={16} /> Kami follow-up via WhatsApp/email dalam 1x24 jam</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 md:p-8">
              <BriefForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
