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
          <p><strong>Address:</strong> Motahar Lodge (4th Floor), 4-Purana Paltan, Dhaka – 1000</p>
        </div>
      </section>
      <section className="contact-map">
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.417346590593!2d90.40853447598657!3d23.732492389462415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9e191b26691%3A0xcff39732b30c4573!2zTW90YWhhciBMb2RnZSB8IOCmruCni-CmpOCmvuCmueCmvuCmsCDgprLgppw!5e0!3m2!1sen!2sbd!4v1745434037815!5m2!1sen!2sbd"
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
