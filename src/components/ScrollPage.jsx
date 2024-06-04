// src/Pages/ScrollPage.jsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollPage.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollPage = () => {
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sections = sectionsRef.current;

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });
  }, []);

  const navItems = ['Stockouts', 'Cash Recovery Cycle', 'Revenue'];

  const content = [
    {
      title: '10%',
      subtitle: 'Stockouts',
    },
    {
      title: '5%',
      subtitle: 'Cash Recovery Cycle',
    },
    {
      title: '15%',
      subtitle: 'Revenue',
    },
  ];

  return (
    <div className="scroll-container">
      <div className="fixed-nav">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => {
              sectionsRef.current[index].scrollIntoView({ behavior: '' });
            }}
          >
            {item}
            {index < navItems.length - 1 && <span className="nav-arrow"></span>}
          </div>
        ))}
      </div>

      <div className="content">
        <h1>{content[activeIndex].title}</h1>
        <p>{content[activeIndex].subtitle}</p>
      </div>

      <div className="sections">
        {content.map((_, index) => (
          <div
            key={index}
            className="section"
            ref={el => sectionsRef.current[index] = el}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ScrollPage;
