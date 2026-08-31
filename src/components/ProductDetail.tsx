import Link from "next/link";
import type { ProductLine } from "@/lib/products";
import { FREE_API_KEYS } from "@/lib/products";

export default function ProductDetail({ product }: { product: ProductLine }) {
  return (
    <>
      <section className="pt-16 pb-10 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">{product.title}</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-5 leading-tight">{product.title}</h1>
          <p className="prose-body text-lg mb-4">{product.tagline}</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {product.gallery.slice(0, 2).map((src, i) => (
              <div key={src + i} className={`img-frame rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden bg-[#0d0d0d] ${i === 0 ? "anim-glow" : ""}`}>
                <img src={src} alt={`${product.title} visual ${i + 1}`} className={`w-full h-full ${src.startsWith("/") ? "object-contain p-6 anim-float" : "object-cover"}`} />
              </div>
            ))}
          </div>
          {product.gallery.length > 2 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {product.gallery.slice(2).map((src, i) => (
                <div key={src + i} className="img-frame rounded-xl aspect-[4/3] overflow-hidden bg-[#0d0d0d] flex items-center justify-center">
                  <img src={src} alt={`${product.title} gallery ${i + 3}`} className={`w-full h-full ${src.startsWith("/") ? "object-contain p-4" : "object-cover"}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-6">
          <p className="text-lg text-[#d0d0d0] leading-relaxed">{product.longIntro}</p>
          {product.longBody.map((para) => (
            <p key={para.slice(0, 48)}>{para}</p>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-xl text-white font-normal mb-3">In Africa</h2>
            <p className="prose-body">{product.africaImpact}</p>
          </div>
          <div>
            <h2 className="text-xl text-white font-normal mb-3">In the world</h2>
            <p className="prose-body">{product.worldImpact}</p>
          </div>
          <div>
            <h2 className="text-xl text-white font-normal mb-3">Direction</h2>
            <p className="prose-body">{product.direction}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Product types</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-8">What we offer under {product.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.types.map((t) => (
              <div key={t.name} className="border border-[#1f1f1f] bg-[#111] rounded-2xl p-6 chip-grid-item">
                <div className="text-sm text-white mb-3 font-medium">{t.name}</div>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{t.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Promises</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-8">What we commit to offer</h2>
          <ul className="space-y-4">
            {product.promises.map((p) => (
              <li key={p} className="flex gap-4 border border-[#1f1f1f] bg-[#111] rounded-xl px-5 py-4">
                <span className="text-white shrink-0">✓</span>
                <span className="prose-body text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {product.slug === "ai" && (
        <section className="px-5 py-14 border-t border-[#1f1f1f] bg-[#0c0c0c]">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-3">Free for builders</p>
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-4">JagX AI API keys</h2>
            <p className="prose-body mb-8">
              Use these free starter keys in your prototypes, student projects, and hackathons. Fair use applies — do not abuse rate limits or resell access. Keys are published by JagX &amp; JRILICENSE for the community.
            </p>
            <div className="space-y-4">
              {FREE_API_KEYS.map((k) => (
                <div key={k.key} className="border border-[#2a2a2a] bg-[#111] rounded-2xl p-5">
                  <div className="text-xs text-[#5c5c5c] uppercase tracking-wider mb-2">{k.label}</div>
                  <code className="block text-sm sm:text-base text-[#e8e8e8] font-mono break-all select-all bg-[#0a0a0a] rounded-lg px-4 py-3 border border-[#1f1f1f]">{k.key}</code>
                  <p className="text-xs text-[#8a8a8a] mt-3">{k.note}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#5c5c5c] mt-6 leading-relaxed">
              Example: <code className="text-[#8a8a8a]">Authorization: Bearer jagx-…</code> — Designed by JagX AI.
            </p>
          </div>
        </section>
      )}

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-3">Investment outlook</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-4">Indicative spend 2032 → 2040+</h2>
          <p className="text-sm text-[#5c5c5c] mb-8 max-w-2xl leading-relaxed">Planning ranges only — not a formal budget or guarantee.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {product.outlook.map((o) => (
              <div key={o.period} className="border border-[#1f1f1f] bg-[#111] rounded-2xl p-6">
                <div className="text-[11px] font-mono text-[#5c5c5c] tracking-wider mb-3">{o.period}</div>
                <div className="text-lg text-white mb-3">{o.spend}</div>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{o.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link href="/roadmap" className="text-[#8a8a8a] hover:text-white transition-colors">Full roadmap →</Link>
          <Link href="/" className="text-[#8a8a8a] hover:text-white transition-colors">← All products</Link>
        </div>
      </section>
    </>
  );
}
