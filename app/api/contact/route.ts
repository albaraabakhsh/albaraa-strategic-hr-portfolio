import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

export const runtime = "nodejs";
const attempts = new Map<string, number[]>();
const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  organization: z.string().trim().max(120).optional().default(""),
  subject: z.string().trim().min(3).max(140),
  message: z.string().trim().min(10).max(5000),
  consent: z.literal(true),
  securityAnswer: z.string().regex(/^8$/),
  website: z.string().max(0).optional().default(""),
}).strict();

export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) return NextResponse.json({ error: "Invalid request" }, { status: 415 });
  if (Number(request.headers.get("content-length") || 0) > 16_384) return NextResponse.json({ error: "Invalid request" }, { status: 413 });
  const ip = request.headers.get("cf-connecting-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";
  const now = Date.now();
  const windowMs = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS || 3600) * 1000;
  const max = Number(process.env.CONTACT_RATE_LIMIT_MAX || 5);
  const recent = (attempts.get(ip) || []).filter(time => now - time < windowMs);
  if (recent.length >= max) return NextResponse.json({ error: "Please try again later" }, { status: 429 });
  attempts.set(ip, [...recent, now]);
  let parsed: z.infer<typeof schema>;
  try { parsed = schema.parse(await request.json()); } catch { return NextResponse.json({ error: "Invalid request" }, { status: 400 }); }
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_FROM_EMAIL", "CONTACT_TO_EMAIL"] as const;
  if (required.some(key => !process.env[key])) return NextResponse.json({ error: "Delivery unavailable" }, { status: 503 });
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    connectionTimeout: 10_000,
  });
  const safeSubject = parsed.subject.replace(/[\r\n]/g, " ");
  try {
    await transport.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: parsed.email,
      subject: `Portfolio enquiry: ${safeSubject}`,
      text: `Name: ${parsed.name}\nOrganization: ${parsed.organization || "Not provided"}\n\n${parsed.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: "Delivery failed" }, { status: 502 }); }
}

export function GET() { return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); }
