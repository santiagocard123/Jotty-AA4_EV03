import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleBurgerClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <button className={`navbar-burger ${isActive ? 'is-active' : ''}`} onClick={handleBurgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
