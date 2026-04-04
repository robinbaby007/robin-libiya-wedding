"use client";

import Image from "next/image";

interface Photo {
  src: string;
  alt: string;
}

interface LightboxProps {
  isOpen: boolean;
  photos: Photo[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  photos,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[2000] bg-[rgba(15,12,10,0.95)] flex items-center justify-center transition-all duration-400 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 bg-transparent border-none text-white cursor-pointer text-[2.5rem] opacity-70 hover:opacity-100 transition-opacity p-4 z-[2001]"
        aria-label="Close"
      >
        &times;
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-transparent border-none text-white cursor-pointer text-[2rem] opacity-70 hover:opacity-100 transition-opacity p-4 z-[2001]"
        aria-label="Previous"
      >
        &#10094;
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent border-none text-white cursor-pointer text-[2rem] opacity-70 hover:opacity-100 transition-opacity p-4 z-[2001]"
        aria-label="Next"
      >
        &#10095;
      </button>

      {/* Image */}
      <div className="relative max-w-[90vw] max-h-[85vh] w-full h-full">
        <Image
          src={photos[currentIndex].src}
          alt={photos[currentIndex].alt}
          fill
          sizes="90vw"
          quality={90}
          className="object-contain rounded"
          priority
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[rgba(255,255,255,0.6)] text-[0.85rem] tracking-[2px]">
        {currentIndex + 1} / {photos.length}
      </div>
    </div>
  );
}
