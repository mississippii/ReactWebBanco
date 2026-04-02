import React, { useState } from 'react';
import '../../CSS/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>Have questions about our services? We&apos;d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-body">
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-cards">
            <div className="info-card">
              <div className="info-card-icon"><FaPhoneAlt /></div>
              <h3>Phone</h3>
              <a href="tel:+8802226639248">+88 02-226 639248</a>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaEnvelope /></div>
              <h3>Email</h3>
              <a href="mailto:co@simclbd.com">co@simclbd.com</a>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaMapMarkerAlt /></div>
              <h3>Address</h3>
              <p>Motahar Lodge (4th Floor), 4-Purana Paltan, Dhaka &ndash; 1000</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon"><FaClock /></div>
              <h3>Office Hours</h3>
              <p>Sun &ndash; Thu: 9:00 AM &ndash; 5:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            {submitted && (
              <div className="form-success">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <iframe
          title="SIM Capital Limited Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.417346590593!2d90.40853447598657!3d23.732492389462415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e191b26691%3A0xcff39732b30c4573!2zTW90YWhhciBMb2RnZSB8IOCmruCni-CmpOCmvuCmueCmvuCmsCDgprLgppw!5e0!3m2!1sen!2sbd!4v1745434037815!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}

export default Contact;
