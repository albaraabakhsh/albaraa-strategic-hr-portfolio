import React, { useState } from "react";
import { Users, GitPullRequest, Cpu, ShieldCheck, CheckSquare } from "lucide-react";
import { ProfileData } from "../data/profile";

interface ExpertiseProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Expertise({ data, isRtl }: ExpertiseProps) {
  const [activeCategory, setActiveCategory] = useState(data.expertise.categories[0].id);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "leadership":
        return <Users className="w-5 h-5" />;
      case "planning":
        return <GitPullRequest className="w-5 h-5" />;
      case "technology":
        return <Cpu className="w-5 h-5" />;
      case "governance":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <CheckSquare className="w-5 h-5" />;
    }
  };

  const getCategoryThemeColor = (id: string) => {
    switch (id) {
      case "leadership":
        return "border-emerald-500 text-emerald-600 bg-emerald-50";
      case "planning":
        return "border-blue-500 text-blue-600 bg-blue-50";
      case "technology":
        return "border-indigo-500 text-indigo-600 bg-indigo-50";
      case "governance":
        return "border-amber-500 text-amber-600 bg-amber-50";
      default:
        return "border-brand-blue text-brand-blue bg-soft-primary-bg";
    }
  };

  return (
    <section id="expertise" className="py-20 bg-alt-bg/60 border-y border-border-default/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3" id="expertise-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "المجالات المهنية" : "Expertise Matrix"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.expertise.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.expertise.subtitle}
          </p>
        </div>

        {/* Tab/Segmented Controls */}
        <div className="flex flex-col lg:flex-row gap-8 items-start" id="expertise-interactive-grid">
          {/* Left/Top Navigation Sidebar of Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-2" id="expertise-tab-selectors">
            {data.expertise.categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`expertise-tab-btn-${cat.id}`}
                  className={`w-full text-left rtl:text-right px-5 py-4 rounded-xl border-2 transition-all duration-200 flex items-center space-x-4 rtl:space-x-reverse cursor-pointer ${
                    isActive
                      ? "border-brand-blue bg-white text-brand-blue custom-shadow-md font-bold"
                      : "border-transparent bg-transparent hover:bg-white/50 text-secondary-text hover:text-qyem-navy"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                    isActive ? "bg-soft-primary-bg text-brand-blue" : "bg-white text-secondary-text border border-border-default"
                  }`}>
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div className="flex-1">
                    <span className="block text-sm font-bold">{cat.title}</span>
                    <span className="block text-[11px] text-muted-text mt-0.5 line-clamp-1 font-normal">
                      {cat.description}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right/Bottom Content Panel showing skills */}
          <div className="w-full lg:w-2/3 bg-white rounded-2xl border border-border-default/80 p-6 sm:p-8 custom-shadow-md min-h-[380px] flex flex-col justify-between" id="expertise-tab-content-panel">
            {data.expertise.categories.map((cat) => {
              if (cat.id !== activeCategory) return null;
              return (
                <div key={cat.id} className="space-y-6" id={`expertise-panel-details-${cat.id}`}>
                  {/* Category Header */}
                  <div className="border-b border-border-default pb-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                      <div className="text-brand-blue">{getCategoryIcon(cat.id)}</div>
                      <h3 className="text-lg font-bold text-qyem-navy">{cat.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary-text font-medium leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cat.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 rtl:space-x-reverse p-3 rounded-lg bg-page-bg/50 border border-border-default/40 hover:bg-white hover:border-border-light-blue transition-all duration-200"
                        id={`expertise-skill-item-${cat.id}-${index}`}
                      >
                        <div className="w-5 h-5 rounded-full bg-soft-primary-bg flex items-center justify-center text-brand-blue shrink-0 mt-0.5 text-[10px] font-bold">
                          ✓
                        </div>
                        <span className="text-xs sm:text-sm text-primary-text font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Educational / Applicability footnote (Architectural Honesty) */}
                  <div className="mt-4 p-3 bg-soft-sky-bg/40 border border-border-light-blue/50 rounded-lg text-xs text-secondary-text">
                    <span className="font-bold text-qyem-navy block mb-0.5">
                      {isRtl ? "منهجية التطبيق العملي" : "Applied Professional Method"}
                    </span>
                    {isRtl
                      ? "هذه المؤهلات والخبرات ليست مجرد مسميات؛ بل تم تفعيلها وممارستها لتصميم حلول، وسياسات، وتحسينات تنظيمية مستدامة وقابلة للقياس داخل المنظمات."
                      : "These competencies represent real operational practices deployed to model processes, design platforms, configure systems, and guide major corporate transformation programs."}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
