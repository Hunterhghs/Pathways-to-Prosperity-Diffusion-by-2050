import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="container nav-container">
        <div className="logo">Pathways to Prosperity</div>
        <nav className="nav-links">
          <a href="#intro">Introduction</a>
          <a href="#foundations">2025: Platform Layers</a>
          <a href="#scaling">2025-2035: Scaling</a>
          <a href="#compounding">2035-2050: Compounding</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
