import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { whatsappHref } from "@/content/site";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServicePageData = {
  relatedServices?: { label: string; href: string; description: string }[];
  pillarSections?: { title: string; body: string; points?: string[] }[];
  fitFor?: { title: string; body: string }[];
  comparison?: { columns: string[]; rows: string[][] } ;
  proofBlocks?: { project: string; challenge: string; solution: string; result: string }[];
  clusterLinks?: { label: string; href: string }[];
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
  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.eyebrow,
    description: data.subheadline,
    provider: { "@type": "Organization", name: "Nggawe Web", url: "https://nggawe.web.id" },
    areaServed: "ID",
    serviceType: data.eyebrow,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-200 bg-grid py-20 md:py-28">
          <div className="container-shell grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-8">
              <Badge>{data.eyebrow}</Badge>
              <div className="space-y-6">
                <h1 className="font-heading text-4xl font-black leading-[0.95] tracking-[-0.07em] text-slate-900 md:text-6xl">
                  {data.h1}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">{data.subheadline}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <LinkButton href={data.primaryCta.href}>{data.primaryCta.label} <ArrowRight size={18} /></LinkButton>
                <LinkButton href={data.secondaryCta.href} variant="secondary">{data.secondaryCta.label}</LinkButton>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/15 bg-white/80 p-6 shadow-[0_0_80px_rgba(59,130,246,0.22)] backdrop-blur">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
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
                    <div className="h-28 rounded-2xl bg-blue-50" />
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
                  <XCircle className="mb-5 text-red-400" />
                  <h3 className="font-heading text-xl font-bold tracking-[-0.03em]">{p.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{p.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Value Prop + Deliverables */}
        <section className="bg-white/40 py-20 md:py-28">
          <div className="container-shell grid items-start gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <Badge>Solusi</Badge>
              <h2 className="font-heading text-3xl font-black tracking-[-0.04em] text-slate-900 md:text-5xl">
                {data.valueProp.heading}
              </h2>
              <p className="text-lg leading-8 text-slate-600">{data.valueProp.body}</p>
            </div>
            <Card>
              <h3 className="mb-6 font-heading text-xl font-bold">Yang kamu dapat</h3>
              <ul className="space-y-4">
                {data.deliverables.map((d) => (
                  <li className="flex gap-3 text-slate-600" key={d}>
                    <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
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
                  <p className="font-mono text-sm text-blue-600">0{i + 1}</p>
                  <h3 className="mt-3 font-heading text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{step.body}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="bg-white/40 py-20 md:py-28">
          <div className="container-shell space-y-12">
            <SectionHeader align="center" eyebrow="Portfolio" title="Project terkait" />
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {data.portfolioItems.map((item) => (
                <a key={item.name} href={`/portfolio/${toSlug(item.name)}`} className="group block">
                  <Card className="transition group-hover:border-cyan-400/40">
                    <div className="mb-5 h-20 rounded-2xl bg-gradient-to-br from-blue-500/25 to-cyan-300/10" />
                    <h3 className="font-bold group-hover:text-blue-600 transition">{item.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>



        {/* Fit For */}
        {data.fitFor && data.fitFor.length > 0 && (
          <section className="bg-white/40 py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Cocok untuk siapa" title={`${data.eyebrow} cocok untuk bisnis seperti apa?`} />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {data.fitFor.map((item) => (
                  <Card key={item.title} className="p-6">
                    <h3 className="font-heading text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparison */}
        {data.comparison && (
          <section className="py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Perbandingan" title="Pilih opsi yang paling sesuai dengan kebutuhan" />
              <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white/70">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-white/5 text-slate-700">
                    <tr>
                      {data.comparison.columns.map((column) => (
                        <th className="px-5 py-4 font-semibold" key={column}>{column}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {data.comparison.rows.map((row) => (
                      <tr key={row.join('-')}>
                        {row.map((cell, index) => (
                          <td className={`px-5 py-4 leading-7 ${index === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`} key={`${row[0]}-${index}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* Proof Blocks */}
        {data.proofBlocks && data.proofBlocks.length > 0 && (
          <section className="bg-white/40 py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Proof" title="Bukti kerja: challenge → solution → result" />
              <div className="grid gap-5 lg:grid-cols-3">
                {data.proofBlocks.map((item) => (
                  <Card key={item.project} className="p-7">
                    <h3 className="font-heading text-xl font-bold text-slate-900">{item.project}</h3>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600">
                      <p><strong className="text-red-300">Challenge:</strong> {item.challenge}</p>
                      <p><strong className="text-blue-600">Solution:</strong> {item.solution}</p>
                      <p><strong className="text-emerald-300">Result:</strong> {item.result}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pillar Content */}
        {data.pillarSections && data.pillarSections.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Panduan Lengkap" title={`Panduan ${data.eyebrow} untuk bisnis`} />
              <div className="mx-auto max-w-4xl space-y-10">
                {data.pillarSections.map((section) => (
                  <Card key={section.title} className="p-7 md:p-9">
                    <h2 className="font-heading text-2xl font-black tracking-[-0.04em] text-slate-900 md:text-3xl">{section.title}</h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
                    {section.points && section.points.length > 0 && (
                      <ul className="mt-6 space-y-3">
                        {section.points.map((point) => (
                          <li className="flex gap-3 text-slate-600" key={point}>
                            <CheckCircle2 className="mt-0.5 shrink-0 text-blue-600" size={18} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Cluster Links */}
        {data.clusterLinks && data.clusterLinks.length > 0 && (
          <section className="bg-white/40 py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Topic Cluster" title="Artikel pendukung untuk mendalami topik ini" />
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {data.clusterLinks.map((link) => (
                  <a key={link.href} href={link.href} className="group block rounded-2xl border border-slate-200 bg-white/[0.03] p-5 transition hover:border-cyan-400/40">
                    <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

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
        {/* Related Services */}
        {data.relatedServices && data.relatedServices.length > 0 && (
          <section className="bg-white/40 py-20 md:py-28">
            <div className="container-shell space-y-12">
              <SectionHeader align="center" eyebrow="Lainnya" title="Layanan terkait" />
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {data.relatedServices.map((svc) => (
                  <a key={svc.href} href={svc.href} className="group block">
                    <Card className="transition group-hover:border-cyan-400/40">
                      <h3 className="font-bold group-hover:text-blue-600 transition">{svc.label}</h3>
                      <p className="mt-2 text-sm text-slate-400">{svc.description}</p>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="pb-20 md:pb-28">
          <div className="container-shell rounded-[2rem] border border-blue-200 bg-gradient-to-r from-blue-600 to-cyan-500 p-8 md:p-14">
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