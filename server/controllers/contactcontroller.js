const Contact = require("../models/contact");
const nodemailer = require("nodemailer");
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const getMessages = async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};


const createMessage = async (req, res) => {
    try {
        // 🔥 get values from frontend
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields required" });
        }

        // save to DB
        const newMessage = await Contact.create({
            name,
            email,
            message,
        });

        // mail setup
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // send email
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL_USER,
            subject: "New Portfolio Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        // ✨ auto reply to sender
//         await resend.emails.send({
//             from: "onboarding@resend.dev",
//             to: email,
//             subject: "Thanks for contacting Mahibalan",
//             text: `Hi ${name},

// Thank you for reaching out! I have received your message and will get back to you soon.

// Best regards,
// Mahibalan`,
// });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
};



module.exports = { createMessage, getMessages };


