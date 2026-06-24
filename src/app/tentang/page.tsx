import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { whatsappHref } from "@/content/site";
import { ArrowRight, CheckCircle2, Code2, Search, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Nggawe Web — Website, SEO, dan Automation",
  description:
    "Kenali Nggawe Web, partner untuk pembuatan website, SEO, automation, dan white-label development untuk bisnis dan agency.",
};

export default function TentangPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell space-y-8">
            <Badge>Tentang</Badge>
            <h1 className="max-w-4xl font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-slate-900 md:text-6xl">
              Nggawe Web membantu bisnis membangun website dan sistem digital yang lebih rapi.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Kami bukan cuma bikin tampilan. Kami bantu bisnis punya aset digital yang bisa ditemukan Google, membangun trust, dan menangkap lead secara otomatis.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-4xl">Kenapa Nggawe Web?</h2>
              <p className="text-lg leading-8 text-slate-600">
                Banyak agency bikin website yang bagus tapi tidak menghasilkan. Banyak freelancer bikin website cepat tapi tidak sustainable. Nggawe Web ada di tengah: design premium, technical SEO kuat, dan automation yang bikin bisnis jalan lebih efisien.
              </p>
              <ul className="space-y-4">
                {[
                  "Website bukan cuma brosur, tapi aset digital",
                  "SEO dari awal, bukan tempelan di akhir",
                  "Automation buat hemat waktu dan rapikan proses",
                  "Portfolio real, bukan template generik",
                  "Fokus hasil bisnis, bukan cuma deliverable",
                ].map((item) => (
                  <li className="flex gap-3 text-slate-600" key={item}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-5">
              <Card>
                <Code2 className="mb-4 text-blue-600" size={28} />
                <h3 className="font-heading text-xl font-bold">Website Development</h3>
                <p className="mt-3 text-sm text-slate-400">Custom design, responsive, cepat, dan SEO-ready.</p>
              </Card>
              <Card>
                <Search className="mb-4 text-blue-600" size={28} />
                <h3 className="font-heading text-xl font-bold">SEO Optimization</h3>
                <p className="mt-3 text-sm text-slate-400">Technical SEO, local SEO, content strategy, dan keyword mapping.</p>
              </Card>
              <Card>
                <Bot className="mb-4 text-blue-600" size={28} />
                <h3 className="font-heading text-xl font-bold">Business Automation</h3>
                <p className="mt-3 text-sm text-slate-400">n8n workflow, lead automation, notification, dan CRM sync.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border-2 border-blue-400 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-xl shadow-blue-500/20 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-white drop-shadow-sm md:text-5xl">
                Mau mulai project?
              </h2>
              <p className="text-lg leading-8 text-white">
                Ceritakan kebutuhan kamu. Kami bantu rekomendasi solusi yang paling masuk akal.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton className="bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600" href={whatsappHref}>
                  Konsultasi Gratis <ArrowRight size={16} />
                </LinkButton>
                <LinkButton href="/brief-project" variant="secondary">
                  Isi Brief Project
                </LinkButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
