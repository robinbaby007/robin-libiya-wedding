"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

function calculateTimeSince(weddingDate: Date, now: Date) {
  let years = now.getFullYear() - weddingDate.getFullYear();
  let months = now.getMonth() - weddingDate.getMonth();
  let days = now.getDate() - weddingDate.getDate();
  const hours = now.getHours() - weddingDate.getHours();
  const minutes = now.getMinutes() - weddingDate.getMinutes();
  const seconds = now.getSeconds() - weddingDate.getSeconds();

  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    hours: hours < 0 ? hours + 24 : hours,
    minutes: minutes < 0 ? minutes + 60 : minutes,
    seconds: seconds < 0 ? seconds + 60 : seconds,
  };
}

export default function TimeMarried() {
  const [elapsed, setElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const weddingDate = new Date(2026, 0, 1, 0, 0, 0);

    function update() {
      const now = new Date();
      setElapsed(calculateTimeSince(weddingDate, now));
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const units = [
    { value: elapsed.years, label: elapsed.years === 1 ? "Year" : "Years" },
    { value: elapsed.months, label: elapsed.months === 1 ? "Month" : "Months" },
    { value: elapsed.days, label: elapsed.days === 1 ? "Day" : "Days" },
    { value: elapsed.hours, label: elapsed.hours === 1 ? "Hour" : "Hours" },
    { value: elapsed.minutes, label: elapsed.minutes === 1 ? "Minute" : "Minutes" },
    { value: elapsed.seconds, label: elapsed.seconds === 1 ? "Second" : "Seconds" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-[100px]"
      style={{
        transform: `perspective(1200px) rotateX(${(scrollProgress - 0.5) * 4}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/robin-libiya-wedding/photos/DSC08110.JPG"
          alt="Robin and Libiya together"
          fill
          sizes="100vw"
          quality={75}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1TooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="
        />
        <div className="absolute inset-0 bg-[rgba(30,25,20,0.7)] backdrop-blur-[3px]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border border-[rgba(201,169,110,0.1)] rounded-full animate-[rotateGlow_20s_linear_infinite]" />
      <div className="absolute bottom-10 right-10 w-60 h-60 border border-[rgba(201,169,110,0.08)] rounded-full animate-[rotateGlow_30s_linear_infinite_reverse]" />

      <div className="relative z-[1] text-center text-white max-w-[1200px] mx-auto px-6">
        <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold-light)] block mb-3 animate-on-scroll">
          Happily Married
        </span>
        <h2 className="font-[var(--font-heading)] text-[clamp(2rem,5vw,3.2rem)] font-normal text-white mb-4 leading-[1.2] animate-on-scroll">
          Time Since Marriage
        </h2>
        <p className="font-[var(--font-heading)] text-[clamp(1rem,2vw,1.3rem)] italic text-[rgba(255,255,255,0.7)] mb-12 animate-on-scroll">
          Married for{" "}
          {elapsed.years > 0 && `${elapsed.years} ${elapsed.years === 1 ? "year" : "years"}, `}
          {elapsed.months} {elapsed.months === 1 ? "month" : "months"} and{" "}
          {elapsed.days} {elapsed.days === 1 ? "day" : "days"}
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-[800px] mx-auto animate-on-scroll">
          {units.map((unit, index) => (
            <div
              key={unit.label}
              className="flex flex-col items-center bg-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-xl py-6 px-4 border border-[rgba(229,212,161,0.15)] transition-all duration-300 hover:bg-[rgba(255,255,255,0.15)] hover:border-[rgba(229,212,161,0.3)] hover:scale-110 hover:shadow-[0_0_40px_rgba(201,169,110,0.3)]"
              style={{
                animationDelay: `${index * 100}ms`,
                transformStyle: "preserve-3d",
                transform: `perspective(600px) rotateY(${(scrollProgress - 0.5) * 10}deg)`,
                transition: "transform 0.1s linear, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease",
              }}
            >
              <span className="font-[var(--font-heading)] text-[clamp(2rem,6vw,3.5rem)] font-light text-[var(--color-gold-light)] leading-none mb-2 transition-transform duration-300 hover:scale-110">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="text-[0.65rem] md:text-[0.7rem] font-medium tracking-[2px] md:tracking-[3px] uppercase opacity-70">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
