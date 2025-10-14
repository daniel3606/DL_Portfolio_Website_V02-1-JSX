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
          <Link to="/additional-info" className={`navbar-link ${location.pathname === '/additional-info' ? 'active' : ''}`}>Additional Info</Link>
          <Link to="/resume" className={`navbar-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
          <Link to="/contact" className={`navbar-button ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Me</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

