import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  const skillsData = [
    {
      name: 'HTML/CSS',
      rating: 5,
      desc: 'Menguasai layouting responsif dengan CSS Grid & Flexbox, preprosesor Sass, serta metodologi BEM.'
    },
    {
      name: 'JavaScript',
      rating: 4,
      desc: 'Pemahaman mendalam tentang ES6+, pemrograman asinkronus, DOM manipulation, dan integrasi API.'
    },
    {
      name: 'React.js',
      rating: 4,
      desc: 'Mahir dalam mengelola state (Hooks, Context), siklus hidup komponen, performa re-rendering, dan router.'
    },
    {
      name: 'GSAP',
      rating: 4,
      desc: 'Biasa membuat animasi interaktif yang dinamis, timeline kompleks, dan scroll-triggered animation.'
    },
    {
      name: 'UI/UX Design',
      rating: 3,
      desc: 'Mampu membuat wireframe, prototipe fungsional di Figma, dan memahami konsep dasar arsitektur informasi.'
    },
    {
      name: 'Git/GitHub',
      rating: 4,
      desc: 'Biasa menggunakan version control, alur kerja kolaboratif (Pull Request), pemecahan konflik, dan branching.'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.skills-reveal-header', 
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

      // Card Grid animation - stagger effect
      gsap.fromTo('.skill-card', 
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<Star key={i} className="star-icon filled" size={16} />);
      } else {
        stars.push(<Star key={i} className="star-icon empty" size={16} />);
      }
    }
    return stars;
  };

  return (
    <section id="skills" className="section skills-section" ref={sectionRef}>
      <div className="container">
        <div className="skills-reveal-header">
          <p className="section-subtitle">Keahlian Utama</p>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-header">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-rating">
                  {renderStars(skill.rating)}
                  <span className="rating-text">{skill.rating}/5</span>
                </div>
              </div>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
