import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Ruturaj Khondre - AI, ML & Cybersecurity",
    description: "Explore my AI, Machine Learning, and Cybersecurity projects including Gender Bias Detection, ASL Recognition System, and Network Security Scanner. Real-world applications demonstrating technical expertise.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
