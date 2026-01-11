import React from 'react';
import { motion } from 'framer-motion';
import './Section5.css';

// Import your logos
import Ramsa from '../assets/Logo Gallery/ramsa.png'
import Cross from '../assets/Logo Gallery/youth.png';
import Fire from '../assets/Logo Gallery/silakbo.png';
import Chili from '../assets/Logo Gallery/chili.png';
import Owl from '../assets/Logo Gallery/bayad.png';
import Masterpiece from '../assets/Logo Gallery/scom.png';
import Bsdk from '../assets/Logo Gallery/bsdk.png';
import Bookyp from '../assets/Logo Gallery/bookyp.png';
import Love from '../assets/Logo Gallery/ycom.png';

const Section5 = () => {
  // Use the exact spring logic from your Section 4
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 12 }
    }
  };

  const logoItems = [
    Ramsa, Cross, Fire, 
    Chili, Owl, Masterpiece, 
    Bsdk, Bookyp, Love
  ];

  return (
    <section className="section5-container">
      {/* The parent motion.div triggers the animation for all children 
         when 10% of the grid is visible, just like in your Section 4.
      */}
      <motion.div 
        className="s5-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
      >
        {logoItems.map((logo, index) => (
          <motion.div 
            key={index}
            className="s5-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Clean hover zoom
          >
            <img src={logo} alt="Logo" className="s5-logo" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section5;