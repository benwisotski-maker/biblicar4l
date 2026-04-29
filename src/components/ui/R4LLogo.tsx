interface R4LLogoProps {
  size?: number;
}

export default function R4LLogo({ size = 56 }: R4LLogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className="flex-shrink-0 overflow-hidden rounded-[18%]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo.svg"
        alt="Reach4Life"
        width={size}
        height={size}
        className="block w-full h-full"
      />
    </div>
  );
}
