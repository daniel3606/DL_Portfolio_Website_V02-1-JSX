import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import artfitCover from './assets/images/artfit_cover.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "ArtFit",
      shortDescription: "Full-stack web application for artists to showcase their artwork, featuring user authentication, payment integration, and a responsive design.",
      detailedDescription: "A comprehensive platform for artists to showcase and sell their artwork online. Features robust user authentication, secure payment processing, artist profiles, and an intuitive gallery system.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "CSS3", "JavaScript"],
      tags: ["Full-Stack", "E-commerce", "Art Platform", "Authentication", "Payment"],
      features: ["User Authentication", "Payment Integration", "Artist Profiles", "Gallery System", "Responsive Design"],
      image: artfitCover,
      liveUrl: "https://www.artfit.dev/",
      githubUrl: "https://github.com/daniel3606/ArtFit",
      status: "Live",
      color: "#8b5cf6",
      completionDate: "TBD",
      category: "Web Application"
    },
    {
      id: 2,
      title: "Side Quest",
      shortDescription: "A mobile application that allows user to travel to different places and explore the local culture and attractions with personalized quests.",
      detailedDescription: "An innovative travel companion app that gamifies exploration through personalized quests. Users discover local culture, hidden gems, and attractions through interactive challenges and location-based activities.",
      technologies: ["Figma", "UI/UX", "CSS3", "JavaScript", "Mobile Design"],
      tags: ["Mobile App", "Travel", "UI/UX", "Gamification", "Location-Based"],
      features: ["Personalized Quests", "Location Tracking", "Cultural Discovery", "Interactive Challenges", "Social Features"],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2100",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      color: "#06b6d4",
      completionDate: "2024",
      category: "Mobile Application"
    },
    {
      id: 3,
      title: "AR Hair Studio",
      shortDescription: "A mobile application that allows user to try on different hairstyles and colors with the help of AR technology.",
      detailedDescription: "An immersive augmented reality application that revolutionizes hair styling. Users can virtually try on different hairstyles, colors, and cuts using advanced AR technology and realistic hair simulation.",
      technologies: ["Unity", "Blender", "8th Wall", "C#", "TypeScript", "AR Core"],
      tags: ["AR/VR", "Beauty Tech", "Mobile App", "3D Modeling", "Real-time"],
      features: ["AR Hair Try-On", "Color Simulation", "Real-time Tracking", "3D Hair Models", "Photo Capture"],
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      color: "#06b6d4",
      completionDate: "TBD",
      category: "Mobile Application"
    },
    {
      id: 4,
      title: "Scribble AI",
      shortDescription: "A web application that allows user to draw a picture and the application will generate a AI-powered image of the picture.",
      detailedDescription: "An innovative AI-powered drawing application that transforms simple sketches into detailed, professional-quality images using advanced machine learning models and computer vision techniques.",
      technologies: ["Python", "PyTorch", "Streamlit", "Hugging Face", "OpenCV"],
      tags: ["AI/ML", "Computer Vision", "Image Generation", "Deep Learning", "Creative"],
      features: ["Sketch to Image", "AI Enhancement", "Style Transfer", "Real-time Processing", "Export Options"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2032",
      liveUrl: "#",
      githubUrl: "#",
      status: "In Development",
      color: "#ef4444",
      completionDate: "TBD",
      category: "AI Application"
    },
    {
      id: 5,
      title: "Future Projects",
      shortDescription: "New exciting projects are in development. Stay tuned for more innovative solutions and creative applications!",
      detailedDescription: "Upcoming projects will explore cutting-edge technologies including blockchain applications, advanced AI integrations, IoT solutions, and next-generation web experiences.",
      technologies: ["React", "Node.js", "Blockchain", "AI/ML", "IoT"],
      tags: ["Innovation", "Emerging Tech", "Blockchain", "Next-Gen", "Experimental"],
      features: ["Cutting-edge Tech", "Innovation Focus", "Scalable Solutions", "User-Centric", "Future-Ready"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2069",
      liveUrl: "#",
      githubUrl: "#",
      status: "Planning",
      color: "#10b981",
      completionDate: "TBD",
      category: "Future Projects"
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
                  {project.liveUrl !== "#" ? (
                    <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  ) : (
                    <span className="project-link disabled">Coming Soon</span>
                  )}
                  {project.githubUrl !== "#" ? (
                    <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  ) : (
                    <span className="project-link disabled">Private</span>
                  )}
                </div>
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category" style={{ color: project.color }}>
                    {project.category}
                  </span>
                </div>
                <p className="project-description">{project.shortDescription}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag" style={{ 
                      backgroundColor: project.color + '20',
                      color: project.color,
                      borderColor: project.color + '40'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-meta">
                  <span className="completion-date">Completed: {project.completionDate}</span>
                  <span className="feature-count">{project.features.length} Features</span>
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

