import React, { useEffect, useState } from 'react';
import './..//../CSS/Home.css';
import img1 from '../../Images/aboutbg.png';
import img2 from '../../Images/about.jpg';
import img3 from '../../Images/blog2.jpg';
import img4 from '../../Images/blogs1.jpg';

function Home() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating((prev) => !prev);
    }, 10000); // Toggle every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* First Section */}
      <div id="carouselExample" >
        <div className="carousel-inner">
          <div >
            <img src={img1} className="d-block w-100" alt="Slide 1" />
          </div>
          {/* <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
          </div> */}
        </div>
      </div>


      {/* Second Section */}
      <div className="service-section">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">Service 1</div>
          <div className="service-card">Service 2</div>
          <div className="service-card">Service 3</div>
          <div className="service-card">Service 4</div>
        </div>
      </div>
    </div>
  );
}

export default Home;