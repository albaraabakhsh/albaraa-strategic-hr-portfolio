import type { Metadata } from "next";
import type { ReactNode } from "react";
import { headers } from "next/headers";
import "../src/index.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theprosteps.com"),
  title: "Albaraa Bakhsh | Strategic HR Leadership",
  description: "Portfolio of Albaraa Bakhsh, Head of HR and Planning & Development in Riyadh.",
  alternates: { canonical: "/", languages: { en: "/", "ar-SA": "/ar/", "x-default": "/" } },
  openGraph: { type: "profile", url: "/", title: "Albaraa Bakhsh | Strategic HR Leadership", description: "People, strategy, and technology.", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const language = (await headers()).get("x-page-language") === "ar" ? "ar" : "en";
  return <html lang={language === "ar" ? "ar-SA" : "en"} dir={language === "ar" ? "rtl" : "ltr"} suppressHydrationWarning><body>{children}</body></html>;
}
