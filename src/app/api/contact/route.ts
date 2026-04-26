import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Configure the SMTP transporter
    // For this to work, you need to set up these environment variables in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.example.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Redecobau Website" <noreply@redecobau.ch>',
      to: 'info@redecobau.ch', // As requested
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name/Firma: ${name}
E-Mail: ${email}
Telefon: ${phone || 'Nicht angegeben'}

Nachricht:
${message}
      `,
      html: `
<h3>Neue Kontaktanfrage über Redecobau Webseite</h3>
<p><strong>Name/Firma:</strong> ${name}</p>
<p><strong>E-Mail:</strong> ${email}</p>
<p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
<br/>
<p><strong>Nachricht:</strong></p>
<p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    // If SMTP_USER is not set, we'll just log the email and return success for demo purposes
    if (!process.env.SMTP_USER) {
      console.log("Mock Email Sent:", mailOptions);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Mock email sent" }, { status: 200 });
    }

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
