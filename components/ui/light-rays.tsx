"use client";

import React, { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LightRaysProps {
  count?: number;
  color?: string;
  colors?: string[]; // Support for multiple colors (alternating)
  blur?: number;
  opacity?: number;
  speed?: number;
  length?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

export function LightRays({
  count = 7,
  color = "rgba(160, 210, 255, 0.2)",
  colors,
  blur = 36,
  opacity = 0.65,
  speed = 14,
  length = "70vh",
  className,
  style,
}: LightRaysProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Generate stable random values for each ray
  const rays = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      duration: speed + Math.random() * 4,
      delay: Math.random() * speed,
    }));
  }, [count, speed, isMounted]);

  return (
    <>
      <style jsx global>{`
        @keyframes lightRayFadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: ${opacity};
          }
        }
      `}</style>
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        style={style}
      >
        {isMounted && rays.map((ray) => {
          // Use colors array if provided, otherwise use single color
          const rayColor = colors && colors.length > 0 
            ? colors[ray.id % colors.length] 
            : color;
          
          return (
            <div
              key={ray.id}
              className="absolute top-0 h-full"
              style={{
                left: `${(ray.id / count) * 100}%`,
                width: `${100 / count}%`,
                height: length,
                background: `linear-gradient(to bottom, ${rayColor}, transparent)`,
                filter: `blur(${blur}px)`,
                opacity: 0,
                animation: `lightRayFadeInOut ${ray.duration}s ease-in-out infinite`,
                animationDelay: `${ray.delay}s`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

