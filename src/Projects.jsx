import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "ArtFit",
      description: "Full-stack web application for artists to showcase their artwork, featuring user authentication, payment integration, and a responsive design.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=E-Commerce+Platform",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Task+Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      image: "https://via.placeholder.com/400x250/6d28d9/ffffff?text=Weather+Dashboard",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const playgroundItems = [
    {
      title: "Study Helper",
      description: "An interactive tool to help organize and optimize your study sessions.",
      status: "Active",
      link: "/study-helper"
    },
    // Add more playground items as needed
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>Here are some of my recent projects showcasing my skills in frontend development, UI/UX design, and full-stack development.</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Playground Section */}
        <div className="playground-section">
          <div className="playground-header">
            <h2>Playground</h2>
            <p>Experimental projects and explorations of new technologies and ideas.</p>
          </div>
          
          <div className="playground-grid">
            {playgroundItems.map((item, index) => (
              <div key={index} className="playground-ticket">
                <div className="ticket-status-badge">{item.status}</div>
                <div className="ticket-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="ticket-footer">
                  <Link to={item.link} className="ticket-button">
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

