"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/#features", label: "About" },
    { href: "/#info", label: "Experience" },
    { href: "/#contact", label: "Testimonials" },
    { href: "/skills", label: "Skills" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-8 py-2">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-1 bg-white/10 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg shadow-white/10">
        {/* Left side logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-200 -my-6">
          <Image src="/logoicon.png" alt="Ruturaj Logo" width={80} height={80} className="sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] object-contain" />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-300 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-4 right-4 bg-black/95 border border-white/20 rounded-2xl backdrop-blur-lg shadow-lg shadow-white/10 overflow-hidden">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
