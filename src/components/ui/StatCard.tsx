interface StatCardProps {
  stat: string;
  label: string;
  accent?: string;
}

export default function StatCard({ stat, label, accent = "#f22e2e" }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
      <div className="font-serif font-bold text-5xl mb-3" style={{ color: accent }}>
        {stat}
      </div>
      <div className="font-sans text-r4l-navy/55 text-sm leading-relaxed">{label}</div>
    </div>
  );
}
