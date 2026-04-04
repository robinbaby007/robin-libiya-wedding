"use client";

import { useRef, useEffect, useState } from "react";
import TiltCard from "./TiltCard";

export default function Welcome() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="welcome"
      ref={sectionRef}
      className="bg-white text-center py-[100px] relative overflow-hidden"
      style={{
        transform: `perspective(1200px) rotateX(${(scrollProgress - 0.5) * 2}deg) scale(${0.98 + scrollProgress * 0.02})`,
        transition: "transform 0.1s linear",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-blush)] rounded-full opacity-20 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--color-gold-light)] rounded-full opacity-15 blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <TiltCard className="max-w-[700px] mx-auto animate-on-scroll">
          <div className="p-10">
            <div className="text-[var(--color-gold-light)] text-[1.5rem] opacity-60 mb-6 leading-none">
              &#10044;
            </div>
            <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
              Thank You
            </h2>
            <p className="font-[var(--font-heading)] text-[clamp(1.3rem,3vw,1.8rem)] font-light italic leading-relaxed text-[var(--color-brown-dark)]">
              Thank you for being part of our journey. Your love, blessings, and
              presence made our special day truly unforgettable. We are forever
              grateful.
            </p>
            <div className="text-[var(--color-gold-light)] text-[1.5rem] opacity-60 mt-6 leading-none">
              &#10044;
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
