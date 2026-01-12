import React, { useEffect, useRef, useState } from 'react';
import './section2.css';
import PortraitImg from '../assets/portrait.png'; 

const Section2 = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle animation state based on visibility
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // Resets animation when you scroll away
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`section2-container ${animate ? 'animate-start' : ''}`}
    >
      <div className="s2-grid">
        
        <div className="s2-portrait-card">
          <img src={PortraitImg} alt="Alexis Paul M. Tumulak" className="s2-portrait" />
        </div>

        <div className="s2-bio-content">
          <h1 className="s2-hello">HELLO!</h1>
          <p className="s2-intro">
            My name is <strong>Alexis Paul M. Tumulak</strong>, but people call me <strong>Polds</strong>. 
            I am a <strong>Creative Designer</strong> based on Philippines. I have been working 
            as a freelance designer for about 3 years. I usually work on Social Media Pages doing 
            branding, logo design, poster design, and also Pubmats. I am also passionate 
            about Video Editing.
          </p>
          
          <div className="s2-contact-tags">
            <span className="contact-tag">alexistumulak@gmail.com</span>
            <span className="contact-tag">@alexispolds</span>
            <span className="contact-tag">+63 970 908 3383</span>
          </div>
        </div>

        <div className="s2-skills-card">
          <h3>Software Skills</h3>
          <div className="skills-grid">
            <SkillItem icon="Ps" name="Photoshop" percent="73%" />
            <SkillItem icon="Pr" name="Premiere Pro" percent="84%" />
            <SkillItem icon="Ai" name="Illustrator" percent="50%" />
            <SkillItem icon="Ae" name="After Effects" percent="23%" />
            <SkillItem icon="Fi" name="Figma" percent="95%" />
          </div>
        </div>

        <div className="s2-experience-card">
          <h3>Experience</h3>
          <div className="experience-timeline">
            <div className="timeline-connector"></div>
            <div className="timeline-items">
              <TimelineItem year="2019 - Present" company="CFC Youth for Christ South Cotabato" role="Layout Artist" />
              <TimelineItem year="2020 - Present" company="M-Life Creative Labs" role="Multimedia Artist" />
              <TimelineItem year="2025 - Present" company="BISDAK Studios" role="Creatives" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

// Helper Components (Keep these as they were)
const SkillItem = ({ icon, name, percent }) => (
  <div className="skill-item">
    <div className="skill-icon">{icon}</div>
    <div className="skill-info">
      <span className="skill-name">{name}</span>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" style={{ width: percent }}></div>
      </div>
    </div>
  </div>
);

const TimelineItem = ({ year, company, role }) => (
  <div className="timeline-point">
    <div className="dot"></div>
    <div className="content">
      <span className="timeline-year">{year}</span>
      <h4 className="timeline-company">{company}</h4>
      <p className="timeline-role">{role}</p>
    </div>
  </div>
);

export default Section2;