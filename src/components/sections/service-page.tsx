import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { whatsappHref } from "@/content/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePageData = {
  eyebrow: string;
  h1: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroVisual?: React.ReactNode;
  problems: { title: string; body: string }[];
  valueProp: { heading: string; body: string };
  deliverables: string[];
  processSteps: { title: string; body: string }[];
  portfolioItems: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  finalCta: { heading: string; body: string };
};

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-8">
              <Badge>{data.eyebrow}</Badge>
              <div className="space-y-6">
                <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-white md:text-6xl">
                  {data.h1}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">{data.subheadline}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href={data.primaryCta.href}>{data.primaryCta.label} <ArrowRight size={18} /></LinkButton>
                <LinkButton href={data.secondaryCta.href} variant="secondary">{data.secondaryCta.label}</LinkButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-slate-900/80 p-6 shadow-[0_0_80px_rgba(59,130,246,0.22)] backdrop-blur">
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
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="h-28 rounded-2xl bg-blue-500/20" />
                    <div className="h-28 rounded-2xl bg-cyan-500/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Problem" title="Kenapa butuh layanan ini?" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.problems.map((p) => (
                <Card key={p.title}>
                  <CheckCircle2 className="mb-5 text-cyan-300" />
                  <h3 className="font-heading text-xl font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{p.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Prop + Deliverables */}
        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <Badge>Solusi</Badge>
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
                {data.valueProp.heading}
              </h2>
              <p className="text-lg leading-8 text-slate-300">{data.valueProp.body}</p>
            </div>
            <Card>
              <h3 className="mb-6 font-heading text-xl font-bold">Yang kamu dapat</h3>
              <ul className="space-y-4">
                {data.deliverables.map((d) => (
                  <li className="flex gap-3 text-slate-300" key={d}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Process" title="Proses kerja jelas" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {data.processSteps.map((step, i) => (
                <Card key={step.title}>
                  <p className="font-mono text-sm text-cyan-300">0{i + 1}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="bg-slate-900/40 py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Portfolio" title="Project terkait" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.portfolioItems.map((item) => (
                <Card key={item.name}>
                  <div className="mb-5 h-20 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="FAQ" title="Pertanyaan yang sering ditanyakan" />
            <div className="mx-auto max-w-3xl space-y-4">
              {data.faqs.map((faq) => (
                <Card key={faq.question} className="p-6">
                  <h3 className="font-heading text-lg font-bold">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border border-cyan-300/20 bg-gradient-to-r from-blue-700 to-cyan-600 p-8 md:p-14">
            <div className="max-w-3xl space-y-6">
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] md:text-5xl">{data.finalCta.heading}</h2>
              <p className="text-lg leading-8 text-blue-50">{data.finalCta.body}</p>
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
