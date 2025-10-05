import React, { useState, useEffect } from 'react';
import "./Landing.css";

function Landing() {
  const [currentJobTitle, setCurrentJobTitle] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedJobTitle, setDisplayedJobTitle] = useState('');
  
  const jobTitles = [
    "UI/UX Designer",
    "Frontend Developer", 
    "Product Designer"
  ];

  const baseText = "Hello! I'm Daniel Lim\nI'm am a";

  useEffect(() => {
    let timeout: number;
    const currentTitle = jobTitles[currentJobTitle];
    
    if (isDeleting) {
      if (displayedJobTitle === '') {
        setIsDeleting(false);
        setCurrentJobTitle((prev) => (prev + 1) % jobTitles.length);
      } else {
        timeout = setTimeout(() => {
          setDisplayedJobTitle(prev => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayedJobTitle.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayedJobTitle(prev => prev + currentTitle[displayedJobTitle.length]);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedJobTitle, isDeleting, currentJobTitle, jobTitles]);

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="intro-text">
          <div className="full-intro">
            <div className="intro-line">Hello! I'm Daniel Lim</div>
          <div className="intro-line">
            <span className="dynamic-text">I'm am a <span className="job-title-text">{displayedJobTitle}</span><span className="cursor">|</span></span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
