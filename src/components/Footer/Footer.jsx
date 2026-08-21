import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon as Github, InstagramIcon as Instagram, WhatsappIcon } from '../Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollToLink = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={handleScrollToTop}>
              <span>M</span><span className="dot">.</span>
            </a>
            <p className="footer-brand-desc">
              Front-End Developer yang berdedikasi membangun pengalaman digital modern, interaktif, dan responsif.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Navigasi</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={handleScrollToTop}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollToLink(e, 'about')}>About</a></li>
              <li><a href="#skills" onClick={(e) => handleScrollToLink(e, 'skills')}>Skills</a></li>
              <li><a href="#projects" onClick={(e) => handleScrollToLink(e, 'projects')}>Projects</a></li>
              <li><a href="#experience" onClick={(e) => handleScrollToLink(e, 'experience')}>Experience</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollToLink(e, 'contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-social-group">
            <h4 className="footer-links-title">Sosial Media</h4>
            <div className="footer-social-links">
              <a href="https://github.com/michaelsukagenshin935-beep" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.instagram.com/michael___208?igsh=MWU0OXF0ajhqZ3FobQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="mailto:michaelsukagenshin935@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Michael. All rights reserved. 
          </p>

          <button className="back-to-top-btn" onClick={handleScrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
