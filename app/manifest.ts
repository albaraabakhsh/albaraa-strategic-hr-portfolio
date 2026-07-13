import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Albaraa Bakhsh — Strategic HR Portfolio", short_name: "AB Portfolio", start_url: "/", display: "standalone", background_color: "#F6F9FD", theme_color: "#100E66", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] }; }
