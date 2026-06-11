import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from '../Icons';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);

  const projectsData = [
    {
      name: 'Charmx Personal Landing Page',
      tech: ['React.js', 'Vite', 'CSS Grid', 'GSAP'],
      image: project1,
      demoUrl: 'https://final-assigment-michael.netlify.app/',
      codeUrl: 'https://github.com/michaelsukagenshin935-beep/final-assigment-michael'
    },
    {
      name: 'Charmx Bahasa Indonesia',
      tech: ['HTML5', 'Vanilla CSS', 'JavaScript', 'Responsive'],
      image: project2,
      demoUrl: 'https://charmx-michael.netlify.app/',
      codeUrl: 'https://github.com/michaelsukagenshin935-beep/Tugas-bahasa-indonesia-michael'
    },
    {
      name: 'Animated Product Landing Page',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      image: project3,
      demoUrl: 'https://animatedproductlandingpage.netlify.app/',
      codeUrl: 'https://github.com/michaelsukagenshin935-beep/Animated-Product-Landing-Page'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo('.projects-reveal-header', 
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

      // Projects card stagger animations
      gsap.fromTo('.project-card', 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="section projects-section" ref={sectionRef}>
      <div className="container">
        <div className="projects-reveal-header">
          <p className="section-subtitle">Karya Terbaru</p>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <div className="project-overlay-links">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-overlay-btn" title="GitHub Code">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-tech">
                  {project.tech.map((techItem, techIndex) => (
                    <span key={techIndex} className="tech-badge">{techItem}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link demo-link">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link code-link">
                    Code Repo <Github size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
