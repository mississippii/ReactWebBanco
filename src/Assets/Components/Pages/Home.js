import React from 'react'
import './..//../CSS/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My Website</h1>
        <p>Your one-stop solution for all your needs.</p>
      </div>
      <div className="product-list">
        <h2>Our Products</h2>
        <div className="product-cards">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
          <div className="product-card">Product 4</div>
        </div>
      </div>
      <div className="content-section">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing the best services to our customers. Our products are designed with the highest quality standards to ensure customer satisfaction.
        </p>
      </div>
    </div>
  );
}

export default Home;
