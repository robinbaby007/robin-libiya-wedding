"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ParallaxDividerProps {
  photo: string;
  alt: string;
  quote: string;
}

export default function ParallaxDivider({ photo, alt, quote }: ParallaxDividerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = (windowHeight - rect.top) / (rect.height + windowHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));

      setOffset((clampedProgress - 0.5) * 80);
      setOpacity(clampedProgress < 0.1 ? clampedProgress / 0.1 : clampedProgress > 0.9 ? (1 - clampedProgress) / 0.1 : 1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${offset}px) scale(1.1)`,
          transition: "transform 0.05s linear",
        }}
      >
        <Image
          src={photo}
          alt={alt}
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(30,25,20,0.6)] backdrop-blur-[2px]" />
      </div>

      {/* Quote Text */}
      <div
        className="relative z-[1] text-center text-white px-6 max-w-[700px]"
        style={{
          opacity,
          transform: `translateY(${offset * 0.3}px)`,
          transition: "transform 0.05s linear, opacity 0.3s ease",
        }}
      >
        <p className="font-[var(--font-heading)] text-[clamp(1.3rem,3vw,2rem)] italic leading-relaxed opacity-90">
          &ldquo;{quote}&rdquo;
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[var(--color-gold)] opacity-50" />
          <span className="text-[var(--color-gold-light)] text-2xl">&#10044;</span>
          <span className="w-12 h-px bg-[var(--color-gold)] opacity-50" />
        </div>
      </div>
    </section>
  );
}
