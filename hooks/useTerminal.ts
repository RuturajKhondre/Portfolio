import { useState, useCallback } from 'react';

export interface TerminalLine {
    type: "command" | "output" | "error";
    content: string;
}

export const useTerminal = (onNavigate?: (section: string) => void) => {
    const [lines, setLines] = useState<TerminalLine[]>([
        { type: "output", content: "Welcome to CyberSec Terminal v2.0" },
        { type: "output", content: "System initialized..." },
        { type: "output", content: "Type 'help' for available commands or 'ls' to view files." },
        { type: "output", content: "" },
    ]);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    // Virtual file system
    const fileSystem: Record<string, string> = {
        "about.txt": "I am a Network Engineer & Cybersecurity Enthusiast passionate about building secure systems.",
        "contact.md": "Email: contact@ruturaj.dev\nPhone: Available upon request\nLinkedIn: linkedin.com/in/ruturaj",
        "skills.json": "[\"Network Engineering\", \"Pentesting\", \"Python\", \"React\"]",
        "projects.log": "Access /projects to view full case studies."
    };

    const sections = {
        home: "hero",
        about: "features",
        project: "defense",
        labs: "info",
        skills: "skills",
        contact: "contact",
    };

    const addOutput = useCallback((content: string[]) => {
        setLines(prev => [
            ...prev,
            ...content.map(c => ({ type: "output" as const, content: c })),
        ]);
    }, []);

    const addError = useCallback((content: string) => {
        setLines(prev => [...prev, { type: "error" as const, content }]);
    }, []);

    const clearLines = useCallback(() => {
        setLines([]);
    }, []);

    const commands: Record<string, (args: string[]) => void> = {
        help: () => {
            addOutput([
                "Available commands:",
                "  cd <sec>    - Navigate to section (home, about, skills...)",
                "  ls          - List files and sections",
                "  cat <file>  - Read file content",
                "  clear       - Clear terminal output",
                "  whoami      - Display user context",
                "  date        - Show system time",
                "  sudo        - [Admin Access Required]",
            ]);
        },
        ls: () => {
            addOutput([
                "Directories:",
                ...Object.keys(sections).map(s => `  📁 ${s}/`),
                "Files:",
                ...Object.keys(fileSystem).map(f => `  📄 ${f}`),
            ]);
        },
        cd: (args: string[]) => {
            if (!args.length) return addError("Usage: cd <section>");

            const target = args[0].replace(/\/$/, "").toLowerCase(); // remove trailing slash

            if (target in sections) {
                addOutput([`Navigating to /${target}...`]);
                setTimeout(() => {
                    // Try to find the element
                    const element = document.getElementById(sections[target as keyof typeof sections]);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                        if (onNavigate) onNavigate(target);
                    } else {
                        // If on a different page (e.g. /blog), we might need to route?
                        // For now assuming single page scroll sections or handled by parent
                        window.location.hash = sections[target as keyof typeof sections];
                    }
                }, 500);
            } else {
                addError(`Directory '${target}' not found.`);
            }
        },
        cat: (args: string[]) => {
            if (!args.length) return addError("Usage: cat <filename>");
            const file = args[0];
            if (file in fileSystem) {
                addOutput(fileSystem[file].split('\n'));
            } else {
                addError(`File '${file}' not found.`);
            }
        },
        whoami: () => {
            addOutput(["guest@ruturaj-portfolio ~ rights: read-only"]);
        },
        date: () => {
            addOutput([new Date().toString()]);
        },
        sudo: () => {
            addOutput(["Nice try! Admin access is restricted. 🔒"]);
        },
        clear: clearLines
    };

    const execute = (input: string) => {
        const trimmed = input.trim();
        if (!trimmed) return;

        // Add valid command to history
        setCommandHistory(prev => [...prev, trimmed]);
        setHistoryIndex(-1);

        // Echo command
        setLines(prev => [...prev, { type: "command", content: `$ ${trimmed}` }]);

        const [cmd, ...args] = trimmed.split(" ");
        const cmdLower = cmd.toLowerCase();

        if (cmdLower in commands) {
            commands[cmdLower](args);
        } else {
            addError(`Command not found: ${cmd}. Type 'help'.`);
        }
    };

    return {
        lines,
        execute,
        commandHistory,
        historyIndex,
        setHistoryIndex
    };
};
