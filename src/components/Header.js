import React, { useState } from 'react';
import './Header.css';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isRotating, setIsRotating] = useState(false);

  const handleToggleTheme = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 500); // Match this with the animation duration
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${theme}`}>
      <p className="name">Jyothika C N</p>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><button onClick={() => scrollToSection('profile')}>About Me</button></li>
          <li className="nav-item"><button onClick={() => scrollToSection('project')}>Projects</button></li>
          <li className="nav-item"><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li className="nav-item"><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </nav>
      <button onClick={handleToggleTheme} className={`theme-toggle ${isRotating ? 'rotating' : ''}`}>
        <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
    </header>
  );
};

export default Header;
