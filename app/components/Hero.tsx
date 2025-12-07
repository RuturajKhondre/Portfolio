"use client";

import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col items-center text-center pt-12 sm:pt-16 md:pt-20 pb-0 overflow-hidden bg-black px-4">
      <div className="absolute inset-0 flex justify-center">
        <div className="absolute top-1/4 z-10 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-[#0b0961] rounded-full blur-[100px] sm:blur-[140px]" />
      </div>

      <BlurFade delay={0.2} inView>
        <div className="relative z-30 mt-8 sm:mt-12 mr-3 sm:mr-5">
          <img
            src="/lock.png"
            alt="Cybersecurity lock icon with purple glow representing digital security"
            className="w-[180px] sm:w-[250px] md:w-[350px] lg:w-[400px] object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.9)]"
          />
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="relative z-40 -mt-[80px] sm:-mt-[100px] md:-mt-[120px] lg:-mt-[140px] w-full max-w-[320px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1200px] backdrop-filter backdrop-blur-sm shadow-2xl rounded-xl sm:rounded-2xl overflow-hidden">
          <Image
            src="/22sd.png"
            alt="Portfolio showcase featuring AI, machine learning and cybersecurity projects dashboard interface"
            width={1200}
            height={750}
            className="rounded-xl sm:rounded-2xl w-full h-auto"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black to-transparent pointer-events-none rounded-xl sm:rounded-2xl"></div>
        </div>
      </BlurFade>
    </section>
  );
}
