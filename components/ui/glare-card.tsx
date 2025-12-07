"use client";

import { cn } from "@/lib/utils";
import React, {
    useRef,
    useState,
    useEffect,
    HTMLAttributes,
    MouseEventHandler,
} from "react";

export const GlareCard = ({
    children,
    className,
    width = 400,
    height = 600,
}: {
    children: React.ReactNode;
    className?: string;
    width?: number;
    height?: number;
}) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
    const [opacity, setOpacity] = useState(0);
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const xPct = x / rect.width;
        const yPct = y / rect.height;

        const rotateX = (yPct - 0.5) * 30;
        const rotateY = (xPct - 0.5) * -30;

        const glareX = xPct * 100;
        const glareY = yPct * 100;

        setRotate({ x: rotateX, y: rotateY });
        setGlare({ x: glareX, y: glareY, opacity: 1 });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setRotate({ x: 0, y: 0 });
        setGlare({ x: 50, y: 50, opacity: 0 });
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative rounded-lg transition-transform duration-300 ease-in-out will-change-transform [transform-style:preserve-3d]",
                className
            )}
            style={{
                width: `${width}px`,
                height: `${height}px`,
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950 rounded-lg overflow-hidden">
                {children}
            </div>
            <div
                className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-300 ease-in-out"
                style={{
                    opacity,
                    background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 50%)`,
                }}
            />
        </div>
    );
};
