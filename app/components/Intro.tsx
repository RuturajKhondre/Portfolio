"use client";

import React from "react";
import WordRotate from "@/components/ui/word-rotate";
import Dither from "@/components/ui/dither";

export default function Intro() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-black overflow-hidden pb-8 sm:pb-12 md:pb-16">
      {/* Dither Background */}
      <div className="absolute inset-0 z-0">
        <Dither
          waveColor={[0.4, 0.4, 0.4]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>

      {/* Gradient fade at bottom for seamless blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-20"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 pt-20 sm:pt-32 md:pt-48">
        <div>
          {/* Main heading with inline word rotation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight pb-8 sm:pb-10 md:pb-12 mb-0">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">Hi I'm Ruturaj </span>
            <span className="inline-block relative min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[120px]" style={{ paddingBottom: '1.5rem' }}>
              <WordRotate
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                words={[
                  "a Network Engineer",
                  "a Cybersecurity Enthusiast",
                ]}
                duration={3000}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-medium max-w-3xl relative z-0 -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Building secure networks and protecting digital assets.
          </p>
        </div>
      </div>
    </section>
  );
}

