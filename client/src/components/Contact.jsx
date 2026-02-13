import { useState } from "react";
import { sendMessage } from "../services/api";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendMessage(form);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus("error");
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
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>

          {status === "success" && (
            <p style={{ color: "lightgreen", marginTop: "10px" }}>
              Message sent successfully 
            </p>
          )}

          {status === "error" && (
            <p style={{ color: "red", marginTop: "10px" }}>
              Something went wrong 
            </p>
          )}

        </form>
      </div>
    </section>
  );
}

export default Contact;
