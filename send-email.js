const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { 'contact-name': name, 'contact-email': email, subject, 'contact-message': message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'your-email-service', // e.g., Gmail, SendGrid, etc.
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: 'your-email@example.com',
    subject,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}
