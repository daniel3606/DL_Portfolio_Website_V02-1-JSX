import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-text">Daniel Lim</span>
        </div>
        
        <div className="navbar-menu">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#additional-info" className="navbar-link">Additional Info</a>
          <a href="#resume" className="navbar-link">Resume</a>
          <a href="#contact" className="navbar-button">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
