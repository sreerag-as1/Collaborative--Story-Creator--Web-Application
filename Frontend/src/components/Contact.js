// ContactUs.js
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Please fill out the form below or reach out via email.
      </p>

      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          rows="5"
        ></textarea>

        <button type="submit" className="contact-submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="mailto:assreerag2255@gmail.com">assreerag2255@gmail.com</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
