import React from 'react';
import '../../CSS/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us for any inquiries or support.</p>
        </div>
      </section>
      <section className="contact-details">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> <a href="mailto:contact@company.com">contact@company.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
          <p><strong>Address:</strong> 123 Business St, Business City, Country</p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.546394470922!2d-77.03687008464744!3d38.90717197957029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b6d4345e5d1b%3A0x6e6b89ff8b8a9ef1!2s1600+Pennsylvania+Ave+NW%2C+Washington%2C+DC+20500!5e0!3m2!1sen!2sus!4v1607521615971!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default Contact
