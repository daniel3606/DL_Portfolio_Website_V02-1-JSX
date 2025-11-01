import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './ProjectDetail.css';
import { mainProjects, sideProjects } from './data/projectsData';

function ProjectDetail() {
  const { projectSlug } = useParams();
  const location = useLocation();
  
  // Determine if this is a main project or side project based on the route
  const isMainProject = location.pathname.startsWith('/projects/');
  const projects = isMainProject ? mainProjects : sideProjects;
  
  // Map URL slugs to project IDs for main projects
  const mainProjectMap = {
    'artfit': 1,
    'side-quest': 2,
    'ar-hair-studio': 3,
    'scribble-ai': 4,
    'future-projects': 5
  };
  
  // Map URL slugs to project IDs for side projects
  const sideProjectMap = {
    'study-helper': 1,
    'portfolio': 2,
    'file-converter': 3,
    'youtube-summarizer': 4
  };
  
  const projectMap = isMainProject ? mainProjectMap : sideProjectMap;
  const projectId = projectMap[projectSlug];
  const project = projects.find(p => p.id === projectId);
  
  const backPath = isMainProject ? '/projects' : '/side-projects';
  const backText = isMainProject ? '← Back to Projects' : '← Back to Side Projects';
  
  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <p>The project you're looking for doesn't exist.</p>
          <Link to={backPath} className="back-button">
            {backText}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        {/* Header */}
        <div className="project-detail-header">
          <Link to={backPath} className="back-button">
            {backText}
          </Link>
          
          <div className="project-hero">
            <div className="project-hero-image">
              <img src={project.image} alt={project.title} />
              <div className="project-status-badge" style={{ backgroundColor: project.color }}>
                {project.status}
              </div>
            </div>
            
            <div className="project-hero-content">
              <div className="project-category-detail" style={{ color: project.color }}>
                {project.category}
              </div>
              <h1 className="project-title-detail">{project.title}</h1>
              <p className="project-short-desc">{project.shortDescription}</p>
              
              <div className="project-actions-detail">
                {/* For main projects, use liveUrl, for side projects use link */}
                {((isMainProject && project.liveUrl !== '#') || (!isMainProject && project.link !== '#')) && (
                  <a 
                    href={isMainProject ? project.liveUrl : project.link}
                    target={isMainProject ? "_blank" : "_self"}
                    rel={isMainProject ? "noopener noreferrer" : undefined}
                    className="action-button primary"
                    style={{ 
                      background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
                      borderColor: project.color
                    }}
                  >
                    {project.status === 'Live' ? 'Launch App' : 'View Preview'}
                  </a>
                )}
                
                {/* GitHub link for main projects */}
                {isMainProject && project.githubUrl && project.githubUrl !== '#' && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-button secondary"
                    style={{ 
                      borderColor: project.color,
                      color: project.color,
                      background: 'transparent'
                    }}
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Sections */}
        <div className="project-detail-body">
          {/* Overview */}
          <section className="detail-section">
            <h2>Project Overview</h2>
            <p className="detailed-description">{project.detailedDescription}</p>
          </section>
          
          {/* Features */}
          <section className="detail-section">
            <h2>Key Features</h2>
            <div className="features-grid">
              {project.features.map((feature, index) => (
                <div key={index} className="feature-item" style={{ borderColor: project.color + '40' }}>
                  <div className="feature-icon" style={{ color: project.color }}>✦</div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </section>
          
          {/* Technologies */}
          <section className="detail-section">
            <h2>Technologies Used</h2>
            <div className="tech-list">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-item" style={{ 
                  backgroundColor: project.color + '20',
                  borderColor: project.color + '40',
                  color: project.color
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </section>
          
          {/* Tags */}
          <section className="detail-section">
            <h2>Project Tags</h2>
            <div className="tags-list">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag-item" style={{ 
                  backgroundColor: project.color + '10',
                  borderColor: project.color + '30',
                  color: project.color
                }}>
                  #{tag}
                </span>
              ))}
            </div>
          </section>
          
          {/* Challenges & Learnings */}
          {project.challenges && (
            <section className="detail-section">
              <h2>Challenges & Solutions</h2>
              <ul className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </section>
          )}
          
          {project.learnings && (
            <section className="detail-section">
              <h2>Key Learnings</h2>
              <ul className="learnings-list">
                {project.learnings.map((learning, index) => (
                  <li key={index}>{learning}</li>
                ))}
              </ul>
            </section>
          )}
          
          {/* Future Features */}
          {project.futureFeatures && (
            <section className="detail-section">
              <h2>Future Enhancements</h2>
              <div className="future-features">
                {project.futureFeatures.map((feature, index) => (
                  <div key={index} className="future-feature" style={{ borderColor: project.color + '30' }}>
                    <div className="future-icon" style={{ color: project.color }}>🚀</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* Project Meta */}
          <section className="detail-section">
            <h2>Project Information</h2>
            <div className="project-info-grid">
              <div className="info-item">
                <span className="info-label">Completion</span>
                <span className="info-value">{project.completionDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Category</span>
                <span className="info-value">{project.category}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value" style={{ color: project.color }}>{project.status}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Features</span>
                <span className="info-value">{project.features.length} Total</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;