"use client";

import React from "react";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { BlurFade } from "@/components/ui/blur-fade";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AuroraText } from "@/components/ui/aurora-text";
// Fallback icons if lucide-react is not installed, using text emojis or radix icons
import { CodeIcon as RadixCode, RocketIcon, GlobeIcon } from "@radix-ui/react-icons";

const Skills = () => {
  const skillCategories = [
    {
      title: "Networking & Security",
      icon: <GlobeIcon className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "Wireshark", emoji: "🦈", color: "#1679A7" },
        { name: "Cisco", emoji: "🔷", color: "#049FD9" },
        { name: "TCP/IP", emoji: "🌐", color: "#4A90E2" },
        { name: "VPN", emoji: "🔒", color: "#00D084" },
        { name: "Firewall", emoji: "🛡️", color: "#FF6B6B" },
      ],
    },
    {
      title: "Penetration Testing",
      icon: <RadixCode className="w-6 h-6 text-red-400" />,
      skills: [
        { name: "Metasploit", emoji: "🎯", color: "#FF3E3E" },
        { name: "Nmap", emoji: "📡", color: "#4D9FFF" },
        { name: "Burp Suite", emoji: "🔥", color: "#FF7C00" },
        { name: "Kali Linux", emoji: "🐉", color: "#367BF5" },
        { name: "OWASP", emoji: "⚔️", color: "#6C5CE7" },
      ],
    },
    {
      title: "Security Analysis & Tools",
      icon: <RocketIcon className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "Splunk", emoji: "📊", color: "#00C176" },
        { name: "Snort", emoji: "🐗", color: "#E74C3C" },
        { name: "Python", emoji: "🐍", color: "#3776AB" },
        { name: "Volatility", emoji: "🔬", color: "#8E44AD" },
        { name: "John the Ripper", emoji: "🔓", color: "#F39C12" },
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
            Technical <AuroraText colors={["#f97316", "#ffffff", "#fb923c", "#fff7ed"]} speed={1.5}>Skills</AuroraText>
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

