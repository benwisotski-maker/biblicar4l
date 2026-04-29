interface StepCardProps {
  number: string;
  title: string;
  description: string;
  accent: string;
}

const STEP_ICONS: Record<string, string> = {
  "01": "👤",
  "02": "📖",
  "03": "👥",
};

export default function StepCard({ number, title, description, accent }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-xs">
      <div
        className="font-serif font-bold text-6xl mb-4 select-none"
        style={{ color: accent, opacity: 0.35 }}
      >
        {number}
      </div>
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-2xl"
        style={{ background: `${accent}18`, border: `1px solid ${accent}35` }}
      >
        {STEP_ICONS[number] ?? "•"}
      </div>
      <h3 className="font-serif font-bold text-white text-lg mb-3 leading-snug">{title}</h3>
      <p className="font-sans text-white/50 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
