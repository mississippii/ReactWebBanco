import React ,{useState,useRef,useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import '../CSS/Header.css';
import logo from '../../Assets/Images/logo.png';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
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
        <a href="/" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
          Banco
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><NavLink to="/" activeClassName="active-link" className="nav-link">Home</NavLink></li>
          <li className="nav-item"><NavLink to="/about" activeClassName="active-link" className="nav-link">About</NavLink></li>
          <li className="nav-item"><NavLink to="/services" activeClassName="active-link" className="nav-link">Services</NavLink></li>
          <li className="nav-item dropdown" ref={dropdownRef} onClick={toggleDropdown}>
  <span className="nav-link dropdown-toggle" role="button">
    Downloads
  </span>
  {isDropdownOpen && (
    <ul className="dropdown-menu show">
      <li><NavLink to="/download1" className="dropdown-item">Download 1</NavLink></li>
      <li><NavLink to="/download1" className="dropdown-item">Download 2</NavLink></li>
      <li><NavLink to="/download1" className="dropdown-item">Download 3</NavLink></li>
    </ul>
  )}
</li>

          <li className="nav-item"><NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;