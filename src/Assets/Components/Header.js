import React from 'react';
import '../CSS/Header.css'
const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#about" className="nav-link">About</a>
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">More</button>
          <div className="dropdown-content">
            <a href="#item1">Item 1</a>
            <a href="#item2">Item 2</a>
            <a href="#item3">Item 3</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
