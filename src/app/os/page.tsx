import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "JagX OS",
  description: "Privacy-first operating layer for phones and edge devices, with on-device AI. Designed by JagX AI.",
};

export default function OSPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">03 · Operating system</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX OS</h1>
          <p className="prose-body text-lg mb-4">
            An operating layer for phones and edge hardware that assumes the user owns the device — not the advertiser. Privacy, on-device AI, and long support cycles are design constraints, not optional extras.
          </p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&q=80" alt="System security" width={900} height={675} /></div>
          <div className="img-frame rounded-xl aspect-[4/3]"><img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&q=80" alt="Software interface" width={900} height={675} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-normal mb-6">Advantages</h2>
          <div className="space-y-4 prose-body">
            <div className="border border-[#1f1f1f] bg-[#111] rounded-lg p-5"><h3 className="text-white text-base mb-2">Privacy by default</h3><p>Permissions are explicit. Background collection is minimized. Sensitive work stays in secure storage on the device where possible.</p></div>
            <div className="border border-[#1f1f1f] bg-[#111] rounded-lg p-5"><h3 className="text-white text-base mb-2">On-device JagX AI</h3><p>Inference for common tasks can run locally when silicon allows — so a weak connection does not block basic assistance, and prompts do not need to leave the phone for every request.</p></div>
            <div className="border border-[#1f1f1f] bg-[#111] rounded-lg p-5"><h3 className="text-white text-base mb-2">Connect-native</h3><p>Messaging and identity integrate with JagX Connect without forcing users through third-party SDKs that harvest behavior for ads.</p></div>
            <div className="border border-[#1f1f1f] bg-[#111] rounded-lg p-5"><h3 className="text-white text-base mb-2">Longer useful life</h3><p>Security updates and a modular app model aim to keep devices useful for years — important where replacing a phone every cycle is not realistic.</p></div>
            <div className="border border-[#1f1f1f] bg-[#111] rounded-lg p-5"><h3 className="text-white text-base mb-2">Transparent control</h3><p>Clear settings for network, storage, and AI usage. Users should understand what the OS is doing.</p></div>
          </div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-5">
          <p><strong className="text-white font-normal">In Africa:</strong> People who pay for every megabyte, share devices, or face higher risk if an account is taken over. An OS that keeps more processing local reduces both cost and harm.</p>
          <p><strong className="text-white font-normal">Worldwide:</strong> Anyone who wants a phone that is a tool first — not a continuous attention funnel.</p>
          <p><strong className="text-white font-normal">Direction:</strong> Tighter coupling with JagX Silicon for efficient on-device models, safer sandboxing, and verified OTA updates.</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-4">
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80" alt="Phone" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80" alt="Secure mobile" width={600} height={600} /></div>
          <div className="img-frame rounded-xl aspect-square"><img src="https://images.unsplash.com/photo-1580894732444-8ecded790299?w=600&q=80" alt="Systems work" width={600} height={600} /></div>
        </div>
      </section>
      <section className="px-5 py-16 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto flex flex-wrap gap-4 text-sm">
          <Link href="/silicon" className="text-[#8a8a8a] hover:text-white">Next: Silicon →</Link>
          <Link href="/connect" className="text-[#8a8a8a] hover:text-white">← Connect</Link>
        </div>
      </section>
    </PageShell>
  );
}
