import { RefObject, useEffect, useRef } from "react";

export function useMousePositionRef(
  containerRef?: RefObject<HTMLElement | null>
) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function write(clientX: number, clientY: number) {
      const target = containerRef?.current;
      if (target) {
        const rect = target.getBoundingClientRect();
        positionRef.current.x = clientX - rect.left - rect.width / 2;
        positionRef.current.y = clientY - rect.top - rect.height / 2;
      } else {
        positionRef.current.x = clientX;
        positionRef.current.y = clientY;
      }
    }

    function onMouse(e: MouseEvent) {
      write(e.clientX, e.clientY);
    }
    function onTouch(e: TouchEvent) {
      const t = e.touches[0];
      if (t) write(t.clientX, t.clientY);
    }

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, [containerRef]);

  return positionRef;
}
