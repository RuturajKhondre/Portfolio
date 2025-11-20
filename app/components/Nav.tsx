"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const navItems = [
    { name: "Projects", link: "/projects" },
    { name: "About", link: "/#features" },
    { name: "Experience", link: "/#info" },
    { name: "Testimonials", link: "/#contact" },
    { name: "Skills", link: "/skills" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo - Reduced for thinner navbar */}
        <a
          href="/"
          className="relative z-20 ml-4 flex items-center"
        >
          <Image
            src="/logoicon.png"
            alt="Ruturaj Logo"
            width={60}
            height={60}
            className="object-contain"
          />
        </a>

        <NavItems items={navItems} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Mobile Logo - Reduced for thinner navbar */}
          <a href="/" className="flex items-center">
            <Image
              src="/logoicon.png"
              alt="Ruturaj Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </a>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-white dark:text-white font-medium"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

