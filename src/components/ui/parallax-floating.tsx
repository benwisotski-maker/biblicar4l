"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
} from "react";
import { useAnimationFrame } from "motion/react";

import { cn } from "@/lib/utils";
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";

type Tracked = {
  el: HTMLDivElement;
  depth: number;
  cx: number;
  cy: number;
};

type FloatingCtx = {
  attach: (id: string, el: HTMLDivElement, depth: number) => void;
  detach: (id: string) => void;
};

const Ctx = createContext<FloatingCtx | null>(null);

interface FloatingProps {
  children: ReactNode;
  className?: string;
  /** Higher = more parallax movement. Negative inverts. */
  sensitivity?: number;
  /** 0..1, smaller = smoother / more lag. */
  ease?: number;
}

export default function Floating({
  children,
  className,
  sensitivity = 1,
  ease = 0.05,
}: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tracked = useRef(new Map<string, Tracked>());
  const mouse = useMousePositionRef(containerRef);

  const attach = useCallback(
    (id: string, el: HTMLDivElement, depth: number) => {
      tracked.current.set(id, { el, depth, cx: 0, cy: 0 });
    },
    []
  );

  const detach = useCallback((id: string) => {
    tracked.current.delete(id);
  }, []);

  useAnimationFrame(() => {
    if (!containerRef.current) return;
    const { x, y } = mouse.current;
    tracked.current.forEach((t) => {
      const strength = (t.depth * sensitivity) / 20;
      const tx = x * strength;
      const ty = y * strength;
      t.cx += (tx - t.cx) * ease;
      t.cy += (ty - t.cy) * ease;
      t.el.style.transform = `translate3d(${t.cx}px, ${t.cy}px, 0)`;
    });
  });

  return (
    <Ctx.Provider value={{ attach, detach }}>
      <div
        ref={containerRef}
        className={cn("absolute inset-0 w-full h-full", className)}
      >
        {children}
      </div>
    </Ctx.Provider>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  depth?: number;
}

export function FloatingElement({
  children,
  className,
  style,
  depth = 1,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const ctx = useContext(Ctx);

  useEffect(() => {
    if (!ref.current || !ctx) return;
    ctx.attach(id, ref.current, depth);
    return () => ctx.detach(id);
  }, [ctx, id, depth]);

  return (
    <div
      ref={ref}
      style={style}
      className={cn("absolute will-change-transform", className)}
    >
      {children}
    </div>
  );
}
