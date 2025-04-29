import React, { useState } from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Skills.css';
import './PortfolioHome.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/contact', formData);

      if (response.data.success) {
        setStatus('Message sent successfully');
      }
    } catch (error) {
        // formData = '';
      setStatus('error');
    }
  };

  return (
    
    <div className="contact-container">
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
      <h1 className="contact-header">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="contact-input"
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="contact-input"
          />
        </div>
        <div className="input-group">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="contact-textarea"
          />
        </div>
        <div className="submit-container">
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </div>
        {status && <div className="status-message">{status}</div>}
      </form>
      
    </div>
    
    
  );
};

export default ContactForm;
