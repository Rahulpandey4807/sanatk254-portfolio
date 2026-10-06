import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

const hits = new Map<string, number[]>(); // in-memory; use Redis/Upstash for multi-instance
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  if (recent.length >= 3) return NextResponse.json({ error: "Too many requests. Try again later." }, { status: 429 });
  hits.set(ip, [...recent, now]);

  const parsed = contactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid input." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); // honeypot: silent success

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  const { name, email, subject, message } = parsed.data;
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL ?? "sanatk254@gmail.com"],
      reply_to: email,
      subject: `Portfolio: ${subject}`,
      html: `<p><b>${esc(name)}</b> (${esc(email)})</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!r.ok) return NextResponse.json({ error: "Could not send message." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
