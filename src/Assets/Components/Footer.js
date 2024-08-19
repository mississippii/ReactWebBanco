import React from 'react';
import '.././CSS/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          {/* <img className="custom-brand d-inline-block align-top" alt="Logo" src={logo} /> */}
        </div>
        <div className="footer-links">
        <h3 class="text-danger font-weight-bold mb-4 text-uppercase">Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
        <h3 class="text-danger font-weight-bold mb-4 text-uppercase">Contuct Us</h3>
          <p>Email: <a href="mailto:contact@company.com">co@simclbd.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
          <p>Address: 4th Floor LIFT - 4 Motahar lodge, 4 Purana Paltan</p>
        </div>
        <div className="footer-social">
        <h3 class="text-danger font-weight-bold mb-4 text-uppercase">Follow Us</h3>
          <ul>
            <li><Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></Link></li>
            <li><Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></Link></li>
            <li><Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></Link></li>
            <li><Link to="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Business Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
