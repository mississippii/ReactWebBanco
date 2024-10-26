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
          <p><strong>Email:</strong> <a href="mailto:co@simclbd.com">co@simclbd.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+88 02-226 639248</a></p>
          <p><strong>Address:</strong> 4th Floor LIFT - 4 Motahar lodge, 4 Purana Paltan</p>
        </div>
      </section>
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.849979932757!2d90.4111293!3d23.7324275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c788a3dfbd%3A0x1a2b3c4d5e6f7g8!2sYour%20Location%20Name!5e0!3m2!1sen!2sbd!4v1691664492613!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>

        </div>
      </section>
    </div>
  )
}

export default Contact
