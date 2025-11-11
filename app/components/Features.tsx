"use client";

import React from "react";
import { PiFastForwardThin } from 'react-icons/pi';
import { FcDataProtection } from 'react-icons/fc';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
 
import { VscSourceControl } from 'react-icons/vsc';
import { AiOutlineCompress } from 'react-icons/ai';
import { PiEscalatorUpThin } from 'react-icons/pi';
import { BlurFade } from "@/components/ui/blur-fade";
export default function Features() {
  return (
    <section id="features" className="relative py-0 pb-12 sm:pb-16 md:pb-20 text-center bg-black overflow-hidden px-4">
         <div className="relative z-20 mb-8 sm:mb-10 md:mb-12">
        <BlurFade delay={0.2} inView>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Protecting Your <span className="text-purple-400">Digital World</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg px-4">
            Advanced cybersecurity solutions to keep your business safe from evolving threats.
          </p>
        </BlurFade>
      </div>



      
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">

  <BlurFade delay={0.2} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
      <PiFastForwardThin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" /> Built for speed
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      Instantly sync your notes across devices
    </p>
  </div>
  </BlurFade>

  <BlurFade delay={0.3} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
      <FcDataProtection className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />Built for protection
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      End-to-end encryption for all your data
    </p>
  </div>
  </BlurFade>

  <BlurFade delay={0.4} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
     <VscWorkspaceTrusted className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" /> Built for reliability
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      99.99% uptime and global redundancy
    </p>
  </div>
  </BlurFade>

  <BlurFade delay={0.5} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
  <PiEscalatorUpThin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />    Built for scalability
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      Cloud-native protection that grows with you
    </p>
  </div>
  </BlurFade>

  <BlurFade delay={0.6} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
   <VscSourceControl className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />   Built for control
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      Manage all devices from one secure dashboard
    </p>
  </div>
  </BlurFade>

  <BlurFade delay={0.7} inView>
  <div className="relative flex flex-col items-center justify-center py-8 sm:py-10 md:py-12 text-center border border-white/5 bg-linear-to-t from-transparent to-transparent hover:from-[#FFFFFF]/6 hover:to-[#FFFFFF]/0 transition-all duration-200 overflow-hidden px-4">
    <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
     <AiOutlineCompress className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" /> Built for compliance
    </h3>
    <p className="text-gray-400 text-xs sm:text-sm max-w-xs">
      GDPR, ISO27001, and SOC2 certified protection
    </p>
  </div>
  </BlurFade>

</div>

    </section>
  );
}
