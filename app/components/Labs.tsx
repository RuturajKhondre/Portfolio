"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { IconArrowUpRight, IconBulb } from "@tabler/icons-react";
import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";

interface Lab {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    link?: string;
}

const Labs = () => {
    const labs: Lab[] = [
        {
            id: 1,
            title: "Threat Detection Engine",
            category: "Security Lab",
            image: "/threat-detection.jpg",
            description: "Advanced AI-powered threat detection system leveraging machine learning",
            technologies: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Docker"],
            link: "/labs",
        },
        {
            id: 2,
            title: "Malware Analysis Tool",
            category: "Security Lab",
            image: "/malware-analysis.jpg",
            description: "Isolated sandbox environment for safe malware analysis and reverse engineering",
            technologies: ["Python", "Volatility", "Wireshark", "Linux", "Assembly"],
            link: "/labs",
        },
        {
            id: 3,
            title: "Penetration Testing Suite",
            category: "Security Lab",
            image: "/pentesting-suite.jpg",
            description: "Comprehensive ethical hacking toolkit for security assessment",
            technologies: ["Python", "Metasploit", "Nmap", "Burp Suite", "Kali Linux"],
            link: "/labs",
        },
    ];


    return (
        <section id="labs" className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Security <AuroraText colors={["#06b6d4", "#ffffff", "#22d3ee", "#ecfeff"]} speed={1.5}>Labs</AuroraText>
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Experimental tools and research in threat detection
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {labs.map((lab, index) => (
                        <BlurFade key={lab.id} delay={0.2 + index * 0.1} inView>
                            <Link
                                href={lab.link || "#"}
                                target="_blank"
                                className="group relative block rounded-3xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors h-full"
                            >
                                {/* Card Header */}
                                <div className="flex justify-between items-center p-6 relative z-20">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <IconBulb className="w-5 h-5" />
                                        <span className="text-sm font-medium">Lab</span>
                                    </div>
                                    <div className="text-zinc-400 group-hover:text-white transition-colors">
                                        <IconArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/10] mt-2">
                                    <Image
                                        src={lab.image}
                                        alt={`${lab.title} - ${lab.description}`}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                            {lab.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm md:text-base line-clamp-2">
                                            {lab.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/labs"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full text-white font-medium transition-all"
                    >
                        Explore All Labs
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Labs;
