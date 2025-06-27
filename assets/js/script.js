'use strict';


/**
 * navbar toggle
 */

import React, { useState, useEffect } from 'react';
import './Navbar.css'; // or Tailwind if you're using it

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => setIsNavOpen(false);

  return (
    <>
      <header className={`header ${isScrolled ? 'active' : ''}`}>
        <button
          className="nav-toggler"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          ☰
        </button>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={closeNav}>Home</a></li>
            <li><a href="#services" onClick={closeNav}>Services</a></li>
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {isNavOpen && <div className="overlay" onClick={closeNav}></div>}

      <button
        className={`back-top-btn ${isScrolled ? 'active' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}

export default Navbar;
