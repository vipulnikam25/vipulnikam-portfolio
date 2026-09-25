import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import process from "node:process";
import { z } from "zod";

const contactSchema = z.object({
  senderEmail: z.string().trim().email().max(254),
  subject: z.string().trim().min(3).max(160).refine((value) => !/[\r\n]/.test(value)),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(0).optional().default(""),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

function parseBody(body: unknown) {
  if (typeof body !== "string") return body;

  try {
    return JSON.parse(body) as unknown;
  } catch {
    return null;
  }
}

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ success: false, message: "Method not allowed." });
  }

  const configuredOrigins = (process.env.CONTACT_ALLOWED_ORIGIN || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  const requestOrigin = Array.isArray(request.headers.origin) ? request.headers.origin[0] : request.headers.origin;

  if (configuredOrigins.length > 0 && requestOrigin && !configuredOrigins.includes(requestOrigin)) {
    return response.status(403).json({ success: false, message: "This request origin is not allowed." });
  }

  const parsed = contactSchema.safeParse(parseBody(request.body));
  if (!parsed.success) {
    return response.status(400).json({ success: false, message: "Please check the email, subject, and message fields." });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number.parseInt(process.env.SMTP_PORT || "465", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO_EMAIL || "vipulnikam0925@gmail.com";
  const fromName = process.env.CONTACT_FROM_NAME || "Vipul Nikam Portfolio";

  if (!smtpHost || !smtpUser || !smtpPass || !Number.isInteger(smtpPort)) {
    return response.status(503).json({ success: false, message: "Email delivery is temporarily unavailable." });
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: smtpUser, pass: smtpPass },
  });

  const safeEmail = escapeHtml(parsed.data.senderEmail);
  const safeSubject = escapeHtml(parsed.data.subject);
  const safeMessage = escapeHtml(parsed.data.message).replace(/\n/g, "<br />");

  try {
    await transporter.sendMail({
      from: { name: fromName, address: smtpUser },
      to: contactTo,
      replyTo: parsed.data.senderEmail,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: `${parsed.data.message}\n\nSender: ${parsed.data.senderEmail}`,
      html: `<h2>${safeSubject}</h2><p>${safeMessage}</p><hr><p><strong>Reply to:</strong> ${safeEmail}</p>`,
    });

    return response.status(200).json({ success: true, message: "Message sent successfully. I will get back to you soon." });
  } catch {
    return response.status(502).json({ success: false, message: "The email service could not deliver your message. Please try again." });
  }
}
