import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  const experienceData = [
    {
      year: '2024 - Sekarang',
      role: 'Freelance Front-End Developer',
      company: 'Self-Employed',
      desc: 'Membangun antarmuka website kustom untuk klien internasional dan lokal. Fokus pada performa tinggi, optimasi SEO, dan animasi interaktif menggunakan React.js dan GSAP.'
    },
    {
      year: '2023 - 2024',
      role: 'Studi Independen: Front-End Engineering',
      company: 'Coding Academy',
      desc: 'Mempelajari arsitektur perangkat lunak web modern, manajemen state tingkat lanjut di React, pengujian otomatis (unit testing), serta metodologi pengembangan Agile.'
    },
    {
      year: '2022 - 2023',
      role: 'Junior Web Developer Intern',
      company: 'Pixel Studio',
      desc: 'Membantu merancang dan mengimplementasikan template HTML/CSS statis menjadi website responsif menggunakan WordPress dan integrasi vanilla JavaScript.'
    },
    {
      year: '2019 - 2023',
      role: 'Sarjana Ilmu Komputer',
      company: 'Universitas Indonesia',
      desc: 'Mempelajari dasar-dasar ilmu komputer, algoritma dan struktur data, basis data, serta pemrograman berorientasi objek. Lulus dengan fokus penelitian rekayasa web.'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.experience-reveal-header', 
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

      // Timeline central line height draw
      gsap.fromTo('.experience-timeline-line', 
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'none',
          scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: true
          }
        }
      );

      // Timeline items fade up stagger
      gsap.fromTo('.timeline-item', 
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section experience-section" ref={sectionRef}>
      <div className="container">
        <div className="experience-reveal-header">
          <p className="section-subtitle">Perjalanan Karir</p>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-timeline">
          {/* Vertical Center Line */}
          <div className="experience-timeline-line"></div>

          {/* Timeline Nodes */}
          {experienceData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              
              <div className="timeline-meta">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-company">{item.company}</span>
              </div>

              <div className="timeline-content">
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
