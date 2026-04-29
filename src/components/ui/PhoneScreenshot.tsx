import PhoneFrame from "./PhoneFrame";

interface PhoneScreenshotProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export default function PhoneScreenshot({
  src,
  alt,
  caption,
  width = 220,
  height = 460,
}: PhoneScreenshotProps) {
  return (
    <div className="flex flex-col items-center gap-3 flex-shrink-0">
      <PhoneFrame width={width} height={height}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </PhoneFrame>
      {caption ? (
        <p className="font-sans text-white/45 text-xs text-center max-w-[200px] leading-relaxed">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
