"use client";
import React, { useEffect, useRef } from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrame: number;
    
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animated dots inspired by Olivier Larose's minimalistic approach
    const dots = Array.from({ length: 80 }, () => ({
      x: Math.random() * (canvas?.width || window.innerWidth),
      y: Math.random() * (canvas?.height || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
      size: Math.random() * 2 + 0.5
    }));
    
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach(dot => {
        dot.x += dot.vx;
        dot.y += dot.vy;
        
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`;
        ctx.fill();
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Bruno Simon inspired dark foundation */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated canvas background - inspired by modern portfolio sites */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ mixBlendMode: 'screen' }}
      />
      
      {/* Subtle gradient overlays - Olivier Larose style */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-950/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-gray-950/20 to-transparent"></div>
      
      {/* Modern geometric accents */}
      <div className="absolute top-20 left-20 w-px h-20 bg-blue-500/30 animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-20 h-px bg-blue-400/40 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-10 w-2 h-2 border border-blue-500/50 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
      
      {/* Subtle noise texture for depth */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Background;