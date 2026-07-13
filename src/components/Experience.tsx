import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Cpu, FileSpreadsheet, Layers } from "lucide-react";
import { ProfileData } from "../data/profile";

interface ExperienceProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Experience({ data, isRtl }: ExperienceProps) {
  // Store expanded state for positions by index
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({
    0: true // Default expand the latest senior role
  });

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="experience-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "المسيرة المهنية" : "Professional Experience"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.experience.subtitle}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-border-default/80 ml-4 rtl:ml-0 rtl:mr-4 rtl:border-r-2 rtl:border-l-0 space-y-12 max-w-4xl mx-auto" id="experience-timeline">
          {data.experience.items.map((item, idx) => {
            const isExpanded = !!expandedItems[idx];
            return (
              <div key={idx} className="relative pl-8 rtl:pl-0 rtl:pr-8" id={`timeline-card-${idx}`}>
                {/* Bullet Node Icon on the line */}
                <div className={`absolute top-0 left-[-11px] rtl:left-auto rtl:right-[-11px] w-5 h-5 rounded-full border-4 border-white ${
                  idx === 0 ? "bg-brand-blue ring-4 ring-soft-primary-bg" : "bg-border-default"
                }`} />

                {/* Main position card */}
                <div className={`bg-white rounded-2xl border transition-all duration-300 p-6 sm:p-8 ${
                  isExpanded ? "border-border-light-blue shadow-sm" : "border-border-default hover:border-border-light-blue"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-default/60 pb-4 mb-4">
                    <div className="space-y-1">
                      {/* Job Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-qyem-navy">
                        {item.role}
                      </h3>
                      {/* Company name / Org */}
                      <p className="text-sm font-semibold text-brand-blue flex items-center space-x-1.5 rtl:space-x-reverse">
                        <Briefcase className="w-4 h-4 text-brand-blue" />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    {/* Metadata: Location & Duration */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-secondary-text font-semibold font-mono">
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <MapPin className="w-3.5 h-3.5 text-muted-text" />
                        <span>{item.location}</span>
                      </span>
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Calendar className="w-3.5 h-3.5 text-muted-text" />
                        <span>{item.period}</span>
                      </span>
                    </div>
                  </div>

                  {/* Short Overview Description */}
                  <p className="text-sm sm:text-base text-secondary-text leading-relaxed font-semibold">
                    {item.overview}
                  </p>

                  {/* Expandable Section Panel */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-border-default/60 space-y-6" id={`timeline-expanded-details-${idx}`}>
                      {/* Core Tasks & Responsibilities */}
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-bold text-qyem-navy uppercase tracking-wider flex items-center space-x-2 rtl:space-x-reverse">
                          <Layers className="w-4 h-4 text-brand-blue" />
                          <span>{isRtl ? "المسؤوليات والمهام القيادية" : "Core Responsibilities"}</span>
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                              <span className="text-brand-blue mt-1 shrink-0 font-bold">•</span>
                              <span className="font-medium leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Verified Impact Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-xs sm:text-sm font-bold text-qyem-navy uppercase tracking-wider flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-success font-black">★</span>
                          <span>{isRtl ? "الأثر والإنجازات المعتمدة" : "Verified Achievements & Impact"}</span>
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                          {item.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start space-x-2 rtl:space-x-reverse bg-success-background/20 p-2.5 rounded-lg border border-success/10">
                              <span className="text-success mt-0.5 shrink-0 font-bold">✓</span>
                              <span className="font-semibold text-qyem-navy leading-relaxed">{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Systems & Technologies Led */}
                      <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        {/* Systems */}
                        <div className="space-y-2">
                          <span className="block text-xs font-bold text-muted-text uppercase tracking-wider font-mono">
                            {isRtl ? "المنصات والأنظمة المفعلة" : "Systems & Platforms Led"}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.systems.map((sys, sIdx) => (
                              <span key={sIdx} className="px-2 py-1 bg-soft-primary-bg text-brand-blue border border-border-light-blue rounded text-[11px] font-bold font-mono">
                                {sys}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Demonstrated Competencies */}
                        <div className="space-y-2">
                          <span className="block text-xs font-bold text-muted-text uppercase tracking-wider font-mono">
                            {isRtl ? "الكفاءات والمهارات المطبقة" : "Demonstrated Skills"}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.skills.map((sk, skIdx) => (
                              <span key={skIdx} className="px-2 py-1 bg-alt-bg text-secondary-text border border-border-default rounded text-[11px] font-bold">
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Toggle Expansion Button */}
                  <div className="flex justify-end mt-4 pt-4 border-t border-border-default/40">
                    <button
                      onClick={() => toggleExpand(idx)}
                      id={`experience-toggle-btn-${idx}`}
                      className="px-4 py-1.5 text-xs font-bold text-brand-blue hover:text-action-blue hover:bg-soft-primary-bg rounded-lg transition-all flex items-center space-x-1.5 rtl:space-x-reverse cursor-pointer"
                    >
                      <span>{isExpanded ? data.experience.hideDetails : data.experience.viewDetails}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
