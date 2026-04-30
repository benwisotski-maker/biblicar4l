"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";

import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { journeys } from "@/lib/journeyData";

interface Slot {
  id: string;
  top: string;
  left: string;
  depth: number;
  size: number;
  align: "left" | "right" | "center";
}

const SLOTS: Slot[] = [
  { id: "who-am-i", top: "10%", left: "6%", depth: 1.4, size: 96, align: "left" },
  { id: "discipleship", top: "16%", left: "78%", depth: 1.1, size: 104, align: "right" },
  { id: "who-are-we", top: "60%", left: "82%", depth: 1.6, size: 100, align: "right" },
  { id: "sex-is-everywhere", top: "70%", left: "44%", depth: 2.2, size: 116, align: "center" },
  { id: "the-story", top: "62%", left: "8%", depth: 1.3, size: 108, align: "left" },
];

const journeyById = new Map(journeys.map((j) => [j.id, j]));

export default function Journeys() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "[data-floating-illus]",
      { opacity: [0, 1] },
      { duration: 0.6, delay: stagger(0.12) }
    );
  }, [animate]);

  return (
    <section
      id="journeys"
      ref={scope}
      className="relative bg-white overflow-hidden min-h-[680px] md:min-h-[760px]"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,181,0,0.06), transparent 70%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-20 max-w-2xl mx-auto px-6 py-28 md:py-36 text-center"
      >
        <p
          className="font-sans font-bold text-r4l-red text-[11px] uppercase mb-5"
          style={{ letterSpacing: "0.18em" }}
        >
          THE JOURNEYS
        </p>
        <h2
          className="font-serif font-bold text-r4l-navy mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.1 }}
        >
          Many paths.
        </h2>
        <p
          className="font-serif italic text-r4l-navy/70"
          style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.4 }}
        >
          All leading to one destination.
        </p>
        <p className="font-sans text-r4l-navy/45 text-sm mt-6">
          More journeys are on the way.
        </p>
      </motion.div>

      <Floating sensitivity={-0.6} ease={0.06} className="z-10 hidden md:block">
        {SLOTS.map((slot) => {
          const journey = journeyById.get(slot.id);
          if (!journey) return null;
          const labelClasses =
            slot.align === "right"
              ? "items-end text-right"
              : slot.align === "left"
              ? "items-start text-left"
              : "items-center text-center";
          return (
            <FloatingElement
              key={slot.id}
              depth={slot.depth}
              style={{ top: slot.top, left: slot.left }}
            >
              <div className={`flex flex-col gap-2 ${labelClasses}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-floating-illus
                  src={`/brand/${slot.id}.svg`}
                  alt=""
                  aria-hidden="true"
                  style={{
                    width: slot.size,
                    height: slot.size,
                    opacity: 0,
                    filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.12))",
                  }}
                  className="transition-transform duration-300 hover:scale-110"
                  draggable={false}
                />
                <p
                  className="font-serif font-bold whitespace-nowrap"
                  style={{ color: journey.accent, fontSize: 16 }}
                >
                  {journey.name}
                </p>
              </div>
            </FloatingElement>
          );
        })}
      </Floating>

      {/* Mobile fallback */}
      <div className="md:hidden relative z-10 px-6 pb-20">
        <div className="flex flex-wrap gap-3 justify-center max-w-md mx-auto">
          {SLOTS.map((slot) => {
            const journey = journeyById.get(slot.id);
            if (!journey) return null;
            return (
              <div
                key={slot.id}
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/brand/${slot.id}.svg`}
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6"
                />
                <span
                  className="font-sans text-sm font-semibold"
                  style={{ color: journey.accent }}
                >
                  {journey.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
