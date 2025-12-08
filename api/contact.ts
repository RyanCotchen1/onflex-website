import type { IncomingMessage, ServerResponse } from "node:http";

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

const requiredEnv = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL || "website@onflex.fit";

  if (!apiKey) {
    throw new Error("RESEND_API_KEY environment variable is required to send email");
  }

  return { apiKey, from };
};

export default async function handler(
  req: IncomingMessage & { body?: ContactRequestBody | string },
  res: ServerResponse & { json?: (body: unknown) => void },
) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end(JSON.stringify({ message: "Method not allowed" }));
    return;
  }

  const rawBody = req.body ?? {};
  const body: ContactRequestBody =
    typeof rawBody === "string" ? JSON.parse(rawBody || "{}") : rawBody;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    res.statusCode = 400;
    res.end(JSON.stringify({ message: "Name, email, and message are required" }));
    return;
  }

  try {
    const { apiKey, from } = requiredEnv();

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: ["Ryan@onflex.fit"],
        reply_to: email,
        subject: `New contact form submission from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message.replace(
          /\n/g,
          "<br>",
        )}</p>`,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      throw new Error(`Email service responded with status ${emailResponse.status}: ${errorText}`);
    }

    res.statusCode = 200;
    res.end(JSON.stringify({ message: "Message sent" }));
  } catch (error) {
    console.error("Failed to send contact email", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ message: "Failed to send message" }));
  }
}
