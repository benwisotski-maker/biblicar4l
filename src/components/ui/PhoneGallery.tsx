"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PhoneFrame from "./PhoneFrame";

interface Shot {
  src: string;
  alt: string;
  caption?: string;
}

interface PhoneGalleryProps {
  shots: Shot[];
}

const PHONE_W = 220;
const PHONE_H = 478;

const SLOTS = [
  { x: -360, y: 12, z: 50, dir: -1 as const },
  { x: -180, y: 30, z: 40, dir: -1 as const },
  { x: 0, y: 0, z: 30, dir: 1 as const },
  { x: 180, y: 22, z: 20, dir: 1 as const },
  { x: 360, y: 38, z: 10, dir: -1 as const },
];

function randInRange(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export default function PhoneGallery({ shots }: PhoneGalleryProps) {
  const [rotations, setRotations] = useState<number[]>(() =>
    Array.from({ length: shots.length }, () => 0)
  );

  useEffect(() => {
    setRotations(
      shots.map((_, i) => {
        const slot = SLOTS[i];
        if (!slot) return 0;
        return randInRange(1, 4) * slot.dir;
      })
    );
  }, [shots]);

  return (
    <motion.div
      className="relative mx-auto hidden lg:flex items-center justify-center"
      style={{ width: PHONE_W, height: PHONE_H + 80 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
      }}
    >
      <div className="relative" style={{ width: PHONE_W, height: PHONE_H }}>
        {[...shots]
          .map((shot, idx) => ({ shot, idx }))
          .reverse()
          .map(({ shot, idx }) => {
            const slot = SLOTS[idx];
            if (!slot) return null;
            const rot = rotations[idx] ?? 0;
            return (
              <motion.div
                key={idx}
                className="absolute left-0 top-0 cursor-grab active:cursor-grabbing select-none"
                style={{ zIndex: slot.z, touchAction: "none" }}
                draggable={false}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.6}
                variants={{
                  hidden: { x: 0, y: 0, rotate: 0, scale: 0.85, opacity: 0 },
                  visible: {
                    x: slot.x,
                    y: slot.y,
                    rotate: rot,
                    scale: 1,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 70,
                      damping: 13,
                      mass: 1,
                    },
                  },
                }}
                whileHover={{
                  scale: 1.06,
                  rotate: rot * 0.4,
                  zIndex: 999,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 1.1, zIndex: 999 }}
                whileDrag={{ scale: 1.08, zIndex: 999 }}
              >
                <PhoneFrame width={PHONE_W} height={PHONE_H}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                </PhoneFrame>
                {shot.caption ? (
                  <p
                    className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-center font-sans text-white/45 text-[11px] whitespace-nowrap pointer-events-none"
                    style={{ width: PHONE_W }}
                  >
                    {shot.caption}
                  </p>
                ) : null}
              </motion.div>
            );
          })}
      </div>
    </motion.div>
  );
}
