"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { ProgressiveBlur } from "./progressive-blur";

interface TerminalLine {
  type: "command" | "output" | "error";
  content: string;
}

interface InteractiveTerminalProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

export function InteractiveTerminal({ className, onNavigate }: InteractiveTerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: "Welcome to CyberSec Terminal v1.0" },
    { type: "output", content: "Type 'help' for available commands" },
    { type: "output", content: "" },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Available commands and sections
  const sections = {
    home: "hero",
    about: "features",
    project: "defense",
    labs: "info",
    skills: "skills",
    contact: "contact",
  };

  const commands: Record<string, (args: string[]) => void> = {
    help: () => {
      addOutput([
        "Available commands:",
        "  cd <section>    - Navigate to a section (home, about, project, labs, skills, contact)",
        "  ls              - List all available sections",
        "  clear           - Clear terminal screen",
        "  whoami          - Display current user info",
        "  status          - Show system security status",
        "  help            - Show this help message",
      ]);
    },
    ls: () => {
      addOutput([
        "Available sections:",
        ...Object.keys(sections).map(s => `  📁 ${s}`),
      ]);
    },
    cd: (args: string[]) => {
      if (args.length === 0) {
        addError("Usage: cd <section>");
        return;
      }
      const section = args[0].toLowerCase();
      if (section in sections) {
        addOutput([`Navigating to ${section}...`]);
        setTimeout(() => {
          const element = document.getElementById(sections[section as keyof typeof sections]);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          if (onNavigate) {
            onNavigate(section);
          }
        }, 300);
      } else {
        addError(`Section '${section}' not found. Type 'ls' to see available sections.`);
      }
    },
    clear: () => {
      setLines([]);
    },
    whoami: () => {
      addOutput([
        "User: Security Administrator",
        "Role: System Monitor",
        "Clearance: Level 5",
      ]);
    },
    status: () => {
      addOutput([
        "🛡️  System Security Status:",
        "  ✔ Firewall: Active",
        "  ✔ Antivirus: Running", 
        "  ✔ Encryption: Enabled",
        "  ✔ Threats Blocked: 1,247",
        "  ✔ Uptime: 99.99%",
      ]);
    },
  };

  const addOutput = (content: string[]) => {
    setLines(prev => [
      ...prev,
      ...content.map(c => ({ type: "output" as const, content: c })),
    ]);
  };

  const addError = (content: string) => {
    setLines(prev => [...prev, { type: "error", content }]);
  };

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add command to history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Add command to terminal
    setLines(prev => [...prev, { type: "command", content: `$ ${trimmedInput}` }]);

    // Parse and execute command
    const parts = trimmedInput.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmd in commands) {
      commands[cmd](args);
    } else {
      addError(`Command not found: ${cmd}. Type 'help' for available commands.`);
    }

    setCurrentInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // Auto-complete logic
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => cmd.startsWith(currentInput.toLowerCase()));
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  // Auto-scroll to bottom when new lines are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input when terminal is clicked
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/80 backdrop-blur-sm shadow-2xl",
        className
      )}
      onClick={handleTerminalClick}
    >
      {/* Terminal Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center gap-2 border-b border-white/10">
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
          <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
          <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
        </div>
        <div className="text-sm text-gray-400 ml-4 font-mono">
          cybersec-terminal
        </div>
      </div>

      {/* Terminal Content */}
      <div className="relative">
        <div
          ref={terminalRef}
          className="p-4 font-mono text-sm h-96 overflow-y-auto custom-scrollbar"
        >
          {lines.map((line, index) => (
            <div
              key={index}
              className={cn(
                "mb-1",
                line.type === "command" && "text-purple-400",
                line.type === "output" && "text-gray-300",
                line.type === "error" && "text-red-400"
              )}
            >
              {line.content}
            </div>
          ))}

          {/* Input Line */}
          <div className="flex items-center text-white">
            <span className="text-green-400 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white font-mono caret-green-400"
              autoFocus
              spellCheck={false}
              autoComplete="off"
              suppressHydrationWarning
            />
          </div>
        </div>
        <ProgressiveBlur position="bottom" height="25%" />
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(168, 85, 247, 0.5);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(168, 85, 247, 0.7);
        }
      `}</style>
    </div>
  );
}

