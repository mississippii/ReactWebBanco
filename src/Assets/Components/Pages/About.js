import React, { useState } from 'react';
import './..//../CSS/About.css';
import img1 from '../../Images/Dp.jpg';

const boardMembers = [
  {
    name: 'John Doe',
    title: 'Chairman',
    img: img1,
    description: 'John is a software engineer with over 5 years of experience...',
  },
  {
    name: 'Jane Smith',
    title: 'Director',
    img: img1,
    description: 'Jane specializes in frontend development...',
  },
  {
    name: 'Michael Brown',
    title: 'Director',
    img: img1,
    description: 'Michael has extensive experience in DevOps...',
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState(boardMembers[0]);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
  };

  return (
    <div className="about-container">
      <section className="about-brief">
        <h1>About Our Company</h1>
        <p>
          Our company was founded with a vision to revolutionize the industry...
        </p>
      </section>
      <section className="about-board">
        <h2>Board of Directors</h2>
        <div className="board-members">
          {boardMembers.map((member, index) => (
            <div
              key={index}
              className="board-member"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => handleMemberClick(member)}
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
              <div className="d-flex align-items-center">
                <img
                  src={selectedMember.img}
                  alt="Profile Picture"
                  className="img-fluid rounded-circle"
                  style={{ width: '150px', height: '150px', marginRight: '20px' }}
                />
                <div>
                  <h5>{selectedMember.name}</h5>
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
