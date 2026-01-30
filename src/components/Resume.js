import React from 'react';
import './Resume.css';

function Resume() {
  const openResume = () => {
    window.open(`${process.env.PUBLIC_URL}/resume.pdf`, '_blank');
  };

  return (
    <section id="resume" className="resume">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="resume-description">
          View my complete professional experience, education, and skills.
        </p>
        <button onClick={openResume} className="view-resume-button">
          View Full Resume (PDF)
        </button>
      </div>
    </section>
  );
}

export default Resume;