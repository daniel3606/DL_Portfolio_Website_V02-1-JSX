import React from 'react';
import './Resume.css';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Daniel_Lim_Resume_v05.pdf';
    link.download = 'Daniel_Lim_Resume_v05.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1>Resume</h1>
          <button className="download-button" onClick={handleDownload}>
            Download PDF
          </button>
        </div>
        
        <div className="pdf-viewer-container">
          <iframe
            src="/Daniel_Lim_Resume_v05.pdf#toolbar=1&navpanes=1&scrollbar=1"
            className="pdf-viewer"
            title="Daniel Lim Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;

