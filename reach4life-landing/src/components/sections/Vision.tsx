import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Vision() {
  return (
    <section id="vision" className="py-28 px-6" style={{ background: "#f22e2e" }}>
      <div className="max-w-[800px] mx-auto text-center">
        <RevealOnScroll>
          <p
            className="font-serif italic text-white leading-snug mb-4"
            style={{ fontSize: "clamp(22px, 3vw, 30px)" }}
          >
            &ldquo;Over seven billion of us means seven billion different stories. Yet the
            same themes interweave all of our lives. Love, betrayal, separation, promise,
            sacrifice, forgiveness, and reunion.&rdquo;
          </p>
          <p className="font-sans text-white/60 text-[13px] mb-12">
            — Reach4Life, Biblica
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={150}>
          <p
            className="font-sans text-white/85 mb-14 text-left md:text-center"
            style={{ fontSize: "17px", lineHeight: 1.8 }}
          >
            Biblica has translated the Bible into over 150 languages. Two million young
            people have been impacted by Reach4Life since 2004. The infrastructure exists.
            The content is proven. What is needed now is a digital experience that meets
            this generation where they already are — on their phones, alone, asking the
            hardest questions.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={300}>
          <h2
            className="font-serif font-bold text-white mb-3"
            style={{ fontSize: "clamp(22px, 3vw, 28px)", lineHeight: 1.3 }}
          >
            This is what Reach4Life looks like for the next generation.
          </h2>
          <p className="font-sans text-white/70 text-base">
            We are ready to build this together with Biblica.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
