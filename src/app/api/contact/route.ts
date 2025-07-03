// src/app/api/contact/route.ts

import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message, captchaToken } = await request.json();

  if (!name || !email || !message || !captchaToken) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  // Verify reCAPTCHA token
  const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.success) {
    return NextResponse.json({ error: 'Captcha verification failed' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'alidelhiindia@gmail.com',
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
