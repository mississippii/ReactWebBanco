import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './..//../CSS/Home.css';
import img1 from '../../Images/aboutbg.png';
import img2 from '../../Images/insurancr.jpg';
import img3 from '../../Images/strategy.jpg';
import img5 from '../../Images/city.jpg';
import img6 from '../../Images/corporate.jpg';
import img7 from '../../Images/handshake.jpg';
import img8 from '../../Images/share.jpg';

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
          <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
        <SwiperSlide><img className='img-fluid' src={img1} /></SwiperSlide>
        <SwiperSlide><img className='img-fluid' src={img2} /></SwiperSlide>
        <SwiperSlide><img className='img-fluid' src={img3} /></SwiperSlide>
      </Swiper>

      {/* Second Section: Services */}
      <div className="service-section container mt-5">
        <h2 className="text-center services-title mb-4">Our Services</h2>
        <div className="row">
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/services" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img5} className="card-img-top img-fluid" alt="Portfolio Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Portfolio Management</h5>
                </div>
              </div>
           </Link>
            
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/service2" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img7} className="card-img-top img-fluid" alt="Issue Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Issue Management</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/service3" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img6} className="card-img-top img-fluid" alt="Corporate Advisory" />
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Advisory</h5>
                </div>
              </div>
            </a>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <a href="/service4" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img8} className="card-img-top img-fluid" alt="Underwriting of Share" />
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