import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const {
        firstName,
        lastName,
        email,
        phone,
        address,
        postcode,
        service,
        equipment,
        personnel,
        dresscode,
        notes,
        recaptchaToken
    } = req.body;

    try {
        const { data } = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
        );

        if (!data.success || data.score < 0.5) {
            return res.status(400).json({ message: 'Failed reCAPTCHA check' });
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'reCAPTCHA verification failed' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const message = {
            from: email,
            to: 'Nikitos4443@gmail.com',
            subject: 'New Service Request',
            html: `
        <h3>New Service Request</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${postcode}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Equipment:</strong> ${equipment}</p>
        <p><strong>Personnel:</strong> ${personnel}</p>
        <p><strong>Dress Code:</strong> ${dresscode}</p>
        <p><strong>Notes:</strong> ${notes}</p>
      `
        };

        await transporter.sendMail(message);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Email sending failed' });
    }
}
