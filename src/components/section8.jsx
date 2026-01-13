import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './section8.css';

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
                background: 'rgba(0, 0, 0, 0.8)', // Darker overlay for better focus
                backdropFilter: 'blur(8px)',     // Modern blur effect
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                padding: '20px'
              }}
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  background: '#ffffff', // Clean white background
                  padding: '50px 40px',
                  borderRadius: '30px',
                  width: '100%',
                  maxWidth: '450px',
                  textAlign: 'center',
                  position: 'relative',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Subtle Close Hint */}
                <button
                  onClick={() => setShowModal(false)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#ccc'
                  }}
                >
                  ×
                </button>

                <h3 style={{
                  fontFamily: "'Passion One', sans-serif",
                  fontSize: '42px',
                  color: '#FF4500',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '-1px'
                }}>
                  Let's Work Together
                </h3>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#666',
                  fontSize: '14px',
                  marginBottom: '30px'
                }}>
                  Tell me about your project and I’ll get back to you within 24 hours.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid #eee',
                      background: '#f9f9f9',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      fontSize: '15px'
                    }}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '12px',
                      border: '1px solid #eee',
                      background: '#f9f9f9',
                      fontFamily: "'Inter', sans-serif",
                      outline: 'none',
                      fontSize: '15px'
                    }}
                  />

                  <button
                    onClick={handleSend}
                    style={{
                      background: '#FF4500',
                      color: '#fff',
                      border: 'none',
                      padding: '18px',
                      borderRadius: '12px',
                      fontWeight: '800',
                      fontSize: '14px',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                      marginTop: '10px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 20px rgba(255, 69, 0, 0.2)'
                    }}
                  >
                    SEND ENQUIRY
                  </button>
                </div>
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
          © 2024 Pold Creatives. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Section8;
