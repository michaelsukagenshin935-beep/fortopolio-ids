import React, { useEffect, useRef } from 'react';
import avatarImg from '/me.jpeg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Title and subtitle fade up
      gsap.fromTo('.about-reveal-header', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Image fade and zoom
      gsap.fromTo('.about-image-wrapper',
        { opacity: 0, scale: 0.95, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Text lines fade up
      gsap.fromTo('.about-text-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-reveal-header">
          <p className="section-subtitle">Tentang Saya</p>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          {/* Portrait Image Column */}
          <div className="about-image-column">
            <div className="about-image-wrapper">
              <img src={avatarImg} alt="Michael Portrait" className="about-image" />
              <div className="about-image-border"></div>
            </div>
          </div>

          {/* Text Summary Column */}
          <div className="about-content-column">
            <h3 className="about-lead about-text-reveal">
             Membangun website modern yang cepat, responsif, dan mudah digunakan.
            </h3>
            
            <p className="about-description about-text-reveal">
              Saya adalah Front-End Developer yang berfokus pada pengembangan antarmuka website yang bersih, fungsional, dan nyaman digunakan. Dengan menggabungkan kemampuan pemrograman dan pemahaman desain, saya menciptakan pengalaman digital yang konsisten di berbagai perangkat.
            </p>

            <p className="about-description about-text-reveal">
              Saya menyukai proses mengubah ide menjadi produk yang dapat digunakan secara nyata, mulai dari menulis kode yang terstruktur hingga memperhatikan detail visual yang membuat sebuah website terasa lebih profesional dan menarik.
            </p>

            <div className="about-info-grid about-text-reveal">
              <div className="about-info-item">
              </div>
              <div className="about-info-item">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
