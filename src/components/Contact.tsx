import React, { useState } from "react";
import { Mail, Linkedin, Github, MessageSquare, Phone, MapPin, Calendar, CheckSquare, ShieldCheck, Send } from "lucide-react";
import { ProfileData } from "../data/profile";

interface ContactProps {
  data: ProfileData;
  isRtl: boolean;
}

export default function Contact({ data, isRtl }: ContactProps) {
  // Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    consent: false,
    securityAnswer: ""
  });

  // Form handling state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Security math challenge
  const [num1] = useState(5);
  const [num2] = useState(3);
  const correctAnswer = num1 + num2;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: val
    }));

    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const nextErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      nextErrors.name = data.contact.validationRequired;
    }
    
    if (!formData.email.trim()) {
      nextErrors.email = data.contact.validationRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = data.contact.validationEmail;
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = data.contact.validationRequired;
    }

    if (!formData.message.trim()) {
      nextErrors.message = data.contact.validationRequired;
    }

    if (!formData.consent) {
      nextErrors.consent = data.contact.validationConsent;
    }

    // Anti-spam security answer check
    if (parseInt(formData.securityAnswer) !== correctAnswer) {
      nextErrors.securityAnswer = isRtl
        ? "الرجاء إدخال إجابة صحيحة للتحقق الأمني"
        : "Invalid answer. Please solve the security verification challenge.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(false);
    setSubmitError(false);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, consent: Boolean(formData.consent), website: "" }),
      });
      if (!response.ok) throw new Error("delivery rejected");
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        consent: false,
        securityAnswer: ""
      });
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-alt-bg/60 border-t border-border-default/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Call to action, coordinates, quick channels */}
          <div className="lg:col-span-5 space-y-8" id="contact-coordinates-column">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-soft-primary-bg text-brand-blue rounded-full text-xs font-bold uppercase tracking-wider">
                {isRtl ? "قنوات التواصل" : "Contact channels"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-qyem-navy tracking-tight" id="contact-main-heading">
                {data.contact.title}
              </h2>
              <p className="text-sm sm:text-base text-secondary-text leading-relaxed">
                {data.contact.subtitle}
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="space-y-4" id="contact-details-list">
              {/* Location */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white rounded-xl border border-border-default">
                <div className="w-10 h-10 rounded-lg bg-soft-primary-bg flex items-center justify-center text-brand-blue shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-muted-text">
                    {isRtl ? "الموقع الجغرافي" : "Primary Base"}
                  </span>
                  <span className="text-sm font-extrabold text-qyem-navy">
                    {data.contact.coordinates.location}
                  </span>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-white rounded-xl border border-border-default">
                <div className="w-10 h-10 rounded-lg bg-soft-primary-bg flex items-center justify-center text-brand-blue shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-black uppercase tracking-wider text-muted-text">
                    {isRtl ? "البريد الإلكتروني المهني" : "Professional Email"}
                  </span>
                  <a
                    href={`mailto:${data.contact.coordinates.email}`}
                    id="contact-email-link"
                    className="text-sm font-extrabold text-brand-blue hover:text-action-blue break-all"
                  >
                    {data.contact.coordinates.email}
                  </a>
                </div>
              </div>

            </div>

            {/* Privacy notice concerning credentials */}
            <div className="p-4 bg-soft-sky-bg/40 border border-border-light-blue/50 rounded-lg flex items-start space-x-3 rtl:space-x-reverse text-xs text-secondary-text">
              <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
              <span>
                {isRtl
                  ? "يتم تجميع كافة الرسائل المدخلة بشكل آمن متوافق مع مبادئ الخصوصية، ولا يتم الإفصاح عن بياناتك لأي طرف خارجي."
                  : "All transmitted records are handled in adherence with strict organizational security guidelines, safeguarding sender privacy."}
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form Panel */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-border-default p-6 sm:p-8 custom-shadow-md" id="contact-form-panel">
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-submission-form" noValidate>
              
              {/* Form success feedback banner */}
              {submitSuccess && (
                <div className="bg-success-background text-success p-4 rounded-xl border border-success/20 text-xs sm:text-sm font-semibold flex items-start space-x-3 rtl:space-x-reverse" id="form-success-banner">
                  <span className="text-lg leading-none shrink-0">✓</span>
                  <span>{data.contact.formSuccess}</span>
                </div>
              )}

              {/* Form error feedback banner */}
              {submitError && (
                <div className="bg-red-50 text-red-700 p-4 rounded-xl border border-red-200 text-xs sm:text-sm font-semibold flex items-start space-x-3 rtl:space-x-reverse" id="form-error-banner">
                  <span className="text-lg leading-none shrink-0">⚠️</span>
                  <span>{data.contact.formError}</span>
                </div>
              )}

              {/* Name & Email Field Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div className="space-y-1">
                  <label htmlFor="name-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider">
                    {data.contact.formName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name-input"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200 outline-none focus:border-brand-blue ${
                      errors.name ? "border-red-400 bg-red-50/20" : "border-border-default bg-page-bg/30"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 font-bold block">{errors.name}</span>}
                </div>

                {/* Email address */}
                <div className="space-y-1">
                  <label htmlFor="email-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider">
                    {data.contact.formEmail} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200 outline-none focus:border-brand-blue ${
                      errors.email ? "border-red-400 bg-red-50/20" : "border-border-default bg-page-bg/30"
                    }`}
                  />
                  {errors.email && <span className="text-[10px] text-red-500 font-bold block">{errors.email}</span>}
                </div>
              </div>

              {/* Org & Subject Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Organization */}
                <div className="space-y-1">
                  <label htmlFor="organization-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider">
                    {data.contact.formOrg}
                  </label>
                  <input
                    type="text"
                    id="organization-input"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-border-default bg-page-bg/30 rounded-lg text-sm transition-colors duration-200 outline-none focus:border-brand-blue"
                  />
                </div>

                {/* Subject */}
                <div className="space-y-1">
                  <label htmlFor="subject-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider">
                    {data.contact.formSubject} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject-input"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200 outline-none focus:border-brand-blue ${
                      errors.subject ? "border-red-400 bg-red-50/20" : "border-border-default bg-page-bg/30"
                    }`}
                  />
                  {errors.subject && <span className="text-[10px] text-red-500 font-bold block">{errors.subject}</span>}
                </div>
              </div>

              {/* Message block */}
              <div className="space-y-1">
                <label htmlFor="message-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider">
                  {data.contact.formMessage} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-3 py-2 border rounded-lg text-sm transition-colors duration-200 outline-none focus:border-brand-blue resize-none ${
                    errors.message ? "border-red-400 bg-red-50/20" : "border-border-default bg-page-bg/30"
                  }`}
                />
                {errors.message && <span className="text-[10px] text-red-500 font-bold block">{errors.message}</span>}
              </div>

              {/* Anti-spam Verification challenge */}
              <div className="space-y-1.5 p-4 rounded-xl bg-alt-bg/60 border border-border-default/60">
                <label htmlFor="securityAnswer-input" className="block text-xs font-bold text-qyem-navy uppercase tracking-wider font-mono">
                  {isRtl ? "التحقق الأمني (مكافحة السبام):" : "Security Verification (Anti-Spam)"} <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <span className="text-xs sm:text-sm font-bold font-mono text-brand-blue px-3 py-1.5 rounded bg-white border border-border-default shrink-0">
                    {num1} + {num2} =
                  </span>
                  <input
                    type="number"
                    id="securityAnswer-input"
                    name="securityAnswer"
                    placeholder="?"
                    value={formData.securityAnswer}
                    onChange={handleChange}
                    className={`w-24 px-3 py-1.5 border rounded-lg text-sm text-center font-mono font-bold outline-none focus:border-brand-blue ${
                      errors.securityAnswer ? "border-red-400 bg-red-50" : "border-border-default bg-white"
                    }`}
                  />
                </div>
                {errors.securityAnswer && <span className="text-[10px] text-red-500 font-bold block">{errors.securityAnswer}</span>}
              </div>

              {/* Consent Checkbox */}
              <div className="space-y-1">
                <label className="flex items-start space-x-2.5 rtl:space-x-reverse cursor-pointer">
                  <input
                    type="checkbox"
                    id="consent-checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-brand-blue border-border-default rounded focus:ring-brand-blue shrink-0"
                  />
                  <span className="text-xs text-secondary-text font-semibold leading-relaxed">
                    {data.contact.formConsent}
                  </span>
                </label>
                {errors.consent && <span className="text-[10px] text-red-500 font-bold block">{errors.consent}</span>}
              </div>

              {/* Submit trigger button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="contact-form-submit-btn"
                  className="w-full py-3 bg-brand-blue hover:bg-action-blue text-white rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse disabled:opacity-50 cursor-pointer custom-shadow-sm hover:custom-shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? data.contact.formSubmitting : data.contact.formSubmit}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
