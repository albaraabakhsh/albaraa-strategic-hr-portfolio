import { ImageResponse } from "next/og";
export const alt = "Albaraa Bakhsh — People, Strategy, Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", padding: 80, color: "white", background: "linear-gradient(135deg,#100E66,#103184 55%,#1061B2)", fontFamily: "Arial" }}><div style={{ width: 170, height: 170, borderRadius: 40, background: "white", color: "#100E66", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 78, fontWeight: 800, marginRight: 55 }}>AB</div><div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 62, fontWeight: 800 }}>Albaraa Bakhsh</div><div style={{ fontSize: 34, marginTop: 18, color: "#85BDE5" }}>People • Strategy • Technology</div></div></div>, size);
}
