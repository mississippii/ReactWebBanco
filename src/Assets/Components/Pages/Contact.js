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
          <p><strong>Phone:</strong> <a href="tel:+1234567890">+123 456 7890</a></p>
          <p><strong>Address:</strong> 123 Business St, Business City, Country</p>
        </div>
      </section>
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.856225195096!2d90.4048536!3d23.7340284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8f3c71e91f5%3A0x88feb9895abe3a81!2sBangladesh%20Shilpakala%20Academy!5e0!3m2!1sen!2sbd!4v1691664492613!5m2!1sen!2sbd"
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
