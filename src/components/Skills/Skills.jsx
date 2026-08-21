import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import htmlIcon from '../../assets/HTML.png';
import jsIcon from '../../assets/Java Script.png';
import reactIcon from '../../assets/React.png';
import gsapIcon from '../../assets/GSAP.png';
import designIcon from '../../assets/Design.png';
import githubIcon from '../../assets/GitHub.png';
import './Skills.css';

const Skills = () => {
  const sectionRef = useRef(null);

  const skillsData = [
    {
      name: 'HTML/CSS',
      rating: 5,
      icon: <img src={htmlIcon} alt="HTML/CSS" />,
      iconClass: 'html',
    },
    {
      name: 'JavaScript',
      rating: 4,
      icon: <img src={jsIcon} alt="JavaScript" />,
      iconClass: 'js',
    },
    {
      name: 'React.js',
      rating: 4,
      icon: <img src={reactIcon} alt="React.js" />,
      iconClass: 'react',
    },
    {
      name: 'GSAP',
      rating: 4,
      icon: <img src={gsapIcon} alt="GSAP" />,
      iconClass: 'gsap',
    },
    {
      name: 'UI/UX Design',
      rating: 3,
      icon: <img src={designIcon} alt="UI/UX Design" />,
      iconClass: 'figma',
    },
    {
      name: 'Git/GitHub',
      rating: 4,
      icon: <img src={githubIcon} alt="Git/GitHub" />,
      iconClass: 'git',
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
              <div className={`skill-icon skill-icon--${skill.iconClass}`}>{skill.icon}</div>
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
