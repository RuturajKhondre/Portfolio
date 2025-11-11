"use client";

import React from "react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Meteors } from "@/components/ui/meteors";
import Nav from "../components/Nav";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export default function ProjectsPage() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Gender Bias Detection Tool",
      description: "A machine learning tool to detect and analyze gender bias in text content using NLP techniques.",
      image: "/project-placeholder.jpg", // You'll need to add actual project images
      technologies: ["JavaScript", "Machine Learning", "NLP", "React"],
      github: "https://github.com/RuturajKhondre/gender-bias-tool",
    },
    {
      id: 2,
      title: "ASL Recognition Project",
      description: "Computer vision system for American Sign Language recognition using deep learning and real-time detection.",
      image: "/project-placeholder.jpg",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/RuturajKhondre/ASL-Recognition-Project",
    },
    {
      id: 3,
      title: "Network Security Scanner",
      description: "Advanced network security scanning tool for vulnerability assessment and threat detection.",
      image: "/project-placeholder.jpg",
      technologies: ["Python", "Cybersecurity", "Networking", "Wireshark"],
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design.",
      image: "/project-placeholder.jpg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    },
  ];

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
              Projects
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 flex flex-wrap items-center justify-center gap-2 mt-1 sm:mt-2">
              The list of my projects. Everything was made with <span className="text-red-500">❤️</span>
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center relative z-10 pb-12 sm:pb-16 md:pb-20">

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto w-full">
          {projects.map((project, index) => (
            <BlurFade key={project.id} delay={0.4 + index * 0.1} inView>
              <div className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-36 sm:h-40 md:h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <GitHubLogoIcon className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-2 sm:mb-3 md:mb-4 opacity-20" />
                      <p className="text-xs sm:text-sm">Project Preview</p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-3 line-clamp-2 text-xs sm:text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-purple-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-xs sm:text-sm"
                      >
                        <GitHubLogoIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-xs sm:text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}

