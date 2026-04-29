interface PhoneFrameProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

export default function PhoneFrame({
  children,
  width = 280,
  height = 580,
}: PhoneFrameProps) {
  return (
    <div
      style={{ width, height }}
      className="relative rounded-[44px] border border-white/10 bg-black overflow-hidden flex-shrink-0 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]"
    >
      {children}
    </div>
  );
}
