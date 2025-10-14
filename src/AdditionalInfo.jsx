import React from 'react';
import './AdditionalInfo.css';

function AdditionalInfo() {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'] },
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Prototyping'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Netlify', 'VS Code', 'Webpack'] }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Led frontend development for multiple client projects, implemented responsive designs, and mentored junior developers.',
      achievements: ['Improved page load times by 40%', 'Led team of 5 developers', 'Implemented design system']
    },
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      period: '2020 - 2022',
      description: 'Designed user interfaces for web and mobile applications, conducted user research, and created design systems.',
      achievements: ['Increased user engagement by 25%', 'Created comprehensive design system', 'Conducted 50+ user interviews']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2019 - 2020',
      description: 'Developed responsive web applications using React and modern JavaScript frameworks.',
      achievements: ['Built 10+ client projects', 'Reduced bug reports by 30%', 'Implemented automated testing']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of California, Berkeley',
      year: '2015 - 2019',
      description: 'Focused on software engineering, human-computer interaction, and web development.'
    },
    {
      degree: 'UI/UX Design Certificate',
      school: 'General Assembly',
      year: '2020',
      description: 'Intensive program covering user research, wireframing, prototyping, and design thinking.'
    }
  ];

  const certifications = [
    'AWS Certified Developer',
    'Google UX Design Certificate',
    'React Developer Certification',
    'Adobe Certified Expert'
  ];

  return (
    <div className="additional-info-container">
      <div className="additional-info-content">
        <div className="info-header">
          <h1>Additional Information</h1>
          <p>Learn more about my skills, experience, and professional background.</p>
        </div>

        <div className="info-sections">
          {/* Skills Section */}
          <section className="info-section">
            <h2>Skills & Technologies</h2>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h3>{skillGroup.category}</h3>
                  <div className="skill-items">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="info-section">
            <h2>Professional Experience</h2>
            <div className="experience-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item">
                  <div className="experience-header">
                    <h3>{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <ul className="achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="info-section">
            <h2>Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.degree}</h3>
                  <div className="education-meta">
                    <span className="school">{edu.school}</span>
                    <span className="year">{edu.year}</span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;

