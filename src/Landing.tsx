import React, { useEffect, useRef, useState } from "react";
import "./Landing.css";
import "./Components/Navbar"

// Move this outside so its identity is stable
const JOB_TITLES = ["UI/UX Designer", "Frontend Developer", "Product Designer"];

function Landing() {
  const [currentJobTitleIdx, setCurrentJobTitleIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedJobTitle, setDisplayedJobTitle] = useState("");

  // useRef for timeout id to avoid stale clears
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentTitle = JOB_TITLES[currentJobTitleIdx];

    const schedule = (fn: () => void, ms: number) => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(fn, ms);
    };

    if (isDeleting) {
      if (displayedJobTitle === "") {
        setIsDeleting(false);
        setCurrentJobTitleIdx((i) => (i + 1) % JOB_TITLES.length);
      } else {
        schedule(() => {
          setDisplayedJobTitle((prev) => prev.slice(0, -1));
        }, 50);
      }
    } else {
      if (displayedJobTitle.length < currentTitle.length) {
        schedule(() => {
          setDisplayedJobTitle(
            (prev) => prev + currentTitle[displayedJobTitle.length]
          );
        }, 75);
      } else {
        schedule(() => setIsDeleting(true), 2000);
      }
    }

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [displayedJobTitle, isDeleting, currentJobTitleIdx]);

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
                  I&apos;m a <span className="job-title-text">{displayedJobTitle}</span>
                  <span className="cursor" aria-hidden="true">|</span>
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
