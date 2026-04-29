import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function CallToAction() {
  return (
    <section id="cta" className="py-24 px-6" style={{ background: "#001a2e" }}>
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <h2
            className="font-serif font-bold text-white mb-4"
            style={{ fontSize: "clamp(28px, 4vw, 36px)" }}
          >
            Ready to see it?
          </h2>
          <p className="font-sans text-white/50 text-base mb-10">
            Watch a screen recording of the app in action, or request a full walkthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#vision"
              className="font-sans font-bold text-r4l-red bg-white no-underline"
              style={{ padding: "16px 32px", borderRadius: 10 }}
            >
              Request a Demo
            </a>
            <a
              href="#vision"
              className="font-sans font-bold text-white no-underline"
              style={{
                padding: "16px 32px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.5)",
                background: "transparent",
              }}
            >
              View the Prototype
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
