import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] py-12 px-5 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/brand-mark.svg" alt="JagX" width={28} height={28} className="rounded-md" />
              <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={28} height={28} className="rounded-full" />
            </div>
            <div className="text-sm font-medium mb-2">JagX &amp; JRILICENSE</div>
            <p className="text-xs text-[#5c5c5c] leading-relaxed">Eleven product lines for Africa and the world — through 2040+.</p>
          </div>
          <div>
            <div className="text-xs text-[#5c5c5c] uppercase tracking-wider mb-3">Core</div>
            <div className="space-y-2 text-sm text-[#8a8a8a]">
              <Link href="/ai" className="block hover:text-white">JagX AI</Link>
              <Link href="/connect" className="block hover:text-white">Connect</Link>
              <Link href="/os" className="block hover:text-white">JagX OS</Link>
              <Link href="/silicon" className="block hover:text-white">Silicon</Link>
              <Link href="/mobility" className="block hover:text-white">Mobility</Link>
              <Link href="/devices" className="block hover:text-white">Devices</Link>
            </div>
          </div>
          <div>
            <div className="text-xs text-[#5c5c5c] uppercase tracking-wider mb-3">More</div>
            <div className="space-y-2 text-sm text-[#8a8a8a]">
              <Link href="/cloud" className="block hover:text-white">Cloud</Link>
              <Link href="/education" className="block hover:text-white">Education</Link>
              <Link href="/energy" className="block hover:text-white">Energy</Link>
              <Link href="/shield" className="block hover:text-white">Shield</Link>
              <Link href="/pay" className="block hover:text-white">Pay</Link>
              <Link href="/roadmap" className="block hover:text-white">Roadmap</Link>
            </div>
          </div>
          <div>
            <div className="text-xs text-[#5c5c5c] uppercase tracking-wider mb-3">Credit</div>
            <p className="text-xs text-[#5c5c5c] leading-relaxed">Designed by JagX AI<br />Created by JagX &amp; JRILICENSE</p>
            <Link href="/about" className="inline-block mt-3 text-sm text-[#8a8a8a] hover:text-white">About →</Link>
          </div>
        </div>
        <div className="pt-6 border-t border-[#1f1f1f] flex flex-col sm:flex-row sm:justify-between gap-3 text-xs text-[#5c5c5c]">
          <span>© 2026 JagX &amp; JRILICENSE</span>
          <span>Designed by JagX AI</span>
        </div>
      </div>
    </footer>
  );
}
