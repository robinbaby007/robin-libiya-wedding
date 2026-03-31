"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function calculateTimeSince(weddingDate: Date, now: Date) {
  let years = now.getFullYear() - weddingDate.getFullYear();
  let months = now.getMonth() - weddingDate.getMonth();
  let days = now.getDate() - weddingDate.getDate();
  const hours = now.getHours() - weddingDate.getHours();
  const minutes = now.getMinutes() - weddingDate.getMinutes();
  const seconds = now.getSeconds() - weddingDate.getSeconds();

  // Adjust days/months/years for negative values
  if (days < 0) {
    months--;
    // Get days in previous month
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

  useEffect(() => {
    const weddingDate = new Date(2026, 0, 1, 0, 0, 0); // Jan 1, 2026

    function update() {
      const now = new Date();
      setElapsed(calculateTimeSince(weddingDate, now));
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
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
    <section className="relative overflow-hidden py-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/DSC08110.JPG"
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
          {units.map((unit) => (
            <div
              key={unit.label}
              className="flex flex-col items-center bg-[rgba(255,255,255,0.08)] backdrop-blur-sm rounded-xl py-6 px-4 border border-[rgba(229,212,161,0.15)]"
            >
              <span className="font-[var(--font-heading)] text-[clamp(2rem,6vw,3.5rem)] font-light text-[var(--color-gold-light)] leading-none mb-2">
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
