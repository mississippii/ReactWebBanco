import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../CSS/Home.css';
import img1 from '../../Images/stock1.png';
import img2 from '../../Images/aboutbg.png';
import img3 from '../../Images/businesswoman.jpg';
import img4 from '../../Images/stock11.jpg';
import img5 from '../../Images/issiemenegment.jpg';
import img6 from '../../Images/stock2.jpg';
import img7 from '../../Images/stock20.jpg';
import logo1 from '../../Images/BMBA Logo.jpg'
import logo2 from '../../Images/BSEC Logo.jpg'
import logo3 from '../../Images/CDBL Logo.jpg'
import logo4 from '../../Images/DSE Logo.jpg'
import LovelloLogo from '../../Images/Lovello Logo.jpg';
import BBSLogo from '../../Images/BBS Cables Logo.jpg';
import BIFCLLogo from '../../Images/BIFCL Logo.jpg';
import DeltaLogo from '../../Images/Delta Logo.jpg';
import FamilyTexLogo from '../../Images/Family Tex Logo.jpg';
import GoldenHarvestLogo from '../../Images/Golden Harvest Logo.jpg';
import GPHIspatLogo from '../../Images/GPH Ispat Logo.jpg';
import IfadLogo from '../../Images/Ifad Logo.jpg';
import RoyalTulipLogo from '../../Images/Royal Tulip Logo.jpg';
import SaifPowerLogo from '../../Images/Saif Power Logo.jpg';
import SIBLLogo from '../../Images/SIBL Logo.jpg';
import SunlifeLogo from '../../Images/Sunlife Logo.jpg';
import TallySpinLogo from '../../Images/Tally Spin Logo.jpg';
import client1logo from '../../Images/client1.jpeg';
import client2logo from '../../Images/client2.jpeg';


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
      {/*Stackholder section*/}
      <div className="key-stakeholders">
        <h1 className="text-center section-title mb-4">Our Stakeholders</h1>
        <div className="logo-track">
          <div className="logo-container">
            <img src={logo1} alt="Stakeholder 1" className="stakeholder-logo" />
            <img src={logo2} alt="Stakeholder 2" className="stakeholder-logo" />
            <img src={logo3} alt="Stakeholder 3" className="stakeholder-logo" />
            <img src={logo4} alt="Stakeholder 4" className="stakeholder-logo" />
          </div>
          {/* Mirror container for seamless loop */}
          <div className="logo-container" aria-hidden="true">
            <img src={logo1} alt="Stakeholder 1" className="stakeholder-logo" />
            <img src={logo2} alt="Stakeholder 2" className="stakeholder-logo" />
            <img src={logo3} alt="Stakeholder 3" className="stakeholder-logo" />
            <img src={logo4} alt="Stakeholder 4" className="stakeholder-logo" />
          </div>
        </div>
      </div>

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


      {/*Achivement section*/}
      <div className="achievements-section container mt-5">
        <h2 className="text-center achievements-title mb-4">Our Achievements</h2>
        <p className="text-center achievements-description mb-5">
          We are proud of the milestones we
          have achieved in the industry. Here are some of the key achievements and partnerships
          of SIM Capital Limited.
        </p>
        <div className="achievements-logos">
          <div className="logo-container1">
            <img src={LovelloLogo} alt="Achievement 1" className="achievement-logo" />
            <img src={BBSLogo} alt="Achievement 2" className="achievement-logo" />
            <img src={BIFCLLogo} alt="Achievement 3" className="achievement-logo" />
            <img src={DeltaLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={FamilyTexLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={GoldenHarvestLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={GPHIspatLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={IfadLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={RoyalTulipLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={SaifPowerLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={SIBLLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={SunlifeLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={TallySpinLogo} alt="Achievement 4" className="achievement-logo" />
            <img src={client1logo} alt="Achievement 4" className="achievement-logo" />
            {/*<img src={client2logo} alt="Achievement 4" className="achievement-logo" />*/}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Home;
