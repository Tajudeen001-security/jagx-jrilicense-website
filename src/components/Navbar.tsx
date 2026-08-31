"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/ai", label: "JagX AI" },
  { href: "/connect", label: "Connect" },
  { href: "/os", label: "JagX OS" },
  { href: "/silicon", label: "Silicon" },
  { href: "/mobility", label: "Mobility" },
  { href: "/devices", label: "Devices" },
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#1f1f1f]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="font-medium tracking-tight text-[15px]">
          JagX <span className="text-[#8a8a8a]">&</span> JRILICENSE
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`text-[13px] transition-colors ${
                pathname === n.href
                  ? "text-white"
                  : "text-[#8a8a8a] hover:text-white"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="lg:hidden text-[#8a8a8a] text-sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#1f1f1f] bg-[#0a0a0a] px-5 py-4 space-y-3">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="block text-sm text-[#b0b0b0]"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
