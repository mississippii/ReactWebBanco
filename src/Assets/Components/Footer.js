import React from 'react';
import '.././CSS/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3 className="footer-heading">SIM Capital Limited</h3>
          <p className="footer-tagline">
            Pioneering financial excellence in Bangladesh's capital market since inception.
          </p>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services/portfolio">Services</Link></li>
            <li><Link to="/downloads/public-offering">Downloads</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <p><FaEnvelope className="footer-icon" /> <a href="mailto:co@simclbd.com">co@simclbd.com</a></p>
          <p><FaPhoneAlt className="footer-icon" /> <a href="tel:+8802226639248">+88 02-226 639248</a></p>
          <p><FaMapMarkerAlt className="footer-icon" /> Motahar Lodge (4th Floor), 4-Purana Paltan, Dhaka &ndash; 1000</p>
        </div>

        <div className="footer-social">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SIM Capital Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
