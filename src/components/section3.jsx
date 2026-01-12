import React from 'react';
import { motion } from 'framer-motion';
import './section3.css';

const Section3 = () => {
  const services = [
    { name: "Product Design", rotate: -15 },
    { name: "Web Design", rotate: -5 },
    { name: "Mobile Application", rotate: 12 },
    { name: "Photography", rotate: 5 },
    { name: "Videography", rotate: -8 },
    { name: "Website", rotate: 3 },
    { name: "Short Film", rotate: -12 },
    { name: "Logo", rotate: 10 },
    { name: "UI/UX", rotate: -5 }
  ];

  return (
    <section className="section3-container">
      <div className="s3-header">
        {/* Left Side: Title Group */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="s3-title-group"
        >
          <h2 className="s3-title-bold">All Your</h2>
          <h2 className="s3-title-script">Design Needs</h2>
        </motion.div>

        {/* Right Side: Grouped Subtitle & Button */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="s3-action-group"
        >
          <p className="s3-subtitle">
            All type of services in one place with <br /> 
            the assurance of highest excellence <br /> 
            and usability.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="s1-btn s3-book-btn" /* Added s1-btn if you want to reuse styles */
          >
            Book Us
          </motion.button>
        </motion.div>
      </div>

      {/* Draggable Tags Section */}
      <div className="s3-tags-wrapper">
        {services.map((service, index) => (
          <motion.div
            key={index}
            drag
            dragConstraints={{ left: -150, right: 150, top: -50, bottom: 50 }}
            whileDrag={{ scale: 1.1, zIndex: 10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, rotate: service.rotate }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15, 
              delay: index * 0.05 
            }}
            className="s3-tag"
            style={{ cursor: 'grab' }}
          >
            {service.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Section3;