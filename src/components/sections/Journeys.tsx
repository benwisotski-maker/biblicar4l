import JourneyCard from "@/components/ui/JourneyCard";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { journeys } from "@/lib/journeyData";

export default function Journeys() {
  return (
    <section id="journeys" className="bg-white py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <RevealOnScroll>
          <p
            className="font-sans font-bold text-r4l-red text-[11px] uppercase mb-4"
            style={{ letterSpacing: "0.14em" }}
          >
            THE JOURNEYS
          </p>
          <h2
            className="font-serif font-bold text-r4l-navy mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Five paths. One destination.
          </h2>
          <p className="font-serif italic text-r4l-navy/60 text-lg md:text-xl mb-12">
            Each journey unlocks the next. Progress is earned, not given.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {journeys.map((j, idx) => (
            <RevealOnScroll key={j.id} delay={idx * 80}>
              <JourneyCard journey={j} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
