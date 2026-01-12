import React, { useEffect, useRef, useState } from 'react';
import './section1.css';
import SubjectImg from '../assets/subject.png';

const Section1 = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Smooth scroll handler
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Reset and trigger whenever the section enters/leaves view
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); 
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      id="home" // Added ID for navigation
      className={`section1-container ${animate ? 'animate-start' : ''}`}
    >
      <nav className="s1-nav">
        <div className="s1-logo">Pold</div>
        <div className="s1-menu">
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="s1-visual-wrapper">
        <span className="s1-text-script">Creative</span>
        <h1 className="s1-text-bold">DESIGNER</h1>

        <div className="s1-image-area">
          <img 
            src={SubjectImg} 
            alt="Designer cutout" 
            className="s1-subject" 
          />
        </div>

        <div className="s1-overlay">
          <div className="s1-info-left">
            <div className="s1-dash"></div>
            <p>Specializes in Creative Editing, Video, Photo, Graphic, Web Design, and Front-End Development</p>
          </div>

          <div className="s1-cta">
            <button 
              className="s1-btn"
              onClick={(e) => scrollToSection(e, 'book')}
            >
              Book Now
            </button>
          </div>

          <div className="s1-info-right">
            <p>I'm a creative editor combining video, photography, design, and front-end development to create engaging digital experiences.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;