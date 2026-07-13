import type { Metadata } from "next";
import App from "../../src/App";
export const metadata: Metadata = { title: "البراء بخش | قيادة الموارد البشرية الاستراتيجية", description: "الملف المهني للبراء بخش، رئيس الموارد البشرية والتخطيط والتطوير في الرياض.", alternates: { canonical: "/ar/", languages: { en: "/", "ar-SA": "/ar/", "x-default": "/" } } };
export default function ArabicPage() { return <App initialLanguage="ar" />; }
