import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Header.css';
import logo from '../../Assets/Images/Logo.jpeg';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDownloadsOpen, setIsDownloadsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesRef = useRef(null);
  const downloadsRef = useRef(null);

  const closeAll = () => {
    setIsServicesOpen(false);
    setIsDownloadsOpen(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
      if (downloadsRef.current && !downloadsRef.current.contains(e.target)) {
        setIsDownloadsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active-link' : ''}`;

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-inner">
        <NavLink to="/" className="logo-link" onClick={closeAll}>
          <div className="logo-flex">
            <img src={logo} alt="SIM Capital Limited Logo" className="logo-image" />
            <span className="company-name">SIM Capital Limited</span>
          </div>
        </NavLink>

        <button
          className="menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className={navLinkClass} onClick={closeAll} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={navLinkClass} onClick={closeAll}>
                About
              </NavLink>
            </li>
            <li
              className={`nav-item dropdown ${isServicesOpen ? 'open' : ''}`}
              ref={servicesRef}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                aria-expanded={isServicesOpen}
              >
                Services
              </button>
              {isServicesOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/services/portfolio" className="dropdown-item" onClick={closeAll}>
                      Portfolio Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/issue-management" className="dropdown-item" onClick={closeAll}>
                      Issue Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/corporate-advisory" className="dropdown-item" onClick={closeAll}>
                      Corporate Advisory
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services/underwriting" className="dropdown-item" onClick={closeAll}>
                      Underwriting of Shares
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`nav-item dropdown ${isDownloadsOpen ? 'open' : ''}`}
              ref={downloadsRef}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={() => setIsDownloadsOpen(!isDownloadsOpen)}
                aria-expanded={isDownloadsOpen}
              >
                Downloads
              </button>
              {isDownloadsOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/downloads/public-offering" className="dropdown-item" onClick={closeAll}>
                      Public Offering
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/downloads/bo-forms" className="dropdown-item" onClick={closeAll}>
                      BO Related Forms
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={navLinkClass} onClick={closeAll}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
