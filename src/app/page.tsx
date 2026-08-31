import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PRODUCTS, FREE_API_KEYS } from "@/lib/products";

export default function Home() {
  return (
    <PageShell>
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src="/brand-mark.svg" alt="JagX" width={44} height={44} className="rounded-xl anim-pulse" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={44} height={44} className="rounded-full" />
          </div>
          <p className="eyebrow mb-6">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.15rem] font-normal tracking-tight leading-[1.12] mb-8">
            Eleven product lines<br />for Africa and the world<br />— through 2040 and beyond.
          </h1>
          <p className="prose-body max-w-xl mb-5">
            JagX &amp; JRILICENSE builds AI, secure social, operating systems, silicon, mobility, devices, cloud, education, energy, security, and payments. Every line is written for mobile-first users in Lagos, Nairobi, Accra, Johannesburg and across the continent — and for anyone worldwide who wants the same privacy and reliability.
          </p>
          <p className="prose-body max-w-xl mb-10">
            Free JagX AI API keys are published for builders. Product pages carry long explanations, formal and branded imagery, types, promises, and indicative investment through 2040+.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/ai" className="inline-flex px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#e8e8e8] transition-colors">Free AI API keys</Link>
            <Link href="/roadmap" className="inline-flex px-5 py-2.5 text-sm border border-[#333] rounded-full hover:border-[#666] transition-colors">2032–2040 roadmap</Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto img-frame rounded-2xl overflow-hidden anim-glow">
          <img src="/visual-africa.svg" alt="Built for people across Africa" className="w-full object-cover" />
        </div>
      </section>

      <section className="py-16 px-5 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">All products</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-4 max-w-xl">Long stories, clear types, real direction</h2>
          <p className="prose-body text-sm max-w-xl mb-10">Each page includes formal photography where it helps, branded JagX visuals, African community imagery, product types, promises, and 2032–2040+ spend outlooks.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group block border border-[#1f1f1f] bg-[#111] rounded-2xl overflow-hidden hover:border-[#333] transition-all hover:shadow-xl hover:shadow-black/40">
                <div className="img-frame aspect-[16/10] bg-[#0d0d0d] flex items-center justify-center p-5 border-0">
                  <img src={p.img} alt={p.title} className="object-contain max-h-full anim-float" style={{ animationDelay: `${i * 0.12}s` }} />
                </div>
                <div className="p-5">
                  <div className="text-sm font-medium mb-2">{p.title}</div>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed mb-3">{p.tagline}</p>
                  <p className="text-[10px] text-[#5c5c5c] font-mono">{p.types.length} types · to 2040+</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-[#1f1f1f] bg-[#0c0c0c]">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Free for builders</p>
          <h2 className="text-2xl font-normal tracking-tight mb-4">JagX AI API keys</h2>
          <p className="prose-body mb-6 text-sm">Starter keys for prototypes and student projects. Fair use. Full detail on the JagX AI page.</p>
          <div className="space-y-3 mb-6">
            {FREE_API_KEYS.map((k) => (
              <code key={k.key} className="block text-xs sm:text-sm font-mono text-[#e8e8e8] break-all bg-[#111] border border-[#1f1f1f] rounded-xl px-4 py-3 select-all">{k.key}</code>
            ))}
          </div>
          <Link href="/ai" className="text-sm text-[#8a8a8a] hover:text-white border-b border-[#333] pb-0.5">Open JagX AI →</Link>
        </div>
      </section>

      <section className="py-16 px-5 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p className="eyebrow">People first</p>
          <h2 className="text-2xl text-white font-normal tracking-tight">African communities in the frame</h2>
          <p>Imagery and planning center people across Africa — not only Western stock scenes. Formal product photography sits next to branded JagX art and community visuals.</p>
          <Link href="/roadmap" className="inline-block text-sm text-[#8a8a8a] hover:text-white border-b border-[#333] pb-0.5">See indicative investment by line →</Link>
        </div>
      </section>
    </PageShell>
  );
}
