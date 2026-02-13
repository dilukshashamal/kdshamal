import { NextResponse } from "next/server";
import * as Brevo from "@getbrevo/brevo";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    // Check if API key exists
    if (!process.env.BREVO_API_KEY) {
      console.error("BREVO_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const apiInstance = new Brevo.TransactionalEmailsApi();

    // Configure API key authorization: api-key
    apiInstance.setApiKey(
      Brevo.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    const sendSmtpEmail = new Brevo.SendSmtpEmail();

    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = `
      <html>
        <body>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </body>
      </html>
    `;
    sendSmtpEmail.sender = { name: `${firstName} ${lastName}`, email: email };
    sendSmtpEmail.to = [
      { email: "dilukshashamal2001@gmail.com", name: "Diluksha Shamal" },
    ];
    sendSmtpEmail.replyTo = { email: email, name: `${firstName} ${lastName}` };

    await apiInstance.sendTransacEmail(sendSmtpEmail);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Provide more detailed error information
    const errorMessage =
      error?.response?.body?.message ||
      error?.message ||
      "Failed to send email";
    const statusCode = error?.response?.status || 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
