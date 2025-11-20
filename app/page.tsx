import React from "react";
import Nav from "./components/Nav"
import Intro from "./components/Intro";
import GlobeSection from "./components/GlobeSection";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Defense from "./components/Defense";
import Info from "./components/Info";
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
          <GlobeSection />
          <Defense />
          <Skills />
        <Hero />
        <Features />
        <Info />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}