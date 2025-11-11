"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 3.05, // Rotate to center on Kolhapur longitude - rotated right
  theta: 0.29, // Tilt to show Kolhapur latitude (16.7064° N)
  dark: 1, // Maximum darkness to blend with dark theme
  diffuse: 1.5,
  mapSamples: 16000,
  mapBrightness: 6, // Brighter dots for better visibility
  baseColor: [0.3, 0.3, 0.4], // Subtle dark blue-gray to blend with dark background
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Keep orange marker bright
  glowColor: [0.1, 0.1, 0.15], // Very subtle dark glow
  markers: [
    { location: [16.7064, 74.2482], size: 0.12 }, // Kolhapur, India - Orange dot (16.7064° N, 74.2482° E)
  ],
  scale: 1.2, // Slight zoom
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const phiRef = useRef(3.05); // Start at Kolhapur longitude - rotated right
  const thetaRef = useRef(0.29); // Start at Kolhapur latitude (16.7064° N)
  const widthRef = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null);
  const velocityRef = useRef({ phi: 0, theta: 0 });

  const updatePointerInteraction = (value: { x: number; y: number } | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number, clientY: number) => {
    if (pointerInteracting.current !== null) {
      const deltaX = clientX - pointerInteracting.current.x;
      const deltaY = clientY - pointerInteracting.current.y;
      
      // Calculate deltas with sensitivity
      const phiDelta = deltaX * 0.01;
      const thetaDelta = deltaY * 0.01;
      
      // Update horizontal rotation (360° - no limits)
      phiRef.current += phiDelta;
      
      // Update vertical rotation (180° - with limits)
      const newTheta = thetaRef.current + thetaDelta;
      thetaRef.current = Math.max(0.1, Math.min(Math.PI - 0.1, newTheta));
      
      // Store velocity for momentum
      velocityRef.current.phi = phiDelta;
      velocityRef.current.theta = thetaDelta;
      
      updatePointerInteraction({ x: clientX, y: clientY });
    }
  };

  const onRender = (state: Record<string, any>) => {
    // Apply momentum when not interacting
    if (!pointerInteracting.current) {
      // Continue spinning with velocity
      phiRef.current += velocityRef.current.phi;
      thetaRef.current += velocityRef.current.theta;
      
      // Limit theta
      thetaRef.current = Math.max(0.1, Math.min(Math.PI - 0.1, thetaRef.current));
      
      // Apply damping - slow down gradually
      velocityRef.current.phi *= 0.98;
      velocityRef.current.theta *= 0.98;
      
      // Stop when very slow
      if (Math.abs(velocityRef.current.phi) < 0.0001) velocityRef.current.phi = 0;
      if (Math.abs(velocityRef.current.theta) < 0.0001) velocityRef.current.theta = 0;
    }
    
    state.phi = phiRef.current;
    state.theta = thetaRef.current;
    state.width = widthRef.current * 2;
    state.height = widthRef.current * 2;
  };

  const onResize = () => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });
    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction({ x: e.clientX, y: e.clientY })
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX, e.clientY)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX, e.touches[0].clientY)
        }
      />
    </div>
  );
}

