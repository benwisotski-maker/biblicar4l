interface R4LLogoProps {
  size?: number;
}

export default function R4LLogo({ size = 56 }: R4LLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-white flex items-center justify-center flex-shrink-0"
    >
      <div
        className="text-center leading-tight"
        style={{ fontSize: size * 0.14 }}
      >
        <div className="font-sans font-bold text-r4l-red tracking-wider">REACH</div>
        <div className="font-sans font-bold text-r4l-red">4+</div>
        <div className="font-sans font-bold text-r4l-red tracking-wider">LIFE</div>
      </div>
    </div>
  );
}
