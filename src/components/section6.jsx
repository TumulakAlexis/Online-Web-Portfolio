import React, { useEffect, useRef } from 'react';
import './Section6.css';
import Pabiboy from '../assets/films/pabiboy.png'
import CampusCrush from '../assets/films/campuscrush.png'
import AlZimeShow from '../assets/films/alzimeshow.png'
import BestEditor from '../assets/films/pabiboyaward1.png'
import BestFilm from '../assets/films/pabiboyaward2.png'
import BestTeaser from '../assets/films/pabiboyaward3.png'
import PabiboyCode from '../assets/films/pabiboycode.png'
import CampusCrushCode from '../assets/films/campuscrushcode.png'
import AlZimeCode from '../assets/films/alzimecode.png'

const Section6 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' class to all animated elements inside this section
            const elements = entry.target.querySelectorAll('.s6-card, .s6-main-title');
            elements.forEach((el) => el.classList.add('visible'));
          }
        });
      },
      { threshold: 0.1 } // Triggers when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const films = [
    {
      title: "PaBiBoy",
      festival: "Pelikulayan: Short Film Festival",
      image: Pabiboy,
      awardImages: [BestEditor, BestFilm], 
      hasQR: true,
      qrImage: PabiboyCode
    },
    {
      title: "Campus Crush.exe",
      festival: "SineMarilag: Short Film Festival",
      image: CampusCrush,
      awardImages: [BestEditor, BestTeaser, BestFilm],
      hasQR: true,
      qrImage: CampusCrushCode
    },
    {
      title: "Al Zime Show",
      festival: "SineMarilag: Short Film Festival",
      image: AlZimeShow,
      awardImages: [BestEditor, BestTeaser, BestFilm],
      hasQR: true,
      qrImage: AlZimeCode
    }
  ];

  return (
    <section className="section-6" ref={sectionRef}>
      <div className="s6-container">
        <h2 className="s6-main-title">Short Films</h2>
        
        <div className="s6-grid">
          {films.map((film, index) => (
            <div key={index} className="s6-card">
              
              <div className="s6-awards-wrapper">
                {film.awardImages.map((awardImg, i) => (
                  <img 
                    key={i} 
                    src={awardImg} 
                    alt="Award Laurel" 
                    className="s6-award-img" 
                  />
                ))}
              </div>

              <div className="s6-image-frame">
                <img src={film.image} alt={film.title} className="s6-film-img" />
              </div>

              <div className="s6-info">
                <h3 className="s6-film-name">{film.title}</h3>
                <p className="s6-festival-name">{film.festival}</p>
              </div>

              {film.hasQR && (
                <div className="s6-qr-section">
                  <div className="s6-qr-box">
                    <img src={film.qrImage} alt="QR Code" />
                  </div>
                  <span className="s6-scan-label">Scan Here</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section6;