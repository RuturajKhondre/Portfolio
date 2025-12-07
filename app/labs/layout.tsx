import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Security Labs | Ruturaj Khondre - Experimental Tools & Research",
    description: "Experimental security tools and research projects including Threat Detection Engine, Malware Analysis Tool, and Penetration Testing Suite. Exploring cutting-edge cybersecurity solutions.",
};

export default function LabsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
