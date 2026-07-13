import React, { useState } from "react";
import { ArrowRight, Download, Linkedin, Github, MessageSquare, Terminal } from "lucide-react";
import { ProfileData } from "../data/profile";

interface HeroProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Hero({ data, isRtl }: HeroProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Connection node configuration for the visual component
  const nodes = [
    {
      id: "people",
      label: data.hero.nodes.people,
      x: 15,
      y: 20,
      color: "bg-emerald-500",
      textColor: "text-emerald-500",
      desc: isRtl
        ? "قيادة الأفراد وتطوير الكوادر الإدارية"
        : "People Operations, Leadership & Culture"
    },
    {
      id: "strategy",
      label: data.hero.nodes.strategy,
      x: 80,
      y: 15,
      color: "bg-blue-500",
      textColor: "text-blue-500",
      desc: isRtl
        ? "مواءمة التنظيم مع ميزانيات العمل المعتمدة"
        : "Strategic Headcount Alignment & Budget Mapping"
    },
    {
      id: "development",
      label: data.hero.nodes.development,
      x: 10,
      y: 75,
      color: "bg-indigo-500",
      textColor: "text-indigo-500",
      desc: isRtl
        ? "التطوير التنظيمي وتصميم بطاقات الوصف الوظيفي"
        : "Organizational Design & Competency Modeling"
    },
    {
      id: "technology",
      label: data.hero.nodes.technology,
      x: 85,
      y: 70,
      color: "bg-cyan-500",
      textColor: "text-cyan-500",
      desc: isRtl
        ? "تطوير أنظمة الاستقطاب (ATS) ورقمنة الإجراءات"
        : "Custom ATS Architectures & Systems Transformation"
    },
    {
      id: "impact",
      label: data.hero.nodes.impact,
      x: 50,
      y: 90,
      color: "bg-amber-500",
      textColor: "text-amber-500",
      desc: isRtl
        ? "قياس دقيق لنبض المنظمة وتحسين استجابة القيادة"
        : "Auditable Diagnostics & High-Performance Workforce"
    }
  ];

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-qyem min-h-[95vh] pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden"
    >
      {/* Background visual depth details */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Subtle radial glow representing people, strategy, and tech connection */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-blue/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-blue/25 blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Positioning Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-white text-left rtl:text-right" id="hero-text-container">
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse" id="hero-eyebrow-container">
              <span className="h-px w-8 bg-sky-blue"></span>
              <span className="text-sky-blue font-bold tracking-wider text-xs sm:text-sm uppercase font-mono">
                {data.hero.eyebrow}
              </span>
            </div>

            {/* Title / Headline */}
            <h1
              id="hero-main-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight text-white"
            >
              {data.hero.title}
            </h1>

            {/* Profile Info Card */}
            <div className="border-l-4 border-sky-blue pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4 py-1" id="hero-profile-summary">
              <h2 className="text-xl sm:text-2xl font-bold text-sky-blue">
                {data.hero.name} <span className="text-sm font-semibold opacity-85">({data.hero.nameAr})</span>
              </h2>
              <p className="text-sm sm:text-base font-semibold text-white/90 mt-1">
                {data.hero.subtitle}
              </p>
            </div>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl" id="hero-supporting-text">
              {data.hero.description}
            </p>

            {/* Interactive node hover feedback block */}
            <div className="min-h-[50px] transition-all duration-300 bg-white/5 border border-white/10 rounded-lg p-3 max-w-xl flex items-center space-x-2 rtl:space-x-reverse">
              <Terminal className="w-4 h-4 text-sky-blue shrink-0 animate-pulse" />
              <p className="text-xs text-white/90 font-mono">
                {hoveredNode ? (
                  <>
                    <strong className="text-sky-blue capitalize">
                      {hoveredNode}:{" "}
                    </strong>
                    <span>{nodes.find((n) => n.id === hoveredNode)?.desc}</span>
                  </>
                ) : (
                  <span>
                    {isRtl
                      ? "تفاعل مع النقاط في الرسم التوضيحي المرفق لاستعراض ترابط المنهجية..."
                      : "Interact with the nodes in the diagram to explore structural integration..."}
                  </span>
                )}
              </p>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap gap-4 pt-3" id="hero-actions">
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-brand-blue font-bold rounded-md hover:bg-sky-blue hover:text-qyem-navy transition-all duration-200 custom-shadow-md text-sm flex items-center space-x-2"
                id="hero-explore-work-btn"
              >
                <span>{data.hero.ctaExplore}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-brand-blue border border-white/20 text-white font-bold rounded-md hover:bg-white/10 transition-all duration-200 text-sm flex items-center space-x-2"
                id="hero-contact-btn"
              >
                <span>{data.hero.ctaContact}</span>
              </a>
            </div>

            {/* Social quick links */}
            <div className="flex items-center space-x-4 rtl:space-x-reverse pt-2 text-white/70" id="hero-social-quick-links">
              <span className="text-xs font-semibold">{isRtl ? "مواقع مهنية:" : "Professional Channels:"}</span>
              <a
                href="#contact"
                className="hover:text-white transition-colors"
                title="LinkedIn"
                id="hero-social-linkedin"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors"
                title="GitHub"
                id="hero-social-github"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Connected Node Strategy Visualization */}
          <div className="lg:col-span-5 flex justify-center items-center" id="hero-visual-column">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center custom-shadow-lg">
              {/* Outer decorative ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-white/10 animate-[spin_120s_linear_infinite]"></div>
              
              {/* Central AB Monogram Node */}
              <div
                id="central-monogram-node"
                className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white text-brand-blue flex flex-col items-center justify-center custom-shadow-lg border-4 border-sky-blue/30 cursor-default group"
              >
                <span className="font-extrabold text-2xl sm:text-3xl tracking-wider leading-none">AB</span>
                <span className="text-[9px] font-bold text-qyem-navy/60 mt-1 uppercase font-mono tracking-widest">
                  {isRtl ? "البراء" : "Leader"}
                </span>
                
                {/* Central pulse wave */}
                <span className="absolute -inset-1 rounded-full bg-white/20 animate-ping z-[-1] opacity-75"></span>
              </div>

              {/* Connecting Web SVG lines */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="#85BDE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="80%" y2="15%" stroke="#85BDE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="10%" y2="75%" stroke="#85BDE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#85BDE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="#85BDE5" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              </svg>

              {/* Floating Node Items */}
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  id={`visual-node-${node.id}`}
                  style={{
                    position: "absolute",
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)"
                  }}
                  className={`z-10 group flex flex-col items-center justify-center transition-all duration-300 cursor-pointer ${
                    hoveredNode === node.id ? "scale-110" : "scale-100"
                  }`}
                  aria-label={`Highlight ${node.label}`}
                >
                  {/* Outer circle floating bubble */}
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-qyem-navy border-2 ${
                    hoveredNode === node.id ? "border-white" : "border-sky-blue/40"
                  } flex items-center justify-center custom-shadow-md text-white transition-colors duration-200`}>
                    {/* Tiny blinking connection indicator */}
                    <span className={`absolute top-0 right-0 w-3 h-3 rounded-full ${node.color} border-2 border-qyem-navy animate-pulse`}></span>
                    
                    {/* Abbreviated letter or icon indicator */}
                    <span className="font-bold text-xs tracking-wider uppercase font-mono">
                      {node.label.substring(0, 3)}
                    </span>
                  </div>

                  {/* Node Label Card beneath it */}
                  <div className={`mt-1.5 px-2 py-0.5 rounded bg-white text-qyem-navy text-[10px] font-bold tracking-tight custom-shadow-sm transition-all duration-200 ${
                    hoveredNode === node.id ? "bg-sky-blue text-qyem-navy" : ""
                  }`}>
                    {node.label}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
