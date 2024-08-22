import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/Logo.jpeg';
import '../../CSS/NaviBar.css';

function Navigation() {
  const [isServicesOpen, setServicesOpen] = useState(false);
  const [isDownloadOpen, setDownloadOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleServices = () => {
    setServicesOpen(prev => !prev);
  };

  const toggleDownload = () => {
    setDownloadOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setServicesOpen(false);
      setDownloadOpen(false);
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isDropdownOpen ? 'dropdown-open' : 'bg-light'}`}>
      <div className="container-fluid" ref={dropdownRef}>
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-image" />
        </NavLink>
        <button
          className={`navbar-toggler ${isDropdownOpen ? 'active' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isDropdownOpen}
          aria-label="Toggle navigation"
          onClick={() => setDropdownOpen(prev => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                onClick={() => {
                  setDropdownOpen(false);
                  setServicesOpen(false);
                  setDownloadOpen(false);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => {
                  setDropdownOpen(false);
                  setServicesOpen(false);
                  setDownloadOpen(false);
                }}
              >
                About
              </NavLink>
            </li>
            <li className={`nav-item dropdown ${isServicesOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                type="button"
                aria-expanded={isServicesOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggleServices();
                }}
              >
                Services
              </button>
              <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                <li>
                  <NavLink
                    to="/services"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Portfolio Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service2"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Issue Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service3"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Corporate Advisory
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service4"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Underwriting of Shares
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={`nav-item dropdown ${isDownloadOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle"
                type="button"
                aria-expanded={isDownloadOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggleDownload();
                }}
              >
                Download
              </button>
              <ul className={`dropdown-menu ${isDownloadOpen ? 'show' : ''}`}>
                <li>
                  <NavLink
                    to="/download1"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Public Offering
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/download2"
                    className="dropdown-item"
                    onClick={() => {
                      setDropdownOpen(false);
                      setServicesOpen(false);
                      setDownloadOpen(false);
                    }}
                  >
                    Bo Related Form
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => {
                  setDropdownOpen(false);
                  setServicesOpen(false);
                  setDownloadOpen(false);
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
