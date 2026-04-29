import VideoSlot from "@/components/ui/VideoSlot";
import R4LLogo from "@/components/ui/R4LLogo";
import { VIDEOS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden"
      style={{ background: "#080810" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 rounded-full top-0 left-0 -translate-x-1/3 -translate-y-1/3"
          style={{ background: "rgba(255,181,0,0.07)", filter: "blur(60px)" }}
        />
        <div
          className="absolute w-80 h-80 rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3"
          style={{ background: "rgba(0,43,73,0.5)", filter: "blur(80px)" }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
        <R4LLogo size={72} />
        <div>
          <h1
            className="font-serif font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            Who are you, <em className="text-r4l-yellow not-italic">really?</em>
          </h1>
          <p className="font-serif italic text-r4l-yellow text-lg md:text-2xl mb-3">
            A journey into identity, repentance, and the Father&apos;s table.
          </p>
          <p className="font-sans text-white/50 text-sm md:text-base">
            Built for Biblica · For every young person who is still asking.
          </p>
        </div>
        <VideoSlot
          src={VIDEOS.hero}
          title="App Overview"
          description=""
          placeholderHint="Drop VIDEO_HERO.mp4 into /public/videos/ to activate"
          width={300}
          height={620}
        />
        <div className="animate-bounce-slow text-white/25 text-2xl mt-2">↓</div>
      </div>
    </section>
  );
}
