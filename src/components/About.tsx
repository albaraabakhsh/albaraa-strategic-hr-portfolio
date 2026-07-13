import React from "react";
import { CheckCircle2, UserCheck, ShieldCheck, Heart } from "lucide-react";
import { ProfileData } from "../data/profile";

interface AboutProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function About({ data, isRtl }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Biography & Professional Statement */}
          <div className="lg:col-span-7 space-y-6" id="about-biography-container">
            <div className="space-y-2">
              {/* Small Category Badge */}
              <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
                {isRtl ? "الملف الشخصي" : "Executive Profile"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight" id="about-heading">
                {data.about.title}
              </h2>
            </div>

            {/* Premium visual standout callout */}
            <div className="bg-alt-bg border-l-4 border-brand-blue p-5 rounded-r-lg rtl:border-l-0 rtl:border-r-4 rtl:rounded-r-none rtl:rounded-l-lg" id="about-tagline-card">
              <p className="text-base sm:text-lg font-bold text-qyem-navy tracking-wide italic">
                “{data.about.tagline}”
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="text-secondary-text space-y-4 leading-relaxed text-sm sm:text-base" id="about-bio-text">
              <p>{data.about.description1}</p>
              <p>{data.about.description2}</p>
            </div>

            {/* Architectural Honesty statement */}
            <div className="p-4 border border-border-default rounded-lg bg-page-bg/40 flex items-start space-x-3 rtl:space-x-reverse">
              <ShieldCheck className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-xs text-secondary-text">
                <span className="font-bold text-qyem-navy block mb-0.5">
                  {isRtl ? "حوكمة وسرية البيانات" : "Governance & Confidentiality Standards"}
                </span>
                {isRtl
                  ? "جميع المشاريع والعمليات المعروضة في هذا الموقع تم تنقيحها وصياغتها بمستوى آمن للعامة، مع حماية تامة لسرية معلومات الموظفين والبيانات المالية للمنظمات."
                  : "All corporate initiatives and project data listed throughout this portfolio have been audited for public safety, protecting employee record confidentiality and organization-specific financial credentials."}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Checklist & Portfolio Portrait Placeholder */}
          <div className="lg:col-span-5 space-y-8" id="about-highlights-column">
            {/* Elegant Monogram Card acting as professional portrait area */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-qyem p-8 text-white custom-shadow-lg flex flex-col justify-between min-h-[220px]" id="about-portrait-monogram-card">
              {/* Background abstract circles */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 border border-white/10 pointer-events-none"></div>
              <div className="absolute right-12 top-6 w-20 h-20 rounded-full bg-white/5 pointer-events-none"></div>
              
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-sky-blue">{isRtl ? "البراء بخش" : "Albaraa Bakhsh"}</h3>
                  <p className="text-xs text-white/80 font-medium">
                    {isRtl ? "رئيس الموارد البشرية والتخطيط" : "Head of HR and Planning"}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center font-black tracking-wider text-white text-lg">
                  AB
                </div>
              </div>

              {/* Structured core metrics */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 mt-6">
                <div>
                  <span className="text-2xl sm:text-3xl font-black block text-sky-blue leading-none">7+</span>
                  <span className="text-[10px] sm:text-xs text-white/70 font-semibold uppercase mt-1 block">
                    {isRtl ? "سنوات الخبرة الشاملة" : "Years Total Experience"}
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black block text-sky-blue leading-none">7+</span>
                  <span className="text-[10px] sm:text-xs text-white/70 font-semibold uppercase mt-1 block">
                    {isRtl ? "سنوات خبرة في الموارد البشرية" : "Years in Human Resources"}
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist of Professional Highlights */}
            <div className="bg-alt-bg rounded-xl p-6 border border-border-default/60" id="about-highlights-checklist">
              <h3 className="text-base font-bold text-qyem-navy mb-4 border-b border-border-default pb-2">
                {data.about.highlightsTitle}
              </h3>
              <ul className="space-y-3" id="about-highlights-list">
                {data.about.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse" id={`about-highlight-${idx}`}>
                    <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-primary-text">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
