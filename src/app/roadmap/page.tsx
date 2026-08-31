import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PRODUCTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Roadmap 2032–2040+",
  description: "Indicative investment and direction for every JagX product line.",
};

export default function RoadmapPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">Planning</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">Roadmap &amp; spend<br />2032 → 2040+</h1>
          <p className="prose-body mb-4">Order-of-magnitude cumulative ranges per product line. Not a formal budget or guarantee — a public statement of direction.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>
      <section className="px-5 pb-8">
        <div className="max-w-6xl mx-auto img-frame rounded-xl overflow-hidden mb-10">
          <img src="/visual-africa.svg" alt="Africa focus" className="w-full" />
        </div>
      </section>
      <section className="px-5 pb-16">
        <div className="max-w-6xl mx-auto space-y-10">
          {PRODUCTS.map((p) => (
            <div key={p.slug} className="border border-[#1f1f1f] bg-[#111] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <img src={p.img} alt="" width={40} height={40} className="rounded-lg object-contain bg-[#0d0d0d]" />
                <div>
                  <Link href={`/${p.slug}`} className="text-sm text-white hover:underline">{p.title}</Link>
                  <p className="text-xs text-[#5c5c5c]">{p.tagline}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-3">
                {p.outlook.map((o) => (
                  <div key={o.period} className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-lg p-4">
                    <div className="text-[10px] font-mono text-[#5c5c5c] mb-1">{o.period}</div>
                    <div className="text-sm text-white mb-1">{o.spend}</div>
                    <p className="text-xs text-[#8a8a8a]">{o.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
