"use client";

import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BlurFade } from "@/components/ui/blur-fade";
import { HoverEffect } from "@/components/ui/card-hover-effect";
// Fallback icons if lucide-react is not installed, using text emojis or radix icons
import { CodeIcon as RadixCode, RocketIcon, GlobeIcon } from "@radix-ui/react-icons";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <RadixCode className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "React", emoji: "⚛️", color: "#61DAFB" },
        { name: "Next.js", emoji: "▲", color: "#FFFFFF" },
        { name: "TypeScript", emoji: "📘", color: "#3178C6" },
        { name: "JavaScript", emoji: "📜", color: "#F7DF1E" },
        { name: "Tailwind", emoji: "🎨", color: "#38B2AC" },
      ],
    },
    {
      title: "Backend & DevOps",
      icon: <RocketIcon className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "Node.js", emoji: "🟢", color: "#339933" },
        { name: "Python", emoji: "🐍", color: "#3776AB" },
        { name: "Docker", emoji: "🐳", color: "#2496ED" },
        { name: "Kubernetes", emoji: "☸️", color: "#326CE5" },
        { name: "PostgreSQL", emoji: "🐘", color: "#336791" },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <GlobeIcon className="w-6 h-6 text-orange-400" />,
      skills: [
        { name: "AWS", emoji: "☁️", color: "#FF9900" },
        { name: "Terraform", emoji: "🏗️", color: "#7B42BC" },
        { name: "Linux", emoji: "🐧", color: "#FCC624" },
        { name: "Git", emoji: "📦", color: "#F05032" },
        { name: "CI/CD", emoji: "🔄", color: "#4B5563" },
      ],
    },
  ];

  const hoverItems = skillCategories.map((category) => ({
    title: category.title,
    icon: category.icon,
    description: (
      <div className="mt-4">
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors group/skill"
            >
              <span className="text-lg transition-transform group-hover/skill:scale-110" style={{ color: skill.color }}>{skill.emoji}</span>
              <span className="text-sm text-zinc-300 group-hover/skill:text-white transition-colors">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    link: "#", // Optional link
  }));

  return (
    <section id="skills" className="relative py-20 text-center bg-black overflow-hidden">
      <div className="relative z-20 mb-8">
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
        <BlurFade delay={0.6} inView>
          <HoverEffect items={hoverItems} />
        </BlurFade>
        <ProgressiveBlur position="bottom" height="20%" />
      </div>
    </section>
  );
};

export default Skills;

