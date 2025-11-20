"use client";

import React from 'react';
import { InteractiveTerminal } from "@/components/ui/interactive-terminal";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BlurFade } from "@/components/ui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FileTextIcon, RocketIcon, CodeIcon } from "@radix-ui/react-icons";
import { AuroraText } from "@/components/ui/aurora-text";

const Defense = () => {
    return (
        <section id="defense" className="relative py-12 sm:py-16 md:py-20 text-center bg-black overflow-hidden">
            {/* Bento Grid - Projects, Labs, Skills */}
            <BlurFade delay={0.2} inView>
                <div className="relative z-30 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
                    <BentoGrid className="lg:grid-rows-2">
                        <BentoCard
                            name="Projects"
                            className="col-span-3 lg:col-span-1"
                            Icon={FileTextIcon}
                            description="Explore my portfolio of cybersecurity projects and implementations."
                            href="/projects"
                            cta="View Projects"
                            background={
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-transparent" />
                            }
                        />
                        <BentoCard
                            name="Labs"
                            className="col-span-3 lg:col-span-1"
                            Icon={RocketIcon}
                            description="Experimental security tools and research in threat detection and prevention."
                            href="/labs"
                            cta="Explore Labs"
                            background={
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent" />
                            }
                        />
                        <BentoCard
                            name="Skills"
                            className="col-span-3 lg:col-span-1"
                            Icon={CodeIcon}
                            description="Technical expertise in modern frameworks, cloud infrastructure, and security tools."
                            href="/skills"
                            cta="See Skills"
                            background={
                                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-600/10 to-transparent" />
                            }
                        />
                    </BentoGrid>
                </div>
            </BlurFade>

            {/* Interactive Terminal Section - Now Below Cards */}
            <div className="relative z-20 mb-8 sm:mb-10 md:mb-12 -mt-12 sm:-mt-14 md:-mt-16">
                <BlurFade delay={0.4} inView>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white px-4">
                        Interactive <AuroraText colors={["#22c55e", "#ffffff", "#10b981", "#f0fdf4"]} speed={1.5}>Terminal</AuroraText> Experience
                    </h1>
                </BlurFade>
                <BlurFade delay={0.6} inView>
                    <p className="text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg px-4">
                        Try our command-line interface - Type commands to navigate and explore
                    </p>
                </BlurFade>
            </div>

            {/* Interactive Terminal Component */}
            <BlurFade delay={0.8} inView>
                <div className="max-w-4xl mx-auto mb-12 sm:mb-14 md:mb-16 px-4 sm:px-6">
                    <InteractiveTerminal />

                    {/* Command hints */}
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-black via-gray-900 to-white/10 border border-white/20 rounded-lg">
                        <p className="text-xs sm:text-sm text-gray-300">
                            <span className="text-white font-semibold">💡 Quick Start:</span> Type <code className="px-2 py-1 bg-black/50 rounded text-green-400">help</code> to see available commands, or try <code className="px-2 py-1 bg-black/50 rounded text-green-400">cd home</code> to navigate
                        </p>
                    </div>
                </div>
            </BlurFade>

            {/* Action Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 max-w-2xl mx-auto mt-8 sm:mt-10 md:mt-12 px-4">
                <a href="/#contact" className="px-6 sm:px-8 py-3 sm:py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold text-sm sm:text-base">
                    Contact Me
                </a>
            </div>
        </section>
    );
};

export default Defense;
