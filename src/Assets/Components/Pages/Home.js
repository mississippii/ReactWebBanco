import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../CSS/Home.css';
import { Link } from 'react-router-dom';

import img1 from '../../Images/stock1.png';
import img2 from '../../Images/aboutbg.png';
import img3 from '../../Images/businesswoman.jpg';
import img4 from '../../Images/stock11.jpg';
import img5 from '../../Images/issiemenegment.jpg';
import img6 from '../../Images/stock2.jpg';
import img7 from '../../Images/stock20.jpg';

import logo1 from '../../Images/BMBA Logo.jpg';
import logo2 from '../../Images/BSEC Logo.jpg';
import logo3 from '../../Images/CDBL Logo.jpg';
import logo4 from '../../Images/DSE Logo.jpg';

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

const captions = [
  { line1: 'Innovative Solutions', line2: 'To Satisfy All Services' },
  { line1: 'Dedicated To', line2: 'Provide Quality Service' },
  { line1: 'Deliver Tangible Results', line2: 'Your Trusted Financial Partner' },
];

const slides = [
  { img: img1, alt: 'Capital market analysis and investment strategy' },
  { img: img2, alt: 'Corporate advisory and financial planning' },
  { img: img3, alt: 'Professional financial consultancy services' },
];

const services = [
  { img: img4, title: 'Portfolio Management', path: '/services/portfolio' },
  { img: img5, title: 'Issue Management', path: '/services/issue-management' },
  { img: img6, title: 'Corporate Advisory', path: '/services/corporate-advisory' },
  { img: img7, title: 'Underwriting of Shares', path: '/services/underwriting' },
];

const stakeholderLogos = [
  { src: logo1, alt: 'BMBA - Bangladesh Merchant Bankers Association' },
  { src: logo2, alt: 'BSEC - Bangladesh Securities and Exchange Commission' },
  { src: logo3, alt: 'CDBL - Central Depository Bangladesh Limited' },
  { src: logo4, alt: 'DSE - Dhaka Stock Exchange' },
];

const achievementLogos = [
  { src: LovelloLogo, alt: 'Lovello' },
  { src: BBSLogo, alt: 'BBS Cables Limited' },
  { src: BIFCLLogo, alt: 'BIFCL' },
  { src: DeltaLogo, alt: 'Delta Spinners' },
  { src: FamilyTexLogo, alt: 'Family Tex (BD) Limited' },
  { src: GoldenHarvestLogo, alt: 'Golden Harvest Agro Industries' },
  { src: GPHIspatLogo, alt: 'GPH Ispat Limited' },
  { src: IfadLogo, alt: 'IFAD Autos Limited' },
  { src: RoyalTulipLogo, alt: 'Royal Tulip Sea Pearl Beach Resort' },
  { src: SaifPowerLogo, alt: 'Saif Powertec Limited' },
  { src: SIBLLogo, alt: 'Social Islami Bank Limited' },
  { src: SunlifeLogo, alt: 'Sunlife Insurance Company' },
  { src: TallySpinLogo, alt: 'Tallu Spinning Mills' },
  { src: client1logo, alt: 'Client partner' },
];

function Home() {
  const [captionIndex, setCaptionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCaptionIndex((prev) => (prev + 1) % captions.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Carousel */}
      <section className="hero-carousel">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-slide-content">
                <img src={slide.img} alt={slide.alt} />
                <div className="caption">
                  <h2 className="caption-line1">{captions[captionIndex].line1}</h2>
                  <p className="caption-line2">{captions[captionIndex].line2}</p>
                  <Link to="/contact" className="caption-cta">Get In Touch</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stakeholders */}
      <section className="stakeholders-section">
        <h2 className="section-title">Our Stakeholders</h2>
        <div className="logo-track">
          <div className="logo-container">
            {stakeholderLogos.map((l, i) => (
              <img key={i} src={l.src} alt={l.alt} className="stakeholder-logo" />
            ))}
          </div>
          <div className="logo-container" aria-hidden="true">
            {stakeholderLogos.map((l, i) => (
              <img key={`dup-${i}`} src={l.src} alt="" className="stakeholder-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial solutions tailored to drive sustainable growth and value creation.
          </p>
          <div className="services-grid">
            {services.map((service, i) => (
              <Link to={service.path} className="service-card" key={i}>
                <div className="service-card-img">
                  <img src={service.img} alt={service.title} />
                </div>
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <span className="service-card-arrow">&rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements-section">
        <div className="section-container">
          <h2 className="section-title">Our Achievements</h2>
          <p className="section-subtitle">
            We are proud of the milestones we have achieved in the industry. Here are some of our key partnerships.
          </p>
          <div className="achievements-grid">
            {achievementLogos.map((logo, i) => (
              <div className="achievement-item" key={i}>
                <img src={logo.src} alt={logo.alt} className="achievement-logo" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
