import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Pontifex: Building a better network",
      summary: [
        "A networking dashboard that enables users to create an account and keep an up to date record of their connections and interactions. I created this tool as I struggled with my own journey of reaching out to prospective mentors and keeping track of my conversations and follow ups. This tool is designed for anyone building and growing their network, and goes beyond a basic contact book to contextualize meetings, conversations, follow-ups, and forgotten details that leads to stronger and more impactful relationships.",
        "Built with React, Vite, and Supabase for the backend, Pontifex offers a seamless user experience with secure authentication and real-time data management. The application also integrates Resend for email notifications, ensuring users never miss a follow-up or important update regarding their connections.",
        "Click the link below to explore Pontifex and take control of your networking journey!"
      ],
      skills: ["React", "JavaScript", "HTML5", "CSS", "Vite", "Supabase", "Resend"],
      image: "/images/pontifexapp.png", // Place images in public/images folder
      link: "https://pontifex-app.vercel.app/" // Optional - can be null
    },
    {
      id: 2,
      title: "Custom 3D Printer: In Progress!!",
      summary: [
        "A custom 3D printer project aimed at creating a innovative two nozzle printing experience. This project involves designing and building the printer's hardware (with some 3D printed parts!), developing the firmware, and creating a web interface for users to interact with the printer.",
        "The dual nozzle system allows for multi-material printing, enabling users to create complex objects with varying properties. The web interface provides an intuitive platform for users to upload designs, monitor print progress, and control printer settings remotely.",
        "This project is a testament to my passion for mechanical design, electronics, and software development, and I am excited to share updates as the project progresses!"
      ],
        skills: ["3D Printing", "SolidWorks", "Arduino", "Mechanical Design"],
      image: "/images/staytuned.jpg",
      link: null // Example of project without a link
    },
    {
      id: 3,
      title: "My Personal Portfolio (aka this website!)",
      summary: [
        "My own personal portfolio! Built with React to showcase my projects, skills, and experience in a clean and comprehensive design."
      ],
      skills: ["React", "CSS", "HTML"],
      image: "/images/website.png",
      link: "https://pontifex-app.vercel.app/" 
    },
    {
      id: 4,
      title: "MEAM 510: Final Robotics Project",
      summary: [
        "MEAM 510 with Professor Mark Yim at the University of Pennsylvania provided a hands-on experience in designing and building robotic systems from the ground up. The robot was constructed using a combination of 3D printed parts and off-the-shelf components, and was programmed in C++ to perform a range of both autonomous functions and remote controlled tasks via wifi.",
        "The final project was a versatile robot designed for various tasks, including infrared object tracking, wall sensing, and user-controlled navigation. This project showcases fundamental skills in mechanical design, circuit-building, programming, and system integration, and was the spark of my robotics interest that has carried me throughout my career.",
      ],
      skills: ["Circuit Fabrication", "Mechanical Design", "C++"],
      image: "/images/robot.png",
      imageSize: "small",
      link: null // Example of project without a link
    },
    {
      id: 5,
      title: "PVRE: Portable Water Purification System",
      summary: [
        "Water borne illnesses pose a great health risk globally. Roughly 2.5 billion people do not have access to safe water and over 3.5 million people perish yearly from water-related disease. Ghana is a developing nation that suffers from dangerously high quantities of water borne illnesses, with 25% of child deaths under the age of 5 due to diarrhea, and 80% of diseases caused by unsafe water.", 
        "Team PVRE’s goal is to create a cost-efficient, low-maintenance device that allows rural communities to access water purification methods implementable with local water storage locations. Based on discussions with stakeholders in Ghana, the team designed a self sustaining, long term, low-maintenance water purification and filtration system to implement at the exit of communal storage tanks. The system utilizes battery stored solar energy to power an ultraviolet germicidal lamp. The water flows through a spindown filter and enters a chamber that contains the ultraviolet light, deactivating any bacteria or protozoa within the water.", 
        "After extensive power generation, turbidity, and UV intensity tests, PVRE was found to exceed the daily energy requirement (0.0375 kWh) by 3.5x, and was able to reduce water turbidity by 5x. The measured UV intensity was able to comfortably inactivate the majority of pathogens with an average safety factor of 3.5x."
      ],
      skills: ["Mechanical Design", "Energy Optimization", "Fluid Dynamics"],
      awards: ["UPenn School of Engineering Senior Design Finalist", "William K. Gemill Memorial Prize for Outstanding Creativity", "Leadership Award"],
      image: "/images/pvre.png",
      link: null // Example of project without a link
    },
    // Add more projects as needed
  ];

  // Add this line right here:
console.log("Project with small image:", projects.find(p => p.imageSize === 'small'));

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-summary">
                  {Array.isArray(project.summary) ? (
                    project.summary.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))
                  ) : (
                    <p>{project.summary}</p>
                  )}
                </div>
                {/* Awards section - only renders if awards exist */}
                {project.awards && project.awards.length > 0 && (
                  <div className="project-awards">
                    <h4>Awards & Recognition</h4>
                    <ul className="awards-list">
                      {project.awards.map((award, index) => (
                        <li key={index}>{award}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="project-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
                {project.link && (
                  <div className="project-link">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </div>
                )}
              </div>
              <div className={`project-image ${project.imageSize === 'small' ? 'project-image-small' : ''}`}>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;