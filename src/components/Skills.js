import React from 'react';
import './Skills.css';
import './PortfolioHome.css';
import { Link } from 'react-router-dom';
import xcdoeImg from '../icons/xcdoe-removebg-preview.png';
import codeImg from '../icons/vscodee-removebg-preview.png';
import figImg from '../icons/figg-removebg-preview.png';
import gptImg from '../icons/gpt.png';
import gitImg from '../icons/git.png';

const Skills = () => {
  return (
    <div className="portfolio-container">
      <div className="main-card">
        <header className="header">
          <div className="logo-section">
            <div className="logo">▣</div>
            <h1>Vish</h1>
          </div>

          <nav className="navigation">
            <a href=""><Link to="/">Home</Link></a>
            <a href=""><Link to="/skills">Skills</Link></a>
            <a href=""><Link to="/projects">Projects</Link></a>
            <a href=""><Link to="/contact">Contact</Link></a>
          </nav>
        </header>

        <section className="skills-section" id="skills">
          <h1 className="skills-title">Web Developer 2024</h1>

          <div className="skills-container">
            <div className="skill-column">
              <h3>Designing</h3>
              <div className="skill-box">UI/UX <span></span></div>
              <div className="skill-box">Wireframing <span></span></div>
              <div className="skill-box">Prototyping <span></span></div>
              <div className="skill-box">Responsive Design <span></span></div>
            </div>

            <div className="skill-column">
              <h3>Development</h3>
              <div className="skill-box">iOS - Swift <span></span></div>
              <div className="skill-box">Android - Kotlin <span></span></div>
              <div className="skill-box">Flutter <span></span></div>
              <div className="skill-box">MERN Stack <span></span></div>
            </div>

            <div className="skill-column">
              <h3>AI/ML</h3>
              <div className="skill-box">Machine Learning <span></span></div>
              <div className="skill-box">Model Training <span></span></div>
              <div className="skill-box">NLP <span></span></div>
              <div className="skill-box">Voice Recognition <span></span></div>
            </div>
          </div>
        </section>

        <div className="vertical-text">
          Skills
        </div>

        {/* Icon section with direct image paths */}
        <div className="dock-container">
          <div className="dock-icon">
          <img src={xcdoeImg} alt="Xode" />
          </div>
          <div className="dock-icon">
            <img src={codeImg} alt="VS Code" />
          </div>
          <div className="dock-icon">
            <img src={figImg} alt="Figma" />
          </div>
          <div className="dock-icon">
            <img src={gptImg} alt="OpenAI" />
          </div>
          <div className="dock-icon">
            <img src={gitImg} alt="GitHub" />
          </div>
        </div>

      </div>
      <div className="background-circle"></div>
    </div>
  );
};

export default Skills;

