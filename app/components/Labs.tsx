"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { RocketIcon } from "@radix-ui/react-icons";
import { GlareCard } from "@/components/ui/glare-card";

const Labs = () => {
    return (
        <section id="labs" className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 text-center">
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Security <span className="text-blue-400">Labs</span>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Experimental tools and research in threat detection
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
                    {[1, 2, 3].map((item, index) => (
                        <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                            <GlareCard className="flex flex-col items-start justify-end py-8 px-6 w-full max-w-[320px]">
                                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4 backdrop-blur-md border border-blue-500/30">
                                    <RocketIcon className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white">
                                    Lab Experiment {item}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    Research and implementation details for security experiment #{item}. Exploring new vectors and defense mechanisms.
                                </p>
                                <div className="flex items-center text-blue-400 text-sm font-medium mt-auto group cursor-pointer">
                                    Read Analysis <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                </div>
                            </GlareCard>
                        </BlurFade>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <Link
                        href="/labs"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white transition-all hover:scale-105"
                    >
                        Explore All Labs
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Labs;
