"use client";

import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BlurFade } from "@/components/ui/blur-fade";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", emoji: "⚛️", color: "#61DAFB" },
        { name: "Next.js", emoji: "▲", color: "#FFFFFF" },
        { name: "TypeScript", emoji: "📘", color: "#3178C6" },
        { name: "JavaScript", emoji: "📜", color: "#F7DF1E" },
      ],
    },
    {
      title: "Backend & DevOps",
      skills: [
        { name: "Node.js", emoji: "🟢", color: "#339933" },
        { name: "Python", emoji: "🐍", color: "#3776AB" },
        { name: "Docker", emoji: "🐳", color: "#2496ED" },
        { name: "Kubernetes", emoji: "☸️", color: "#326CE5" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", emoji: "☁️", color: "#FF9900" },
        { name: "Terraform", emoji: "🏗️", color: "#7B42BC" },
        { name: "Linux", emoji: "🐧", color: "#FCC624" },
        { name: "Git", emoji: "📦", color: "#F05032" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 text-center bg-black overflow-hidden">
      <div className="relative z-20 mb-12">
        <BlurFade delay={0.2} inView>
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Technical <span className="text-purple-400">Skills</span>
          </h1>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I work with to build secure and scalable solutions
          </p>
        </BlurFade>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <BlurFade key={categoryIndex} delay={0.2 + categoryIndex * 0.1} inView>
              <div
                className="p-6 border border-[#1f1c2e]/80 rounded-lg bg-gradient-to-br from-purple-900/10 to-transparent hover:from-purple-900/20 transition-all"
              >
              <h3 className="text-2xl font-semibold text-white mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center justify-center p-4 bg-black/30 rounded-lg hover:bg-black/50 transition-all group cursor-pointer"
                  >
                    <div
                      className="text-5xl mb-2 transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.emoji}
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              </div>
            </BlurFade>
          ))}
        </div>
        <ProgressiveBlur position="bottom" height="20%" />
        </div>

        {/* Additional Skills Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-900/20 to-transparent rounded-lg border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
