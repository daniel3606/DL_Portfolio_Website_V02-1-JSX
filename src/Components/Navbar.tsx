import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-text">Daniel Lim</Link>
        </div>
        
        <div className="navbar-menu">
          <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/projects" className={`navbar-link ${location.pathname === '/projects' ? 'active' : ''}`}>Projects</Link>
          <a href="#additional-info" className="navbar-link">Additional Info</a>
          <a href="#resume" className="navbar-link">Resume</a>
          <a href="#contact" className="navbar-button">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
