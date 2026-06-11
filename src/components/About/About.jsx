import React, { useEffect, useRef } from 'react';
import avatarImg from '../../assets/avatar.png';
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
              Membangun website modern dengan estetika minimalis & interaksi yang intuitif.
            </h3>
            
            <p className="about-description about-text-reveal">
              Saya adalah seorang Front-End Developer yang fokus menghadirkan pengalaman pengguna luar biasa di ruang digital. Saya memadukan keahlian teknis pemrograman dengan pemahaman desain untuk melahirkan website yang tidak hanya berfungsi dengan baik, tetapi juga terlihat elegan, premium, dan interaktif di berbagai perangkat.
            </p>

            <p className="about-description about-text-reveal">
              Ketertarikan saya terletak pada detail halus, seperti transisi antar halaman yang mulus, struktur kode yang bersih dan teratur, serta whitespace yang seimbang. Saya percaya bahwa detail terkecil dapat merubah produk yang baik menjadi produk yang luar biasa.
            </p>

            <div className="about-info-grid about-text-reveal">
              <div className="about-info-item">
                <span className="info-label">Lokasi:</span>
                <span className="info-value">Jakarta, Indonesia</span>
              </div>
              <div className="about-info-item">
                <span className="info-label">Status Pekerjaan:</span>
                <span className="info-value">Tersedia untuk Freelance & Full-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
