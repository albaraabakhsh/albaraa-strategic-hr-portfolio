import React from "react";
import { Compass, Eye, Shield, Award } from "lucide-react";
import { ProfileData } from "../data/profile";

interface PhilosophyProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Philosophy({ data, isRtl }: PhilosophyProps) {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-sky-blue" />;
      case 1:
        return <Eye className="w-5 h-5 text-sky-blue" />;
      case 2:
        return <Shield className="w-5 h-5 text-sky-blue" />;
      case 3:
        return <Award className="w-5 h-5 text-sky-blue" />;
      default:
        return <Compass className="w-5 h-5 text-sky-blue" />;
    }
  };

  return (
    <section id="philosophy-section" className="py-24 bg-gradient-qyem text-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 border border-white/5 pointer-events-none -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky-blue/5 pointer-events-none -ml-48 -mb-48"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Quote Block */}
        <div className="text-center space-y-6 max-w-4xl mx-auto" id="philosophy-quote-container">
          <span className="text-4xl sm:text-5xl font-black text-sky-blue/30 leading-none">“</span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white leading-relaxed italic" id="philosophy-statement">
            {data.philosophy.statement}
          </h2>
          <span className="text-4xl sm:text-5xl font-black text-sky-blue/30 leading-none block">”</span>
          
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse pt-2">
            <span className="h-0.5 w-6 bg-sky-blue"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest font-mono text-sky-blue">
              {isRtl ? "الفلسفة والمنهج المهني" : "Professional Philosophy"}
            </span>
          </div>
        </div>

        {/* 4 Core Principles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6" id="philosophy-principles-grid">
          {data.philosophy.principles.map((pr, idx) => (
            <div
              key={idx}
              id={`philosophy-principle-card-${idx}`}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-200 space-y-4"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                {getIcon(idx)}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-sky-blue">
                  {pr.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-semibold">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
