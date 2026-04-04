"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import TiltCard from "./TiltCard";

interface Photo {
  src: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

export default function Gallery({ photos, onPhotoClick }: GalleryProps) {
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

  const renderPhoto = (photo: Photo, index: number) => (
    <TiltCard
      key={index}
      className="relative rounded-2xl overflow-hidden cursor-pointer group animate-on-scroll w-full"
    >
      <div
        onClick={() => onPhotoClick(index)}
        className="w-full aspect-[3/4]"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          quality={80}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1TooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,25,20,0.5)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-4 left-4 text-white">
            <p className="font-[var(--font-heading)] text-lg italic opacity-90">
              {photo.alt}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[rgba(30,25,20,0)] flex items-center justify-center transition-colors duration-300 group-hover:bg-[rgba(30,25,20,0.15)]">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-white opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>
    </TiltCard>
  );

  const row1 = photos.slice(0, 4);
  const row2 = photos.slice(4, 8);
  const row3 = photos.slice(8);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-[var(--color-cream-dark)] py-[100px] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px] animate-on-scroll">
          <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold)] block mb-3">
            Our Moments
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Photo Gallery
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {row1.map((photo, index) => renderPhoto(photo, index))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {row2.map((photo, index) => renderPhoto(photo, index + 4))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {row3.map((photo, index) => renderPhoto(photo, index + 8))}
          </div>
        </div>
      </div>
    </section>
  );
}
