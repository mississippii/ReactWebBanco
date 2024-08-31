/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import './..//../CSS/About.css';
import img1 from '../../Images/Dp.jpg';
import img2 from '../../Images/Logo.jpeg';

const boardMembers = [
  {
    name: 'Khaled Saifullah',
    title: 'CEO & Managing Director',
    img: img1,
    description: `Mr. Khaled Saifullah is serving as the CEO and Managing Director at SIM Capital Limited, 
    bringing a wealth of expertise from his 15-year career with reputed institutions such as EBL and IDLC 
    in the Bangladesh capital market. His professional journey includes a four-year tenure at EBL SL, 
    where he focused on comprehensive research into economic trends, industry dynamics, and company analysis. 
    Following this, he spent nearly a decade at IDLC SL, assuming various roles that encompassed leading 
    the business development teams, driving strategic transformations, and managing institutional portfolios.
    Mr. Saifullah further enriched his skill set through training in leadership and investing skills, 
    conducted in Thailand and India. His educational background includes graduation and post-graduation 
    from the University of Dhaka, in areas of Finance and Economics. He loves to read books on value investing, 
    behavioral finance, and history.`,
  },
  {
    name: 'Md. Mozaffar Hossain',
    title: 'Director',
    img: img1,
    description: `Md. Mozaffar Hossain is the founder of “SIM GROUP” and the Managing Director of Mozaffar Hossain Spinning Mills Limited,
                 a public listed company. He was the Member of Parliament and a Member of standing committee for ministry of science and Technology, 
                 Bangladesh Parliament. Mr. Hossain is a Textile Engineer and completed BSC in Textile Technology. He is the Ex-President of Textile
                  Engineer Association, Ex-Director of BTMA.During his long entrepreneurial career, he successfully established enterprises 
                  like Authentic Color Limited, SIM Fabrics Limited, Mozaffar Hossain Spinning Mills Limited and SIM Apparels Limited. `,
  },
  {
    name: 'A.S.M. Rakibul Hasan',
    title: 'Director',
    img: img1,
    description: `A.S.M. Rakibul Hasan is a seasoned business leader with over 21 years of experience in managing and steering business operations.
                   As the Deputy Managing Director at SIM Group, he plays a pivotal role in overseeing the company's strategic initiatives and
                   ensuring the efficient operation of management processes.With a proven track record in managing revenues of BDT 20,000 million,
                  Rakibul Hasan has demonstrated exceptional skills in corporate finance and business management. His deep knowledge and expertise in 
                  these areas have been instrumental in driving the growth and success of SIM Group.Mr. Hasan is known for his strategic thinking, 
                  financial acumen, and ability to optimize business operations. He has completed his MBA from North South University (NSU).`,
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(boardMembers[0]);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="about-page">
      <section className="about-company">
        <div className="company-image">
          <img src={img2} alt="Company" />
        </div>
        <div className="company-text">
          <h1>About Our Company</h1>
          <p>
            Our company was founded with a vision to revolutionize the industry by providing innovative and reliable services...
          </p>
        </div>
      </section>

      <section className="about-board">
  <h2>Board of Directors</h2>
  <div className="board-members">
    {boardMembers.map((member, index) => (
      <div
        key={index}
        className={`board-member ${member.title.includes('CEO') ? 'ceo' : ''}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => handleMemberClick(member)}
        style={{ cursor: 'pointer' }}
      >
        <img src={member.img} alt={member.name} />
        <h3>{member.name}</h3>
        <p>{member.title}</p>
      </div>
    ))}
  </div>
</section>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-content-wrapper">
                <img
                  src={selectedMember.img}
                  alt="Profile Picture"
                  className="profile-picture"
                />
                <div className="modal-text">
                  <h5 className="fw-bold">{selectedMember.name}</h5>
                  <h6 className="fw-bold">{selectedMember.title}</h6>
                  <p>{selectedMember.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;