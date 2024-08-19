import React ,{useState,useRef,useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Header.css';
import logo from '../../Assets/Images/Logo.jpeg';

const Header = () => {
  const [isDownloadsDropdownOpen, setIsDownloadsDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

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
          {/* <span className="logo-text">Banco</span> */}
        </NavLink>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" activeClassName="active-link" className="nav-link">About</NavLink>
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
                <li><NavLink to="/services" className="dropdown-item" onClick={closeDropdowns}>Portfolio Management</NavLink></li>
                <li><NavLink to="/service2" className="dropdown-item" onClick={closeDropdowns}>Issue Management</NavLink></li>
                <li><NavLink to="/service3" className="dropdown-item" onClick={closeDropdowns}>Corporate Advisory</NavLink></li>
                <li><NavLink to="/service4" className="dropdown-item" onClick={closeDropdowns}>Underwriting of Share</NavLink></li>
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
                <li><NavLink to="/download1" className="dropdown-item" onClick={closeDropdowns}>Public Offering</NavLink></li>
                <li><NavLink to="/download2" className="dropdown-item" onClick={closeDropdowns}>Bo Related Form</NavLink></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;