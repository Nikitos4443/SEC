import nodemailer from 'nodemailer';
import axios from 'axios';

function validateFormData(data) {
    const errors = {};

    if (!data.firstName || data.firstName.trim().length < 2) {
        errors.firstName = 'Ім\'я повинно містити мінімум 2 символи';
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
        errors.lastName = 'Прізвище повинно містити мінімум 2 символи';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        errors.email = 'Невірний формат email';
    }

    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,15}$/;
    if (!data.phone || !phoneRegex.test(data.phone.replace(/\s/g, ''))) {
        errors.phone = 'Невірний формат телефону';
    }

    if (!data.address || data.address.trim().length < 5) {
        errors.address = 'Адреса повинна містити мінімум 5 символів';
    }

    if (!data.postcode || data.postcode.trim().length < 4) {
        errors.postcode = 'Поштовий індекс повинен містити мінімум 4 символи';
    }

    if (!data.service || data.service.trim().length < 2) {
        errors.service = 'Оберіть послугу';
    }

    if (!data.equipment || data.equipment.trim().length < 2) {
        errors.equipment = 'Оберіть обладнання';
    }

    if (!data.personnel || data.personnel.trim().length < 1) {
        errors.personnel = 'Оберіть кількість персоналу';
    }

    if (!data.dresscode || data.dresscode.trim().length < 2) {
        errors.dresscode = 'Оберіть дрес-код';
    }

    if (!data.recaptchaToken) {
        errors.recaptchaToken = 'Пройдіть перевірку reCAPTCHA';
    }

    const maxLength = 1000;
    if (data.notes && data.notes.length > maxLength) {
        errors.notes = `Примітки не повинні перевищувати ${maxLength} символів`;
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
}

function sanitizeData(data) {
    const sanitized = {};

    for (const [key, value] of Object.entries(data)) {
        if (typeof value === 'string') {
            sanitized[key] = value
                .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                .replace(/<[^>]*>/g, '')
                .trim();
        } else {
            sanitized[key] = value;
        }
    }

    return sanitized;
}

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

    const formData = {
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
    };

    const validation = validateFormData(formData);

    if (!validation.isValid) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: validation.errors
        });
    }

    const sanitizedData = sanitizeData(formData);

    try {
        const { data } = await axios.post(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
        );

        if (!data.success || data.score < 0.5) {
            return res.status(400).json({ message: 'Failed reCAPTCHA check' });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'reCAPTCHA verification failed' });
    }

    try {
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD
            }
        });

        const message = {
            from: process.env.SMTP_EMAIL,
            to: 'Nikitos4443@gmail.com',
            subject: 'New Service Request',
            html: `
                <h3>New Service Request</h3>
                <p><strong>Name:</strong> ${sanitizedData.firstName} ${sanitizedData.lastName}</p>
                <p><strong>Email:</strong> ${sanitizedData.email}</p>
                <p><strong>Phone:</strong> ${sanitizedData.phone}</p>
                <p><strong>Address:</strong> ${sanitizedData.address}, ${sanitizedData.postcode}</p>
                <p><strong>Service:</strong> ${sanitizedData.service}</p>
                <p><strong>Equipment:</strong> ${sanitizedData.equipment}</p>
                <p><strong>Personnel:</strong> ${sanitizedData.personnel}</p>
                <p><strong>Dress Code:</strong> ${sanitizedData.dresscode}</p>
                <p><strong>Notes:</strong> ${sanitizedData.notes || 'No notes'}</p>
            `
        };

        await transporter.sendMail(message);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Email sending failed' });
    }
}