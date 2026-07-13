"use client";

import React, { useState, useEffect } from "react";
import { translationEn, translationAr } from "./data/profile";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Philosophy from "./components/Philosophy";
import Credentials from "./components/Credentials";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App({ initialLanguage = "en" }: { initialLanguage?: "en" | "ar" }) {
  const [lang] = useState<"en" | "ar">(initialLanguage);
  const isRtl = lang === "ar";
  const currentData = isRtl ? translationAr : translationEn;

  // Sync HTML element lang and dir attributes dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
    document.title = currentData.meta.title;

    // Apply font configuration
    document.documentElement.style.fontFamily = '"Cairo", "Noto Sans Arabic", Arial, sans-serif';
  }, [lang, currentData]);

  const handleToggleLanguage = () => {
    window.location.assign(lang === "en" ? "/ar/" : "/");
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white ${
      isRtl ? "text-right" : "text-left"
    }`} dir={isRtl ? "rtl" : "ltr"}>
      {/* Scroll indicator bar at top of layout */}
      <div id="scroll-tracker" className="fixed top-0 left-0 right-0 h-1 bg-sky-blue z-50 origin-left"></div>

      {/* Primary Sticky Header */}
      <Header
        data={currentData}
        isRtl={isRtl}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero data={currentData} isRtl={isRtl} />

        {/* Professional About Intro */}
        <About data={currentData} isRtl={isRtl} />

        {/* Areas of Expertise segmented matrix */}
        <Expertise data={currentData} isRtl={isRtl} />

        {/* Detailed Career Experience Timeline */}
        <Experience data={currentData} isRtl={isRtl} />

        {/* Projects / Case Studies portfolio */}
        <Projects data={currentData} isRtl={isRtl} />

        {/* Executive Philosophy quotation */}
        <Philosophy data={currentData} isRtl={isRtl} />

        {/* Education & Certified Professional Credentials */}
        <Credentials data={currentData} isRtl={isRtl} />

        {/* Tech Stack & digital capability alignment */}
        <Capabilities data={currentData} isRtl={isRtl} />

        {/* Contact coordinates & spam-safe inquiry form */}
        <Contact data={currentData} isRtl={isRtl} />
      </main>

      {/* Branded Footer */}
      <Footer
        data={currentData}
        isRtl={isRtl}
        onToggleLanguage={handleToggleLanguage}
      />
    </div>
  );
}
