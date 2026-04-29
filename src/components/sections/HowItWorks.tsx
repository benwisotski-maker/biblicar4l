import StepCard from "@/components/ui/StepCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";

const steps = [
  {
    number: "01",
    accent: "#f22e2e",
    title: "Enter your name. Meet Sabrina.",
    description:
      "A short welcome video sets the tone. Then you choose what's on your mind. The app meets you there.",
  },
  {
    number: "02",
    accent: "#ffb500",
    title: "One truth. One screen. Every day.",
    description:
      "The journey plays one slide at a time. A sentence. A verse. A reflection. A prayer todo that gates your progress until you've actually done it.",
  },
  {
    number: "03",
    accent: "#00a9ce",
    title: "Walk it with others.",
    description:
      "Pair up for Discipleship. Form a small group for Who Are We? Your Circle keeps you accountable — and brings you back when you go quiet.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 px-6" style={{ background: "#0d0d18" }}>
      <div className="max-w-[1000px] mx-auto">
        <RevealOnScroll>
          <p
            className="font-sans font-bold text-r4l-yellow text-[11px] uppercase mb-4 text-center"
            style={{ letterSpacing: "0.14em" }}
          >
            HOW IT WORKS
          </p>
          <h2
            className="font-serif font-bold text-white mb-16 text-center"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Simple. Daily. Real.
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div
            className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 justify-items-center">
            {steps.map((s, idx) => (
              <RevealOnScroll key={s.number} delay={idx * 150}>
                <StepCard
                  number={s.number}
                  title={s.title}
                  description={s.description}
                  accent={s.accent}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
