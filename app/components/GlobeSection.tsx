"use client";

import React from "react";
import Globe from "@/components/ui/globe";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";

interface SocialItem {
  name: string;
  icon: React.ReactNode;
  color: string;
  url: string;
}

const socialLinks: SocialItem[] = [
  {
    name: "Gmail",
    icon: <SiGmail className="text-xl" />,
    color: "#EA4335",
    url: "mailto:your-email@gmail.com", // Update with your email
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-xl" />,
    color: "#fff",
    url: "https://github.com/RuturajKhondre",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="text-xl" />,
    color: "#0077B5",
    url: "https://www.linkedin.com/in/ruturaj-khondre",
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="text-xl" />,
    color: "#E4405F",
    url: "https://www.instagram.com/", // Update with your Instagram username
  },
  {
    name: "X",
    icon: <RiTwitterXFill className="text-xl" />,
    color: "#fff",
    url: "https://x.com/RuturajKhondre",
  },
];

const SocialCard = ({ name, icon, color, url }: SocialItem) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-4 px-4 py-3 rounded-lg cursor-pointer",
        "transition-all duration-200 ease-in-out hover:bg-gray-800/50",
        "group"
      )}
    >
      <div
        className="flex items-center justify-center w-6 h-6"
        style={{
          color: color,
        }}
      >
        {icon}
      </div>
      <span className="text-base text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </a>
  );
};

export default function GlobeSection() {
  return (
    <section className="relative flex items-center justify-center bg-black overflow-hidden pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Globe Section */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-[600px] rounded-2xl sm:rounded-3xl border border-gray-800 bg-black/20 backdrop-blur-sm overflow-hidden">
              {/* Location Header */}
              <div className="flex items-center gap-2 pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 mb-3 sm:mb-4">
                <FaMapMarkerAlt className="text-white text-base sm:text-lg" />
                <span className="text-white text-base sm:text-lg font-medium">Kolhapur, India</span>
              </div>

              {/* Globe - Showing top half only with gradient fade at bottom */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] px-4 sm:px-6 md:px-8">
                <div className="absolute -bottom-[100px] sm:-bottom-[125px] md:-bottom-[150px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[425px] md:w-[500px] h-[350px] sm:h-[425px] md:h-[500px]">
                  <Globe className="top-0" />
                </div>
                {/* Gradient fade at bottom to blend with border */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-[600px] min-h-[300px] sm:min-h-[360px] md:h-[422px] rounded-2xl sm:rounded-3xl border border-gray-800 bg-black/20 backdrop-blur-sm overflow-hidden">
              {/* Connect Header */}
              <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-8 mb-4 sm:mb-6 md:mb-8">
                <FaLink className="text-white text-lg sm:text-xl" />
                <h2 className="text-xl sm:text-2xl font-semibold text-white">
                  Connect
                </h2>
              </div>

              {/* Social Links with Animation - Responsive height container */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[300px] px-4 sm:px-6 md:px-8 overflow-hidden">
                <AnimatedList delay={1500}>
                  {socialLinks.map((item, idx) => (
                    <SocialCard {...item} key={idx} />
                  ))}
                </AnimatedList>
                {/* Gradient fade at bottom for smooth transition */}
                <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

