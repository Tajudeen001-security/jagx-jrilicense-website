import Link from "next/link";
import PageShell from "@/components/PageShell";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <PageShell>
      <section className="pt-16 pb-16 md:pt-24 md:pb-20 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <img src="/brand-mark.svg" alt="JagX" width={40} height={40} className="rounded-xl anim-pulse" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={40} height={40} className="rounded-full" />
          </div>
          <p className="eyebrow mb-6">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight leading-[1.15] mb-8">
            Eleven product lines<br />for Africa and the world<br />— through 2040 and beyond.
          </h1>
          <p className="prose-body max-w-xl mb-6">
            AI, secure social, OS, silicon, mobility, devices, cloud, education, energy, security, and payments. Built with African people and markets in the design — not as an afterthought.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/roadmap" className="inline-flex px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#e8e8e8] transition-colors">2032–2040 roadmap</Link>
            <Link href="/about" className="inline-flex px-5 py-2.5 text-sm border border-[#333] rounded-full hover:border-[#666] transition-colors">About</Link>
          </div>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto img-frame rounded-xl overflow-hidden anim-glow">
          <img src="/visual-africa.svg" alt="Built for people across Africa" className="w-full object-cover" />
        </div>
      </section>
      <section className="py-16 px-5 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <p className="eyebrow mb-4">All products</p>
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight mb-10">Types, promises, and long-horizon spend</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PRODUCTS.map((p, i) => (
              <Link key={p.slug} href={`/${p.slug}`} className="group block border border-[#1f1f1f] bg-[#111] rounded-xl overflow-hidden hover:border-[#333] transition-colors">
                <div className="img-frame aspect-[16/10] bg-[#0d0d0d] flex items-center justify-center p-5">
                  <img src={p.img} alt={p.title} className="object-contain max-h-full anim-float" style={{ animationDelay: `${i * 0.15}s` }} />
                </div>
                <div className="p-4">
                  <div className="text-sm font-medium mb-1">{p.title}</div>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed mb-2">{p.tagline}</p>
                  <p className="text-[10px] text-[#5c5c5c] font-mono">{p.types.length} types · to 2040+</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-5 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p className="eyebrow">People first</p>
          <h2 className="text-2xl text-white font-normal tracking-tight">African communities in the picture</h2>
          <p>Product design assumes mobile-first users in Lagos, Nairobi, Accra, Johannesburg and across the continent — as well as diaspora and global users who want the same privacy and reliability.</p>
          <Link href="/roadmap" className="inline-block text-sm text-[#8a8a8a] hover:text-white border-b border-[#333] pb-0.5">See indicative investment by line →</Link>
        </div>
      </section>
    </PageShell>
  );
}
