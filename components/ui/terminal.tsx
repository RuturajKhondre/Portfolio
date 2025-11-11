"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TerminalProps {
  children: React.ReactNode;
  className?: string;
}

export function Terminal({ children, className }: TerminalProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/80 backdrop-blur-sm p-6 font-mono text-sm shadow-2xl",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
      </div>
      <div className="space-y-2 text-white">{children}</div>
    </div>
  );
}

interface TypingAnimationProps {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TypingAnimation({
  children,
  className,
  duration = 50,
  delay = 0,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= children.length) {
          setDisplayedText(children.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, duration);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [isInView, children, duration, delay]);

  return (
    <div ref={ref} className={cn("block", className)}>
      {displayedText}
      {isTyping && <span className="animate-pulse">▋</span>}
    </div>
  );
}

interface AnimatedSpanProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSpan({
  children,
  className,
  delay = 0,
}: AnimatedSpanProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: delay / 1000 }}
      className={cn("block", className)}
    >
      {children}
    </motion.div>
  );
}
