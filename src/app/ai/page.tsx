import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX AI",
  description: "Multi-agent AI by JagX & JRILICENSE. Designed by JagX AI.",
};

export default function AIPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">01 · Intelligence</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX AI</h1>
          <p className="prose-body text-lg mb-4">Multi-agent system that plans, scaffolds, writes, reviews, and corrects — attributed to JagX &amp; JRILICENSE.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-[4/5] anim-glow flex items-center justify-center p-6 bg-[#0d0d0d]">
            <img src="/visual-robot.svg" alt="JagX AI robot" className="object-contain max-h-full anim-float" />
          </div>
          <div className="img-frame rounded-xl aspect-[4/5] flex flex-col items-center justify-center p-8 bg-[#0d0d0d] gap-4">
            <img src="/brand-mark.svg" alt="JagX" width={64} height={64} className="rounded-xl anim-pulse" />
            <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={56} height={56} className="rounded-full" />
            <p className="text-sm text-center text-[#8a8a8a]">Identity protected · Watermarked outputs</p>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p>GROUP coding CLI with specialist agents. Review loops. Destructive commands blocked. Tool calling under JagX identity rules.</p>
          <p><strong className="text-white font-normal">In Africa:</strong> Ship without expensive foreign AI seats. <strong className="text-white font-normal">Worldwide:</strong> Multi-agent review for real teams. <strong className="text-white font-normal">Direction:</strong> On-device runs via JagX OS and Silicon.</p>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto"><Link href="/connect" className="text-sm text-[#8a8a8a] hover:text-white">Next: Connect →</Link></div>
      </section>
    </PageShell>
  );
}
