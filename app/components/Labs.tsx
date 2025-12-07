"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { IconArrowUpRight, IconBulb } from "@tabler/icons-react";
import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";

import { labProjects } from "@/data/labs";

const Labs = () => {
    // Using imported labProjects instead of hardcoded data

    return (
        <section id="info" className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Network <AuroraText colors={["#06b6d4", "#ffffff", "#22d3ee", "#ecfeff"]} speed={1.5}>Labs</AuroraText>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Experimental tools and research in threat detection
                        </p>
                    </BlurFade>
                </div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {labProjects.map((lab, idx) => (
                            <BlurFade key={lab.title} delay={0.2 + idx * 0.1} inView>
                                <Link href={`/labs/${lab.slug}`} className="block group w-full">
                                    <div className="flex flex-col items-start justify-end p-6 relative min-h-[400px] rounded-3xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors h-full">

                                        {/* Card Header */}
                                        <div className="flex justify-between items-center w-full absolute top-6 left-6 right-6 z-20 pr-12">
                                            <div className="flex items-center gap-2 text-zinc-400">
                                                <IconBulb className="w-5 h-5" />
                                                <span className="text-sm font-medium">Lab</span>
                                            </div>
                                            <div className="text-zinc-400 group-hover:text-white transition-colors">
                                                <IconArrowUpRight className="w-5 h-5" />
                                            </div>
                                        </div>

                                        {/* Image Container */}
                                        <div className="absolute inset-0 w-full h-full z-0">
                                            <Image
                                                src={lab.coverImage}
                                                alt={`${lab.title} - ${lab.subtitle}`}
                                                fill
                                                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="relative z-10 w-full">
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                                {lab.title}
                                            </h3>
                                            <p className="text-zinc-300 text-sm md:text-base line-clamp-3 mb-4">
                                                {lab.subtitle}
                                            </p>

                                            {/* Tech Stack Pills */}
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {lab.technologies.slice(0, 3).map((tech) => (
                                                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-black/50 border border-white/10 rounded-md text-zinc-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </BlurFade>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <BlurFade delay={0.6} inView>
                            <Link
                                href="/labs"
                                className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full text-white font-medium transition-all"
                            >
                                Explore All Labs
                            </Link>
                        </BlurFade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Labs;
