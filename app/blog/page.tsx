"use client";

import React from "react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";
import Nav from "../components/Nav";

export default function BlogPage() {
    const posts = [
        {
            title: "Getting Started with Cyber Security",
            excerpt: "My journey into the world of ethical hacking and what I've learned so far.",
            date: "Nov 20, 2025",
            readTime: "5 min read",
            slug: "getting-started-cyber-security",
            tags: ["Cyber Security", "Career"],
        },
        {
            title: "Understanding Network Protocols",
            excerpt: "A deep dive into TCP/IP, UDP, and how the internet actually works.",
            date: "Nov 15, 2025",
            readTime: "8 min read",
            slug: "network-protocols",
            tags: ["Networking", "Education"],
        },
        {
            title: "My First CTF Experience",
            excerpt: "Walkthrough of the challenges I solved in my first Capture The Flag competition.",
            date: "Nov 10, 2025",
            readTime: "10 min read",
            slug: "first-ctf-experience",
            tags: ["CTF", "Writeup"],
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white relative">
            {/* Navigation */}
            <div className="relative z-50">
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
                            Blog & <span className="text-purple-400">Writeups</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg text-gray-400 flex flex-wrap items-center justify-center gap-2 mt-1 sm:mt-2">
                            Sharing my learning journey, CTF writeups, and thoughts on security.
                        </p>
                    </div>
                </BlurFade>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20 relative z-10">
                <div className="max-w-4xl mx-auto grid gap-8">
                    {posts.map((post, idx) => (
                        <BlurFade key={idx} delay={0.4 + idx * 0.1} inView>
                            <div className="group relative border border-white/10 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-500">{post.date} • {post.readTime}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400 mb-4">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug}`} className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-2">
                                    Read Article →
                                </Link>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </div>
    );
}
