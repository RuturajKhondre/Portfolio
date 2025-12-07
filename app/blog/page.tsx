import { getAllPosts } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { AuroraText } from "@/components/ui/aurora-text";
import { IconCalendar, IconUser, IconArrowRight } from "@tabler/icons-react";

export const metadata = {
    title: "Blog | Ruturaj Khondre",
    description: "Insights on Cybersecurity, AI, and Network Engineering.",
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <section className="relative min-h-screen pt-32 pb-20 bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <BlurFade delay={0.1} inView>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Security <AuroraText colors={["#FF1CF7", "#b249f8", "#7928ca"]} speed={1.5}>Insights</AuroraText>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Exploring the intersection of Artificial Intelligence, Cybersecurity, and Network Engineering.
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <BlurFade key={post.slug} delay={0.2 + index * 0.1} inView>
                            <Link href={`/blog/${post.slug}`} className="group block h-full">
                                <div className="relative h-full bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col">

                                    {/* Image Container */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        {post.coverImage ? (
                                            <Image
                                                src={post.coverImage}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                                                <span className="text-zinc-600">No Image</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-4">
                                            <div className="flex items-center gap-1">
                                                <IconCalendar className="w-4 h-4" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <IconUser className="w-4 h-4" />
                                                <span>{post.author}</span>
                                            </div>
                                        </div>

                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>

                                        <p className="text-zinc-400 text-sm mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto">
                                            <span className="inline-flex items-center text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
                                                Read Article <IconArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
