"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import Nav from "../components/Nav";

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Navigation */}
      <div className="relative z-10">
        <Nav />
      </div>

      {/* Header with Meteors - Full Width */}
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24 lg:pb-32 mb-8 sm:mb-12 md:mb-16">
        <Meteors number={30} />
        
        {/* Gradient fade at bottom for seamless blend */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none z-20"></div>
        
        <BlurFade delay={0.2} inView>
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <h1 className="pointer-events-none bg-gradient-to-b from-white to-slate-900/10 bg-clip-text text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-none whitespace-pre-wrap text-transparent pb-4 sm:pb-5 md:pb-6 overflow-visible">
              Security <span className="bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text">Labs</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 flex flex-wrap items-center justify-center gap-2 mt-1 sm:mt-2">
              Experimental security tools and research in threat detection and prevention.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 relative z-10">
        {/* Labs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          <BlurFade delay={0.6} inView>
            <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-black/20 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">Lab 1</h3>
              <p className="text-sm sm:text-base text-gray-400">Description of your first lab experiment...</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.7} inView>
            <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-black/20 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">Lab 2</h3>
              <p className="text-sm sm:text-base text-gray-400">Description of your second lab experiment...</p>
            </div>
          </BlurFade>

          <BlurFade delay={0.8} inView>
            <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-black/20 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-400">Lab 3</h3>
              <p className="text-sm sm:text-base text-gray-400">Description of your third lab experiment...</p>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}

