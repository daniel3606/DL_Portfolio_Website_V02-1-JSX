import React from 'react';
import { Link } from 'react-router-dom';
import './SideProjects.css';

function SideProjects() {
  const sideProjects = [
    {
      id: 1,
      title: 'Study Helper',
      description: 'A focused study companion with ambient sounds, timers, and productivity features to enhance your learning experience.',
      image: '/src/assets/images/study-helper-preview.png',
      link: '/study-helper',
      technologies: ['React', 'YouTube API', 'CSS3', 'JavaScript'],
      status: 'Live',
      color: '#8b5cf6'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'This very website! A modern, interactive portfolio showcasing my work, skills, and projects with smooth animations.',
      image: '/src/assets/images/portfolio-preview.png',
      link: '/',
      technologies: ['React', 'Vite', 'CSS3', 'JavaScript', 'GSAP'],
      status: 'Live',
      color: '#06b6d4'
    },
    {
      id: 3,
      title: 'File Converter',
      description: 'A file converter that converts files between different formats.',
      image: '/src/assets/images/portfolio-preview.png',
      link: '/',
      technologies: [],
      status: 'In Development',
      color: '#06b6d4'
    },
    {
      id: 4,
      title: 'Youtube Video Summarizer',
      description: 'A youtube video summarizer that summarizes the video into a short summary.s',
      image: '/src/assets/images/portfolio-preview.png',
      link: '/',
      technologies: [],
      status: 'In Development',
      color: '#06b6d4'
    },
    {
      id: 5,
      title: 'More Coming Soon...',
      description: 'I\'m constantly working on new side projects and experiments. Check back soon for more exciting projects!',
      image: '/src/assets/images/coming-soon.png',
      link: '#',
      technologies: ['React', 'Node.js', 'More...'],
      status: 'In Development',
      color: '#10b981'
    }
  ];

  return (
    <div className="side-projects-container">
      <div className="side-projects-content">
        <div className="side-projects-header">
          <h1>Side Projects</h1>
          <p>Personal projects and experiments that branch off from my main work. These are passion projects where I explore new technologies and ideas.</p>
        </div>

        <div className="side-projects-grid">
          {sideProjects.map((project) => (
            <div key={project.id} className="side-project-card">
              <div className="project-image-container">
                <div 
                  className="project-image-placeholder"
                  style={{ backgroundColor: project.color + '20' }}
                >
                  <div className="project-icon" style={{ color: project.color }}>
                    {project.id === 1 ? '📚' : project.id === 2 ? '💼' : '🚀'}
                  </div>
                </div>
                <div className="project-status" style={{ backgroundColor: project.color }}>
                  {project.status}
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{ borderColor: project.color + '40' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions">
                  {project.link !== '#' ? (
                    <Link 
                      to={project.link} 
                      className="project-button primary"
                      style={{ 
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                        borderColor: project.color
                      }}
                    >
                      View Project
                    </Link>
                  ) : (
                    <button 
                      className="project-button secondary"
                      disabled
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="side-projects-footer">
          <h3>Why Side Projects?</h3>
          <p>
            Side projects are where I experiment with new technologies, explore creative ideas, 
            and build tools that solve real problems. They allow me to learn beyond my day-to-day work 
            and create something unique that reflects my interests and passions.
          </p>
          <div className="footer-links">
            <Link to="/projects" className="footer-link">
              View Main Projects →
            </Link>
            <Link to="/contact" className="footer-link">
              Let's Collaborate →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProjects;
