"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import { useTerminal } from "@/hooks/useTerminal";
import { ProgressiveBlur } from "./progressive-blur";



interface InteractiveTerminalProps {
  className?: string;
  onNavigate?: (section: string) => void;
}

export function InteractiveTerminal({ className, onNavigate }: InteractiveTerminalProps) {
  const { lines, execute, commandHistory, historyIndex, setHistoryIndex } = useTerminal(onNavigate);
  const [currentInput, setCurrentInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      execute(currentInput);
      setCurrentInput("");
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

