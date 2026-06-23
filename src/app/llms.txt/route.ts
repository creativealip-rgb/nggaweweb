import { siteConfig } from "@/content/site";
import { getPublishedPosts } from "@/lib/blog-store";
import { portfolioItems } from "@/content/portfolio";

export const dynamic = "force-static";

export function GET(): Response {
  const posts = getPublishedPosts();
  const lines: string[] = [];

  lines.push(`# Nggawe Web`);
  lines.push(``);
  lines.push(`> Jasa pembuatan website profesional, SEO optimization, dan business automation untuk bisnis di Indonesia.`);
  lines.push(``);
  lines.push(`## Services`);
  lines.push(``);
  lines.push(`- [Jasa Pembuatan Website](${siteConfig.url}/jasa-pembuatan-website): Website profesional untuk bisnis service, startup, UMKM. Mulai dari Rp3,5 juta.`);
  lines.push(`- [Jasa SEO](${siteConfig.url}/jasa-seo): Optimasi SEO teknis dan konten agar website bisnis kamu lebih ditemukan di Google.`);
  lines.push(`- [Jasa Automation](${siteConfig.url}/jasa-automation): Workflow automation untuk hemat waktu dan rapikan proses bisnis.`);
  lines.push(`- [Agency Subcontract](${siteConfig.url}/agency-subcontract): Partner white-label untuk agency yang butuh jasa build website.`);
  lines.push(``);
  lines.push(`## Portfolio`);
  lines.push(``);

  for (const item of portfolioItems) {
    lines.push(`- [${item.name}](${siteConfig.url}/portfolio/${item.slug}): ${item.summary}`);
  }

  lines.push(``);
  lines.push(`## Blog`);
  lines.push(``);

  for (const post of posts) {
    lines.push(`- [${post.title}](${siteConfig.url}/blog/${post.slug}): ${post.excerpt}`);
  }

  lines.push(``);
  lines.push(`## Resources`);
  lines.push(``);
  lines.push(`- [FAQ](${siteConfig.url}/faq): Pertanyaan umum tentang biaya website, timeline, SEO, automation.`);
  lines.push(`- [Cost Calculator](${siteConfig.url}/tools/website-cost-calculator): Hitung estimasi biaya pembuatan website.`);
  lines.push(`- [Audit Gratis](${siteConfig.url}/audit-gratis): Audit website gratis untuk cek performa dan SEO.`);
  lines.push(`- [Brief Project](${siteConfig.url}/brief-project): Isi brief untuk memulai project website.`);
  lines.push(`- [Tentang Kami](${siteConfig.url}/tentang): Tentang Nggawe Web.`);
  lines.push(`- [Kontak](${siteConfig.url}/kontak): Hubungi Nggawe Web.`);
  lines.push(``);
  lines.push(`## Contact`);
  lines.push(``);
  lines.push(`- WhatsApp: +62895322348554`);
  lines.push(`- Email: halo@nggawe.web.id`);
  lines.push(`- Website: ${siteConfig.url}`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
