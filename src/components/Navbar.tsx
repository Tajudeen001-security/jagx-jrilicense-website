"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/ai", label: "AI" },
  { href: "/connect", label: "Connect" },
  { href: "/os", label: "OS" },
  { href: "/silicon", label: "Silicon" },
  { href: "/mobility", label: "Mobility" },
  { href: "/devices", label: "Devices" },
  { href: "/cloud", label: "Cloud" },
  { href: "/pay", label: "Pay" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#1f1f1f]" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/brand-mark.svg" alt="JagX" width={30} height={30} className="rounded-lg" />
          <span className="font-medium tracking-tight text-[14px] hidden md:inline">JagX <span className="text-[#8a8a8a]">&</span> JRILICENSE</span>
          <img src="/jrilicense-logo.svg" alt="JRILICENSE" width={26} height={26} className="rounded-full" />
        </Link>
        <nav className="hidden xl:flex items-center gap-4">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`text-[12px] transition-colors ${pathname === n.href ? "text-white" : "text-[#8a8a8a] hover:text-white"}`}>{n.label}</Link>
          ))}
        </nav>
        <button type="button" className="xl:hidden text-[#8a8a8a] text-sm" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-[#1f1f1f] bg-[#0a0a0a] px-5 py-4 grid grid-cols-2 gap-2">
          {NAV.map((n) => (<Link key={n.href} href={n.href} className="block text-sm text-[#b0b0b0] py-1">{n.label}</Link>))}
          <Link href="/education" className="block text-sm text-[#b0b0b0] py-1">Education</Link>
          <Link href="/energy" className="block text-sm text-[#b0b0b0] py-1">Energy</Link>
          <Link href="/shield" className="block text-sm text-[#b0b0b0] py-1">Shield</Link>
        </div>
      )}
    </header>
  );
}
