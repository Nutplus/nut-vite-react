import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // 导入 NavLink 组件
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <NavLink to="/home" onClick={closeMenu}><h1>Your Name</h1></NavLink>
        </div>
        
        <div className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/articles" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Articles</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>Contact</NavLink></li>
          </ul>
        </nav>
        
        <div className="header-icons">
          <button className="icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
