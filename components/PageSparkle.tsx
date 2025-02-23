'use client'
import React, { useState, useEffect } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

const PageSparkles = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.5) return; // Increased to 50% chance
      
      // Create 2-3 sparkles per trigger
      const numSparkles = Math.floor(Math.random() * 2) + 2;
      
      const newSparkles = Array.from({ length: numSparkles }, () => ({
        id: Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 20, // Spread within 20px
        y: e.clientY + (Math.random() - 0.5) * 20,
        size: Math.random() * 6 + 2, // Smaller size range: 2-8px
        rotation: Math.random() * 360,
      }));

      setSparkles(sparkles => [...sparkles, ...newSparkles]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timeouts = sparkles.map(sparkle => 
      setTimeout(() => {
        setSparkles(current => current.filter(s => s?.id !== sparkle.id));
      }, 1000) // Increased duration to 1 second
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [sparkles]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
          }}
        >
          {/* Main sparkle */}
          <div
            className="absolute bg-gray-900 rounded-full animate-ping"
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`,
              opacity: 0.7,
            }}
          />
          {/* Inner sparkle */}
          <div
            className="absolute bg-gray-950 rounded-full"
            style={{
              width: `${sparkle.size * 0.5}px`,
              height: `${sparkle.size * 0.5}px`,
              left: `${sparkle.size * 0.25}px`,
              top: `${sparkle.size * 0.25}px`,
            }}
          />
          {/* Sparkle rays */}
          <div
            className="absolute bg-gray-800"
            style={{
              width: `${sparkle.size * 1.5}px`,
              height: `2px`,
              left: `${-sparkle.size * 0.25}px`,
              top: `${sparkle.size * 0.5 - 1}px`,
            }}
          />
          <div
            className="absolute bg-gray-800"
            style={{
              width: `2px`,
              height: `${sparkle.size * 1.5}px`,
              left: `${sparkle.size * 0.5 - 1}px`,
              top: `${-sparkle.size * 0.25}px`,
            }}
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes sparkle {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(180deg);
            opacity: 0;
          }
        }
        .animate-sparkle {
          animation: sparkle 700ms forwards cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default PageSparkles;
