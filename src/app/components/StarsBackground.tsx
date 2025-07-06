'use client';
import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 120;
const STAR_COLOR = 'rgba(255,255,255,0.85)';
const STAR_SIZE = 1.2;
const STAR_SPEED = 0.15;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const StarsBackground: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<{ x: number; y: number; z: number }[]>([]);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId: number;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (!canvas) return;
      canvas.width = width;
      canvas.height = height;
    }

    window.addEventListener('resize', resize);
    resize();

    if (stars.current.length === 0) {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.current.push({
          x: randomBetween(0, width),
          y: randomBetween(0, height),
          z: randomBetween(0.2, 1),
        });
      }
    }

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      for (const star of stars.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, STAR_SIZE * star.z, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8 * star.z;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    function update() {
      for (const star of stars.current) {
        star.x += STAR_SPEED * star.z;
        if (star.x > width + 10) {
          star.x = -10;
          star.y = randomBetween(0, height);
          star.z = randomBetween(0.2, 1);
        }
      }
    }

    function animate() {
      update();
      draw();
      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-black"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}
    />
  );
};

export default StarsBackground; 