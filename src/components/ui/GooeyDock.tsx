"use client";

import { useState } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import {
  Home,
  HelpCircle,
  Smartphone,
  Map,
  Sparkles,
  Heart,
  type LucideIcon,
} from "lucide-react";

import R4LLogo from "@/components/ui/R4LLogo";

interface DockItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const items: DockItem[] = [
  { icon: Home, label: "Top", href: "#hero" },
  { icon: HelpCircle, label: "The Problem", href: "#problem" },
  { icon: Smartphone, label: "The App", href: "#app" },
  { icon: Map, label: "The Journeys", href: "#journeys" },
  { icon: Sparkles, label: "How It Works", href: "#how" },
  { icon: Heart, label: "The Vision", href: "#vision" },
];

export default function GooeyDock() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* Goo filter for the blob */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <filter id="r4l-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <Tooltip.Provider delayDuration={120} skipDelayDuration={300}>
        <nav
          aria-label="Page sections"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        >
          <div
            className="flex items-center gap-1.5 pl-2 pr-3 py-2 rounded-full backdrop-blur-xl border border-white/10 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.7)]"
            style={{ background: "rgba(0,26,46,0.78)" }}
          >
            {/* Logo (also "go to top") */}
            <a
              href="#hero"
              aria-label="Reach4Life — back to top"
              className="flex items-center pl-1 pr-2 transition-transform hover:scale-105"
            >
              <R4LLogo size={32} />
            </a>

            <span
              aria-hidden="true"
              className="block w-px h-6 bg-white/15 mx-1"
            />

            {/* Section buttons */}
            <div className="flex items-center gap-1">
              {items.map((item, idx) => {
                const Icon = item.icon;
                const isHovered = hovered === idx;
                return (
                  <Tooltip.Root key={item.label}>
                    <Tooltip.Trigger asChild>
                      <motion.a
                        href={item.href}
                        aria-label={item.label}
                        onMouseEnter={() => setHovered(idx)}
                        onMouseLeave={() => setHovered(null)}
                        onFocus={() => setHovered(idx)}
                        onBlur={() => setHovered(null)}
                        animate={{ scale: isHovered ? 1.18 : 1 }}
                        transition={{ type: "spring", stiffness: 320, damping: 22 }}
                        className="relative h-10 w-10 rounded-full flex items-center justify-center text-white/80 hover:text-white outline-none focus-visible:ring-2 focus-visible:ring-r4l-yellow"
                      >
                        <motion.span
                          aria-hidden="true"
                          className="absolute inset-0 rounded-full bg-r4l-red"
                          style={{ filter: "url(#r4l-goo)" }}
                          animate={{
                            scale: isHovered ? 1.35 : 0.4,
                            opacity: isHovered ? 0.9 : 0,
                          }}
                          transition={{ type: "spring", stiffness: 220, damping: 24 }}
                        />
                        <Icon className="relative h-[18px] w-[18px] stroke-[2.2]" />
                      </motion.a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        sideOffset={10}
                        className="font-sans text-[11px] uppercase font-bold px-3 py-1.5 rounded-full bg-white text-r4l-navy shadow-lg"
                        style={{ letterSpacing: "0.12em" }}
                      >
                        {item.label}
                        <Tooltip.Arrow className="fill-white" />
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                );
              })}
            </div>
          </div>
        </nav>
      </Tooltip.Provider>
    </>
  );
}
