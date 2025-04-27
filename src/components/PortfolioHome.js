import React from 'react';
import './PortfolioHome.css';
import avatar from '../assets/image-removebg-preview.png';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
>>>>>>> 6dd16f29615a581384054f9294c9d7d3cfa28d52
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
        <div className="heaa">
          <header className="header">
            <div className="logo-section">
                  <div className="logo">▣</div>
                  <h1>Vish</h1>
                </div>
              
                <nav className="navigation">
                  <a href=""><Link to="/">Home</Link></a>
                  <a href=""><Link to="/skills">Skills</Link></a>
                  <a href=''><Link to="/projects">Projects</Link></a>
                  <a href=""><Link to="/contact">Contact</Link></a>
                 
                </nav>
            </header>
        </div>

        {/* Body - Horizontal layout */}
        <div className="body">
          {/* Left Text Content */}
          <div className="text-content">
            <h2>IOS Developer <br />and Web Developer</h2>
            <p>Hi, I’m Vishwesh Joshi. A passionate IOS Developer and Web Developer based in Chennai.</p>
            <button className="work-button">
              <span>See my works</span>
              <span className="arrow">➜</span>
            </button>
            <div className="social-links">
              <a href="#">LinkedIn </a>
              <span>/</span>
              <a href="#"> GitHub </a>
              <span>/</span>
              <a href="#"> Twitter</a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="image-section">
<<<<<<< HEAD
          <img src={avatar} alt="vish Avatar" className="avatar" />
=======
          <img src={avatar} alt="Aman Avatar" className="avatar" />
>>>>>>> 6dd16f29615a581384054f9294c9d7d3cfa28d52

            {/* <div className="overlay-text">X</div> */}
          </div>
        </div>
      </div>

      {/* Background circles */}
      <div className="background-circle"></div>
    </div>
  );
}

export default PortfolioHome;
