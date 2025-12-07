"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { IconArrowUpRight, IconBulb } from "@tabler/icons-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
}

const Projects = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Gender Bias Detection Tool",
            category: "AI & NLP",
            image: "/gender-bias.png",
            description: "Detect and analyze gender bias in text using NLP",
            technologies: ["Python", "NLP", "React"],
            github: "https://github.com/RuturajKhondre/gender-bias-tool",
        },
        {
            id: 2,
            title: "ASL Recognition System",
            category: "Computer Vision",
            image: "/asl-recognition.png",
            description: "Real-time American Sign Language recognition",
            technologies: ["Python", "OpenCV", "Deep Learning"],
            github: "https://github.com/RuturajKhondre/ASL-Recognition-Project",
        },
        {
            id: 3,
            title: "Network Security Scanner",
            category: "Cybersecurity",
            image: "/network-security.png",
            description: "Advanced vulnerability assessment tool",
            technologies: ["Python", "Networking", "Security"],
            github: "https://github.com/RuturajKhondre",
        },
    ];

    return (
        <section id="projects" className="relative py-20 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <BlurFade delay={0.2} inView>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Selected Projects
                    </h2>
                </BlurFade>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <BlurFade key={project.id} delay={0.2 + index * 0.1} inView>
                            <Link
                                href={project.github || "#"}
                                target="_blank"
                                className="group relative block rounded-3xl bg-zinc-900/50 border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors h-full"
                            >
                                {/* Card Header */}
                                <div className="flex justify-between items-center p-6 relative z-20">
                                    <div className="flex items-center gap-2 text-zinc-400">
                                        <IconBulb className="w-5 h-5" />
                                        <span className="text-sm font-medium">Project</span>
                                    </div>
                                    <div className="text-zinc-400 group-hover:text-white transition-colors">
                                        <IconArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Image Container */}
                                <div className="relative w-full aspect-[16/10] mt-2">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm md:text-base line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-full text-white font-medium transition-all"
                    >
                        See all project
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
