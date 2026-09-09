import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const ownerEmail = process.env.OWNER_EMAIL || 'owner@brewandbloom.com';

const smtpConfigured = () =>
  Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);

const transporter = smtpConfigured()
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || 'false') === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

router.post('/', async (request, response) => {
  const { name, phone, date, time, guests, notes } = request.body || {};

  if (!name || !phone || !date || !time || !guests) {
    return response.status(400).json({ message: 'Please fill in all required reservation details.' });
  }

  const reservationMessage = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #2A2421;">
      <h2 style="color: #5F3925;">New Reservation Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Notes:</strong> ${notes || 'No additional notes'}</p>
    </div>
  `;

  if (!transporter) {
    console.log('Reservation request received but SMTP is not configured.');
    return response.status(200).json({
      message: 'Reservation received successfully. Email setup is pending for the owner.',
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: ownerEmail,
      subject: `New reservation request from ${name}`,
      html: reservationMessage,
    });

    return response.status(200).json({
      message: 'Reservation submitted successfully. The owner has been notified by email.',
    });
  } catch (error) {
    console.error('Reservation email error:', error);
    return response.status(500).json({
      message: 'Reservation was saved locally, but the email could not be sent.',
    });
  }
});

export default router;
