// src/Landing.jsx
import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';
import "./Landing.css";
import "./Hero.css";
import "./Projects.css";
import "./About.css";
import TextType from "./Components/TextType";
import SplashCursor from "./Components/SplashCursor";

const JOB_TITLES = ["UI/UX Designer", "Frontend Developer", "Product Designer"];

// Placeholder projects - you can replace with real data later
const PROJECTS = [
  { id: 1, title: "ArtFit" },
  { id: 2, title: "Side Quest" },
  { id: 3, title: "AR Hair Studio" },
  { id: 4, title: "Scribble AI" },
];

function Landing() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const totalPages = 3;
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const scrollToPage = (pageIndex) => {
    const container = document.querySelector('.snap-container');
    if (container) {
      const pageHeight = window.innerHeight;
      container.scrollTo({
        top: pageHeight * pageIndex,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = document.querySelector('.snap-container');
    if (container) {
      const scrollPosition = container.scrollTop;
      const pageHeight = window.innerHeight;
      const currentPageIndex = Math.round(scrollPosition / pageHeight);
      setCurrentPage(currentPageIndex);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const nextProjects = () => {
    if (currentProjectIndex < PROJECTS.length - 1) {
      setCurrentProjectIndex(currentProjectIndex + 1);
    }
  };

  const prevProjects = () => {
    if (currentProjectIndex > 0) {
      setCurrentProjectIndex(currentProjectIndex - 1);
    }
  };

  const getVisibleProjects = () => {
    const projects = [];
    for (let i = -1; i <= 1; i++) {
      const index = currentProjectIndex + i;
      if (index >= 0 && index < PROJECTS.length) {
        projects.push({ ...PROJECTS[index], position: i });
      }
    }
    return projects;
  };

  const handleCardClick = (project) => {
    // If it's a side card (left or right), scroll to that project
    if (project.position === -1) {
      // Left card - go to previous project
      if (currentProjectIndex > 0) {
        setCurrentProjectIndex(currentProjectIndex - 1);
      }
    } else if (project.position === 1) {
      // Right card - go to next project
      if (currentProjectIndex < PROJECTS.length - 1) {
        setCurrentProjectIndex(currentProjectIndex + 1);
      }
    }
    // Center card doesn't need to do anything on click
  };

  // Contact form handlers
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_9m2beit',
      'template_r58z7c7',
      formData,
      'IWauOUFwAXLu6hW7l'
    ).then(
      () => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('Error sending email:', error);
        alert('There was a problem sending your message.');
      }
    );
  };

  return (
    <div className="snap-container">
      {/* Section 1 - Hero */}
      <section className="snap-page hero">
        <div className="landing-content">
          <div className="intro-text">
            {/* Background layer */}
            <div className="background-circle" aria-hidden="true" />

            {/* Foreground content */}
            <div className="full-intro">
              <div className="intro-line">This is me, Daniel Lim</div>
              <div className="intro-line">
                <span className="dynamic-text">
                  I&apos;m a{" "}
                  <span className="job-title-text">
                    <TextType
                      text={JOB_TITLES}
                      typingSpeed={70}
                      pauseDuration={1000}
                      showCursor={true}
                      cursorCharacter="|"
                      textColors={["#8b5cf6", "#a78bfa", "#7c3aed"]}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Projects Carousel */}
      <section className="snap-page projects-section">
        <div className="section-content">
          <div className="projects-header">
            <h2>Featured Projects</h2>
            <p>Explore my latest work and creative solutions</p>
          </div>

          <div className="carousel-container">
            <div className="carousel-wrapper">
              {getVisibleProjects().map((project) => (
                <div
                  key={project.id}
                  className={`project-card ${
                    project.position === 0
                      ? 'center'
                      : project.position === -1
                      ? 'left'
                      : 'right'
                  }`}
                  onClick={() => handleCardClick(project)}
                >
                  <div className="project-card-content">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="carousel-indicators">
              {PROJECTS.map((_, index) => (
                <div
                  key={index}
                  className={`indicator ${index === currentProjectIndex ? 'active' : ''}`}
                  onClick={() => setCurrentProjectIndex(index)}
                />
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="projects-cta">
              <a href="/projects" className="view-all-projects-btn">
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    
    {/* Section 3 - Side Projects*/}
    <section className="snap-page about-section">
      <div className="section-content">
        <div className="about-header">
          <h3>Side Projects</h3>
          <p>All the projects that I play around in this website!</p>
        </div>
      </div>
    </section> 

    {/* Section 4 - Contact Me */}
    <section className="snap-page about-section">
      <div className="section-content">
        <div className="about-header">
          <h2>Get In Touch</h2>
          <p>I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together!</p>
        </div>
        
        <div className="about-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={3}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Landing;