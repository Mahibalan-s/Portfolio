const Contact = require("../models/contact");
const nodemailer = require("nodemailer");

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
        console.log("Email through port 587");
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // important
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


        // send email
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: "New Portfolio Message",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        // ✨ auto reply to sender
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thanks for contacting Mahibalan",
            text: `Hi ${name},

                Thank you for reaching out! I have received your message and will get back to you as soon as possible.

Best regards,
Mahibalan
`,
        });
        res.status(201).json(newMessage);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error" });
    }
};



module.exports = { createMessage, getMessages };


