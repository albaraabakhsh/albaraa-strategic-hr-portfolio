import React from "react";
import { GraduationCap, Award, ExternalLink, Calendar, HelpCircle, FileText } from "lucide-react";
import { ProfileData } from "../data/profile";

interface CredentialsProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Credentials({ data, isRtl }: CredentialsProps) {
  const isPlaceholder = (text?: string) => {
    if (!text) return false;
    return text.includes("[") || text.includes("Add");
  };

  return (
    <section id="credentials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="credentials-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "المؤهلات والاعتمادات" : "Credentials & Qualifications"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.credentials.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.credentials.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start" id="credentials-columns-grid">
          {/* Left Column: Academic Education */}
          <div className="lg:col-span-5 space-y-6" id="education-column">
            <h3 className="text-lg font-bold text-qyem-navy border-b border-border-default pb-3 flex items-center space-x-2.5 rtl:space-x-reverse">
              <GraduationCap className="w-5 h-5 text-brand-blue" />
              <span>{data.credentials.educationTitle}</span>
            </h3>

            {data.credentials.education.map((edu, idx) => {
              const placeholderUniv = isPlaceholder(edu.institution);
              const placeholderDate = isPlaceholder(edu.date);
              
              return (
                <div
                  key={idx}
                  id={`edu-card-${idx}`}
                  className="bg-alt-bg/60 border border-border-default/80 rounded-2xl p-6 space-y-4 hover:border-border-light-blue transition-colors duration-250"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-qyem-navy">
                        {edu.degree}
                      </h4>
                      <p className="text-sm font-semibold text-brand-blue">
                        {edu.field}
                      </p>
                    </div>

                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded bg-white border border-border-default text-secondary-text">
                      {placeholderDate ? (isRtl ? "[السنة]" : "[Date]") : edu.date}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-secondary-text leading-relaxed">
                    <p className="font-bold text-qyem-navy flex items-center space-x-1.5 rtl:space-x-reverse">
                      <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></span>
                      <span>
                        {placeholderUniv ? (isRtl ? "[أدخل اسم الجامعة المعتمدة]" : "[University Pending Verification]") : edu.institution}
                      </span>
                    </p>
                    {edu.details && <p className="font-medium text-secondary-text">{edu.details}</p>}
                  </div>

                  {/* High Integrity footnote */}
                  <div className="pt-2 text-[10px] text-muted-text font-bold italic border-t border-border-default/40">
                    {isRtl
                      ? "✓ خلفية تقنية برمجية ممتازة تمكنه من قيادة وبناء المنتجات الرقمية للأفراد"
                      : "✓ Computing science background enabling digital platform architecture mapping"}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Professional Certifications & Experience badges */}
          <div className="lg:col-span-7 space-y-6" id="certifications-column">
            <h3 className="text-lg font-bold text-qyem-navy border-b border-border-default pb-3 flex items-center space-x-2.5 rtl:space-x-reverse">
              <Award className="w-5 h-5 text-brand-blue" />
              <span>{data.credentials.certificationsTitle}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4" id="certifications-grid">
              {data.credentials.certifications.map((cert, idx) => {
                const placeholderId = isPlaceholder(cert.id);
                const placeholderDate = isPlaceholder(cert.date);
                const isSpecialPrac = cert.date.includes("Project") || cert.date.includes("عملية");

                return (
                  <div
                    key={idx}
                    id={`cert-card-${idx}`}
                    className="bg-white border border-border-default rounded-xl p-4 flex flex-col justify-between hover:border-border-light-blue transition-all duration-200"
                  >
                    <div className="space-y-2">
                      {/* Cert Header */}
                      <span className="text-[9px] font-black uppercase tracking-wider text-muted-text block">
                        {cert.issuer}
                      </span>
                      <h4 className="text-xs sm:text-sm font-extrabold text-qyem-navy leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border-default/40 flex items-center justify-between text-[11px] text-secondary-text font-semibold font-mono">
                      <span className="flex items-center space-x-1 rtl:space-x-reverse">
                        <Calendar className="w-3.5 h-3.5 text-muted-text shrink-0" />
                        <span>{placeholderDate ? (isRtl ? "[التاريخ]" : "[Date]") : cert.date}</span>
                      </span>

                      {/* Verification Link or Special Badge */}
                      {cert.url ? (
                        <span className="text-brand-blue hover:text-action-blue flex items-center space-x-1 rtl:space-x-reverse cursor-help text-[10px]">
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{isRtl ? "قيد التدقيق" : "Pending Verification"}</span>
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-soft-primary-bg text-brand-blue text-[9px] font-bold uppercase shrink-0 font-sans">
                          {isSpecialPrac ? (isRtl ? "ممارسة عملية" : "Practical") : "Active"}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
