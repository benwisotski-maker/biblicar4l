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
      className="relative rounded-[40px] border-2 border-[#2a2a3a] bg-r4l-surface overflow-hidden flex-shrink-0"
    >
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />
      {children}
    </div>
  );
}
