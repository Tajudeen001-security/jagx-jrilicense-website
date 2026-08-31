import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "About",
  description: "About JagX & JRILICENSE. Designed by JagX AI.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-5">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-4">About</p>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight mb-6">JagX &amp; JRILICENSE</h1>
          <p className="prose-body text-lg mb-4">The name under which this work is done — AI, social, OS, silicon, mobility, and devices — with Africa in the design constraints and the world in the destination.</p>
          <p className="text-xs text-[#5c5c5c]">Designed by JagX AI · Created by JagX &amp; JRILICENSE</p>
        </div>
      </section>
      <section className="px-5 pb-12">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4">
          <div className="img-frame rounded-xl aspect-[16/10]"><img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" alt="Team" width={900} height={560} /></div>
          <div className="img-frame rounded-xl aspect-[16/10]"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80" alt="Global network" width={900} height={560} /></div>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto prose-body space-y-6">
          <p>Too much of the technology that shapes daily life across Africa is designed in other markets, for other networks and other risk models. That produces products that work until they do not: until data is too expensive, until privacy is optional, until the local developer is a tenant on a platform that can change the rules overnight.</p>
          <p>JagX &amp; JRILICENSE exists to build the opposite trajectory — systems we can inspect, secure, and evolve. JagX AI is usable today. JagX Connect is real software. JagX OS defines how devices should behave. Silicon, mobility, and hardware are multi-year programs that only make sense if the software layers already work.</p>
          <p>We are not anti-global. Standards and collaboration matter. We are against permanent downstream status: the idea that African teams only consume, never set the defaults. The same products should be competitive in London or Toronto — because reliability and dignity are not regional features.</p>
          <p>Security is a default. Attribution is clear: models and sites should not pretend to be someone else&apos;s work. This website itself was designed by JagX AI and is published under JagX &amp; JRILICENSE so the trail of responsibility is obvious.</p>
          <p className="text-[#8a8a8a] text-sm">Not affiliated with Jaguar Health, Jaguar Cars, or any other Jag* brand. Independent technology effort.</p>
        </div>
      </section>
      <section className="px-5 py-12 border-t border-[#1f1f1f]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-normal mb-6">Explore the products</h2>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            {["/ai", "/connect", "/os", "/silicon", "/mobility", "/devices"].map((href) => (
              <Link key={href} href={href} className="border border-[#1f1f1f] bg-[#111] rounded-lg px-4 py-3 text-[#8a8a8a] hover:text-white hover:border-[#333] transition-colors">
                {href.slice(1).replace(/^[a-z]/, (c) => c.toUpperCase()).replace("ai", "JagX AI").replace("Os", "JagX OS") || href}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
