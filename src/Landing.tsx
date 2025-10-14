// src/Landing.tsx
import React, { useState, useEffect } from "react";
import "./Landing.css";
import TextType from "./Components/TextType";

const JOB_TITLES = ["UI/UX Designer", "Frontend Developer", "Product Designer"];

function Landing() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 3;

  const scrollToPage = (pageIndex: number) => {
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

  return (
    <>
      <div className="snap-container">
        {/* Section 1 */}
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

      {/* Section 2 */}
      <section className="snap-page">
        <div className="section-content">
          <h2>Page 2</h2>
          <div>Some content here.</div>
        </div>
      </section>

      {/* Section 3 */}
        <section className="snap-page">
          <div className="section-content">
            <h2>Page 3</h2>
            <p>More content here.</p>
          </div>
        </section>
      </div>

      {/* Scroll Navigation Arrows */}
      {currentPage > 0 && (
        <button 
          className="scroll-arrow scroll-arrow-up"
          onClick={() => scrollToPage(currentPage - 1)}
          aria-label="Scroll up"
        >
          ↑
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button 
          className="scroll-arrow scroll-arrow-down"
          onClick={() => scrollToPage(currentPage + 1)}
          aria-label="Scroll down"
        >
          ↓
        </button>
      )}
    </>
  );
}

export default Landing;
