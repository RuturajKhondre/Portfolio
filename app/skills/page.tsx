"use client";

import React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import Nav from "../components/Nav";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
      color: "text-green-400",
    },
    {
      title: "Backend & DevOps",
      skills: ["Node.js", "Python", "Docker", "Kubernetes", "AWS"],
      color: "text-blue-400",
    },
    {
      title: "Cybersecurity",
      skills: ["Network Security", "Penetration Testing", "SIEM", "Firewall Configuration", "Threat Analysis"],
      color: "text-purple-400",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Linux", "Wireshark", "Metasploit", "Burp Suite"],
      color: "text-orange-400",
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
              Technical <span className="bg-gradient-to-b from-green-400 to-green-600 bg-clip-text">Skills</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-400 flex flex-wrap items-center justify-center gap-2 mt-1 sm:mt-2">
              Technical expertise in modern frameworks, cloud infrastructure, and security tools.
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 relative z-10">
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <BlurFade key={idx} delay={0.6 + idx * 0.1} inView>
              <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-gray-800 bg-black/20 backdrop-blur-sm">
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-800/50 rounded-full text-xs sm:text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
}

