"use client";
import { useEffect, useState } from "react";
import R4LLogo from "@/components/ui/R4LLogo";

const links = [
  { label: "The App", href: "#app" },
  { label: "The Journeys", href: "#journeys" },
  { label: "How It Works", href: "#how" },
  { label: "The Vision", href: "#vision" },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
      style={{
        background: "rgba(0,26,46,0.95)",
        backdropFilter: "blur(12px)",
        height: 64,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <R4LLogo size={36} />
          <span className="font-serif font-bold text-white text-lg hidden sm:block">
            Reach4Life
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[13px] text-white/50 hover:text-white transition-colors no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#vision"
          className="font-sans font-bold text-[13px] text-white bg-r4l-red px-4 py-2 rounded-lg hover:bg-red-600 transition-colors no-underline"
        >
          Request a Demo
        </a>
      </div>
    </nav>
  );
}
