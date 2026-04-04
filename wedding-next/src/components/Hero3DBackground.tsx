"use client";

import { useEffect, useRef } from "react";

export default function Hero3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Array<{
      x: number;
      y: number;
      z: number;
      size: number;
      brightness: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 1000,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random(),
      });
    }

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const perspective = 800;

      stars.forEach((star) => {
        star.z -= 0.3;
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * 2000 - 1000;
          star.y = Math.random() * 2000 - 1000;
        }

        const scale = perspective / (perspective + star.z);
        const screenX =
          centerX + (star.x + mouseX * 50) * scale;
        const screenY =
          centerY + (star.y + mouseY * 50) * scale;
        const screenSize = star.size * scale;
        const opacity = Math.max(0, 1 - star.z / 1000) * star.brightness;

        ctx.beginPath();
        ctx.arc(screenX, screenY, screenSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 212, 161, ${opacity})`;
        ctx.fill();

        if (screenSize > 1.5) {
          ctx.beginPath();
          ctx.arc(screenX, screenY, screenSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(229, 212, 161, ${opacity * 0.15})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] opacity-60"
    />
  );
}
