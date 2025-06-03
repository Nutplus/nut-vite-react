import '../styles/Hero.css';
import { Link } from 'react-router-dom'; // 导入 Link 组件

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
          <h2>Web Developer & Designer</h2>
          <p>
            I create elegant, responsive websites with clean code and modern design.
            Welcome to my personal portfolio.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
          <div className="tool-links-bar">
            <a href="#" target="_blank" rel="noopener noreferrer" className="tool-link">Tool 1</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="tool-link">Tool 2</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="tool-link">Tool 3</a>
            {/* Add more tool links here as needed */}
          </div>
        </div>
        <div className="hero-image">
          <div className="geometric-element"></div>
          <div className="geometric-element"></div>
          <div className="geometric-element"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
