import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, location, propertyType, purpose, message } = body;

    console.log('Contact form received:', { name, email, phone, location, propertyType, purpose });

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const safeMessage = message ? String(message) : '';

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Request from ${name}`,
      text: `You have received a new contact request:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nProperty Type: ${propertyType}\nPurpose: ${purpose}\nMessage: ${safeMessage}`,
      html: `
          <div style="font-family: Arial, Helvetica, sans-serif; background:#f9f9f9; padding:20px; color:#333; line-height:1.6;">
            <div style="text-align:center; margin-bottom:20px;">
              <img src="https://asbvaluers.com/logo.png" alt="ASB Valuers" style="max-width:150px;"/>
            </div>
            <h2 style="color:#0d47a1; margin-top:0;">New Contact Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Property Type:</strong> ${propertyType}</p>
            <p><strong>Purpose:</strong> ${purpose}</p>
            <p><strong>Message:</strong><br/>${safeMessage.replace(/\n/g, '<br/>')}</p>
            <hr style="border:none; border-top:1px solid #e0e0e0; margin:30px 0;"/>
            <p style="font-size:12px; color:#777; text-align:center;">Sent via <a href="https://asbvaluers.com" style="color:#0d47a1; text-decoration:none;">ASB Valuers Website</a></p>
          </div>`
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to info@asbvalues.com');
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error('Error sending contact email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Failed to send email', details: errorMessage }, { status: 500 });
  }
}
