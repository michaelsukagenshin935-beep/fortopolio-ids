import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      tl.to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
        .to('.hero-title-line span', { y: 0, duration: 0.8, stagger: 0.15 }, '-=0.4')
        .to('.hero-desc', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to('.hero-actions', { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
;
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e, targetId) => {
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
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-container container">
        <div className="hero-content">
          <p className="hero-subtitle">Hello, I'm a WEB Developer</p>
          
          <h1 className="hero-title">
            <div className="hero-title-line">
              <span>Michael</span>
            </div>
            <div className="hero-title-line text-outline">
              <span>Front-End Developer</span>
            </div>
          </h1>

          <p className="hero-desc">
            Saya berfokus pada perancangan dan pengembangan antarmuka web modern yang responsif, interaktif, serta memberikan pengalaman pengguna yang optimal.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleScrollTo(e, 'contact')}>
              Hubungi Saya <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn btn-secondary" onClick={(e) => handleScrollTo(e, 'projects')}>
              Lihat Project
            </a>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
