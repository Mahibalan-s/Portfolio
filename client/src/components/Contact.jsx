import { useState } from "react";
import { sendMessage } from "../services/api";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(form); // API + email works

      setStatus("success");
      setTimeout(() => {
      setStatus(null);
    }, 5000);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setTimeout(() => {
      setStatus(null);
    }, 5000);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-container">
        <div className="contact-info">
          <p>
            I’m open to internships, projects, and collaborations.
            Feel free to reach out.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>

          {status === "success" && (
            
            <div>
              <p className="success-msg">✅ Message sent successfully </p>
              <p className="success-reply">Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            </div>
          )}

          {status === "error" && (
            <p className="error-msg">❌ Something went wrong</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
