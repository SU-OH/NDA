"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const tilt = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
  }, []);

  // 마우스 패럴랙스 — ND+A 텍스트가 은은하게 따라 움직임
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      // -1 ~ 1 범위로 정규화
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      target.current = { x: nx * 12, y: ny * 8 };
    };

    let raf: number;
    const animate = () => {
      tilt.current.x += (target.current.x - tilt.current.x) * 0.08;
      tilt.current.y += (target.current.y - tilt.current.y) * 0.08;
      if (textRef.current) {
        textRef.current.style.transform = `translate(${tilt.current.x}px, ${tilt.current.y}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // 터치 리플 효과
  const handleTouchRipple = useCallback(
    (e: React.TouchEvent<HTMLElement>) => {
      const section = sectionRef.current;
      if (!section) return;
      const touch = e.touches[0];
      const rect = section.getBoundingClientRect();
      const ripple = document.createElement("div");
      ripple.className = "touch-ripple";
      ripple.style.left = `${touch.clientX - rect.left}px`;
      ripple.style.top = `${touch.clientY - rect.top}px`;
      section.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    },
    []
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-nda-red overflow-hidden"
      onTouchStart={handleTouchRipple}
    >
      {/* Plus pattern decoration — top-left */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none select-none">
        <div className="w-full h-full plus-pattern" />
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div ref={textRef} className="text-center will-change-transform">
          {/* ND+A Logo Typography */}
          <h1 className="font-display text-nda-white leading-none tracking-tight">
            <span
              className={`inline-block text-[clamp(5rem,20vw,16rem)] ${
                loaded ? "animate-fade-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              ND
            </span>
            <span
              className={`inline-block text-[clamp(5rem,20vw,16rem)] ${
                loaded ? "animate-fade-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              +
            </span>
            <span
              className={`inline-block text-[clamp(5rem,20vw,16rem)] ${
                loaded ? "animate-fade-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.5s" }}
            >
              A
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`mt-6 text-nda-white/80 text-sm md:text-base tracking-[0.3em] uppercase font-body font-light ${
              loaded ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.8s" }}
          >
            Brand Development &amp; Design
          </p>
        </div>
      </div>

      {/* Bottom bar — mimics business card layout */}
      <div className="px-6 md:px-12 pb-8">
        {/* Decorative plus line */}
        <div
          className={`flex items-center gap-0 mb-6 text-nda-white/30 text-xs tracking-[0.2em] overflow-hidden ${
            loaded ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        >
          {Array.from({ length: 60 }).map((_, i) => (
            <span key={i} className="inline-block">
              +
            </span>
          ))}
        </div>

        <div
          className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 ${
            loaded ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "1.1s" }}
        >
          <p className="text-nda-white/60 text-sm font-body tracking-wider">
            www.naomidesigners.com
          </p>
          <a
            href="#about"
            className="flex items-center gap-2 text-nda-white/60 text-sm font-body tracking-wider hover:text-nda-white transition-colors duration-300 cursor-pointer"
            aria-label="Scroll to about section"
          >
            <span className="animate-scroll-down">
              <ChevronDown size={18} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
