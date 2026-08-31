"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "products", label: "Products" },
  { id: "ai", label: "JagX AI" },
  { id: "connect", label: "Connect" },
  { id: "silicon", label: "Silicon" },
  { id: "mobility", label: "Mobility" },
  { id: "devices", label: "Devices" },
  { id: "about", label: "About" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f]" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#top" className="font-medium tracking-tight text-[15px]">
          JagX <span className="text-[#8a8a8a]">&</span> JRILICENSE
        </a>
        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-[13px] text-[#8a8a8a] hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="md:hidden text-[#8a8a8a] text-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[#1f1f1f] bg-[#0a0a0a] px-5 py-4 space-y-3">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="block text-sm text-[#b0b0b0]"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-5">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-6">Created by JagX & JRILICENSE</p>
            <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-normal tracking-tight leading-[1.15] mb-8">
              Building the tools
              <br />
              Africa and the world
              <br />
              will actually rely on.
            </h1>
            <p className="prose-body max-w-xl mb-10">
              We are not another generic tech brand. JagX & JRILICENSE is a
              long-term effort to ship real AI systems, a social network people
              can trust with their data, custom silicon, vehicles, and devices —
              designed with African constraints and global ambition in mind.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#ai"
                className="inline-flex items-center px-5 py-2.5 text-sm bg-white text-black rounded-full hover:bg-[#e8e8e8] transition-colors"
              >
                Read about JagX AI
              </a>
              <a
                href="#connect"
                className="inline-flex items-center px-5 py-2.5 text-sm border border-[#333] rounded-full text-[#e8e8e8] hover:border-[#666] transition-colors"
              >
                JagX Connect
              </a>
            </div>
          </div>
        </section>

        <hr className="divider max-w-6xl mx-auto" />

        <section id="products" className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <p className="eyebrow mb-10">What we are building</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { href: "#ai", title: "JagX AI", note: "Multi-agent intelligence" },
                { href: "#connect", title: "JagX Connect", note: "Secure social" },
                { href: "#silicon", title: "JagX Silicon", note: "Future chips" },
                { href: "#mobility", title: "JagX Mobility", note: "Next-gen cars" },
                { href: "#devices", title: "JagX Devices", note: "Mobile & edge" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group block border border-[#1f1f1f] bg-[#111] p-5 rounded-lg hover:border-[#333] transition-colors"
                >
                  <div className="text-sm font-medium mb-1 group-hover:text-white">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#5c5c5c]">{item.note}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="ai" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">01 — Intelligence</p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">JagX AI</h2>
              <div className="prose-body space-y-5">
                <p>
                  JagX AI started as a practical answer to a simple problem:
                  most coding assistants still force you to babysit every file
                  change. We built a multi-agent system that can plan, scaffold,
                  write, review, and correct its own work — so you can describe
                  the outcome and step back.
                </p>
                <p>
                  The core product is a hands-off GROUP coding CLI. A lead agent
                  coordinates specialists (scaffold, backend, frontend, files,
                  shell, design, review). Folders are created before code is
                  written. Agents announce when they are done. Review catches
                  mistakes and sends work back. Destructive commands stay
                  blocked by default.
                </p>
                <p>
                  Beyond the CLI, JagX AI includes tool calling (web search,
                  code execution, PDF and portfolio generation), live retrieval,
                  and identity protection so the model does not claim to be
                  built by other companies. Everything is watermarked and
                  attributed to JagX & JRILICENSE.
                </p>
                <p>
                  We treat AI as infrastructure, not a chat toy. The goal is
                  reliable, inspectable systems that African developers and
                  teams can run without handing their entire stack to a closed
                  foreign platform.
                </p>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-[#8a8a8a]">
                <li>— Multi-agent GROUP workflow with self-review</li>
                <li>— Embedded terminal and sandboxed execution</li>
                <li>— Tool calling, PDF/CV generation, web retrieval</li>
                <li>— Identity protection and clear attribution</li>
              </ul>
            </div>
            <div className="img-frame rounded-xl aspect-[4/5] max-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80"
                alt="Humanoid robot representing JagX AI systems"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </section>

        <section id="connect" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 img-frame rounded-xl aspect-[4/5] max-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&q=80"
                alt="People connecting on mobile — JagX Connect"
                width={900}
                height={1125}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">02 — Social</p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">JagX Connect</h2>
              <div className="prose-body space-y-5">
                <p>
                  Social platforms that dominate Africa were not designed here.
                  They optimize for engagement and advertising, not for privacy,
                  offline-friendly networks, or the trust problems people face
                  every day. JagX Connect is our attempt to build the social
                  layer we actually want to use.
                </p>
                <p>
                  The product is a real-time network with posts, moments,
                  private and group messaging, and interest-based Buddy Circles.
                  Native Android and iOS apps (Flutter) share the same accounts
                  and data as the web. Deep links open the app when installed.
                  Authentication supports email, OTP, and Google.
                </p>
                <p>
                  Security is not a marketing line. Messaging is built around
                  end-to-end principles, granular privacy controls, and the
                  assumption that users in high-risk environments need stronger
                  defaults. We are explicit about the goal: become the most
                  secure social platform Africa has, and a credible option for
                  the rest of the world.
                </p>
                <p>
                  Connect is not trying to copy every feature of every network.
                  It is trying to get the fundamentals right — identity, chat,
                  feed, communities, and trust — so people can build real
                  relationships without becoming the product.
                </p>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-[#8a8a8a]">
                <li>— End-to-end oriented messaging and privacy controls</li>
                <li>— Buddy Circles, Moments feed, real-time chat</li>
                <li>— Native Flutter apps for Android and iOS</li>
                <li>— Built for African networks and global scale</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="silicon" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">03 — Future chip company</p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">JagX Silicon</h2>
              <div className="prose-body space-y-5">
                <p>
                  Software sits on hardware. If Africa and independent builders
                  only ever consume chips designed elsewhere, we remain locked
                  into other people's roadmaps and security assumptions.
                  JagX Silicon is the long-horizon bet: design AI-first silicon
                  that can run intelligent workloads on the edge.
                </p>
                <p>
                  The work is early and deliberate. We focus on neural
                  processing units for on-device inference, ultra-low-power
                  designs for phones and vehicles, and hardware security modules
                  that make secure enclaves practical. The point is not vaporware
                  — it is talent, IP, and partnerships over a decade.
                </p>
                <p>
                  Edge intelligence matters when connectivity is expensive or
                  unreliable. It matters for privacy. It matters when a robot,
                  car, or phone must keep working without streaming every frame
                  to a foreign cloud.
                </p>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-[#8a8a8a]">
                <li>— AI-oriented neural processing units</li>
                <li>— Low-power edge silicon and secure enclaves</li>
                <li>— On-device inference for phones, cars, robots</li>
                <li>— Long-term talent and research pipeline</li>
              </ul>
            </div>
            <div className="img-frame rounded-xl aspect-[4/5] max-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                alt="Semiconductor and circuit board — JagX Silicon"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </section>

        <section id="mobility" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="order-2 lg:order-1 img-frame rounded-xl aspect-[4/5] max-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=900&q=80"
                alt="Modern electric vehicle — JagX Mobility"
                width={900}
                height={1125}
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">04 — Next-gen cars</p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">JagX Mobility</h2>
              <div className="prose-body space-y-5">
                <p>
                  Vehicles are becoming computers with wheels. The companies that
                  win will treat software, security, and autonomy as first-class
                  products. JagX Mobility is our path into that future.
                </p>
                <p>
                  We design for software-defined vehicles: signed over-the-air
                  updates, an autonomy stack that can improve over time, and
                  cabin systems that integrate with JagX AI and JagX Connect.
                  Security is not optional when a car is a network endpoint that
                  carries people.
                </p>
                <p>
                  Progress will be measured in years. The same discipline we
                  apply to AI and social applies here: ship foundations, avoid
                  theater, keep the long arc in view.
                </p>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-[#8a8a8a]">
                <li>— Software-defined architecture</li>
                <li>— Secure OTA and autonomy-oriented stack</li>
                <li>— Cabin intelligence tied to JagX AI</li>
                <li>— Electric platforms with long support cycles</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="devices" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">05 — Mobile & edge</p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-6">JagX Devices</h2>
              <div className="prose-body space-y-5">
                <p>
                  Phones and edge hardware are the primary computers for most
                  people on the continent. If those devices are closed and
                  optimized for ads, every layer above them inherits the same
                  compromises. JagX Devices is about hardware that respects the
                  user.
                </p>
                <p>
                  Direction: privacy-first defaults, on-device JagX AI, secure
                  elements for identity, modular design that extends useful life.
                  Integration with JagX Connect is part of the product thesis
                  from day one.
                </p>
                <p>
                  Hardware is hard. We sequence partnerships, prototypes, and
                  software so that when devices ship, they belong to the same
                  system as the AI and the network.
                </p>
              </div>
              <ul className="mt-8 space-y-2 text-sm text-[#8a8a8a]">
                <li>— Privacy-first mobile software layer</li>
                <li>— On-device AI and secure element</li>
                <li>— Long-life, repair-friendly design goals</li>
                <li>— Deep Connect and JagX AI integration</li>
              </ul>
            </div>
            <div className="img-frame rounded-xl aspect-[4/5] max-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900&q=80"
                alt="Smartphone — JagX Devices"
                width={900}
                height={1125}
              />
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-28 px-5 border-t border-[#1f1f1f]">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-4">About</p>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-8">
              Who JagX & JRILICENSE is
            </h2>
            <div className="prose-body space-y-6">
              <p>
                JagX & JRILICENSE is the name under which this work is done.
                It is the attribution on the CLI, the AI systems, the Connect
                apps, and the long-term hardware efforts. When something ships,
                it should be clear who built it and what they stand for.
              </p>
              <p>
                Too much technology that shapes daily life in Africa is designed
                elsewhere, for other markets. That produces products that work
                until privacy is optional, offline is an afterthought, and the
                local developer is a tenant. We want the opposite: systems we can
                inspect, secure, and evolve.
              </p>
              <p>
                That does not mean isolation. Global standards matter. It means
                building capacity — software, silicon, talent — so African teams
                are not permanently downstream. JagX AI is usable today. JagX
                Connect is real code. Silicon, mobility, and devices are
                multi-year programs that only make sense if the software layers
                already work.
              </p>
              <p>
                We care about security as a default. We care about attribution:
                models should not pretend to be someone else's. We care
                about software that survives unreliable networks. And we care
                about saying clearly when something is early — instead of
                dressing every idea as finished.
              </p>
              <p>
                If you are a developer, designer, or someone who wants a social
                network that treats you like a person, the work is open for
                contribution and scrutiny. This site is part of that: plain
                language, no theater, a public record of what we claim to build.
              </p>
              <p className="text-[#8a8a8a] text-sm pt-4">
                Created by JagX & JRILICENSE. Not affiliated with Jaguar
                Health, Jaguar Cars, or any other Jag* brand. Independent
                technology effort focused on AI, social infrastructure, and
                advanced systems for Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        <footer className="border-t border-[#1f1f1f] py-12 px-5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="text-sm font-medium mb-1">JagX & JRILICENSE</div>
              <div className="text-xs text-[#5c5c5c]">
                AI · Connect · Silicon · Mobility · Devices
              </div>
            </div>
            <div className="text-xs text-[#5c5c5c]">
              Created by JagX & JRILICENSE · 2026
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
