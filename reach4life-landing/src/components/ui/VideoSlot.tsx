"use client";
import { useEffect, useRef, useState } from "react";
import PhoneFrame from "./PhoneFrame";

interface VideoSlotProps {
  src: string;
  title: string;
  description: string;
  placeholderHint: string;
  width?: number;
  height?: number;
}

export default function VideoSlot({
  src,
  title,
  description,
  placeholderHint,
  width = 240,
  height = 500,
}: VideoSlotProps) {
  const [hasVideo, setHasVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch(src, { method: "HEAD" })
      .then((r) => {
        if (r.ok) setHasVideo(true);
      })
      .catch(() => {});
  }, [src]);

  return (
    <div className="flex flex-col items-center gap-4">
      <PhoneFrame width={width} height={height}>
        {hasVideo ? (
          <video
            ref={videoRef}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center bg-[#1a1a2e]">
            <div className="w-14 h-14 rounded-full border border-r4l-red/40 bg-r4l-red/10 flex items-center justify-center text-r4l-red text-xl">
              ▶
            </div>
            <p className="font-serif text-white text-base leading-snug">{title}</p>
            <p className="font-sans text-white/30 text-[11px] leading-relaxed">
              {placeholderHint}
            </p>
          </div>
        )}
      </PhoneFrame>
      {description ? (
        <div className="text-center max-w-[220px]">
          <h3 className="font-serif font-bold text-white text-lg mb-1">{title}</h3>
          <p className="font-sans text-white/50 text-sm leading-relaxed">{description}</p>
        </div>
      ) : null}
    </div>
  );
}
