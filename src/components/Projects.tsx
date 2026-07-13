import React, { useState } from "react";
import { FolderGit2, ArrowUpRight, Check, AlertTriangle, ShieldAlert, X, ChevronRight, Activity, Cpu } from "lucide-react";
import { ProfileData } from "../data/profile";

interface ProjectsProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Projects({ data, isRtl }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Map category IDs to labels dynamically
  const categories = data.projects.categories;

  // Filter projects by selected category
  const filteredProjects = selectedCategory === "all"
    ? data.projects.items
    : data.projects.items.filter((proj) => proj.category === selectedCategory);

  const getStatusBadgeStyles = (status: string) => {
    if (status.includes("Completed") || status.includes("مكتمل") || status.includes("نشط")) {
      return "bg-success-background text-success border border-success/20";
    }
    if (status.includes("Beta") || status.includes("التجريب")) {
      return "bg-warning-background text-warning border border-warning/20";
    }
    return "bg-soft-primary-bg text-brand-blue border border-border-light-blue";
  };

  const steps = [
    { en: "Discover", ar: "الاستكشاف" },
    { en: "Define", ar: "التحديد" },
    { en: "Design", ar: "التصميم" },
    { en: "Build", ar: "البناء" },
    { en: "Validate", ar: "التحقق" },
    { en: "Improve", ar: "التحسين" }
  ];

  return (
    <section id="projects" className="py-20 bg-alt-bg/60 border-y border-border-default/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3" id="projects-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "محفظة الأعمال" : "Project Portfolio"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.projects.subtitle}
          </p>
        </div>

        {/* Categories Horizontal Scrolling Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none" id="projects-category-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              id={`project-filter-${cat.id}`}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat.id
                  ? "bg-brand-blue text-white border-brand-blue custom-shadow-sm"
                  : "bg-white text-secondary-text border-border-default hover:border-border-light-blue hover:text-qyem-navy"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="bg-white rounded-2xl border border-border-default/80 overflow-hidden flex flex-col justify-between hover:border-border-light-blue custom-shadow-sm hover:custom-shadow-md transition-all duration-300"
            >
              {/* Card Header & category */}
              <div className="p-6 space-y-4 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-soft-sky-bg text-brand-blue font-mono border border-border-light-blue/20">
                    {categories.find((c) => c.id === project.category)?.label || project.category}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getStatusBadgeStyles(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-extrabold text-qyem-navy leading-snug hover:text-brand-blue transition-colors duration-200">
                  {project.name}
                </h3>

                {/* Problem Statement */}
                <p className="text-xs sm:text-sm text-secondary-text line-clamp-3 leading-relaxed font-semibold">
                  <span className="text-qyem-navy block text-xs font-bold mb-1 uppercase tracking-wider">
                    {isRtl ? "التحدي الأول:" : "The Problem:"}
                  </span>
                  {project.problem}
                </p>

                {/* Contribution bullet */}
                <div className="bg-page-bg/60 p-3 rounded-xl border border-border-default/40 space-y-1">
                  <span className="block text-[11px] font-bold text-brand-blue uppercase tracking-wider">
                    {isRtl ? "دوري ومساهمتي:" : "My Contribution:"}
                  </span>
                  <p className="text-xs text-primary-text leading-relaxed font-medium line-clamp-2">
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Card Footer actions */}
              <div className="px-6 py-4 bg-page-bg/40 border-t border-border-default/60 flex items-center justify-between gap-2">
                {/* Confidentiality banner */}
                <span className="text-[10px] text-muted-text font-bold font-mono flex items-center space-x-1 rtl:space-x-reverse shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
                  <span>{isRtl ? "معلومات عامة آمنة" : "Public Safe Data"}</span>
                </span>

                {/* Case Study button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  id={`project-details-btn-${project.id}`}
                  className="px-3.5 py-1.5 bg-brand-blue text-white rounded-lg text-xs font-bold hover:bg-action-blue custom-shadow-sm flex items-center space-x-1 rtl:space-x-reverse cursor-pointer transition-colors"
                >
                  <span>{isRtl ? "استعراض الحالة" : "Case Study"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Full Screen Modal Backdrop */}
      {selectedProject && (
        <div
          id="project-case-study-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-qyem-navy/80 backdrop-blur-sm flex justify-center items-start p-4 sm:p-6 md:p-10 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-border-default relative my-4 sm:my-8 animate-[fadeIn_0.3s_ease-out]">
            {/* Modal Header */}
            <div className="bg-gradient-qyem px-6 py-6 sm:px-8 text-white flex items-start justify-between relative">
              <div className="space-y-1 pr-8 rtl:pr-0 rtl:pl-8">
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-white/10 text-sky-blue font-mono border border-white/10">
                  {categories.find((c) => c.id === selectedProject.category)?.label || selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight pt-2">
                  {selectedProject.name}
                </h3>
                <p className="text-xs sm:text-sm text-sky-blue/95 font-semibold">
                  {isRtl ? "الدور الرئيسي:" : "My Executive Role:"} {selectedProject.myRole}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                id="modal-close-btn"
                className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content Container */}
            <div className="p-6 sm:p-8 space-y-8 overflow-y-auto max-h-[70vh]">
              {/* Executive Overview */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-brand-blue uppercase tracking-wider font-mono">
                  {isRtl ? "نظرة عامة على المشروع" : "Executive Overview"}
                </h4>
                <p className="text-sm sm:text-base text-primary-text leading-relaxed font-semibold">
                  {selectedProject.caseStudy.overview}
                </p>
              </div>

              {/* Interactive Process Diagram */}
              <div className="space-y-4 bg-page-bg rounded-xl p-5 border border-border-default/80">
                <h4 className="text-xs sm:text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono flex items-center space-x-2 rtl:space-x-reverse">
                  <Activity className="w-4 h-4 text-brand-blue shrink-0" />
                  <span>{isRtl ? "منهجية ودورة حياة المشروع" : "The Agile Delivery Cycle"}</span>
                </h4>
                
                {/* Steps Horizontal visualization */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
                  {steps.map((st, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-white p-3 rounded-lg border border-border-default/80 flex flex-col items-center justify-center text-center relative"
                    >
                      <span className="text-[10px] font-bold text-muted-text font-mono block mb-1">0{sIdx + 1}</span>
                      <span className="text-xs font-black text-brand-blue block">
                        {isRtl ? st.ar : st.en}
                      </span>
                      {sIdx < 5 && (
                        <div className="hidden md:block absolute top-1/2 right-[-10px] rtl:right-auto rtl:left-[-10px] transform -translate-y-1/2 z-10 text-sky-blue/80 font-black">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Context & Problem detail */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-2 p-5 bg-alt-bg/60 rounded-xl border border-border-default/60">
                  <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider font-mono">
                    {isRtl ? "سياق بيئة العمل" : "Organizational Context"}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-medium">
                    {selectedProject.caseStudy.context}
                  </p>
                </div>
                <div className="space-y-2 p-5 bg-warning-background/20 rounded-xl border border-warning/10">
                  <h4 className="text-xs font-bold text-amber-700 uppercase tracking-wider font-mono">
                    {isRtl ? "التحدي الأساسي" : "The Core Problem"}
                  </h4>
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-medium">
                    {selectedProject.problem}
                  </p>
                </div>
              </div>

              {/* Objectives */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono">
                  {isRtl ? "أهداف المشروع الرئيسية" : "Strategic Project Objectives"}
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedProject.caseStudy.objectives.map((obj: string, oIdx: number) => (
                    <div key={oIdx} className="flex items-start space-x-2 rtl:space-x-reverse p-3 rounded-lg bg-page-bg border border-border-default/40">
                      <Check className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-primary-text leading-relaxed">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Approach & Key Decisions */}
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono">
                    {isRtl ? "منهجية العمل المتبعة" : "Implementation Approach"}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                    {selectedProject.caseStudy.approach.map((ap: string, apIdx: number) => (
                      <li key={apIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <span className="text-brand-blue mt-0.5">•</span>
                        <span className="font-semibold leading-relaxed">{ap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono">
                    {isRtl ? "القرارات المفصلية المتخذة" : "Key Architectural Decisions"}
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                    {selectedProject.caseStudy.keyDecisions.map((kd: string, kdIdx: number) => (
                      <li key={kdIdx} className="flex items-start space-x-2 rtl:space-x-reverse bg-soft-primary-bg/30 p-2.5 rounded-lg border border-border-light-blue/20">
                        <span className="text-brand-blue mt-0.5 font-bold">»</span>
                        <span className="font-bold text-qyem-navy leading-relaxed">{kd}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Governance & Privacy considerations */}
              <div className="p-5 bg-soft-sky-bg/40 border border-border-light-blue rounded-xl space-y-3">
                <h4 className="text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono flex items-center space-x-2 rtl:space-x-reverse">
                  <Cpu className="w-4 h-4 text-brand-blue" />
                  <span>{isRtl ? "حوكمة العمليات والسرية والتحكم" : "Governance, Compliance & Auditing"}</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm text-secondary-text">
                  {selectedProject.caseStudy.governance.map((gov: string, gIdx: number) => (
                    <li key={gIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-success mt-0.5 font-bold">✓</span>
                      <span className="font-semibold leading-relaxed">{gov}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methods & Tools Used */}
              <div className="space-y-2">
                <span className="block text-xs font-bold text-muted-text uppercase tracking-wider font-mono">
                  {isRtl ? "المنهجيات والأدوات المستخدمة" : "Methods, Workflows & Tools"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.methods.map((method: string, mIdx: number) => (
                    <span key={mIdx} className="px-3 py-1 bg-alt-bg text-secondary-text border border-border-default rounded-md text-xs font-semibold">
                      {method}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lessons Learned */}
              <div className="space-y-3 border-t border-border-default/40 pt-6">
                <h4 className="text-sm font-bold text-qyem-navy uppercase tracking-wider font-mono">
                  {isRtl ? "الدروس المستفادة" : "Lessons Learned & Experience Gained"}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-secondary-text">
                  {selectedProject.caseStudy.lessonsLearned.map((ls: string, lsIdx: number) => (
                    <li key={lsIdx} className="flex items-start space-x-2 rtl:space-x-reverse">
                      <span className="text-amber-600 mt-0.5 font-bold">!</span>
                      <span className="font-semibold leading-relaxed">{ls}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-alt-bg px-6 py-4 sm:px-8 border-t border-border-default/60 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-muted-text font-mono font-bold">
                {isRtl ? "حالة المشروع الحالية:" : "Project Status:"} <strong className="text-brand-blue">{selectedProject.status}</strong>
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                id="modal-close-footer-btn"
                className="px-5 py-2 border border-border-default hover:bg-page-bg text-primary-text rounded-md text-xs font-bold transition-colors cursor-pointer"
              >
                {isRtl ? "إغلاق النافذة" : "Close Case Study"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
