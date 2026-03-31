"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (imgRef.current) {
        const scrolled = window.scrollY;
        const heroHeight =
          document.querySelector(".hero-section")?.clientHeight || 0;
        if (scrolled < heroHeight) {
          const speed = 0.3;
          imgRef.current.style.transform = `scale(1.05) translateY(${scrolled * speed}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#story");
    if (target) {
      const offset = document.getElementById("navbar")?.offsetHeight || 0;
      window.scrollTo({
        top: (target as HTMLElement).offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="hero-section relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Next.js Image optimization */}
      <div className="absolute inset-0 z-0">
        <div ref={imgRef} className="w-full h-full" style={{ transform: "scale(1.05)" }}>
          <Image
            src="/photos/DSC08228.JPG"
            alt="Robin and Libiya walking together"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYI4Q/RFhHRUYnJCk6NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1TooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(30,25,20,0.3)] via-[rgba(30,25,20,0.5)] to-[rgba(30,25,20,0.65)]" />
      </div>

      {/* Content */}
      <div className="relative z-[1] text-center text-white px-6 max-w-[800px] animate-fade-up">
        <p className="font-[var(--font-body)] text-[0.85rem] font-normal tracking-[5px] uppercase mb-5 opacity-90">
          Together with their families
        </p>
        <h1 className="font-[var(--font-heading)] text-[clamp(2.5rem,7vw,5rem)] font-normal leading-[1.15] mb-4 tracking-[1px]">
          Robin Baby{" "}
          <span className="inline-block italic text-[var(--color-gold-light)] mx-3 text-[0.8em]">
            &
          </span>{" "}
          Libiya Joseph
        </h1>
        <p className="font-[var(--font-heading)] text-[clamp(1.2rem,3vw,1.8rem)] font-light italic mb-8 opacity-90">
          Got married
        </p>
        <div className="flex items-center justify-center gap-5 mb-8">
          <span className="w-[60px] h-px bg-[var(--color-gold)] opacity-60" />
          <span className="font-[var(--font-body)] text-[1rem] font-medium tracking-[6px] uppercase text-[var(--color-gold-light)]">
            01 January 2026
          </span>
          <span className="w-[60px] h-px bg-[var(--color-gold)] opacity-60" />
        </div>
        <p className="font-[var(--font-heading)] text-[clamp(1rem,2.5vw,1.3rem)] font-light italic opacity-85 max-w-[500px] mx-auto mb-12 leading-relaxed">
          Two hearts became one, and a lifetime of love began on this magical day.
        </p>
        <a
          href="#story"
          onClick={handleCtaClick}
          className="inline-flex flex-col items-center gap-3 text-white text-[0.75rem] font-medium tracking-[3px] uppercase opacity-80 transition-all hover:opacity-100 hover:text-[var(--color-gold-light)]"
          style={{ animation: "float 3s ease-in-out infinite" }}
        >
          <span>Scroll to explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
