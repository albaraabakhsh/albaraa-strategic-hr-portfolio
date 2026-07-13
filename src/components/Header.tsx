import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Download, Mail, Linkedin } from "lucide-react";
import { ProfileData } from "../data/profile";

interface HeaderProps {
  data: ProfileData;
  isRtl: boolean;
  onToggleLanguage: () => void;
}

export default function Header({ data, isRtl, onToggleLanguage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ["about", "expertise", "experience", "projects", "achievements", "credentials", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: data.navigation.about },
    { id: "expertise", dataId: "expertise", label: data.navigation.expertise },
    { id: "experience", label: data.navigation.experience },
    { id: "projects", label: data.navigation.projects },
    { id: "credentials", label: data.navigation.credentials },
    { id: "contact", label: data.navigation.contact },
  ];

  return (
    <>
      <header
        id="main-nav-bar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-border-default/80 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Monogram */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center space-x-3 rtl:space-x-reverse group"
              id="header-monogram-link"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-qyem flex items-center justify-center text-white font-bold tracking-wider text-base custom-shadow-sm group-hover:scale-105 transition-transform duration-200">
                AB
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-sm tracking-tight transition-colors duration-200 ${
                  isScrolled || isMobileMenuOpen ? "text-qyem-navy" : "text-white"
                }`}>
                  {isRtl ? "البراء بخش" : "Albaraa Bakhsh"}
                </span>
                <span className={`text-[10px] leading-none transition-colors duration-200 ${
                  isScrolled || isMobileMenuOpen ? "text-secondary-text" : "text-sky-blue/80"
                }`}>
                  {isRtl ? "الموارد البشرية والاستراتيجية والتقنية" : "People • Strategy • Technology"}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 rtl:space-x-reverse" id="desktop-nav-menu">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  id={`nav-item-${item.id}`}
                  className={`px-3 py-2 rounded-md text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-brand-blue bg-soft-primary-bg"
                      : isScrolled
                      ? "text-primary-text hover:text-brand-blue hover:bg-page-bg/50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center space-x-3 rtl:space-x-reverse" id="desktop-nav-actions">
              {/* Language Switcher */}
              <button
                onClick={onToggleLanguage}
                id="desktop-lang-switcher"
                className={`flex items-center space-x-1.5 rtl:space-x-reverse px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isScrolled
                    ? "border-border-default text-primary-text hover:bg-page-bg"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
                aria-label="Toggle language / تغيير اللغة"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{isRtl ? "English" : "العربية"}</span>
              </button>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                id="desktop-header-contact-btn"
                className="px-4 py-2 bg-brand-blue text-white hover:bg-action-blue rounded-md text-xs font-bold transition-all duration-200 custom-shadow-sm flex items-center space-x-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{isRtl ? "تواصل معي" : "Contact Me"}</span>
              </a>
            </div>

            {/* Mobile Hamburger / Toggle */}
            <div className="flex lg:hidden items-center space-x-2 rtl:space-x-reverse">
              {/* Language switcher for fast mobile access */}
              <button
                onClick={onToggleLanguage}
                id="mobile-lang-switcher-fast"
                className={`p-2 rounded-md transition-colors ${
                  isScrolled ? "text-primary-text hover:bg-page-bg" : "text-white hover:bg-white/10"
                }`}
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle"
                className={`p-2 rounded-md transition-colors ${
                  isScrolled || isMobileMenuOpen ? "text-primary-text hover:bg-page-bg" : "text-white hover:bg-white/10"
                }`}
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation-drawer"
          className={`fixed inset-x-0 top-[64px] bg-white border-b border-border-default shadow-lg transition-all duration-300 lg:hidden overflow-hidden ${
            isMobileMenuOpen ? "max-h-[85vh] opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 pt-3 pb-6 space-y-3 bg-white" id="mobile-nav-items-container">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                id={`mobile-nav-item-${item.id}`}
                className={`block px-4 py-3 rounded-md text-base font-semibold text-primary-text hover:bg-page-bg transition-colors ${
                  activeSection === item.id ? "text-brand-blue bg-soft-primary-bg font-bold" : ""
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 border-t border-border-default/60 flex flex-col space-y-3 px-4">
              {/* Language toggler */}
              <button
                onClick={() => {
                  onToggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                id="mobile-drawer-lang-switcher"
                className="flex items-center justify-center space-x-2 w-full py-3 border border-border-default rounded-md text-sm font-bold text-primary-text hover:bg-page-bg cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                <span>{isRtl ? "English" : "العربية"}</span>
              </button>

              {/* Resume download & contact */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  id="mobile-drawer-contact-btn"
                  className="flex items-center justify-center space-x-2 py-3 bg-brand-blue text-white rounded-md text-sm font-bold hover:bg-action-blue custom-shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isRtl ? "تواصل" : "Contact"}</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  id="mobile-drawer-linkedin-btn"
                  className="flex items-center justify-center space-x-2 py-3 bg-alt-bg text-brand-blue border border-border-light-blue rounded-md text-sm font-bold hover:bg-soft-primary-bg"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
