import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Header.css';
import logo from '../../Assets/Images/Logo.jpeg';
import { Link, NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon

const Header = () => {
  const [isDownloadsDropdownOpen, setIsDownloadsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu

  const downloadsDropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  const closeDropdowns = () => {
    setIsDownloadsDropdownOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      downloadsDropdownRef.current &&
      !downloadsDropdownRef.current.contains(event.target)
    ) {
      setIsDownloadsDropdownOpen(false);
    }
    if (
      servicesDropdownRef.current &&
      !servicesDropdownRef.current.contains(event.target)
    ) {
      setIsServicesDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Banco Logo" className="logo-image" />
        </NavLink>
      </div>
      <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars /> {/* Render the hamburger icon */}
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active-link" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active-link" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</NavLink>
          </li>
          <li
            className={`nav-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`}
            ref={servicesDropdownRef}
            onClick={() => toggleDropdown(setIsServicesDropdownOpen)}
          >
            <span className="nav-link dropdown-toggle" role="button">
              Services
            </span>
            {isServicesDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Nav.Link as={Link} to="/services" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Portfolio Management</Nav.Link></li>
                <li><NavLink to="/service2" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Issue Management</NavLink></li>
                <li><NavLink to="/service3" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Corporate Advisory</NavLink></li>
                <li><NavLink to="/service4" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Underwriting of Share</NavLink></li>
              </ul>
            )}
          </li>
          <li
            className={`nav-item dropdown ${isDownloadsDropdownOpen ? 'open' : ''}`}
            ref={downloadsDropdownRef}
            onClick={() => toggleDropdown(setIsDownloadsDropdownOpen)}
          >
            <span className="nav-link dropdown-toggle" role="button">
              Downloads
            </span>
            {isDownloadsDropdownOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/download1" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Public Offering</NavLink></li>
                <li><NavLink to="/download2" className="dropdown-item" onClick={() => { closeDropdowns(); setIsMenuOpen(false); }}>Bo Related Form</NavLink></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active-link" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
