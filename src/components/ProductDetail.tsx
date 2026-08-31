import Link from "next/link";
import type { ProductLine } from "@/lib/products";
import { FREE_API_KEYS } from "@/lib/products";

export default function ProductDetail({ product }: { product: ProductLine }) {
  const gallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.img, "/visual-africa.svg"];
  const longBody =
    product.longBody && product.longBody.length > 0
      ? product.longBody
      : [
          `${product.title} is part of the JagX & JRILICENSE family — built for African constraints and global reach.`,
          `Each product type below is a concrete offer path as the line matures through the 2030s.`,
        ];
  const longIntro = product.longIntro || `${product.title}: ${product.tagline}`;
  const africaImpact =
    product.africaImpact ||
    "Designed with mobile-first users across Africa in mind — costly data, shared devices, and trust risk are primary constraints.";
  const worldImpact =
    product.worldImpact ||
    "The same product family is meant to be competitive worldwide: privacy and reliability are not regional preferences.";
  const direction =
    product.direction ||
    "Ship foundations first, scale with partners, and keep layers coherent with OS, Silicon, and Cloud.";

  return (
    <>
      <section className="pt-16 pb-8 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">{product.title}</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-5 leading-tight">{product.title}</h1>
          <p className="prose-body text-lg mb-4">{product.tagline}</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>

      {/* ONE IMAGE PER ROW — full width, stacked */}
      <section className="px-5 pb-10">
        <div className="max-w-3xl mx-auto space-y-6">
          {gallery.map((src, i) => (
            <div
              key={src + i}
              className={`img-frame rounded-2xl aspect-[16/10] sm:aspect-[2/1] overflow-hidden bg-[#0d0d0d] flex items-center justify-center ${i === 0 ? "anim-glow" : ""}`}
            >
              <img
                src={src}
                alt={`${product.title} — image ${i + 1}`}
                className={`w-full h-full ${
                  src.startsWith("/")
                    ? "object-contain p-8 sm:p-12 anim-float"
                    : "object-cover"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-6">
          <p className="text-lg text-[#d0d0d0] leading-relaxed">{longIntro}</p>
          {longBody.map((para) => (
            <p key={para.slice(0, 56)}>{para}</p>
          ))}
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <p className="eyebrow mb-3">Africa</p>
            <h2 className="text-2xl text-white font-normal mb-5 tracking-tight">Advantages for Africa</h2>
            <div className="prose-body space-y-5">
              {africaImpact.split("\n\n").map((block) => (
                <p key={block.slice(0, 40)}>{block}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">World</p>
            <h2 className="text-2xl text-white font-normal mb-5 tracking-tight">Advantages for the world</h2>
            <div className="prose-body space-y-5">
              {worldImpact.split("\n\n").map((block) => (
                <p key={block.slice(0, 40)}>{block}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Path</p>
            <h2 className="text-2xl text-white font-normal mb-5 tracking-tight">Where we are going</h2>
            <div className="prose-body space-y-5">
              {direction.split("\n\n").map((block) => (
                <p key={block.slice(0, 40)}>{block}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Product types</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-8">What we offer under {product.title}</h2>
          <div className="space-y-4">
            {product.types.map((t) => (
              <div key={t.name} className="border border-[#1f1f1f] bg-[#111] rounded-2xl p-6 chip-grid-item">
                <div className="text-base text-white mb-2 font-medium">{t.name}</div>
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
            <p className="prose-body mb-8">Free starter keys for prototypes, student projects, and hackathons. Fair use. Published by JagX &amp; JRILICENSE.</p>
            <div className="space-y-4">
              {FREE_API_KEYS.map((k) => (
                <div key={k.key} className="border border-[#2a2a2a] bg-[#111] rounded-2xl p-5">
                  <div className="text-xs text-[#5c5c5c] uppercase tracking-wider mb-2">{k.label}</div>
                  <code className="block text-sm sm:text-base text-[#e8e8e8] font-mono break-all select-all bg-[#0a0a0a] rounded-lg px-4 py-3 border border-[#1f1f1f]">{k.key}</code>
                  <p className="text-xs text-[#8a8a8a] mt-3">{k.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 py-14 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Investment outlook</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-4">Indicative spend 2032 → 2040+</h2>
          <p className="text-sm text-[#5c5c5c] mb-8">Planning ranges only — not a formal budget or guarantee.</p>
          <div className="space-y-4">
            {product.outlook.map((o) => (
              <div key={o.period} className="border border-[#1f1f1f] bg-[#111] rounded-2xl p-6">
                <div className="text-[11px] font-mono text-[#5c5c5c] tracking-wider mb-2">{o.period}</div>
                <div className="text-lg text-white mb-2">{o.spend}</div>
                <p className="text-sm text-[#8a8a8a] leading-relaxed">{o.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-5 text-sm">
          <Link href="/roadmap" className="text-[#8a8a8a] hover:text-white">Full roadmap →</Link>
          <Link href="/" className="text-[#8a8a8a] hover:text-white">← All products</Link>
        </div>
      </section>
    </>
  );
}
