import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with Us</h2>
      <div className="contact-info">
        <p>At Netcodex Technology, we value our customers and strive to provide the best service possible. If you have any questions, concerns, or need assistance, please don't hesitate to reach out to us.</p>
        <p>Feel free to contact us through the form below or reach us at:</p>
        <ul>
          <li><strong>Email:</strong> support@netcodex.com</li>
          <li><strong>Phone:</strong> +1-277-297-800</li>
        </ul>
      </div>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
