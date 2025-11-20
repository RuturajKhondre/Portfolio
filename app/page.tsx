import React from "react";
import Nav from "./components/Nav"
import Intro from "./components/Intro";
import GlobeSection from "./components/GlobeSection";
import Footer from "./components/Footer";
import Defense from "./components/Defense";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-black text-white antialiased">
        <Nav />
        <main>
          <Intro />

          {/* Dark Horizon Glow Background for lower sections */}
          <div
            className="relative w-full"
            style={{
              background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
            }}
          >
            <GlobeSection />
            <Defense />
            <Skills />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}