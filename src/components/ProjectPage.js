import React from 'react';
import './ProjectPage.css';
import './Skills.css';
import './PortfolioHome.css';
import { Link } from 'react-router-dom';


const projects = [
    {
      title: 'Project One',
      description: 'A creative web project that blends technology with art. Built with React and Node.js.',
      image: 'https://img.freepik.com/premium-vector/modern-3d-illustration-landing-page-ui-design_145666-1960.jpg?semt=ais_hybrid&w=740',
      link: 'https://github.com/yourproject1',
    },
    {
      title: 'Project Two',
      description: 'A cutting-edge, AI-powered web application with real-time processing.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/474590401/CV/SL/RU/237411707/website-ui-ux-design-services-500x500.webp',
      link: 'https://github.com/yourproject2',
    },
    {
      title: 'Project Three',
      description: 'A stunning IOS app designed to enhance user experience, built with Swift.',
      image: 'https://cdn.dribbble.com/userupload/42763981/file/original-7f66fc527e865bbf5faac140d2fb2bc1.png?format=webp&resize=400x300&vertical=center',
      link: 'https://github.com/yourproject3',
    },
    {
        title: 'Project Three',
        description: 'A cutting-edge, AI-powered web application with real-time processing.',
        image: 'https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1705204956/catalog/1331518541831512064/zxcb1jlluzt9ortuwpl9.jpg',
        link: 'https://github.com/yourproject3',
      },
  ];

const ProjectPage = () => {
  return (
    <div>
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
                    
    <div className="project-container">
    </div>
                    
      <h1 className="project-header">My Awesome Projects</h1>
      
      <div className="project-grid">
        
        {projects.map((project, index) => (
            
          <div key={index} className="project-card">
            
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default ProjectPage;