// src/Landing.jsx
import React, { useState, useEffect } from "react";
import "./Landing.css";
import "./Hero.css";
import "./Projects.css";
import "./SideProjects.css";
import "./About.css";
import TextType from "./Components/TextType";

const JOB_TITLES = ["UI/UX Designer", "Frontend Developer", "Product Designer"];

// Placeholder projects - you can replace with real data later
const PROJECTS = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
  { id: 6, title: "Project 6" },
];

function Landing() {
  const [currentPage, setCurrentPage] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const totalPages = 3;

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

  return (
    <>
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

      {/* Section 3 - Side Projects */}
      <section className="snap-page side-projects-section">
        <div className="section-content">
          <div className="side-projects-header">
            <h2>Side Projects</h2>
            <p>Personal projects and experiments</p>
          </div>
          
          <div className="side-projects-grid">
            <div className="side-project-card">
              <div className="project-icon">🚀</div>
              <h3>Project Alpha</h3>
              <p>A web application built with React and Node.js that helps developers manage their daily tasks more efficiently.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="side-project-card">
              <div className="project-icon">🎨</div>
              <h3>Design System</h3>
              <p>A comprehensive design system and component library built with React and TypeScript for consistent UI development.</p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Storybook</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            
            <div className="side-project-card">
              <div className="project-icon">⚡</div>
              <h3>API Tool</h3>
              <p>A lightweight API testing and documentation tool that makes it easy to test endpoints and generate documentation.</p>
              <div className="project-tech">
                <span className="tech-tag">Vue.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">PostgreSQL</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - About Me */}
      <section className="snap-page about-section">
        <div className="section-content">
          <div className="about-header">
            <h2>About Me</h2>
            <p>Get to know me better</p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate developer and designer with a love for creating 
                beautiful, functional digital experiences. With expertise in modern 
                web technologies, I bring ideas to life through clean code and 
                thoughtful design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="about-skills">
              <h3>Core Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">React & JavaScript</div>
                <div className="skill-item">UI/UX Design</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">CSS & Styling</div>
                <div className="skill-item">Git & Version Control</div>
                <div className="skill-item">Problem Solving</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Landing;

