import StatCard from "@/components/ui/StatCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-24 px-6">
      <div className="max-w-[960px] mx-auto">
        <RevealOnScroll>
          <p
            className="font-sans font-bold text-r4l-red text-[11px] uppercase mb-4"
            style={{ letterSpacing: "0.14em" }}
          >
            THE PROBLEM
          </p>
          <h2
            className="font-serif font-bold text-r4l-navy mb-12"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Every generation of young people is asking the same question.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <RevealOnScroll delay={0}>
            <StatCard stat="12–25" label="The age range asking Who Am I?" accent="#f22e2e" />
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <StatCard
              stat="2M+"
              label="Young people impacted by Reach4Life since 2004"
              accent="#ffb500"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={300}>
            <StatCard
              stat="40+"
              label="Countries where Reach4Life is active"
              accent="#00a9ce"
            />
          </RevealOnScroll>
        </div>

        <RevealOnScroll>
          <p
            className="font-sans text-r4l-navy/70 leading-relaxed max-w-2xl"
            style={{ fontSize: "17px", lineHeight: 1.75 }}
          >
            The biggest issues facing young people globally are relationships and sexuality,
            substance abuse, and social media addiction. These are not behaviour problems —
            they are identity problems. Only by addressing the spiritual roots of identity,
            values, and purpose can lasting change happen.
          </p>
          <p className="font-sans text-r4l-navy/45 text-sm mt-4 italic">
            — Reach4Life Training Manual, Biblica
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
