import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="Nick Genovese" />
            </div>
          <div className="about-text">
            <p>
              Senior R&D Engineer at Johnson & Johnson MedTech with a Masters degree from UPenn in Mechatronics and Robotic Systems and
proven expertise in robotics, automation, and complex hardware system development. Skilled at designing and scaling electromechanical
systems with a focus on rapid prototyping and cross-functional leadership. Passionate about developing innovative robotic solutions.
            </p>
            <p>
              My current role prioritizes innovation and creativity within the MedTech space. As a part of the Innovation and Partnerships 
              R&D team, I lead development of medical device solutions for various MedTech Surgery applications, specializing in 
              early-stage internal innovation and robotic system development. This work spans from battery-powered wearable therapeutic devices 
              for at-home patient use, to capital robotic-assisted surgical systems used by surgeons in the OR. I specialize in mechanical 
              design and structural architecture, electrical system and PCB development, and firmware integration. While I am unable to share specific
              details about my work projects until they have been publically launched, feel free to explore the work I have done outside of the office in the Projects section below!
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">SolidWorks</span>
                <span className="skill-tag">MATLAB</span>
                <span className="skill-tag">Minitab</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">ANSYS</span>
                <span className="skill-tag">MPLAB X IDE</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">HTML</span>
                {/* Add more skills */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;