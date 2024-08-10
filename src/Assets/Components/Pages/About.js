import React from 'react';
import './..//../CSS/About.css';
import img1 from '../../Images/blog2.jpg';
const About = () => {
  return (
    <div className="about-container">
      <section className="about-brief">
        <h1>About Our Company</h1>
        <p>
          Our company was founded with a vision to revolutionize the industry. Over the years, we have expanded our reach and continuously innovated to meet the evolving needs of our clients. We are committed to delivering exceptional value through our innovative solutions and unparalleled customer service.
        </p>
      </section>
      <section className="about-board">
        <h2>Board of Directors</h2>
        <div className="board-members">
          <div className="board-member" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://via.placeholder.com/150" alt="Board Member 1" />
            
            <h3>John Doe</h3>
            <p>Chairman</p>
          </div>
          <div className="board-member" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://via.placeholder.com/150" alt="Board Member 2" />
            <h3>Jane Smith</h3>
            <p>Director</p>
          </div>
          <div className="board-member" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="https://via.placeholder.com/150" alt="Board Member 3" />
            <h3>Michael Brown</h3>
            <p>Director</p>
          </div>
          

        </div>
      </section>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="d-flex align-items-center">
                <img 
                  src={img1} 
                  alt="Profile Picture" 
                  className="img-fluid rounded-circle" 
                  style={{ width: '150px', height: '150px', marginRight: '20px' }}
                />
                <div>
                  <h5>John Doe</h5>
                  <p>
                    John is a software engineer with over 5 years of experience in developing scalable web applications. 
                    He specializes in backend development, working with technologies like Java, Spring Boot, and microservices architecture. 
                    John is passionate about clean code, continuous learning, and solving complex problems.
                  </p>
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

