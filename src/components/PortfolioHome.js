import React from 'react';
import './PortfolioHome.css';

function PortfolioHome() {
  return (
    <div className="portfolio-container">
      {/* Top-left text */}
      <div className="top-left-text">
        <p>Web Developer</p>
        <p>2023</p>
      </div>

      {/* Large vertical text */}
      <div className="vertical-text">
        Portfolio
      </div>

      {/* Main container */}
      <div className="main-card">
        {/* Header */}
        <div className="header">
          <div className="logo-section">
            <div className="logo">▣</div>
            <h1>Aman</h1>
          </div>
          <nav className="navigation">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        {/* Body - Horizontal layout */}
        <div className="body">
          {/* Left Text Content */}
          <div className="text-content">
            <h2>IOS Developer <br />and Web Developer</h2>
            <p>Hi, I’m Aman Kumar. A passionate IOS Developer and Web Developer based in Chennai.</p>
            <button className="work-button">
              <span>See my works</span>
              <span className="arrow">➜</span>
            </button>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <span>/</span>
              <a href="#">GitHub</a>
              <span>/</span>
              <a href="#">Twitter</a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="image-section">
            <img src="/image-removebg-preview.png" alt="Aman Avatar" className="avatar" />
            <div className="overlay-text">X</div>
          </div>
        </div>
      </div>

      {/* Background circles */}
      <div className="background-circle"></div>
    </div>
  );
}

export default PortfolioHome;