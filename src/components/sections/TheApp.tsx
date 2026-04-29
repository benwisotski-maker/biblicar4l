import VideoSlot from "@/components/ui/VideoSlot";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import { VIDEOS } from "@/lib/constants";

export default function TheApp() {
  return (
    <section id="app" className="py-24 px-6" style={{ background: "#002b49" }}>
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          <p
            className="font-sans font-bold text-r4l-yellow text-[11px] uppercase mb-4"
            style={{ letterSpacing: "0.14em" }}
          >
            THE APP
          </p>
          <h2
            className="font-serif font-bold text-white mb-3"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: 1.2 }}
          >
            Built for the way this generation lives.
          </h2>
          <p className="font-serif italic text-white/60 text-lg md:text-xl mb-16">
            One sentence at a time. One day at a time.
          </p>
        </RevealOnScroll>

        <div className="flex flex-row md:justify-center gap-8 md:gap-12 overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 snap-x snap-mandatory">
          <RevealOnScroll delay={0} className="snap-center flex-shrink-0">
            <VideoSlot
              src={VIDEOS.journey}
              title="The Journey"
              description="One truth. One screen. One breath at a time."
              placeholderHint="Screen recording: slide through Identity in Christ phase"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={150} className="snap-center flex-shrink-0">
            <VideoSlot
              src={VIDEOS.todos}
              title="Prayer Todos + Journal"
              description="Action steps that gate progress. A journal that grows with you."
              placeholderHint="Screen recording: todo list, swipe delete, journal entry sheet"
            />
          </RevealOnScroll>
          <RevealOnScroll delay={300} className="snap-center flex-shrink-0">
            <VideoSlot
              src={VIDEOS.circle}
              title="Your Circle"
              description="A small group that walks the journey together."
              placeholderHint="Screen recording: circle tab with members, activity, encourage button"
            />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
