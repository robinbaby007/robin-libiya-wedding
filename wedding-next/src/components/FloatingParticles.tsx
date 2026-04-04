"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: "heart" | "sparkle" | "petal" | "ring";
  color: string;
}

export default function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const colors = [
      "rgba(201, 169, 110, 0.6)",
      "rgba(229, 212, 161, 0.5)",
      "rgba(212, 165, 165, 0.4)",
      "rgba(242, 215, 213, 0.5)",
      "rgba(255, 255, 255, 0.3)",
    ];

    const types: Array<"heart" | "sparkle" | "petal" | "ring"> = [
      "heart",
      "sparkle",
      "petal",
      "ring",
    ];

    const createParticle = (index: number): Particle => ({
      id: index,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 20 + 8,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: -Math.random() * 0.8 - 0.2,
      opacity: Math.random() * 0.5 + 0.2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    particlesRef.current = Array.from({ length: 25 }, (_, i) =>
      createParticle(i)
    );

    const drawHeart = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      ctx.bezierCurveTo(
        x,
        y,
        x - size / 2,
        y,
        x - size / 2,
        y + topCurveHeight
      );
      ctx.bezierCurveTo(
        x - size / 2,
        y + (size + topCurveHeight) / 2,
        x,
        y + (size + topCurveHeight) / 1.5,
        x,
        y + size
      );
      ctx.bezierCurveTo(
        x,
        y + (size + topCurveHeight) / 1.5,
        x + size / 2,
        y + (size + topCurveHeight) / 2,
        x + size / 2,
        y + topCurveHeight
      );
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      ctx.closePath();
      ctx.fill();
    };

    const drawSparkle = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      const spikes = 4;
      const outerRadius = size / 2;
      const innerRadius = size / 4;

      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI * i) / spikes - Math.PI / 2;
        const pointX = x + Math.cos(angle) * radius;
        const pointY = y + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      ctx.fill();
    };

    const drawPetal = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.ellipse(x, y, size / 3, size / 2, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawRing = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle) => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.strokeStyle = particle.color;

        switch (particle.type) {
          case "heart":
            drawHeart(ctx, 0, 0, particle.size);
            break;
          case "sparkle":
            drawSparkle(ctx, 0, 0, particle.size);
            break;
          case "petal":
            drawPetal(ctx, 0, 0, particle.size);
            break;
          case "ring":
            drawRing(ctx, 0, 0, particle.size);
            break;
        }

        ctx.restore();

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        if (particle.y < -particle.size) {
          particle.y = dimensions.height + particle.size;
          particle.x = Math.random() * dimensions.width;
        }
        if (particle.x < -particle.size) {
          particle.x = dimensions.width + particle.size;
        }
        if (particle.x > dimensions.width + particle.size) {
          particle.x = -particle.size;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ opacity: 0.7 }}
    />
  );
}
