"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import TimeMarried from "@/components/TimeMarried";
import Gallery from "@/components/Gallery";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const photos = [
    { src: "/photos/DSC08228.JPG", alt: "Robin and Libiya" },
    { src: "/photos/DSC08110.JPG", alt: "Together" },
    { src: "/photos/DSC07109.JPG", alt: "Beautiful moment" },
    { src: "/photos/DSC07100.JPG", alt: "Love" },
    { src: "/photos/DSC07097.JPG", alt: "Joy" },
    { src: "/photos/DSC07077.JPG", alt: "Happiness" },
    { src: "/photos/DSC06965.JPG", alt: "Together forever" },
    { src: "/photos/DSC06920.JPG", alt: "Beautiful couple" },
    { src: "/photos/DSC06410.JPG", alt: "Sweet moments" },
    { src: "/photos/DSC05979.JPG", alt: "Forever" },
    { src: "/photos/DSC05910.JPG", alt: "Always" },
  ];

  const openLightbox = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings =
              entry.target.parentElement?.querySelectorAll(".animate-on-scroll");
            let delay = 0;
            siblings?.forEach((sibling, i) => {
              if (sibling === entry.target) {
                delay = i * 100;
              }
            });
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -60px 0px", threshold: 0.15 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <TimeMarried />
      <Gallery photos={photos} onPhotoClick={openLightbox} />
      <Quotes />
      <Footer />

      <Lightbox
        isOpen={lightboxOpen}
        photos={photos}
        currentIndex={currentImageIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </>
  );
}
