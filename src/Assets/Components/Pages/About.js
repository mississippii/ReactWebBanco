import React, { useState } from 'react';
import './../../CSS/About.css';
import img1 from '../../Images/Chairman.jpg';
import img2 from '../../Images/MD & CEO.jpg';
import img3 from '../../Images/Director.jpg';
import img4 from '../../Images/Logo.jpeg';

const boardMembers = [
  {
    name: 'A.S.M.Rakibul Hasan',
    title: 'Chairman',
    img: img1,
    description: `A.S.M.Rakibul Hasan is the Chairman at SIM Capital Limited, 
                  bringing a wealth of expertise from his 15-year career with reputed institutions such as EBL and IDLC 
                  in the Bangladesh capital market. His professional journey includes a four-year tenure at EBL SL, 
                  where he focused on comprehensive research into economic trends, industry dynamics, and company analysis. 
                  Following this, he spent nearly a decade at IDLC SL, assuming various roles that encompassed leading 
                  the business development teams, driving strategic transformations, and managing institutional portfolios.
                  Mr. Saifullah further enriched his skill set through training in leadership and investing skills, 
                  conducted in Thailand and India. His educational background includes graduation and post-graduation 
                  from the University of Dhaka, in areas of Finance and Economics. He loves to read books on value investing, 
                  behavioral finance, and history.`
  },
  {
    name: 'Khaled Saifullah',
    title: 'CEO & Managing Director',
    img: img2,
    description: `Mr. Khaled Saifullah is serving as the CEO and Managing Director at SIM Capital Limited, 
                  bringing a wealth of expertise from his 15-year career with reputed institutions such as EBL and IDLC 
                  in the Bangladesh capital market. His professional journey includes a four-year tenure at EBL SL, 
                  where he focused on comprehensive research into economic trends, industry dynamics, and company analysis. 
                  Following this, he spent nearly a decade at IDLC SL, assuming various roles that encompassed leading 
                  the business development teams, driving strategic transformations, and managing institutional portfolios.
                  Mr. Saifullah further enriched his skill set through training in leadership and investing skills, 
                  conducted in Thailand and India. His educational background includes graduation and post-graduation 
                  from the University of Dhaka, in areas of Finance and Economics. He loves to read books on value investing, 
                  behavioral finance, and history.`
  },
  {
    name: 'A.S. M. Raisul Hasan Shoaib',
    title: 'Director',
    img: img3,
    description: `A. S. M. Raisul Hasan Shoaib is serving as Director of SIM Capital Limited. His father’s name is Al-Haj Md.
                  Mozzaffar Hossain and mother name is Mrs. Rahima Hossain. He was born in Dhaka, Bangladesh on 06-May-1989.
                  He is a Graduate from NSU; Bangladesh. He is a dynamic business personality. His acumen in business and 
                  flexible manner in terms of public relations made him a role model in developing the culture of the organization.`,
  }
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(boardMembers[0]);

  return (
      <div className="about-page">
        {/* Hero Section */}
        <section className="company-hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">About SIM Capital</h1>
                <p className="hero-description">
                  Pioneering financial excellence since our inception, SIM Capital Limited stands at the forefront
                  of Bangladesh's financial services industry. With a commitment to innovation and client success,
                  we deliver tailored solutions that drive sustainable growth and value creation.
                </p>
              </div>
              <div className="hero-image">
                <img src={img4} alt="SIM Capital Headquarters" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        {/* Board of Directors Section */}
        <section className="leadership-section">
          <div className="container">
            <div className="section-header">
              <h2>Board of Directors</h2>
            </div>

            <div className="leadership-grid">
              {boardMembers.map((member, index) => (
                  <div
                      key={index}
                      className="leader-card"
                      onClick={() => {
                        setSelectedMember(member);
                        document.getElementById('profileModal').showModal();
                      }}
                  >
                    <div className="card-image">
                      <img src={member.img} alt={member.name} />
                      <div className="card-overlay">
                        <span className="view-profile">View Profile →</span>
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="leader-name">{member.name}</h3>
                      <p className="leader-title">{member.title}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Profile Modal */}
        <dialog className="profile-modal" id="profileModal">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{selectedMember.name}</h3>
              <button
                  onClick={() => document.getElementById('profileModal').close()}
                  className="close-button"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="profile-image">
                <img src={selectedMember.img} alt={selectedMember.name} />
              </div>
              <div className="profile-info">
                <h4 className="designation">{selectedMember.title}</h4>
                <div className="bio-scroll">
                  <p className="bio-text">{selectedMember.description}</p>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
  );
};

export default About;