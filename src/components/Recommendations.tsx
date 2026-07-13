import React, { useState } from "react";
import { MessageSquare, ShieldCheck, Linkedin, EyeOff } from "lucide-react";
import { ProfileData } from "../data/profile";

interface RecommendationsProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Recommendations({ data, isRtl }: RecommendationsProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <section id="recommendations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="recommendations-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "التوصيات المهنية" : "Endorsements"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.recommendations.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.recommendations.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8" id="recommendations-container">
          {/* Main Verification Placeholder Info Card */}
          <div className="bg-alt-bg border border-border-default rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start space-x-4 rtl:space-x-reverse">
              <div className="w-12 h-12 rounded-xl bg-soft-primary-bg flex items-center justify-center text-brand-blue shrink-0 mt-1">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-extrabold text-qyem-navy">
                  {data.recommendations.placeholderLabel}
                </h3>
                <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-semibold">
                  {data.recommendations.placeholderText}
                </p>
              </div>
            </div>

            {/* Admin control panel to easily hide / show */}
            <button
              onClick={() => setIsVisible(false)}
              id="hide-recommendations-section-btn"
              className="px-4 py-2 border border-border-default hover:bg-white text-muted-text hover:text-red-600 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 rtl:space-x-reverse shrink-0 cursor-pointer"
              title="Hide this section from public viewport"
            >
              <EyeOff className="w-4 h-4" />
              <span>{isRtl ? "إخفاء القسم مؤقتاً" : "Hide Section"}</span>
            </button>
          </div>

          {/* Testimonial Placeholder Cards styled cleanly */}
          <div className="grid md:grid-cols-1 gap-6">
            {data.recommendations.items.map((rec, idx) => (
              <div
                key={idx}
                id={`recommendation-item-card-${idx}`}
                className="bg-white rounded-2xl border border-dashed border-border-default p-6 sm:p-8 space-y-6 relative"
              >
                {/* Decorative Quote Mark */}
                <span className="absolute top-4 right-6 text-5xl font-black text-soft-sky-bg cursor-default">“</span>

                {/* The Quote */}
                <p className="text-sm sm:text-base text-secondary-text italic leading-relaxed font-semibold pr-8 rtl:pr-0 rtl:pl-8">
                  {rec.quote}
                </p>

                {/* Author profile */}
                <div className="flex items-center justify-between border-t border-border-default/40 pt-4 flex-wrap gap-4">
                  <div className="flex items-center space-x-3.5 rtl:space-x-reverse">
                    {/* Placeholder Avatar */}
                    <div className="w-10 h-10 rounded-full bg-soft-primary-bg flex items-center justify-center text-brand-blue font-black tracking-wider text-xs border border-border-light-blue">
                      {rec.author.substring(0, 2).replace("[", "")}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-extrabold text-qyem-navy">
                        {rec.author}
                      </h4>
                      <p className="text-[11px] font-semibold text-secondary-text mt-0.5">
                        {rec.position} • <strong className="text-brand-blue">{rec.company}</strong>
                      </p>
                      <span className="text-[10px] text-muted-text font-medium block">
                        {rec.relation}
                      </span>
                    </div>
                  </div>

                  {/* Verified LinkedIn channel placeholder */}
                  {rec.linkedin && (
                    <span className="px-3 py-1.5 rounded bg-page-bg/60 border border-border-default text-muted-text text-[11px] font-bold flex items-center space-x-1.5 rtl:space-x-reverse cursor-help">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>{isRtl ? "موثق لاحقاً" : "LinkedIn Verified"}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
