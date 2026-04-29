import { Journey } from "@/lib/journeyData";

const ICONS: Record<string, string> = {
  mirror: "🪞",
  pair: "🤝",
  group: "👥",
  eye: "👁",
  book: "📖",
};

export default function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <div
      className="bg-white rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
      style={{ borderLeft: `4px solid ${journey.accent}` }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-2xl"
        style={{ background: journey.bgOpacity }}
      >
        {ICONS[journey.icon] ?? "•"}
      </div>
      <div className="mb-3">
        <span
          className="inline-block text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            background:
              journey.unlockStyle === "always"
                ? "rgba(0,179,136,0.12)"
                : "rgba(255,181,0,0.15)",
            color: journey.unlockStyle === "always" ? "#00b388" : "#c9923a",
          }}
        >
          {journey.unlock}
        </span>
      </div>
      <h3 className="font-serif font-bold text-r4l-navy text-xl mb-2">{journey.name}</h3>
      <p className="font-sans text-r4l-navy/60 text-sm leading-relaxed mb-4">
        {journey.description}
      </p>
      <p className="font-sans text-xs tracking-wide" style={{ color: journey.accent }}>
        {journey.details}
      </p>
    </div>
  );
}
