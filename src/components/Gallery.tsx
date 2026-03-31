"use client";

import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface GalleryProps {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

export default function Gallery({ photos, onPhotoClick }: GalleryProps) {
  return (
    <section id="gallery" className="bg-[var(--color-cream-dark)] py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px] animate-on-scroll">
          <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold)] block mb-3">
            Our Moments
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden cursor-pointer aspect-square group animate-on-scroll"
              onClick={() => onPhotoClick(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP1TooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k="
              />
              <div className="absolute inset-0 bg-[rgba(30,25,20,0)] flex items-center justify-center transition-colors duration-300 group-hover:bg-[rgba(30,25,20,0.35)]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white opacity-0 scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
