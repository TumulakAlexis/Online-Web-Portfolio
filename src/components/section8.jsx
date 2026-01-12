import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Section8.css';

// Asset Imports
import LogoImg from '../assets/logo.png'; 
import FBIcon from '../assets/socials/fb.png';
import IGIcon from '../assets/socials/ig.png';
import LIIcon from '../assets/socials/li.png';

const Section8 = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSend = () => {
    if (!name || !email) return;

    const subject = encodeURIComponent('Booking Request');
    const body = encodeURIComponent(
      `Hi Pold,

Name: ${name}
Email: ${email}

I’d like to book your services.

Project Details:
Budget:
Timeline:
`
    );

    window.location.href = `mailto:alexistumulak26@gmail.com?subject=${subject}&body=${body}`;
    setShowModal(false);
    setName('');
    setEmail('');
  };

  return (
    <footer id="contact" className="section8-container">
      <div className="s8-wrapper">

        <motion.div className="s8-cta-content">
          <h2 className="s8-main-title">READY TO WORK?</h2>
          <motion.button
            className="s8-book-btn"
            onClick={() => setShowModal(true)}
          >
            BOOK NOW
          </motion.button>
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#fecd72',
                  padding: '40px',
                  borderRadius: '20px',
                  width: '90%',
                  maxWidth: '400px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ marginBottom: '20px', color: '#FF4500', }}>Book a Project</h3>

                <input
                  type="text"
                  placeholder="Your Name *"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '12px',
                    borderRadius: '8px',
                    border: '1px solid #FF4500',
                  }}
                />

                <input
                  type="email"
                  placeholder="Your Email *"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    marginBottom: '20px',
                    borderRadius: '8px',
                    border: '1px solid #FF4500',
                  }}
                />

                <button
                  onClick={handleSend}
                  style={{
                    background: '#FF4500',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 30px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    width: '100%',
                  }}
                >
                  SEND REQUEST
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="s8-bottom-bar">
          <div className="s8-logo-container">
            <img src={LogoImg} alt="Pold Logo" className="s8-logo-img" />
          </div>

          <nav className="s8-nav-links">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
          </nav>

          <div className="s8-socials">
            <a href="https://facebook.com/poldsltj.com" target="_blank" rel="noreferrer">
              <img src={FBIcon} alt="Facebook" className="s8-social-icon" />
            </a>
            <a href="https://www.instagram.com/mlifecreatives" target="_blank" rel="noreferrer">
              <img src={IGIcon} alt="Instagram" className="s8-social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={LIIcon} alt="LinkedIn" className="s8-social-icon" />
            </a>
          </div>
        </div>

        <div className="s8-copyright">
          © 2024 Pold Design. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Section8;
