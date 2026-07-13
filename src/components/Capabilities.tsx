import React from "react";
import { Laptop, Database, HardDrive, Cpu, Terminal } from "lucide-react";
import { ProfileData } from "../data/profile";

interface CapabilitiesProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Capabilities({ data, isRtl }: CapabilitiesProps) {
  const getCategoryIcon = (category: string) => {
    if (category.includes("Product") || category.includes("تصميم")) {
      return <Laptop className="w-5 h-5 text-brand-blue" />;
    }
    if (category.includes("Platform") || category.includes("الموظفين")) {
      return <Cpu className="w-5 h-5 text-brand-blue" />;
    }
    if (category.includes("Data") || category.includes("البيانات")) {
      return <Database className="w-5 h-5 text-brand-blue" />;
    }
    return <Terminal className="w-5 h-5 text-brand-blue" />;
  };

  return (
    <section id="capabilities" className="py-20 bg-alt-bg/60 border-y border-border-default/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3" id="capabilities-header-container">
          <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
            {isRtl ? "التمكين التقني" : "Digital & Technical Alignment"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight">
            {data.technical.title}
          </h2>
          <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
            {data.technical.subtitle}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="capabilities-grid">
          {data.technical.items.map((item, idx) => (
            <div
              key={idx}
              id={`capability-block-${idx}`}
              className="bg-white rounded-2xl border border-border-default p-6 hover:border-border-light-blue hover:custom-shadow-md transition-all duration-250 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Icon & Title */}
                <div className="flex items-center space-x-3 rtl:space-x-reverse pb-3 border-b border-border-default/60">
                  <div className="w-9 h-9 rounded-lg bg-soft-primary-bg flex items-center justify-center shrink-0">
                    {getCategoryIcon(item.category)}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-qyem-navy leading-tight">
                    {item.category}
                  </h3>
                </div>

                {/* Skills Bullet lists */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-secondary-text">
                  {item.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start space-x-2 rtl:space-x-reverse" id={`capability-skill-${idx}-${sIdx}`}>
                      <span className="text-brand-blue font-bold shrink-0 mt-0.5">•</span>
                      <span className="font-semibold leading-relaxed text-primary-text">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dynamic bottom subtitle establishing Albaraa's exact technical persona */}
              <div className="mt-6 pt-4 border-t border-border-default/40 text-[10px] text-muted-text font-bold font-mono">
                {idx === 0 && (isRtl ? "مواءمة الاحتياجات والخرائط" : "Requirements mapping & UX audits")}
                {idx === 1 && (isRtl ? "تنصيب ومهاجرة البيانات للحلول" : "Configuring & syncing HR assets")}
                {idx === 2 && (isRtl ? "هيكلة النماذج والمؤشرات بدقة" : "Clean database modeling & KPIs")}
                {idx === 3 && (isRtl ? "مفاهيم معمارية وبناء تفاعلي" : "Modern full stack context & deployment")}
              </div>
            </div>
          ))}
        </div>

        {/* Alignment summary (Architectural Honesty / anti-tech-larp) */}
        <div className="mt-12 max-w-3xl mx-auto bg-white border border-border-default p-5 rounded-2xl custom-shadow-sm flex items-start space-x-4 rtl:space-x-reverse">
          <div className="text-2xl mt-1 leading-none shrink-0">🤝</div>
          <p className="text-xs sm:text-sm text-secondary-text leading-relaxed font-semibold">
            {isRtl ? (
              <>
                <strong className="text-qyem-navy block mb-1">دور المترجم والمنسق الرقمي الماهر:</strong>
                أنا لا أعمل كمهندس برمجيات متفرغ، بل أوظف خلفيتي الأكاديمية العميقة في علوم الحاسب لخدمة الأعمال والموارد البشرية. يتيح لي ذلك العمل كمترجم تقني ماهر يستطيع فهم متطلبات الإدارة التنفيذية وصياغتها بدقة للمطورين، ومراجعة تصاميم الواجهات وسرية البيانات، والإشراف على إطلاق المنتجات بنجاح.
              </>
            ) : (
              <>
                <strong className="text-qyem-navy block mb-1">Bridging Corporate Strategic Design with Software Engineering:</strong>
                I do not operate as a full-time system developer. Instead, I leverage my academic background in Computer Science to act as a highly proficient product designer and technical coordinator. This allows me to bridge the translation gap, ensuring business requirements are accurately turned into structured algorithms, private databases, and beautiful RTL responsive products.
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
