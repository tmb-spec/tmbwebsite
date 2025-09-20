export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, message } = JSON.parse(event.body);

  // Hier kannst du z.B. Emails über SendGrid, Nodemailer oder Netlify Forms schicken
  console.log("Neue Kontaktanfrage:", name, email, message);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Erfolg!" }),
  };
}
