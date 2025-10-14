// src/Landing.tsx
import React from "react";
import "./Landing.css";
import TextType from "./Components/TextType";

const JOB_TITLES = ["UI/UX Designer", "Frontend Developer", "Product Designer"];

function Landing() {
  return (
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
  );
}

export default Landing;
