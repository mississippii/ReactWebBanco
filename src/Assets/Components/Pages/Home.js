import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../CSS/Home.css';
import img1 from '../../Images/stock1.png';
import img2 from '../../Images/aboutbg.png';
import img3 from '../../Images/businesswoman.jpg';
import img4 from '../../Images/stock11.png';
import img5 from '../../Images/handshake.jpg';
import img6 from '../../Images/stock2.jpg';
import img7 from '../../Images/stock20.jpg';
import { Link } from 'react-router-dom';

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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img className='img-fluid' src={img1} alt="Slide 1" />
            <div className="caption">
              <h2>{captions[0].line1}</h2>
              <p>{captions[0].line2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img className='img-fluid' src={img2} alt="Slide 2" />
            <div className="caption">
              <h2>{captions[1].line1}</h2>
              <p>{captions[1].line2}</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content">
            <img className='img-fluid' src={img3} alt="Slide 3" />
            <div className="caption">
              <h2>{captions[2].line1}</h2>
              <p>{captions[2].line2}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Second Section: Services */}
      <div className="service-section container mt-5">
        <h2 className="text-center services-title mb-4">Our Services</h2>
        <div className="row">
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <Link to="/services" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img4} className="card-img-top img-fluid" alt="Portfolio Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Portfolio Management</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <Link to="/service2" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img5} className="card-img-top img-fluid" alt="Issue Management" />
                <div className="card-body">
                  <h5 className="card-title text-center">Issue Management</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <Link to="/service3" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img6} className="card-img-top img-fluid" alt="Corporate Advisory" />
                <div className="card-body">
                  <h5 className="card-title text-center">Corporate Advisory</h5>
                </div>
              </div>
            </Link>
          </div>
          <div className="service-card col-md-6 col-lg-3 mb-4">
            <Link to="/service4" rel="noopener noreferrer" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={img7} className="card-img-top img-fluid" alt="Underwriting of Share" />
                <div className="card-body">
                  <h5 className="card-title text-center">Underwriting of Share</h5>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
