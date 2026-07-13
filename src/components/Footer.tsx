import React from "react";
import { Linkedin, Github, Mail, Globe, MapPin, ExternalLink } from "lucide-react";
import { ProfileData } from "../data/profile";

interface FooterProps {
  data: ProfileData;
  isRtl: boolean;
  onToggleLanguage: () => void;
}

export default function Footer({ data, isRtl, onToggleLanguage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Create Person structured data Schema.org for maximum SEO discoverability
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Albaraa Bakhsh",
    "alternateName": "البراء بخش",
    "jobTitle": "Head of HR and Planning & Development",
    "worksFor": {
      "@type": "Organization",
      "name": "Qyem Educational Company"
    },
    "knowsAbout": [
      "Human Resources Leadership",
      "Organizational Development",
      "Strategic Planning",
      "Workforce Planning",
      "People Analytics",
      "HR Digital Transformation",
      "Product Design & Product Management",
      "Computer Science"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Riyadh",
      "addressCountry": "Saudi Arabia"
    },
    "email": "ALBaraBakhsh@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/[LinkedIn_Username_Placeholder]",
      "https://github.com/[GitHub_Username_Placeholder]"
    ]
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="main-footer" className="bg-qyem-navy text-white pt-16 pb-12 relative overflow-hidden">
      {/* JSON-LD Schema.org Person Microformat */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/10" id="footer-main-grid">
          
          {/* Logo & Statement Column */}
          <div className="md:col-span-5 space-y-4" id="footer-branding-column">
            <div className="flex items-center space-x-3 rtl:space-x-reverse" id="footer-logo-box">
              <div className="w-10 h-10 rounded-lg bg-white text-brand-blue flex items-center justify-center font-bold tracking-wider text-base custom-shadow-sm">
                AB
              </div>
              <div>
                <span className="block font-black text-sm tracking-tight text-white">
                  {isRtl ? "البراء بخش" : "Albaraa Bakhsh"}
                </span>
                <span className="block text-[10px] text-sky-blue uppercase font-bold font-mono tracking-widest mt-0.5">
                  {isRtl ? "الموارد البشرية والاستراتيجية والتقنية" : "People • Strategy • Technology"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              {isRtl
                ? "قائد متعدد التخصصات يعمل في نقطة تلاقي الموارد البشرية والسياسات، والتطوير التنظيمي، والتخطيط الاستراتيجي، وتمكين الأنظمة والمنتجات الرقمية."
                : "A multidisciplinary professional working at the intersection of strategic HR leadership, organizational design, data-backed workforce planning, and digital business applications."}
            </p>

            <div className="text-xs text-sky-blue/80 font-semibold font-mono">
              📍 {data.contact.coordinates.location}
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-4 space-y-4" id="footer-navigation-column">
            <h4 className="text-xs font-black uppercase tracking-widest text-sky-blue font-mono">
              {isRtl ? "خريطة الموقع السريعة" : "Sitemap Directory"}
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              <a href="#about" onClick={(e) => handleNavClick(e, "about")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.about}
              </a>
              <a href="#expertise" onClick={(e) => handleNavClick(e, "expertise")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.expertise}
              </a>
              <a href="#experience" onClick={(e) => handleNavClick(e, "experience")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.experience}
              </a>
              <a href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.projects}
              </a>
              <a href="#achievements" onClick={(e) => handleNavClick(e, "achievements")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.achievements}
              </a>
              <a href="#credentials" onClick={(e) => handleNavClick(e, "credentials")} className="text-xs sm:text-sm text-white/80 hover:text-sky-blue font-semibold transition-colors">
                {data.navigation.credentials}
              </a>
            </div>
          </div>

          {/* Verification & Social Handles */}
          <div className="md:col-span-3 space-y-4" id="footer-social-column">
            <h4 className="text-xs font-black uppercase tracking-widest text-sky-blue font-mono">
              {isRtl ? "التواصل والتوثيق" : "Connect & Verify"}
            </h4>
            <div className="flex space-x-3 rtl:space-x-reverse" id="footer-social-handles">
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="LinkedIn Profile"
                id="footer-linkedin-btn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="GitHub Repositories"
                id="footer-github-btn"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${data.contact.coordinates.email}`}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                title="Direct Email"
                id="footer-mail-btn"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Language switch footer toggler */}
            <button
              onClick={onToggleLanguage}
              id="footer-lang-btn"
              className="flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-semibold cursor-pointer border border-white/5"
            >
              <Globe className="w-3.5 h-3.5 text-sky-blue" />
              <span>{isRtl ? "English Version" : "نسخة اللغة العربية"}</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-white/60 font-semibold" id="footer-bottom-bar">
          <div className="space-y-1">
            <p>© {currentYear} Albaraa Bakhsh. {isRtl ? "جميع الحقوق محفوظة." : "All rights reserved."}</p>
            <p className="text-[11px] text-white/40 font-normal">
              {isRtl
                ? "موقع مهني مستقل. تم تصميمه بمبادئ التمركز حول الإنسان والحوكمة والتمكين التقني."
                : "Personal online portfolio. Engineered around people operations, compliance governance, and tech empowerment."}
            </p>
          </div>

          <div className="inline-flex items-center space-x-1.5 rtl:space-x-reverse text-sky-blue font-bold font-mono text-[11px]" id="footer-closing-tag">
            <span>◆</span>
            <span>{isRtl ? "صُمم حول الإنسان، الاستراتيجية، والتقنية." : "Designed around people, strategy, and technology."}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
