import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, business, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Send notification to Advisync
    await resend.emails.send({
      from: "Advisync <info@advisync.com.au>",
      to: "info@advisync.com.au",
      bcc: "awaledev36@gmail.com",
      replyTo: email,
      subject: `New enquiry from ${name}${business ? ` (${business})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Business:</strong> ${business || "Not provided"}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    // Send confirmation to the submitter
    await resend.emails.send({
      from: "Advisync <info@advisync.com.au>",
      to: email,
      subject: "Thanks for reaching out — Advisync",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for getting in touch. We've received your message and will get back to you within 24 hours.</p>
        <p>If it's urgent, call us on <strong>0432 405 388</strong>.</p>
        <br />
        <p>Awale<br />Advisync<br />📞 0432 405 388<br />✉️ info@advisync.com.au<br />🌐 advisync.com.au</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
