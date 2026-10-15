import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { brand } from "@/lib/brand";
import { contactInterests } from "@/lib/contact";

export const runtime = "nodejs";

const MAX_NAME = 120;
const MAX_MESSAGE = 2000;
const WINDOW_MS = 15 * 60 * 1000;
const MAX_SENDS = 5;

const hits = new Map<string, number[]>();

const failure = (status: number) => NextResponse.json({ ok: false }, { status });

function clientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_SENDS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function singleLine(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
  if (!cleaned || cleaned.length > max) return null;
  return cleaned;
}

function messageText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  if (!cleaned || cleaned.length > MAX_MESSAGE) return null;
  return cleaned;
}

function workEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim();
  if (email.length > 254 || /[\r\n]/.test(email)) return null;
  if (!/^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/.test(email)) {
    return null;
  }
  return email;
}

export async function POST(request: NextRequest) {
  if (rateLimited(clientIp(request))) return failure(429);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return failure(400);
  }

  if (!body || typeof body !== "object") return failure(400);
  const fields = body as Record<string, unknown>;
  const name = singleLine(fields.name, MAX_NAME);
  const email = workEmail(fields.email);
  const interest = singleLine(fields.interest, 80);
  const message = messageText(fields.message);

  if (!name || !email || !interest || !message) return failure(400);
  if (!contactInterests.includes(interest as (typeof contactInterests)[number])) return failure(400);

  const pass = process.env.SMTP_PASS?.trim();
  const user = process.env.SMTP_USER?.trim() || "alert@enviseer.com";
  if (!pass || !workEmail(user) || !user.endsWith("@enviseer.com")) return failure(503);

  const port = Number(process.env.SMTP_PORT || 587);
  const host = process.env.SMTP_HOST?.trim() || "smtp.office365.com";

  try {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      requireTLS: port === 587,
      auth: { user, pass },
    });

    await transport.sendMail({
      from: `Enviseer website <${user}>`,
      to: brand.email,
      replyTo: email,
      subject: `Website introduction — ${interest}`,
      text: [
        "A visitor sent an introduction from the Enviseer website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Interest: ${interest}`,
        "",
        "Problem:",
        message,
      ].join("\n"),
      headers: {
        "X-Enviseer-Form": "contact",
      },
    });
  } catch {
    return failure(503);
  }

  return NextResponse.json({ ok: true });
}
