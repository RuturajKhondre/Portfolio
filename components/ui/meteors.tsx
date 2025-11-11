"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  angle?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = [...new Array(number)].map((_, idx) => ({
      top: `${-5}px`,
      left: `${Math.floor(Math.random() * window.innerWidth)}px`,
      animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
      animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute size-1 animate-meteor rounded-full bg-white shadow-[0_0_0_1px_#ffffff50]",
            className
          )}
          style={style}
        >
          <div className="pointer-events-none absolute top-1/2 h-px w-[100px] -translate-y-1/2 bg-gradient-to-r from-white to-transparent" />
        </span>
      ))}
    </>
  );
};



