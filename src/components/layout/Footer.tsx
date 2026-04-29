import R4LLogo from "@/components/ui/R4LLogo";

const navLinks = [
  { label: "The App", href: "#app" },
  { label: "The Journeys", href: "#journeys" },
  { label: "How It Works", href: "#how" },
  { label: "The Vision", href: "#vision" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#001a2e" }} className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col gap-4">
            <R4LLogo size={56} />
            <p className="font-serif italic text-white/45 text-base leading-relaxed">
              &ldquo;The choice is yours...&rdquo;
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-sans text-sm text-white/40 hover:text-white transition-colors no-underline"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-sans font-semibold text-white/60 text-sm">Built for Biblica</p>
            <a
              href="https://biblica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-white/35 hover:text-white/70 transition-colors no-underline"
            >
              biblica.com
            </a>
          </div>
        </div>
        <p className="font-sans text-xs text-white/25 text-center pt-8">
          © 2025 Biblica · Reach4Life · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
