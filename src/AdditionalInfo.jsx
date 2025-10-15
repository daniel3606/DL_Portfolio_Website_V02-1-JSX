import React from 'react';
import './AdditionalInfo.css';

function AdditionalInfo() {
  const interests = [
    { icon: '🥽', name: 'AR/VR Development', description: 'Passionate about creating immersive experiences and exploring the future of spatial computing' },
    { icon: '🎮', name: 'Gaming', description: 'Love exploring virtual worlds and game design principles' },
    { icon: '🤖', name: 'AI & Machine Learning', description: 'Fascinated by artificial intelligence and its potential to transform technology' },
    { icon: '📱', name: 'Mobile Development', description: 'Building intuitive and performant mobile applications' },
    { icon: '🎨', name: 'Creative Coding', description: 'Combining art and code to create interactive visual experiences' },
    { icon: '🚀', name: 'Space Tech', description: 'Following developments in space exploration and satellite technology' }
  ];

  const hobbies = [
    { icon: '📸', name: 'Photography' },
    { icon: '✈️', name: 'Travel' },
    { icon: '🎵', name: 'Music' },
    { icon: '📚', name: 'Reading' },
    { icon: '🏃', name: 'Fitness' },
    { icon: '🎬', name: 'Film & Cinema' },
    { icon: '🍳', name: 'Cooking' },
    { icon: '🎯', name: 'Gaming' }
  ];

  return (
    <div className="additional-info-container">
      <div className="additional-info-content">
        <div className="info-header">
          <h1>Beyond the Code</h1>
          <p>Get to know the person behind the projects - my passions, interests, and what makes me tick.</p>
        </div>

        <div className="info-sections">
          {/* About Me Section */}
          <section className="info-section about-section">
            <h2>About Me</h2>
            <p className="about-text">
              Hey there! 👋 I'm not just about code and pixels. When I'm not building cool projects or exploring the latest tech trends, 
              you'll find me diving deep into the world of AR/VR, capturing moments through my camera lens, or planning my next adventure. 
              I believe that the best developers are curious souls who draw inspiration from diverse experiences and perspectives.
            </p>
            <p className="about-text">
              My journey in tech has been driven by a genuine fascination with how technology can create meaningful connections and 
              solve real-world problems. Whether it's developing immersive VR experiences or crafting intuitive user interfaces, 
              I'm always excited to push boundaries and learn something new.
            </p>
          </section>

          {/* Interests Section */}
          <section className="info-section">
            <h2>Tech Interests & Passions</h2>
            <div className="interests-detailed-grid">
              {interests.map((interest, index) => (
                <div key={index} className="interest-detailed-card">
                  <div className="interest-detailed-icon">{interest.icon}</div>
                  <h3>{interest.name}</h3>
                  <p>{interest.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Hobbies Section */}
          <section className="info-section">
            <h2>Hobbies & Activities</h2>
            <div className="hobbies-grid">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-card">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <span className="hobby-name">{hobby.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Photo Gallery Placeholder Section */}
          <section className="info-section">
            <h2>Photo Gallery</h2>
            <div className="photo-gallery-placeholder">
              <div className="gallery-item">
                <div className="placeholder-box">
                  <span>📷</span>
                  <p>Add your favorite photos here!</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-box">
                  <span>🌍</span>
                  <p>Travel memories</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-box">
                  <span>💻</span>
                  <p>Tech adventures</p>
                </div>
              </div>
              <div className="gallery-item">
                <div className="placeholder-box">
                  <span>🎨</span>
                  <p>Creative moments</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;

