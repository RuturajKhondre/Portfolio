import { getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { IconArrowLeft, IconCalendar, IconUser, IconTag } from "@tabler/icons-react";
import Image from "next/image";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Ruturaj Khondre`,
        description: post.excerpt,
    };
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-black pt-32 pb-20 overflow-x-hidden">
            {/* Progress bar or header accent could go here */}

            <div className="max-w-3xl mx-auto px-6">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center text-zinc-400 hover:text-white mb-8 transition-colors group"
                >
                    <IconArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-zinc-400 mb-6">
                        <span className="flex items-center gap-1">
                            <IconCalendar className="w-4 h-4 text-purple-400" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                            <IconUser className="w-4 h-4 text-purple-400" />
                            {post.author}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center gap-1">
                                <IconTag className="w-3 h-3" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 border border-zinc-800 shadow-2xl shadow-purple-900/10">
                        <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold
                prose-p:text-zinc-300 prose-p:leading-relaxed
                prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white
                prose-code:text-purple-300 prose-code:bg-zinc-900 prose-code:px-1 prose-code:rounded
                prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
                prose-li:text-zinc-300
                prose-blockquote:border-l-purple-500 prose-blockquote:bg-zinc-900/30 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:not-italic"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <hr className="my-12 border-zinc-800" />

                {/* Footer / Author Bio could go here */}
                <div className="text-center text-zinc-500 text-sm">
                    Thanks for reading! connect with me on <Link href="/#contact" className="text-purple-400 hover:underline">LinkedIn</Link>.
                </div>
            </div>
        </article>
    );
}
