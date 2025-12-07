import React from "react";
import { getLabBySlug, labProjects } from "@/data/labs";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { IconArrowLeft, IconBrandGithub, IconCalendar, IconUser, IconCode } from "@tabler/icons-react";
import { BlurFade } from "@/components/ui/blur-fade";

// Fix for Next.js 16 params
export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = getLabBySlug(params.slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} | Labs`,
        description: project.subtitle,
    };
}

// Generate static params for all labs to avoid 404s on static export if used
export async function generateStaticParams() {
    return labProjects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function LabPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = getLabBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-black text-white pt-24 pb-20">
            {/* Hero Image Background (Dimmed) */}
            <div className="absolute top-0 left-0 w-full h-[60vh] overflow-hidden opacity-20 pointer-events-none">
                <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Back Nav */}
                <BlurFade delay={0.1} inView>
                    <Link
                        href="/#defense"
                        className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors group"
                    >
                        <IconArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Labs
                    </Link>
                </BlurFade>

                {/* Header */}
                <header className="mb-16">
                    <BlurFade delay={0.2} inView>
                        <div className="flex flex-wrap gap-4 text-sm text-purple-400 font-mono mb-4">
                            <span className="bg-purple-900/30 px-3 py-1 rounded border border-purple-500/30">{project.duration}</span>
                            <span className="bg-blue-900/30 px-3 py-1 rounded border border-blue-500/30">{project.rol}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-sans mb-4 leading-tight">{project.title}</h1>
                        <p className="text-xl text-zinc-400 max-w-3xl">{project.subtitle}</p>
                    </BlurFade>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Overview */}
                        <BlurFade delay={0.3} inView>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-purple-500 rounded-full" /> Overview
                                </h2>
                                <p className="text-zinc-300 text-lg leading-relaxed">{project.overview}</p>
                            </section>
                        </BlurFade>

                        {/* Methodology */}
                        <BlurFade delay={0.4} inView>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-blue-500 rounded-full" /> Methodology
                                </h2>
                                <div className="space-y-6">
                                    {project.methodology.map((step, idx) => (
                                        <div key={idx} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl relative overflow-hidden group hover:border-zinc-700 transition-colors">
                                            <div className="absolute -right-4 -top-4 text-9xl font-bold text-zinc-800/20 group-hover:text-zinc-800/40 transition-colors pointer-events-none select-none">
                                                {idx + 1}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 relative z-10">{step.title}</h3>
                                            <p className="text-zinc-400 relative z-10">{step.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </BlurFade>

                        {/* Project Gallery */}
                        {project.images && project.images.length > 0 && (
                            <BlurFade delay={0.6} inView>
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-pink-500 rounded-full" /> Visual Walkthrough
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.images.map((img, idx) => (
                                            <div key={idx} className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 group">
                                                <Image
                                                    src={img}
                                                    alt={`${project.title} screenshot ${idx + 1}`}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </BlurFade>
                        )}

                        {/* Code Snippet */}
                        <BlurFade delay={0.5} inView>
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-8 h-1 bg-green-500 rounded-full" /> Code Spotlight
                                </h2>
                                <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0d1117]">
                                    <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-500" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                            <div className="w-3 h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs text-zinc-500 font-mono">{project.codeSnippet.filename}</span>
                                    </div>
                                    <div className="p-4 overflow-x-auto">
                                        <pre className="font-mono text-sm leading-relaxed text-zinc-300">
                                            <code>{project.codeSnippet.code}</code>
                                        </pre>
                                    </div>
                                </div>
                            </section>
                        </BlurFade>

                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">

                        {/* Tech Stack */}
                        <BlurFade delay={0.4} inView>
                            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-xs text-zinc-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </BlurFade>

                        {/* Features List */}
                        <BlurFade delay={0.5} inView>
                            <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
                                <h3 className="text-lg font-bold text-white mb-4">Key Features</h3>
                                <ul className="space-y-3">
                                    {project.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-zinc-400">
                                            <div className="w-1.5 h-1.5 mt-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </BlurFade>

                        {/* Github Link */}
                        {project.githubUrl && (
                            <BlurFade delay={0.6} inView>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-white text-black font-bold text-center rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    <IconBrandGithub className="w-5 h-5" /> View Source
                                </a>
                            </BlurFade>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
