import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Connect",
  description: "Secure social by JagX & JRILICENSE. Designed by JagX AI.",
};

export default function ConnectPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">02 · Social</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Connect</h1>
          <p className="prose-body text-lg mb-4">Privacy defaults for African risk and mobile-first life — branded JagX Connect end to end.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
          <div className="img-frame rounded-xl aspect-square flex items-center justify-center p-10 bg-[#0d0d0d] anim-glow">
            <div className="text-center">
              <img src="/brand-mark.svg" alt="JagX" width={80} height={80} className="mx-auto mb-4 rounded-2xl anim-pulse" />
              <p className="text-lg text-white">JagX Connect</p>
              <p className="text-xs text-[#5c5c5c] mt-2">Moments · Circles · Secure chat</p>
            </div>
          </div>
          <div className="img-frame rounded-xl aspect-square flex items-center justify-center p-10 bg-[#0d0d0d]">
            <div className="text-center">
              <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={88} height={88} className="mx-auto mb-4 rounded-full" />
              <p className="text-sm text-[#8a8a8a]">JRILICENSE · co-creator mark</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body">
          <p>Real-time posts, messaging, Buddy Circles. Native Flutter apps. Goal: most secure social platform Africa has — credible worldwide.</p>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto"><Link href="/os" className="text-sm text-[#8a8a8a] hover:text-white">Next: JagX OS →</Link></div>
      </section>
    </PageShell>
  );
}
