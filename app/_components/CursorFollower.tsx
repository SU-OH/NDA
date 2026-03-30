"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ dot: { x: 0, y: 0 }, ring: { x: 0, y: 0 } });

  useEffect(() => {
    // 터치 기기에서는 커서 비활성화
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onEnterInteractive = () => setHovering(true);
    const onLeaveInteractive = () => setHovering(false);

    const bindInteractives = () => {
      const els = document.querySelectorAll(
        "a, button, [role='button'], .cursor-pointer, .group"
      );
      els.forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
      return els;
    };

    window.addEventListener("mousemove", onMove);
    const els = bindInteractives();

    // 애니메이션 루프 — dot은 빠르게, ring은 느리게 따라감
    let raf: number;
    const animate = () => {
      const dotSpeed = 0.25;
      const ringSpeed = 0.12;

      pos.current.dot.x += (mouse.current.x - pos.current.dot.x) * dotSpeed;
      pos.current.dot.y += (mouse.current.y - pos.current.dot.y) * dotSpeed;
      pos.current.ring.x += (mouse.current.x - pos.current.ring.x) * ringSpeed;
      pos.current.ring.y += (mouse.current.y - pos.current.ring.y) * ringSpeed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.dot.x}px, ${pos.current.dot.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${pos.current.ring.x}px, ${pos.current.ring.y}px) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      els.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
      cancelAnimationFrame(raf);
    };
  }, [visible]);

  return (
    <>
      {/* 작은 중심 점 */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "#fff",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, width 0.3s, height 0.3s",
        }}
      />
      {/* 바깥 링 — 느리게 따라다님 */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          opacity: visible ? (hovering ? 0.8 : 0.4) : 0,
          transition: "opacity 0.3s, width 0.35s cubic-bezier(0.16,1,0.3,1), height 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
    </>
  );
}
