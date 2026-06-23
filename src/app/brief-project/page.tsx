import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BriefForm } from "@/components/forms/brief-form";

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
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <Badge>Brief Project</Badge>
              <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
                Ceritakan project kamu.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Isi brief singkat agar kami bisa memahami kebutuhan, target, budget, dan rekomendasi solusi yang paling masuk akal.
              </p>
              <div className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-heading text-lg font-bold text-white">Yang terjadi setelah kamu isi brief:</h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3"><span className="font-mono text-cyan-300">01</span> Kami review kebutuhan dan website kamu</li>
                  <li className="flex gap-3"><span className="font-mono text-cyan-300">02</span> Kami kasih rekomendasi solusi dan estimasi</li>
                  <li className="flex gap-3"><span className="font-mono text-cyan-300">03</span> Kami follow-up via WhatsApp/email dalam 1x24 jam</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 md:p-8">
              <BriefForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
