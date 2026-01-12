import React from 'react';
import { motion } from 'framer-motion';
import './section7.css';

// Asset Imports
import BayadMockup from '../assets/mobile/bayadmockup.png';
import KopiKimMockup from '../assets/mobile/kopikimmockup.png';
import ReactNativeIcon from '../assets/mobile/reactnative.png';
import FlutterIcon from '../assets/mobile/flutter.png';

const Section7 = () => {
  // Matching the seamless spring physics from your Section 4
  const springVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 12 } 
    }
  };

  return (
    <section className="section7-container">
      <div className="s7-wrapper">
        
        <div className="s7-main-content">
          <div className="s7-mockups-column">
            <motion.img 
              src={BayadMockup} 
              alt="Bayad App" 
              className="s7-mockup-img"
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.img 
              src={KopiKimMockup} 
              alt="KopiKim App" 
              className="s7-mockup-img"
              variants={springVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          <motion.div 
            className="s7-text-column"
            variants={springVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="s7-title">Some of my <br/> Mobile Designs</h2>
            <p className="s7-description">
              A modern mobile application designed and developed using Flutter and React Native, 
              focused on delivering a smooth, responsive, and user-friendly experience across platforms.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="s7-expertise-section"
          variants={springVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="s7-expertise-title">Expertise</h2>
          <div className="s7-expertise-pill">
            <div className="s7-skill">
              <div className="s7-icon-box">
                <img src={ReactNativeIcon} alt="React Native" />
              </div>
              <span>React Native</span>
            </div>
            <div className="s7-skill">
              <div className="s7-icon-box">
                <img src={FlutterIcon} alt="Flutter" />
              </div>
              <span>Flutter</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Section7;