"use client";

import { useEffect, useState, useRef } from "react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "ai", label: "Our AI" },
  { id: "connect", label: "JagX Connect" },
  { id: "chips", label: "Future Chips" },
  { id: "cars", label: "Cars" },
  { id: "mobile", label: "Mobile" },
  { id: "about", label: "About" },
];

const PRODUCTS = [
  {
    id: "ai",
    title: "JagX AI",
    tag: "Intelligence",
    desc: "Next-generation multi-agent AI system. Hands-off coding, tool calling, live web retrieval, sandboxed execution and identity-protected intelligence. Built exclusively by JagX & JRILICENSE.",
    features: ["Multi-agent GROUP coding CLI", "13+ intelligence modes", "Embedded terminal & live web", "Tool calling & PDF/CV generation", "Identity protection & watermarking"],
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    id: "connect",
    title: "JagX Connect",
    tag: "Social",
    desc: "The most secured social platform Africa — and the world — will ever have. Real-time connections, end-to-end privacy, Buddy Circles, Moments Feed and native mobile experience. Privacy-first by design.",
    features: ["End-to-end encrypted messaging", "Buddy Circles & interest communities", "Real-time Moments Feed & Stories", "Native Flutter Android & iOS apps", "Granular privacy controls", "Built for African networks & global scale"],
    gradient: "from-purple-400 to-pink-600",
  },
  {
    id: "chips",
    title: "JagX Silicon",
    tag: "Future Chip Company",
    desc: "Designing the next generation of AI-optimized silicon. Custom NPUs, ultra-efficient edge chips and secure enclave architecture powering JagX devices and the intelligent edge.",
    features: ["AI-first neural processing units", "Ultra-low power edge silicon", "Hardware security modules", "On-device intelligence", "Open research & African talent pipeline"],
    gradient: "from-amber-400 to-orange-600",
  },
  {
    id: "cars",
    title: "JagX Mobility",
    tag: "Next-Gen Cars",
    desc: "Software-defined vehicles with autonomous intelligence, over-the-air everything, and security as a core principle. The future of mobility engineered by JagX.",
    features: ["Software-defined architecture", "AI-powered autonomy stack", "Always-secure OTA updates", "Immersive cabin intelligence", "Sustainable electric platforms"],
    gradient: "from-emerald-400 to-teal-600",
  },
  {
    id: "mobile",
    title: "JagX Devices",
    tag: "Mobile & Edge",
    desc: "Flagship mobile devices and edge hardware that put privacy, AI and performance first. Seamless integration with JagX Connect and JagX AI.",
    features: ["Privacy-first mobile OS layer", "On-device JagX AI", "Secure element & biometric stack", "Long-life modular design", "Deep Connect integration"],
    gradient: "from-rose-400 to-red-600",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-cyan-500/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-rose-500 flex items-center justify-center font-bold text-black text-sm group-hover:scale-110 transition-transform">JX</div>
            <span className="font-semibold text-lg tracking-tight">JagX <span className="text-cyan-400">&</span> JRILICENSE</span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all">{item.label}</a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href="#connect" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-sm font-medium text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/25">Explore Connect</a>
          </div>
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Menu">
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/5">
          <div className="px-4 py-4 space-y-1">
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-lg text-slate-200 hover:bg-white/5">{item.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-32 right-20 w-4 h-4 rounded-full bg-cyan-400 animate-float opacity-60" />
      <div className="absolute bottom-40 left-16 w-3 h-3 rounded-full bg-purple-400 animate-float-delayed opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-8 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Created by JagX & JRILICENSE
        </div>
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 transition-all duration-1000 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="block">The Future of</span>
          <span className="gradient-text">Advanced Technology</span>
        </h1>
        <p className={`max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          AI that codes itself. The most secured social platform Africa and the world will have. Future chips. Next-gen cars. Mobile devices that put privacy first. All engineered under one vision.
        </p>
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#ai" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold text-white shadow-xl shadow-cyan-500/30 hover:scale-105 transition-transform">Discover Our AI</a>
          <a href="#connect" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur font-semibold hover:bg-white/10 transition-colors">Explore JagX Connect</a>
        </div>
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${mounted ? "opacity-100" : "opacity-0"}`}>
          {[{"value": "AI-First", "label": "Intelligence Core"}, {"value": "E2E", "label": "Secure Social"}, {"value": "Silicon", "label": "Future Chips"}, {"value": "Global", "label": "Ambition"}].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs animate-bounce">
        <span>Scroll</span>
        <div className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5"><div className="w-1 h-2 rounded-full bg-cyan-400" /></div>
      </div>
    </section>
  );
}

function ProductSection({ product, index }: { product: (typeof PRODUCTS)[0]; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const reverse = index % 2 === 1;
  return (
    <section id={product.id} ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className={`absolute ${reverse ? "right-0" : "left-0"} top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-gradient-to-br ${product.gradient}`} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}>
          <div className={`flex-1 transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : `opacity-0 ${reverse ? "translate-x-12" : "-translate-x-12"}`}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400 mb-4">{product.tag}</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className={`bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>{product.title}</span></h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">{product.desc}</p>
            <ul className="space-y-3">
              {product.features.map((f, i) => (
                <li key={f} className={`flex items-start gap-3 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} style={{ transitionDelay: `${200 + i * 80}ms` }}>
                  <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient} shrink-0`} />
                  <span className="text-slate-300">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex-1 w-full max-w-md transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0 scale-100" : `opacity-0 ${reverse ? "-translate-x-12" : "translate-x-12"} scale-95`}`}>
            <div className={`relative rounded-3xl p-1 bg-gradient-to-br ${product.gradient}`}>
              <div className="rounded-[22px] bg-[#0f172a] p-8 md:p-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-2xl font-bold text-black mb-6 animate-float`}>
                  {product.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{product.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{product.tag}</p>
                <div className="space-y-2">
                  {[0.7, 0.5, 0.9, 0.4].map((w, i) => (
                    <div key={i} className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${product.gradient} transition-all duration-1000`} style={{ width: visible ? `${w * 100}%` : "0%", transitionDelay: `${400 + i * 150}ms` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-wider text-slate-400 mb-6">About the Vision</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Built by <span className="gradient-text">JagX & JRILICENSE</span></h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            JagX & JRILICENSE is more than a technology collective — it is a long-term mission to create sovereign, privacy-respecting, AI-native infrastructure for Africa and the world. From the multi-agent coding intelligence of JagX AI, to JagX Connect — engineered to become the most secured social platform the continent and the planet will experience — to the silicon, vehicles and devices that will run on that same foundation.
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto mb-12">Every product carries the same DNA: security by design, intelligence that serves people, and technology that scales from Lagos to the global edge.</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { title: "Security First", text: "End-to-end encryption, hardware enclaves, and privacy controls at every layer." },
              { title: "AI Everywhere", text: "From coding agents to on-device intelligence and autonomous systems." },
              { title: "African Roots, Global Reach", text: "Built with African talent and infrastructure needs in mind — ready for the world." },
            ].map((c, i) => (
              <div key={c.title} className={`rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${200 + i * 120}ms` }}>
                <h3 className="font-semibold text-lg mb-2 text-cyan-300">{c.title}</h3>
                <p className="text-sm text-slate-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-rose-500/10 p-12 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The next decade of technology<br /><span className="gradient-text">starts here.</span></h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">Follow the journey of JagX AI, JagX Connect, future silicon, mobility and devices — all created by JagX & JRILICENSE.</p>
            <a href="#home" className="inline-flex px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 font-semibold shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform">Back to the Top</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-purple-500 to-rose-500 flex items-center justify-center font-bold text-black text-xs">JX</div>
          <span className="font-medium">JagX & JRILICENSE</span>
        </div>
        <p className="text-sm text-slate-500 text-center">Created by JagX & JRILICENSE · All rights reserved · Building the most secured platforms for Africa and the world</p>
        <div className="text-xs text-slate-600">jagx · jrilicense · 2026</div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {PRODUCTS.map((p, i) => (
          <ProductSection key={p.id} product={p} index={i} />
        ))}
        <AboutSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
