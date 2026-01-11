import React from 'react';
import { motion } from 'framer-motion';
import './Section4.css';

// Asset Imports
import Pinning from '../assets/Section 4 Gallery/pinning.png';
import BSDK from '../assets/Section 4 Gallery/bsdk.png';
import Masterpiece from '../assets/Section 4 Gallery/masterpiece.png';
import Registration from '../assets/Section 4 Gallery/registration.png';
import Surprise from '../assets/Section 4 Gallery/surprise.png';

const Section4 = () => {
  const tileVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  const images = [
    { img: Pinning, class: "tile-pinning" },
    { img: BSDK, class: "tile-bsdk" },
    { img: Masterpiece, class: "tile-master" },
    { img: Registration, class: "tile-reg" },
    { img: Surprise, class: "tile-surprise" }
  ];

  return (
    <section className="section4-container">
      <motion.div 
        className="s4-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {images.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={tileVariants}
            whileHover={{ scale: 1.03 }}
            className={`s4-tile ${item.class}`} 
            style={{ backgroundImage: `url(${item.img})` }}
          />
        ))}

        <motion.div variants={tileVariants} className="s4-tile tile-6" />

        <motion.div 
          variants={tileVariants}
          whileHover={{ scale: 1.01 }}
          className="s4-tile tile-video-big"
        >
          <video autoPlay muted loop playsInline className="s4-video-element">
            <source src="YOUR_VIDEO.mp4" type="video/mp4" />
          </video>
          
          <div className="glass-logo-container">
            <h1 className="pold-logo">Pold</h1>
          </div>
        </motion.div>
      </motion.div>

      {/* Solid fade that sits physically below the grid */}
      <div className="s4-bottom-transition"></div>
    </section>
  );
};

export default Section4;