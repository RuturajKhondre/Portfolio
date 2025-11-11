"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
  children?: React.ReactNode;
}

export function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
  children,
}: ProgressiveBlurProps) {
  const positions = position === "both" ? ["top", "bottom"] : [position];

  return (
    <>
      {positions.map((pos) => (
        <div
          key={pos}
          className={cn(
            "pointer-events-none absolute left-0 right-0 z-10",
            pos === "top" ? "top-0" : "bottom-0",
            className
          )}
          style={{ height }}
        >
          <div className="relative h-full w-full">
            {blurLevels.map((blur, index) => {
              const intensity = (index + 1) / blurLevels.length;
              return (
                <div
                  key={blur}
                  className="absolute inset-0"
                  style={{
                    backdropFilter: `blur(${blur}px)`,
                    WebkitBackdropFilter: `blur(${blur}px)`,
                    maskImage:
                      pos === "top"
                        ? `linear-gradient(to bottom, rgba(0,0,0,${intensity}) 0%, transparent 100%)`
                        : `linear-gradient(to top, rgba(0,0,0,${intensity}) 0%, transparent 100%)`,
                    WebkitMaskImage:
                      pos === "top"
                        ? `linear-gradient(to bottom, rgba(0,0,0,${intensity}) 0%, transparent 100%)`
                        : `linear-gradient(to top, rgba(0,0,0,${intensity}) 0%, transparent 100%)`,
                  }}
                />
              );
            })}
          </div>
          {children}
        </div>
      ))}
    </>
  );
}

