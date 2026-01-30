import React from 'react';
import './Hero.css';
import backgroundImage from '../assets/images/background.png';

function Hero() {
  return (
    <section className="hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`}}>
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Nick</h1>
        <p className="hero-subtitle">Senior R&D Engineer, J&J Medtech</p>
        <p className="hero-description">
          I design medical devices and build robotic systems
        </p>
        <button 
          className="cta-button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}

export default Hero;