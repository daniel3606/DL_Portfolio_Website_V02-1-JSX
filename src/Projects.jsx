import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import artfitCover from './assets/images/artfit_cover.png';

function Projects() {
  const projects = [
    {
      title: "ArtFit",
      description: "Full-stack web application for artists to showcase their artwork, featuring user authentication, payment integration, and a responsive design.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "CSS3", "JavaScript"],
      image: artfitCover,
      liveUrl: "https://www.artfit.dev/",
      githubUrl: "https://github.com/daniel3606/ArtFit"
    },
    {
      title: "Side Quest",
      description: "A mobile application that allows user to travel to different places and explore the local culture and attractions with personalized quests.",
      technologies: ["Figma", "UI/UX", "CSS3"],
      image: "https://www.figma.com/design/FXXfsnlbR1YK03vDnxAZdQ/SideQuest-Updates?node-id=0-1&p=f&t=E7BaKMuXvO7EHaPg-0",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AR Hair Studio",
      description: "A mobile application that allows user to try on different hairstyles and colors with the help of AR technology.",
      technologies: ["Unity", "Blender", "8th Wall", "C#", "TypeScript"],
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Task+Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Scribble AI",
      description: "A web application that allows user to draw a picture and the application will generate a AI-powered image of the picture.",
      technologies: ["Python", "Pytorch", "Streamlit", "Hugging Face"],
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Task+Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "To be updated",
      description: "to be updated",
      technologies: [],
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Task+Management",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "To be updated",
      description: "to be updated",
      technologies: [],
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Task+Management",
      liveUrl: "#",
      githubUrl: "#"
    }
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
      </div>
    </div>
  );
}

export default Projects;

