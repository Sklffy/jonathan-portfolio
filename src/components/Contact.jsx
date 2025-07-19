// 7. Contact.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    const parms = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  parms,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
.then(
      (response) => {
        console.log('SUCCESS!', response);
        alert("I'll send you an email as soon as I can!");
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message.');
      }
    );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-card">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-subtext">Have something to discuss? Send me a message and let’s talk.</p>
          <form onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            ></textarea>
            <button type="submit" className="send-btn">Send Email</button>
          </form>
        </div>
      </div>
    </section>
  );
}