import React from 'react';
import './Contact.css';
import backgroundImage from '../assets/images/background.png';

function Contact() {
  return (
    <section id="contact" className="contact" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`}}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <a href="mailto:nickgeno29@gmail.com">nickgeno29@gmail.com</a>
          </div>
          <div className="contact-item">
            <h3>LinkedIn</h3>
            <a href="https://linkedin.com/in/nicholas-c-genovese" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/nicholas-c-genovese
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;