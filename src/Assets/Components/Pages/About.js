import React from 'react';
import './..//../CSS/About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Us</h1>
          <p>Discover our journey, mission, and the team behind our success.</p>
        </div>
      </section>
      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Our company was founded in [Year] with a vision to [Brief Description of Vision]. Over the years, we have grown into a leading multinational company, expanding our reach across various regions and continually innovating to meet the needs of our clients.
        </p>
      </section>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We are committed to [Brief Description of Mission]. Our mission is to deliver exceptional value through innovative solutions and unparalleled customer service.
        </p>
      </section>
      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
          <li><strong>Innovation:</strong> We continuously seek out new and better ways to do things.</li>
          <li><strong>Customer Focus:</strong> We are dedicated to meeting the needs of our customers.</li>
          <li><strong>Excellence:</strong> We strive for excellence in every aspect of our business.</li>
        </ul>
      </section>
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
          <div className="team-member">
            <img src="https://via.placeholder.com/150" alt="Team Member 3" />
            <h3>Michael Brown</h3>
            <p>CFO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

