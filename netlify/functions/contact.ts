// netlify/functions/contact.ts
import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: "Missing fields" };
    }

    // TODO: Hier kannst du die Nachricht weiterverarbeiten,
    // z.B. per Mail versenden (z.B. via SendGrid, Mailgun) oder in DB speichern
    console.log("Neue Nachricht:", { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Nachricht erfolgreich gesendet!" }),
    };
  } catch (err) {
    return { statusCode: 500, body: "Server error" };
  }
};