"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AuroraTextProps {
  className?: string;
  children: React.ReactNode;
  colors?: string[];
  speed?: number;
}

export function AuroraText({
  className,
  children,
  colors = ["#22c55e", "#ffffff", "#10b981", "#f0fdf4"],
  speed = 1,
}: AuroraTextProps) {
  const id = React.useId();
  const animationDuration = `${10 / speed}s`;

  return (
    <>
      <style jsx>{`
        @keyframes aurora-${id} {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
      <span
        className={cn(
          "relative inline-block bg-clip-text text-transparent overflow-visible pb-1",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
          backgroundSize: "200% 200%",
          animation: `aurora-${id} ${animationDuration} ease-in-out infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
}

