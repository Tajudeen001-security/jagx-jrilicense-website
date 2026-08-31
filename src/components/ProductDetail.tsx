import Link from "next/link";
import type { ProductLine } from "@/lib/products";

export default function ProductDetail({ product }: { product: ProductLine }) {
  return (
    <>
      <section className="pt-16 pb-10 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">{product.title}</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-4">{product.title}</h1>
          <p className="prose-body text-lg mb-3">{product.tagline}</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>
      <section className="px-5 pb-10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-[4/3] anim-glow flex items-center justify-center p-8 bg-[#0d0d0d]">
            <img src={product.img} alt={product.title} className="object-contain max-h-full anim-float" />
          </div>
          <div className="img-frame rounded-xl aspect-[4/3] flex items-center justify-center p-8 bg-[#0d0d0d]">
            <img src="/visual-africa.svg" alt="Built for people across Africa" className="object-contain max-h-full" />
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Product types</p>
          <h2 className="text-2xl font-normal tracking-tight mb-8">What we offer under {product.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.types.map((t) => (
              <div key={t.name} className="border border-[#1f1f1f] bg-[#111] rounded-xl p-5 chip-grid-item">
                <div className="text-sm text-white mb-2">{t.name}</div>
                <p className="text-xs text-[#8a8a8a] leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Promises</p>
          <h2 className="text-2xl font-normal tracking-tight mb-6">What we commit to</h2>
          <ul className="space-y-3 prose-body">
            {product.promises.map((p) => (
              <li key={p} className="flex gap-3"><span className="text-[#5c5c5c]">—</span><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Investment outlook</p>
          <h2 className="text-2xl font-normal tracking-tight mb-4">Indicative spend 2032 → 2040+</h2>
          <p className="text-xs text-[#5c5c5c] mb-8 max-w-2xl">Planning ranges only — not a formal budget or guarantee. Cumulative order-of-magnitude targets for R&amp;D, infrastructure, people, and go-to-market.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {product.outlook.map((o) => (
              <div key={o.period} className="border border-[#1f1f1f] bg-[#111] rounded-xl p-5">
                <div className="text-[11px] font-mono text-[#5c5c5c] tracking-wider mb-2">{o.period}</div>
                <div className="text-sm text-white mb-2">{o.spend}</div>
                <p className="text-xs text-[#8a8a8a] leading-relaxed">{o.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/roadmap" className="text-[#8a8a8a] hover:text-white">Full roadmap →</Link>
          <Link href="/" className="text-[#8a8a8a] hover:text-white">← All products</Link>
        </div>
      </section>
    </>
  );
}
