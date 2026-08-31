import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX Connect",
  description: "The secure social platform built for Africa and the world. Designed by JagX AI.",
};

export default function ConnectPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">02 · Social</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX Connect</h1>
          <p className="prose-body text-lg mb-4">
            A social network designed so privacy is the default, communities are real, and African users are not an afterthought on someone else&apos;s product roadmap.
          </p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80" alt="Mobile social" width={900} height={675} /></div>
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80" alt="Community" width={900} height={675} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p>Connect is a real-time network: posts and moments, private and group messaging, interest-based Buddy Circles. Native Flutter apps for Android and iOS share accounts with the web. Auth supports email, OTP, and Google.</p>
          <p>The ambition is explicit: become the most secure social platform Africa has, and a serious option for people anywhere who are tired of being the product.</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto space-y-8 prose-body">
          <div><h3 className="text-white text-base mb-2">In Africa</h3><p>Account takeovers and leaky data practices erode trust. Families and small businesses need spaces where they can coordinate without broadcasting everything to advertisers. Connect prioritizes private messaging and community circles that work on mobile-first networks.</p></div>
          <div><h3 className="text-white text-base mb-2">Worldwide</h3><p>Journalists, organizers, diaspora families, and ordinary users face the same problem: platforms optimize for time-on-site, not safety. Stronger defaults help far beyond one continent.</p></div>
          <div><h3 className="text-white text-base mb-2">Direction</h3><p>Deeper encryption, better moderation for local languages, and integration with JagX OS so social and device layers share the same privacy model.</p></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80" alt="Mobile user" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=80" alt="Team online" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80" alt="Community" width={600} height={600} /></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/os" className="text-[#8a8a8a] hover:text-white">Next: JagX OS →</Link>
          <Link href="/ai" className="text-[#8a8a8a] hover:text-white">← JagX AI</Link>
        </div>
      </section>
    </PageShell>
  );
}
