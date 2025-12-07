import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
    coverImage?: string;
    author?: string;
}

export function getAllPosts(): BlogPost[] {
    // Create directory if it doesn't exist
    if (!fs.existsSync(contentDirectory)) {
        fs.mkdirSync(contentDirectory, { recursive: true });
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory);
    const allPostsData = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => {
            const slug = fileName.replace(/\.md$/, "");
            const fullPath = path.join(contentDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data } = matter(fileContents);

            return {
                slug,
                title: data.title || "Untitled",
                date: data.date || new Date().toISOString(),
                excerpt: data.excerpt || "",
                content: "", // Content not needed for listing
                tags: data.tags || [],
                coverImage: data.coverImage,
                author: data.author || "Ruturaj Khondre",
            } as BlogPost;
        });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
    });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
    const fullPath = path.join(contentDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        content: contentHtml,
        tags: data.tags || [],
        coverImage: data.coverImage,
        author: data.author || "Ruturaj Khondre",
    } as BlogPost;
}
