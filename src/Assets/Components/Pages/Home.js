import React, { useEffect, useState } from 'react';
import './..//../CSS/Home.css';
import img1 from '../../Images/aboutbg.png';
import img2 from '../../Images/about.jpg';
import img3 from '../../Images/world.jpg';
import img4 from '../../Images/jodu.jpg';

function Home() {
  const [captionIndex, setCaptionIndex] = useState(0);
  const captions = [
    {
      line1: "Innovative Solutions",
      line2: "To Satisfy All Services"
    },
    {
      line1: "Dedicated To",
      line2: "Provide Quality Service"
    },
    {
      line1: "Deliver Tangible Results",
      line2: "Feel free to look around"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptionIndex((prevIndex) => (prevIndex + 1) % captions.length);
    }, 10000); // Change caption every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* First Section: Enhanced Carousel */}
      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide enhanced-carousel shadow-lg" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 rounded" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <div className="carousel-caption-text">
                  <div className="caption-text">
                    <div className="caption-line highlighted">{captions[captionIndex].line1} <br></br></div>
                    <div className="caption-line">{captions[captionIndex].line2}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section: Services */}
      <div className="service-section container mt-5">
        <h2 className="text-center services-title mb-4">Our Services</h2>
        <div className="row">
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/portfolio-management" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img2} className="card-img-top img-fluid" alt="Portfolio Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Portfolio Management</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/issue-management" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img3} className="card-img-top img-fluid" alt="Issue Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Issue Management</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/corporate-advisory" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img4} className="card-img-top img-fluid" alt="Corporate Advisory" />
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Advisory</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/underwriting-of-shares" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img1} className="card-img-top img-fluid" alt="Underwriting of Share" />
                <div className="card-body">
                  <h5 className="card-title text-center">Underwriting of Share</h5>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;