"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function LoadingScreen() {
  const [animationData, setAnimationData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the Lottie animation
    fetch("/animations/loading.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));

    // Simulate loading - wait for the page to be ready
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Small delay to ensure everything is loaded
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black backdrop-blur-3xl"
        >
          {/* Blur overlay */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />

          {/* Loading content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Lottie Animation */}
            {animationData && (
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Lottie animationData={animationData} loop={true} />
              </div>
            )}

            {/* Loading text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-white text-xl font-medium"
            >
              Loading...
            </motion.div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="h-full bg-gradient-to-r from-white via-gray-300 to-white"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

