import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Load Up</div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-actions">
        <Link to="/login" className="account-button">Login</Link>
        <Link to="/signup" className="account-button">Sign Up</Link>
        <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
        <ul className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
          <li><a href="#provisioning-examples" className="dropdown-link">How Does it Work?</a></li>
          <li><a href="#provisioning-examples" className="dropdown-link">About Us</a></li>
          <li><a href="#provisioning-examples" className="dropdown-link">Support</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
