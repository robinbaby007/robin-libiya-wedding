"use client";

import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import TimeMarried from "@/components/TimeMarried";
import Gallery from "@/components/Gallery";
import ParallaxDivider from "@/components/ParallaxDivider";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const basePath = "/robin-libiya-wedding";

  const photos = [
    { src: `${basePath}/photos/DSC08228.JPG`, alt: "Robin and Libiya" },
    { src: `${basePath}/photos/DSC08110.JPG`, alt: "Together" },
    { src: `${basePath}/photos/DSC07109.JPG`, alt: "Beautiful moment" },
    { src: `${basePath}/photos/DSC07100.JPG`, alt: "Love" },
    { src: `${basePath}/photos/DSC07097.JPG`, alt: "Joy" },
    { src: `${basePath}/photos/DSC07077.JPG`, alt: "Happiness" },
    { src: `${basePath}/photos/DSC06965.JPG`, alt: "Together forever" },
    { src: `${basePath}/photos/DSC06920.JPG`, alt: "Beautiful couple" },
    { src: `${basePath}/photos/DSC06410.JPG`, alt: "Sweet moments" },
    { src: `${basePath}/photos/DSC05979.JPG`, alt: "Forever" },
    { src: `${basePath}/photos/DSC05910.JPG`, alt: "Always" },
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
      <FloatingParticles />
      <Navbar />
      <Hero />
      <Welcome />
      <ParallaxDivider
        photo={`${basePath}/photos/DSC07109.JPG`}
        alt="Beautiful moment"
        quote="Every love story is beautiful, but ours is our favorite."
      />
      <TimeMarried />
      <ParallaxDivider
        photo={`${basePath}/photos/DSC06965.JPG`}
        alt="Together forever"
        quote="In all the world, there is no heart for me like yours."
      />
      <Gallery photos={photos} onPhotoClick={openLightbox} />
      <Quotes />
      <ParallaxDivider
        photo={`${basePath}/photos/DSC05979.JPG`}
        alt="Forever"
        quote="Whatever our souls are made of, his and mine are the same."
      />
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
