import React from "react";
import { Award, AlertCircle, Sparkles, TrendingUp } from "lucide-react";
import { ProfileData } from "../data/profile";

interface AchievementsProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Achievements({ data, isRtl }: AchievementsProps) {
  // Checks if a metric contains a bracket indicating it's a placeholder
  const isPlaceholder = (metric: string) => {
    return metric.includes("[") || metric.includes("Add");
  };

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="achievements-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "الأثر والأرقام" : "Core Metrics & Impact"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.achievements.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.achievements.subtitle}
          </p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="achievements-grid">
          {data.achievements.items.map((item, idx) => {
            const needsVerification = isPlaceholder(item.metric);
            return (
              <div
                key={idx}
                id={`achievement-card-${idx}`}
                className={`bg-white rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 custom-shadow-sm ${
                  needsVerification
                    ? "border-border-default hover:border-amber-200"
                    : "border-border-default hover:border-border-light-blue hover:custom-shadow-md"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    {/* Visual Metric display */}
                    <div className="space-y-1">
                      <span className={`text-3xl sm:text-4xl font-black block leading-none font-mono ${
                        needsVerification ? "text-amber-600" : "text-brand-blue"
                      }`}>
                        {item.metric}
                      </span>
                      <span className="text-xs font-bold text-qyem-navy uppercase tracking-wider">
                        {item.metricLabel}
                      </span>
                    </div>

                    {/* Small tag indicating validation state */}
                    {needsVerification ? (
                      <span className="inline-flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 rounded-full bg-warning-background text-amber-800 text-[9px] font-bold border border-warning/30 shrink-0">
                        <AlertCircle className="w-2.5 h-2.5" />
                        <span>{isRtl ? "بانتظار التحقق" : "Pending Verification"}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center space-x-1 rtl:space-x-reverse px-2 py-0.5 rounded-full bg-success-background text-success text-[9px] font-bold border border-success/30 shrink-0">
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>{isRtl ? "مؤشر موثق" : "Verified Metric"}</span>
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-qyem-navy">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                {/* Card footer: integrity message for placeholder */}
                {needsVerification && (
                  <div className="mt-4 pt-3 border-t border-border-default/60 text-[10px] text-amber-700/80 font-semibold italic flex items-center space-x-1 rtl:space-x-reverse">
                    <span>⚠️</span>
                    <span>
                      {isRtl
                        ? "سيتم إدخال الرقم الفعلي فور اعتماده رسمياً"
                        : "Actual metric to be entered post public clearance"}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
